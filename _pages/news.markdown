---
layout: page
title: News
permalink: /news/
order: 2
---
{% for post in site.posts %}
{{ post.date | date: "%b %-d, %Y" }}:
# [{{ post.title }}]({{ post.url | prepend: site.baseurl }})
{% endfor %}