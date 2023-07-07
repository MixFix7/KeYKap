from channels.generic.websocket import AsyncWebsocketConsumer
from asgiref.sync import async_to_sync
from .models import *
from .serializers import *


class CartConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.user_id = self.scope['url_route']['kwargs']['user_id']
        self.group_name = f"cart_{self.user_id}"

        # Приєднуйтеся до групи WebSocket, щоб отримувати оновлення тільки для конкретного користувача
        await self.channel_layer.group_add(self.group_name, self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):

        # Від'єднуйтеся від групи WebSocket при закритті з'єднання
        await self.channel_layer.group_discard(self.group_name, self.channel_name)

    async def receive(self, event, text_data):
        if text_data == 'GET':
            count = Cart.get_count_products_in_cart(user_id=self.user_id)
            await self.send(text_data=str(count))