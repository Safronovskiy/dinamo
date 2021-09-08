from django.shortcuts import render





def news_view(request):
    return render(request, 'news.html', {})


def news_details_view(request):
    return render(request, 'v_razrabotke.html', {})












