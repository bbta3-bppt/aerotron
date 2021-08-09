from django.contrib.auth.models import User
from rest_framework import generics

from oten.serializers import UserSerializer


class SelectedUser(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        selected_user = User.objects.filter(pk=self.request.user.pk)

        return selected_user
