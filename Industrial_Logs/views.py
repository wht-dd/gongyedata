import json
import datetime
from django.shortcuts import render,HttpResponse
from django.http import HttpResponseRedirect, Http404
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from .models import gydb
from .models import Topic
from .models import DevTem,DeviceInfo,TemHum, Bme280Sof, Sds011Sof,SensorCount
from .forms import TopicForm, EntryForm, Entry
from django.db import connection
from django.views.decorators.csrf import csrf_exempt

@login_required
# Create your views here.
def index(request):
    """学习笔记的主页"""
    return render(request, 'Industrial_Logs/index.html')

@login_required
# Create your views here.
def BME280(request):
    return render(request, 'Industrial_Logs/BME280.html')

@login_required
# Create your views here.
def SDS011(request):
    return render(request, 'Industrial_Logs/SDS011.html')

@login_required
# Create your views here.
def Sensor_Proportion(request):
    result = SensorCount.objects.all()
    dict = {}
    dict["kind"] = list()
    dict["count"] = list()
    for row in result:
        dict["kind"].append(row.kind)
        dict['count'].append({"value":row.count,"name":row.kind})
    # print(dict)
    return render(request, 'Industrial_Logs/Sensor_Proportion.html', dict)


@login_required
# 温湿度-pm
def PTH_PM(request):
    return render(request, 'Industrial_Logs/PTH_PM.html')

@login_required
# Create your views here.
def realTemAndHum(request):
    return render(request, 'Industrial_Logs/real_TemAndHum.html')

@login_required
def topics(request):
    """显示所有的主题"""
    topics = Topic.objects.filter(owner=request.user).order_by('date_added')
    ss = DeviceInfo.objects.count()
    aa=TemHum.objects.last()
    aa1=aa.temperature
    aa2=aa.humidity
    context = {'topics': topics,'ss': ss,'aa1':aa1,'aa2':aa2}
    return render(request, 'Industrial_Logs/topics.html', context)

@login_required
def fullscreen(request):
    """显示所有的主题"""
    fullscreen = Topic.objects.filter(owner=request.user).order_by('date_added')
    ss = DeviceInfo.objects.count()
    aa=TemHum.objects.last()
    aa1=aa.temperature
    aa2=aa.humidity
    context = {'fullscreen': fullscreen,'ss': ss,'aa1':aa1,'aa2':aa2}
    return render(request, 'Industrial_Logs/fullscreen.html', context)

@login_required
# Create your views here.
def realtem_hum(request):
    return render(request, 'Industrial_Logs/realtem_hum.html')

@login_required
# Create your views here.
def data_collection(request):
    return render(request, 'Industrial_Logs/data_collection.html')


@login_required
# Create your views here.
def realdev_tem(request):
    return render(request, 'Industrial_Logs/realdev_tem.html')

@login_required
# 压力-温湿度页面
def P_TH(request):
    return render(request, 'Industrial_Logs/P_TH.html')

def get_dev_temp(request):
    date=datetime.datetime.now().strftime('%Y-%m-%d')
    result=DevTem.objects.filter(date=date).order_by('-time').first()
    dic={}
    dic["City"]=result.city
    dic["Region"]=result.region
    dic["Date"]=result.date
    dic["Time"]=result.time
    dic["dev_tem"]=result.dev_tem
    dic["Dencode"]=result.dencode
    return HttpResponse(json.dumps(dic,ensure_ascii=False))


@login_required
def cgq(request):
    """显示所有的主题"""
    # cgq = Topic.objects.filter(owner=request.user).order_by('date_added')
    t = gydb.objects.all()[:30]
    tx = []
    ty = []
    tt = []
    i = 1
    for t1 in t:
        tx.append(float(t1.ambient))
        ty.append(float(t1.coolant))
        # tt.append(str(t1.RecentTime)[:19])
        tt.append(str(i))
        i += 1
    return render(request, 'Industrial_Logs/cgq.html', {'tt': tt, 'tx': tx, 'ty': json.dumps(ty)})

@login_required
def topic(request, topic_id):
    """显示单个主题及其所有的条目"""
    topic = Topic.objects.get(id=topic_id)
    if topic.owner != request.user: 
        raise Http404
    entries = topic.entry_set.order_by('-date_added')
    context = {'topic': topic, 'entries': entries}
    return render(request, 'Industrial_Logs/topic.html', context)




@login_required
def new_topic(request):
    """添加新主题"""
    if request.method != 'POST':
        # 未提交数据：创建一个新表单
        form = TopicForm()
    else:
        # POST提交的数据,对数据进行处理
        form = TopicForm(request.POST)
        if form.is_valid():
            new_topic = form.save(commit=False)
            new_topic.owner = request.user
            new_topic.save()
            return HttpResponseRedirect(reverse('Industrial_Logs:topics'))
    context = {'form': form}
    return render(request, 'Industrial_Logs/new_topic.html', context)

@login_required
def new_entry(request, topic_id):
    """在特定的主题中添加新条目"""
    topic = Topic.objects.get(id=topic_id)
    if topic.owner != request.user:
        raise Http404
    if request.method != 'POST':
        # 未提交数据,创建一个空表单
        form = EntryForm()
    else:
        # POST提交的数据,对数据进行处理
        form = EntryForm(data=request.POST)
        if form.is_valid():
            new_entry = form.save(commit=False)
            new_entry.topic = topic
            new_entry.save()
            return HttpResponseRedirect(reverse('Industrial_Logs:topic',
                                                args=[topic_id]))
    context = {'topic': topic, 'form': form}
    return render(request, 'Industrial_Logs/new_entry.html', context)


@login_required
def edit_entry(request, entry_id):
    """编辑既有条目"""
    entry = Entry.objects.get(id=entry_id)
    topic = entry.topic
    if topic.owner != request.user:
        raise Http404
    if request.method != 'POST':
        # 初次请求，使用当前条目填充表单
        form = EntryForm(instance=entry)
    else: 
        # POST提交的数据，对数据进行处理
        form = EntryForm(instance=entry, data=request.POST)
        if form.is_valid():
            form.save()
        return HttpResponseRedirect(reverse('Industrial_Logs:topic',
                                            args=[topic.id]))
    context = {'entry': entry, 'topic': topic, 'form': form}
    return render(request, 'Industrial_Logs/edit_entry.html', context)

def url(request):
    t = gydb.objects.all()[:30]
    tx = []
    ty = []
    tt = []
    i = 1
    for t1 in t:
        tx.append(float(t1.ambient))
        ty.append(float(t1.coolant))
        # tt.append(str(t1.RecentTime)[:19])
        tt.append(str(i))
        i += 1
    return render(request, 'Industrial_Logs/show.html', {'tt': tt, 'tx': tx, 'ty': json.dumps(ty)})

@csrf_exempt
@login_required
def getBme280Sof(request,sensorid=2266,rows=3000):
    if request.method == 'POST':
        rows = request.POST.get('rows', 3000)
        sensorid = request.POST.get('sensor_id', 2266)
    # result=Bme280Sof.objects.raw("select * from bme280sof limit %s",params=[rows])
    with connection.cursor() as cur:
        cur.execute("""
        select sensor_id,date_format(`timestamp`,'%%Y-%%m-%%d %%H:%%i:%%S') days,AVG(pressure) pressure,AVG(temperature) temperature,AVG(humidity) humidity
        from bme280sof 
        where sensor_id = %s 
        GROUP BY `days` ORDER BY `days` desc  limit %s;
        """, params=[sensorid, rows])
        result = cur.fetchall()

        dic={}
        dic["pressure"] = list()
        dic["temperature"] = list()
        dic["humidity"] = list()
        dic["timestamp"] = list()
        dic["sensor_id"] = list()
        for row in result:
            dic["pressure"].append(row[2])
            dic["temperature"].append(row[3])
            dic["humidity"].append(row[4])
            dic["timestamp"].append(row[1])
            dic["sensor_id"].append(row[0])
        # print(dic)
    return HttpResponse(json.dumps(dic,ensure_ascii=False))



@csrf_exempt
@login_required
def getSds011Sof(request, sensorid=1471, rows=3000):
    if request.method == 'POST':
        rows = request.POST.get('rows', 3000)
        sensorid = request.POST.get('sensor_id', 1471)

    with connection.cursor() as cur:
        cur.execute("""
        select sensor_id,date_format(`timestamp`,'%%Y-%%m-%%d') days,AVG(p1) p1,AVG(p2) p2 
        from sds011sof 
        where sensor_id = %s 
        GROUP BY `days` 
        ORDER BY `days` 
        desc  limit %s;
        """, params=[sensorid, rows])
        result = cur.fetchall()
        dic={}
        dic["p1"] = list()
        dic["p2"] = list()
        dic["timestamp"] = list()
        dic["sensor_id"] = list()
        for row in result:
            dic["p1"].append(row[2])
            dic["p2"].append(row[3])
            dic["timestamp"].append(row[1])
            dic["sensor_id"].append(row[0])
    # print(dic)
    return HttpResponse(json.dumps(dic,ensure_ascii=False))



@csrf_exempt
@login_required
def getSensor_information(request,sensorid=2266,rows=3000):
    if request.method == 'POST':
        rows = request.POST.get('rows', 3000)
        sensorid = request.POST.get('sensor_id', 2266)
    # result=Bme280Sof.objects.raw("select * from bme280sof limit %s",params=[rows])
    with connection.cursor() as cur:
        cur.execute("""
        select sensor_id,date_format(`timestamp`,'%%Y-%%m-%%d %%H:%%i:%%S') days,AVG(pressure) pressure,AVG(temperature) temperature,AVG(humidity) humidity
        from bme280sof 
        where sensor_id = %s 
        GROUP BY `days` ORDER BY `days` desc  limit %s;
        """, params=[sensorid, rows])
        result = cur.fetchall()

        dic={}
        dic["pressure"] = list()
        dic["temperature"] = list()
        dic["humidity"] = list()
        dic["timestamp"] = list()
        dic["sensor_id"] = list()
        for row in result:
            dic["pressure"].append(row[2])
            dic["temperature"].append(row[3])
            dic["humidity"].append(row[4])
            dic["timestamp"].append(row[1])
            dic["sensor_id"].append(row[0])
        # print(dic)
    return HttpResponse(json.dumps(dic,ensure_ascii=False))

@csrf_exempt
@login_required
def getBmeSds(request, rows=3000):
    if request.method == 'POST':
        rows = request.POST.get('rows', 3000)

    with connection.cursor() as cur:
        cur.execute("""
        select date_format(`timestamp`,'%%Y-%%m-%%d') days,AVG(p1) p1,AVG(p2) p2 ,avg(pressure) pressure,avg(temperature) temperature,avg(humidity) humidity 
        from bme_sds  
        GROUP BY `days` 
        ORDER BY `days` desc  
        limit %s;
        """, params=[rows])
        result = cur.fetchall()
        dic={}
        dic["p1"] = list()
        dic["p2"] = list()
        dic["timestamp"] = list()
        dic["pressure"] = list()
        dic["temperature"] = list()
        dic["humidity"] = list()
        for row in result:
            dic["pressure"].append(row[3])
            dic["temperature"].append(row[4])
            dic["humidity"].append(row[5])
            dic["p1"].append(row[1])
            dic["p2"].append(row[2])
            dic["timestamp"].append(row[0])
    # print(dic)
    return HttpResponse(json.dumps(dic,ensure_ascii=False))

@csrf_exempt
@login_required
def getPTH_PM(request, rows=5000):
    if request.method == 'POST':
        rows = request.POST.get('rows', 5000)

    with connection.cursor() as cur:
        cur.execute("""
       select temperature,AVG(p1) p1,AVG(p2) p2  
       from bme_sds 
       where temperature >= -10 
       GROUP BY temperature 
       ORDER BY temperature 
        limit %s;
        """, params=[rows])
        result = cur.fetchall()
        dic={}
        dic["p1"] = list()
        dic["p2"] = list()
        dic["temperature"] = list()
        for row in result:
            dic["temperature"].append(row[0])
            dic["p1"].append(row[1])
            dic["p2"].append(row[2])
    # print(dic)
    return HttpResponse(json.dumps(dic,ensure_ascii=False))

