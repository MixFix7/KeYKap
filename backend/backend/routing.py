from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
from django.urls import path
from cart.consumers import CartConsumer

applicartion = ProtocolTypeRouter(
    {
        "http": get_asgi_application(),
        "websoket": AuthMiddlewareStack(
            URLRouter(
                [
                    path("ws/cart/", CartConsumer.as_asgi()),
                ]
            )
        )
    }
)