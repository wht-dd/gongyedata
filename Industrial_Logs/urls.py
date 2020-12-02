"""定义learning_logs的URL模式"""
from django.urls import path
from django.conf.urls import url
from . import views
app_name = 'Industrial_Logs'

urlpatterns = [
    # 主页
    url(r'^$', views.topics, name='index'),
    url(r'^topics/$', views.topics, name='topics'),
    url(r'^cgq/$', views.cgq, name='cgq'),
    url(r'^topics/(?P<topic_id>\d+)/$', views.topic, name='topic'),
    # 用于添加新主题的网页
    url(r'^new_topic/$', views.new_topic, name='new_topic'),
    # 用于添加新条目的页面
    url(r'^new_entry/(?P<topic_id>\d+)/$', views.new_entry, name='new_entry'),
    # 用于编辑条目的页面
    url(r'^edit_entry/(?P<entry_id>\d+)/$', views.edit_entry,
        name='edit_entry'),
    url(r'^realtem_hum/$', views.realtem_hum, name='realtem_hum'),
    url(r'^data_collection/$', views.data_collection, name='data_col'),
    url(r'^realdev_tem/$', views.realdev_tem, name='realdev_tem'),
    # 添加  2020.11.11
    url(r'^BME280/$', views.BME280, name='BME280'),
    url(r'^SDS011/$', views.SDS011, name='SDS011'),
    url(r'^Sensor_proportion/$', views.Sensor_Proportion, name='Sensor_Proportion'),
    url(r'^PTH_PM/$', views.PTH_PM, name='PTH_PM'),
    url(r'^P_TH/$', views.P_TH, name='P_TH'),
    url(r'^realTemAndHum/$', views.realTemAndHum, name='realTemAndHum'),
    path('get_dev_temp',views.get_dev_temp),

    path('12/', views.url),

    #2020年11月16日    仅获取数据
    path('getBme280Sof', views.getBme280Sof),
    #2020年11月17日    仅获取数据
    path('getSds011Sof', views.getSds011Sof),
    #2020年11月19日    获取关联数据
    path('getBmeSds', views.getBmeSds),
    path('getPTH_PM', views.getPTH_PM),
    path('getHPM', views.getHPM),
    path('getPPM', views.getPPM),
    # 2020.11.24 新增传感器信息页面
    url(r'^Sensor_inf/$', views.Sensor_inf, name='Sensor_inf'),
    #2020年11月26日  实时数据获取
    path("getRealData", views.getRealData,name="getRealData"),
    # path("test/zhang",views.test_zhang),
    path("getDataQuarter",views.get_data_quarter),
    path("getDataHalfYear",views.get_data_halfYear),

]
