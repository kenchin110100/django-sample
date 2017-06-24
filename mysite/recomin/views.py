# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from models import Area, Clients
from django.forms import model_to_dict
import json


# Create your views here.

def index(request):
    areas = Area.objects.all()
    areas = [model_to_dict(object) for object in areas]
    areas = {
        'region': list(set([row['region'] for row in areas])),
        'region_prefecture': list(set([(row['region'], row['prefecture']) for row in areas])),
        'prefecture_city': list(set([(row['prefecture'], row['city']) for row in areas])),
    }

    d = {'area': areas}
    return render(request, 'index.html', d)
