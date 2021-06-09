from django import forms
from django.forms import ModelForm
from .models import DownloadVideo
#from .models import DownloadVideo

class TestForm(ModelForm):
    class Meta:
    	model = DownloadVideo
    	fields = '__all__'

class DownloadForm(forms.Form):
    download_directory = forms.CharField(label='Insert save directory here', max_length=200)
    video_url = forms.CharField(label='Insert url here', max_length=200)
    url_area = forms.CharField(label='Insert multiple urls here', max_length=200)
    file_upload = forms.FileField(label='Upload a text file here')