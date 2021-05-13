from django.db import models

# Create your models here.

class DownloadVideo(models.Model):
    singleUrl = models.CharField(default="", max_length=200)
    multiUrls = models.TextField(default="")
