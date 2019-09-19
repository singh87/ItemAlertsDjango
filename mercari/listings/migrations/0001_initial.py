# Generated by Django 2.2 on 2019-09-14 21:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Listing',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item_id', models.TextField(max_length=50, unique=True)),
                ('title', models.CharField(max_length=50)),
                ('description', models.TextField(max_length=1000)),
                ('item_checkout_url', models.URLField()),
                ('category', models.TextField(max_length=20)),
                ('condition', models.IntegerField()),
                ('price', models.PositiveIntegerField()),
            ],
        ),
    ]
