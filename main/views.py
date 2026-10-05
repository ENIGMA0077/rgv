from django.shortcuts import render


def home(request):
    return render(request, 'main/index.html')


def religionology(request):
    return render(request, 'main/religionology.html')


def quiz(request):
    return render(request, 'main/quiz.html')


def crossword(request):
    return render(request, 'main/crossword.html')


def terms(request):
    return render(request, 'main/terms.html')


def sources(request):
    return render(request, 'main/sources.html')
