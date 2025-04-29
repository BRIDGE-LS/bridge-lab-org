---
layout: default
title: "Projetos"
---

<h1>Projetcts</h1>

<ul>
  {% for project in site.projects %}
    <li>
      <a href="{{ project.url }}">{{ project.title }}</a><br>
      <small>{{ project.description }}</small>
    </li>
  {% endfor %}
</ul>

