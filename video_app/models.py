from django.db import models

# Create your models here.

class DownloadVideo(models.Model):
    download_directory = models.CharField(max_length=200, blank=True)
    video_url = models.CharField(max_length=200,blank=True)
    url_area = models.TextField(blank=True)
    file_upload = models.FileField(blank=True)
