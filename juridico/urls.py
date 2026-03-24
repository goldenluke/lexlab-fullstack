from django.urls import path
from .views_rag import rag_legal

urlpatterns = [
    path("rag/", rag_legal),
]
