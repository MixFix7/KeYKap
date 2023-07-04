from channels.generic.websocket import AsyncWebsocketConsumer
from asgiref.sync import async_to_sync


class Consumer(AsyncWebsocketConsumer):
    async def connect(self):
        user_id = self.scope['url_route']['kwargs']['user_id']
        self.group_name = f"cart_{user_id}"

        await self.channel_layer.group_add(self.group_name, self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        # Disconnect from group WebSocket when the connection is closed
        await self.channel_layer.group_discard(self.group_name, self.channel_name)

    async def send_cart_count(self, event):
        # Sending updating count of products in the cart
        count = event['count']
        await self.send(text_data=str(count))