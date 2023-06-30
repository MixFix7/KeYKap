from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import *
from rest_framework.response import Response
from django.contrib.auth import login, authenticate
from rest_framework_simplejwt.views import TokenObtainPairView


class Registration(APIView):
    def post(self, request):
        serializer = ProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


class Login(APIView):
    def post(self, request):
        identifier = request.data.get('identifier')
        password = request.data.get('password')
        if '@' in identifier:
            user = authenticate(request, email=identifier, password=password);login(user)
            return Response({'message': "Login was successful"}, status=201)
        else:
            user = authenticate(request, username=identifier, password=password);login(user)
            return Response({'message': "Login was successful"}, status=201)

        return Response({'message': "Wrong username/email or password"})


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer







