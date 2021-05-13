from django.contrib import admin
from django.urls import path
#. is the current directory
from . import views

urlpatterns = [
    #an empty path specifies the home page
    path("home_view", views.home_view),
    path('video_app/', views.downloader, name="downloader")
]
