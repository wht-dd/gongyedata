# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class DevTem(models.Model):
    idc = models.AutoField(primary_key=True)
    city = models.CharField(db_column='City', max_length=255, blank=True, null=True)  # Field name made lowercase.
    region = models.CharField(db_column='Region', max_length=255, blank=True, null=True)  # Field name made lowercase.
    date = models.CharField(db_column='Date', max_length=255, blank=True, null=True)  # Field name made lowercase.
    time = models.CharField(db_column='Time', max_length=255, blank=True, null=True)  # Field name made lowercase.
    dev_tem = models.CharField(max_length=255, blank=True, null=True)
    dencode = models.CharField(db_column='Dencode', max_length=255, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
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


class IndustrialLogsEntry(models.Model):
    text = models.TextField()
    date_added = models.DateTimeField()
    topic = models.ForeignKey('IndustrialLogsTopic', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'Industrial_Logs_entry'


class IndustrialLogsTopic(models.Model):
    text = models.CharField(max_length=200)
    date_added = models.DateTimeField()
    owner = models.ForeignKey('AuthUser', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'Industrial_Logs_topic'


class TemhumSensor(models.Model):
    ids = models.IntegerField(db_column='Ids', primary_key=True)  # Field name made lowercase.
    stencode = models.CharField(db_column='STencode', max_length=255, blank=True, null=True)  # Field name made lowercase.
    sname = models.CharField(db_column='Sname', max_length=255, blank=True, null=True)  # Field name made lowercase.
    model = models.CharField(db_column='Model', max_length=255, blank=True, null=True)  # Field name made lowercase.
    dencode = models.CharField(db_column='Dencode', max_length=255, blank=True, null=True)  # Field name made lowercase.
    description = models.TextField(db_column='Description', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'TemHum_Sensor'


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


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Gydb(models.Model):
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
        managed = False
        db_table = 'gydb'


class Hjdb(models.Model):
    idc = models.AutoField(db_column='Idc', primary_key=True)  # Field name made lowercase.
    data = models.DateField(db_column='Data', blank=True, null=True)  # Field name made lowercase.
    time = models.TimeField(db_column='Time', blank=True, null=True)  # Field name made lowercase.
    temperature = models.IntegerField(db_column='Temperature', blank=True, null=True)  # Field name made lowercase.
    humidity = models.IntegerField(db_column='Humidity', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'hjdb'
