﻿from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Topic(models.Model):
    """用户学习的主题"""
    text = models.CharField(max_length=200)
    date_added = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    def __str__(self):
        """返回模型的字符串表示"""
        return self.text

class Entry(models.Model):
    """学到的有关某个主题的具体知识"""
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    text = models.TextField()
    date_added = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'entries'

class hjdb(models.Model):
    idc = models.AutoField(db_column='Idc', primary_key=True)  # Field name made lowercase.
    data = models.DateField(db_column='Data', blank=True, null=True)  # Field name made lowercase.
    time = models.TimeField(db_column='Time', blank=True, null=True)  # Field name made lowercase.
    temperature = models.IntegerField(db_column='Temperature', blank=True, null=True)  # Field name made lowercase.
    humidity = models.IntegerField(db_column='Humidity', blank=True, null=True)  # Field name made lowercase.
    class Meta:
        db_table = 'hjdb'

class gydb(models.Model):
    ambient = models.FloatField()
    coolant = models.FloatField()
    u_d = models.FloatField()
    u_q = models.FloatField()
    motor_speed = models.FloatField()
    torque = models.FloatField()
    i_d = models.FloatField()
    i_q = models.FloatField()
    pm = models.FloatField()
    stator_yoke = models.FloatField()
    stator_tooth = models.FloatField()
    stator_winding = models.FloatField()
    profile_id = models.IntegerField()
    class Meta:
        db_table = 'gydb'

    def __str__(self):
        """返回模型的字符串表示"""
        return self.text[:50] + "..."

class DevTem(models.Model):
    idc = models.AutoField(primary_key=True)
    city = models.CharField(db_column='City', max_length=255, blank=True, null=True)  # Field name made lowercase.
    region = models.CharField(db_column='Region', max_length=255, blank=True, null=True)  # Field name made lowercase.
    date = models.CharField(db_column='Date', max_length=255, blank=True, null=True)  # Field name made lowercase.
    time = models.CharField(db_column='Time', max_length=255, blank=True, null=True)  # Field name made lowercase.
    dev_tem = models.CharField(max_length=255, blank=True, null=True)
    dencode = models.CharField(db_column='Dencode', max_length=255, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'Dev_Tem'


class DeviceInfo(models.Model):
    idd = models.AutoField(db_column='Idd', primary_key=True)  # Field name made lowercase.
    dencode = models.CharField(db_column='Dencode', max_length=255, blank=True, null=True)  # Field name made lowercase.
    devname = models.CharField(db_column='Devname', max_length=255, blank=True, null=True)  # Field name made lowercase.
    city = models.CharField(db_column='City', max_length=255, blank=True, null=True)  # Field name made lowercase.
    region = models.CharField(db_column='Region', max_length=255, blank=True, null=True)  # Field name made lowercase.
    longitude = models.FloatField(db_column='Longitude', blank=True, null=True)  # Field name made lowercase.
    latitude = models.FloatField(db_column='Latitude', blank=True, null=True)  # Field name made lowercase.
    sensornum = models.IntegerField(db_column='Sensornum', blank=True, null=True)  # Field name made lowercase.
    status = models.IntegerField(db_column='Status', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Device_Info'


class TemHum(models.Model):
    idc = models.AutoField(db_column='Idc', primary_key=True)  # Field name made lowercase.
    city = models.CharField(db_column='City', max_length=255, blank=True, null=True)  # Field name made lowercase.
    region = models.CharField(db_column='Region', max_length=255, blank=True, null=True)  # Field name made lowercase.
    date = models.DateField(db_column='Date', blank=True, null=True)  # Field name made lowercase.
    time = models.TimeField(db_column='Time', blank=True, null=True)  # Field name made lowercase.
    temperature = models.FloatField(db_column='Temperature', blank=True, null=True)  # Field name made lowercase.
    humidity = models.FloatField(db_column='Humidity', blank=True, null=True)  # Field name made lowercase.
    dencode = models.CharField(db_column='Dencode', max_length=255, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Tem_Hum'

class Bme280Sof(models.Model):
    sensor_id = models.IntegerField(blank=True, null=True)
    location = models.IntegerField(blank=True, null=True)
    lat = models.FloatField(blank=True, null=True)
    lon = models.FloatField(blank=True, null=True)
    timestamp = models.DateTimeField(blank=True, null=True)
    pressure = models.FloatField(blank=True, null=True)
    temperature = models.FloatField(blank=True, null=True)
    humidity = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bme280sof'

class Sds011Sof(models.Model):
    sensor_id = models.IntegerField(blank=True, null=True)
    location = models.IntegerField(blank=True, null=True)
    lat = models.FloatField(blank=True, null=True)
    lon = models.FloatField(blank=True, null=True)
    timestamp = models.DateTimeField(blank=True, null=True)
    p1 = models.FloatField(db_column='P1', blank=True, null=True)  # Field name made lowercase.
    p2 = models.FloatField(db_column='P2', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'sds011sof'

class SensorCount(models.Model):
    # id = models.AutoField()
    kind = models.CharField(max_length=20, blank=True, null=True)
    count = models.IntegerField(blank=True, null=True)
    percent = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'sensor_count'

class BmeSds(models.Model):
    sensor_id_bme = models.BigIntegerField(blank=True, null=True)
    location = models.BigIntegerField(blank=True, null=True)
    lat = models.FloatField(blank=True, null=True)
    lon = models.FloatField(blank=True, null=True)
    timestamp = models.DateTimeField(blank=True, null=True)
    pressure = models.FloatField(blank=True, null=True)
    temperature = models.FloatField(blank=True, null=True)
    humidity = models.FloatField(blank=True, null=True)
    sensor_id_sds = models.BigIntegerField(blank=True, null=True)
    p1 = models.FloatField(db_column='P1', blank=True, null=True)  # Field name made lowercase.
    p2 = models.FloatField(db_column='P2', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'bme_sds'

class HdfsInformation(models.Model):
    使用已配置容量 = models.CharField(max_length=30, blank=True, null=True)
    当前容量 = models.CharField(max_length=30, blank=True, null=True)
    dfs剩余的容量 = models.CharField(db_column='DFS剩余的容量', max_length=30, blank=True, null=True)
    # Field name made lowercase.
    dfs已使用容量 = models.CharField(db_column='DFS已使用容量', max_length=30, blank=True, null=True)
    dfs已经使用的比率 = models.CharField(db_column='DFS已经使用的比率', max_length=30, blank=True, null=True)
    处于复制下的块 = models.CharField(max_length=30, blank=True, null=True)
    故障副本的块 = models.CharField(max_length=30, blank=True, null=True)
    丢失的块 = models.CharField(max_length=30, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'hdfs_information'


class HdfsTotal(models.Model):
    集群状态健康 = models.CharField(max_length=30, blank=True, null=True)
    集群总共文件大小 = models.CharField(max_length=30, blank=True, null=True)
    field_集群有多少个目录 = models.CharField(db_column='集群有多少个目录', max_length=30, blank=True, null=True)
    #Field renamed to remove unsuitable characters. Field renamed because it started with '_'.
    集群有多少个文件 = models.CharField(max_length=30, blank=True, null=True)
    多少个数据块 = models.CharField(max_length=30, blank=True, null=True)
    field_备份因子 = models.CharField(db_column='备份因子', max_length=30, blank=True, null=True)
    # Field renamed to remove unsuitable characters. Field renamed because it started with '_'.
    最少复制的块数 = models.CharField(max_length=30, blank=True, null=True)
    没备份的块有几个 = models.CharField(max_length=30, blank=True, null=True)
    集群有多少数据节点 = models.CharField(max_length=30, blank=True, null=True)
    集群有多少机架 = models.CharField(max_length=30, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'hdfs_total'


