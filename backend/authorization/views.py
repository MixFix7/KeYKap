from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import *
from rest_framework.response import Response
from django.contrib.auth import login, authenticate
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from .models import *


class SingUpJWT(APIView):
    def post(self, request):
        username = request.data.get('username')
        email = request.data.get('username')
        password = request.data.get('password')
        avatar = request.FILES['avatar']

        user = User.objects.create_user(username=username, email=email, password=password)
        profile = Profile.objects.create(user=user, avatar=avatar)

        refresh = RefreshToken.for_user(user)
        token = {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }

        return Response(token)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer







