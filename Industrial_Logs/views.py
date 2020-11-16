import json
import datetime
from django.shortcuts import render,HttpResponse
from django.http import HttpResponseRedirect, Http404
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from .models import gydb
from .models import Topic
from .models import DevTem,DeviceInfo,TemHum,Bme280Sof
from .forms import TopicForm, EntryForm, Entry
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

@login_required
def getBme280Sof(request):
    result=Bme280Sof.objects.filter().first()
    dic={}
    dic["pressure"]=result.pressure
    dic["temperature"]=result.temperature
    dic["humidity"]=result.humidity
    dic["timestamp"]=result.timestamp.strftime("%Y-%m-%d %H:%M:%S")
    dic["location"]=result.location
    dic["sensor_id"]=result.sensor_id
    print(dic)
    return HttpResponse(json.dumps(dic,ensure_ascii=False))