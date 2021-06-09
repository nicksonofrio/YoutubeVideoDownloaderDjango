from django.shortcuts import render
#from django.http import HttpResponse
from django.http import JsonResponse
from tkinter import *
from pytube import YouTube
from .forms import DownloadForm, TestForm
from .models import DownloadVideo
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import serializers
#from django.core.files.storage import FileSystemStorage
#from rest_framework import viewsets
from .serializers import VideoSerializer
from django.core import serializers
from rest_framework.renderers import JSONRenderer

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'Download':'/download/',
        'VideosList': '/videos-list/',
        }

    return Response(api_urls)

@api_view(['POST'])
def videoList(request):
    print("enter videoList")
    serializer = VideoSerializer(data=request.data)
    print(serializer)
    
    if serializer.is_valid():
        serializer.save()
    print("after save")
    links = serializer.data
    print(links)
    directory = links['download_directory']
    url = links['video_url']
    multi_url = links['url_area']
    if url != '':
        downloader(directory, url)
        print("single url done")
    elif multi_url != '':
        remove_new_lines = multi_url.replace('\r\n',',')
        remove_spaces = remove_new_lines.replace(' ', ',')
        list_of_links = remove_spaces.split(",")
        for link in list_of_links:
            downloader(link, directory)
        print("multi url done")

    return Response(serializer.data)


def home_view(request):
    form = DownloadForm(request.POST)
    print("Home view start")
    print(request.POST)
    print(request.POST.get('youtubeLink',''))
    if (request.POST.get('youtubeLink')):
        url = request.POST.get('youtubeLink','')
        print(url)
        try:
            youtube_url = YouTube(str(url))
            video = youtube_url.streams.first()
            video.download()
        except:
            print("Failed to download " + url)
    return render(request, 'video_app/home.html')


# function to download video

def form_view(request):
    print("Inside for view")
    form = TestForm(request.POST or None)
    print(request.POST)
    print("Test grab from post")
    directory = request.POST.get('download_directory', '')
    single_url = request.POST.get('video_url', '')
    multi_url = request.POST.get('url_area', '')
    file_name = request.POST.get('file_upload', '')

    if single_url != '':
    	#isSuccessful = downloader(directory, single_url)
    	#print(isSuccessful)
        url =YouTube(str(single_url))
        print(url)
        video = url.streams.first()
        #given a specific directory the video will be downloaded there. otherwise it downloads in the same directory the script exists
        print("about to download")
        if directory != '':
            video.download(r'' + directory)
        else:
            video.download()
    elif multi_url != '':
    	remove_new_lines = multi_url.replace('\r\n',',')
    	remove_spaces = remove_new_lines.replace(' ', ',')
    	list_of_links = remove_spaces.split(",")
    	for link in list_of_links:
    		if link != '':
    			downloader(directory, link)
    		else:
    			print("Url is invalid")
    else:
    	print("Else of url check")
    if form.is_valid():
    	form.save()
    else:
    	print("error in form valid")

    #if request.method == 'POST':
    #	form = Testform(request.POST)
    #	if form.is_valid():
    #		form.save()
    context = {'form': form }
    return render(request, 'video_app/form.html', context)


def downloader(directory, url_string):
    print("inside downloader")
    print(directory)
    print(url_string)
    try:
        url =YouTube(url_string)
        print(url)
        video = url.streams.first()
        #given a specific directory the video will be downloaded there. otherwise it downloads in the same directory the script exists
        print("about to download")
        if directory != '':
                video.download(r'' + directory)
        else:
                video.download()
        print("post download")
        return 1
    except:
        print("failed download")
        return 0

@api_view(['POST'])
def getFrontEndData(request):
    serializer = VideoSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    print("inside getFrontEndData")
    print(serializer.data)
    return Response(serializer.data)



# Create your views here.
