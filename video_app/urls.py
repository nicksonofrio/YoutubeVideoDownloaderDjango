from django.contrib import admin
from django.urls import path, include
#. is the current directory
from . import views

urlpatterns = [
    #an empty path specifies the home page
    path("home_view", views.home_view),
    #path('video_app/', views.downloader, name="downloader"),
    path('download/', views.videoList, name="download"),
    path('', views.apiOverview, name="api-overview"),
    path('video_app/', include('video_app.urls')),


]
