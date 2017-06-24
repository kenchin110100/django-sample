# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


# Create your models here.
class Poll(models.Model):
    question = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')


class Choice(models.Model):
    poll = models.ForeignKey(Poll)
    choice = models.CharField(max_length=200)
    votes = models.IntegerField()


class Area(models.Model):
    region = models.CharField(max_length=200)
    prefecture = models.CharField(max_length=200)
    city = models.CharField(max_length=200)


class Clients(models.Model):
    client_nm = models.CharField(max_length=200)
    high = models.CharField(max_length=200)
    middle = models.CharField(max_length=200)
    low = models.CharField(max_length=200)
