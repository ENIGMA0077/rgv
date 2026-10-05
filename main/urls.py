from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('religionology/', views.religionology, name='religionology'),
    path('quiz/', views.quiz, name='quiz'),
    path('crossword/', views.crossword, name='crossword'),
    path('terms/', views.terms, name='terms'),
    path('sources/', views.sources, name='sources'),
]
