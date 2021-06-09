from rest_framework import serializers
from .models import DownloadVideo		

class VideoSerializer(serializers.ModelSerializer):
	class Meta:
	    model = DownloadVideo
	    #fields='__all__'
	    fields='id', 'download_directory', 'video_url', 'url_area', 'file_upload'