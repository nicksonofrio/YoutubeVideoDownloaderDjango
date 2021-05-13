from django.shortcuts import render
from django.http import HttpResponse
from tkinter import *
from pytube import YouTube

from .models import DownloadVideo

def home_view(request):
    return render(request, 'video_app/home.html')


# function to download video


def downloader(request):
	print("inside download")
	if (request.GET.get('download_button')):
		print("hello")
		url = request.POST.get('youtubeLink','')
		print(url)
    #url = YouTube(str(link.get()))
    #video = url.streams.first()
    #video.download()
    #Label(root, text='DOWNLOADED', font='arial 15').place(x=180, y=210)





# Create your views here.
