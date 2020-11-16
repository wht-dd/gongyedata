# Generated by Django 3.1.3 on 2020-11-16 08:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Industrial_Logs', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Bme280Sof',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sensor_id', models.IntegerField(blank=True, null=True)),
                ('location', models.IntegerField(blank=True, null=True)),
                ('lat', models.FloatField(blank=True, null=True)),
                ('lon', models.FloatField(blank=True, null=True)),
                ('timestamp', models.DateTimeField(blank=True, null=True)),
                ('pressure', models.FloatField(blank=True, null=True)),
                ('temperature', models.FloatField(blank=True, null=True)),
                ('humidity', models.FloatField(blank=True, null=True)),
            ],
            options={
                'db_table': 'bme280sof',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='DeviceInfo',
            fields=[
                ('idd', models.AutoField(db_column='Idd', primary_key=True, serialize=False)),
                ('dencode', models.CharField(blank=True, db_column='Dencode', max_length=255, null=True)),
                ('devname', models.CharField(blank=True, db_column='Devname', max_length=255, null=True)),
                ('city', models.CharField(blank=True, db_column='City', max_length=255, null=True)),
                ('region', models.CharField(blank=True, db_column='Region', max_length=255, null=True)),
                ('longitude', models.FloatField(blank=True, db_column='Longitude', null=True)),
                ('latitude', models.FloatField(blank=True, db_column='Latitude', null=True)),
                ('sensornum', models.IntegerField(blank=True, db_column='Sensornum', null=True)),
                ('status', models.IntegerField(blank=True, db_column='Status', null=True)),
            ],
            options={
                'db_table': 'Device_Info',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='TemHum',
            fields=[
                ('idc', models.AutoField(db_column='Idc', primary_key=True, serialize=False)),
                ('city', models.CharField(blank=True, db_column='City', max_length=255, null=True)),
                ('region', models.CharField(blank=True, db_column='Region', max_length=255, null=True)),
                ('date', models.DateField(blank=True, db_column='Date', null=True)),
                ('time', models.TimeField(blank=True, db_column='Time', null=True)),
                ('temperature', models.FloatField(blank=True, db_column='Temperature', null=True)),
                ('humidity', models.FloatField(blank=True, db_column='Humidity', null=True)),
                ('dencode', models.CharField(blank=True, db_column='Dencode', max_length=255, null=True)),
            ],
            options={
                'db_table': 'Tem_Hum',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='DevTem',
            fields=[
                ('idc', models.AutoField(primary_key=True, serialize=False)),
                ('city', models.CharField(blank=True, db_column='City', max_length=255, null=True)),
                ('region', models.CharField(blank=True, db_column='Region', max_length=255, null=True)),
                ('date', models.CharField(blank=True, db_column='Date', max_length=255, null=True)),
                ('time', models.CharField(blank=True, db_column='Time', max_length=255, null=True)),
                ('dev_tem', models.CharField(blank=True, max_length=255, null=True)),
                ('dencode', models.CharField(blank=True, db_column='Dencode', max_length=255, null=True)),
            ],
            options={
                'db_table': 'Dev_Tem',
            },
        ),
        migrations.CreateModel(
            name='gydb',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ambient', models.FloatField()),
                ('coolant', models.FloatField()),
                ('u_d', models.FloatField()),
                ('u_q', models.FloatField()),
                ('motor_speed', models.FloatField()),
                ('torque', models.FloatField()),
                ('i_d', models.FloatField()),
                ('i_q', models.FloatField()),
                ('pm', models.FloatField()),
                ('stator_yoke', models.FloatField()),
                ('stator_tooth', models.FloatField()),
                ('stator_winding', models.FloatField()),
                ('profile_id', models.IntegerField()),
            ],
            options={
                'db_table': 'gydb',
            },
        ),
        migrations.CreateModel(
            name='hjdb',
            fields=[
                ('idc', models.AutoField(db_column='Idc', primary_key=True, serialize=False)),
                ('data', models.DateField(blank=True, db_column='Data', null=True)),
                ('time', models.TimeField(blank=True, db_column='Time', null=True)),
                ('temperature', models.IntegerField(blank=True, db_column='Temperature', null=True)),
                ('humidity', models.IntegerField(blank=True, db_column='Humidity', null=True)),
            ],
            options={
                'db_table': 'hjdb',
            },
        ),
    ]
