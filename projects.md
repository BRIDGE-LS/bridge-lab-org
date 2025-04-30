---
layout: default
title: "Projetos"
---

<section class="page-header">
  <div class="container">
    <h1>Projects</h1>
    <p>Scientific projects from our lab to advance software engineering.</p>
  </div>
</section>

<section class="publications-section">
  <div class="container">
    <div class="publication-filters">
      <button class="filter active" data-filter="all">All</button>
      <button class="filter" data-filter="artifacts">Artifacs</button>
      <button class="filter" data-filter="testing">Testing</button>
      <button class="filter" data-filter="code">Code</button>
      <button class="filter" data-filter="management">Management</button>
    </div>
    <div class="publication-list large">
        {% for project in site.projects %}
            {% if project.name == 'index' or project.path contains '/index.md' %}

                <div class="publication-item">
                    <h3>{{ project.title }}</h3>
                    <div class="authors">{{ project.authors }}</div>
                    <div class="venue">{{ project.area }}</div>
                    <p>{{ project.abstract }}</p>
                    <div class="publication-links">
                    <a href="{{ site.baseurl }}{{ project.url }}" class="pub-link">Learn more</a>
                    </div>
                </div>

            {% endif %}
        {% endfor %}  
    </div>
  </div>
</section>

<section class="call-for-collaboration">
  <div class="container">
    <h2 class="section-title">Collaborate with Us</h2>
    <p class="section-subtitle">Interested in collaborating on research projects?</p>
    
    <div class="center-button">
      <a href="{{ site.baseurl }}/contact" class="button primary">Get in touch</a>
    </div>
  </div>
</section>

