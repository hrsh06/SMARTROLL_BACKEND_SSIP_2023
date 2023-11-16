from django.contrib.auth.forms import UserCreationForm,UserChangeForm

from .models import Profile

class CustomUserCreationForm(UserCreationForm):

    class Meta(UserCreationForm):
        model = Profile
        fields = ('email',)

class CustomUserChangeForm(UserChangeForm):

    class Meta(UserChangeForm):
        model = Profile
        fields = ('email',)