---
layout: default
title: Publications
---

<section class="page-header">
  <div class="container">
    <h1>Publications</h1>
    <p>Scientific contributions from our lab to advance software engineering.</p>
  </div>
</section>

<section class="publications-section">
  <div class="container">
    <div class="publication-filters">
      <button class="filter active" data-filter="all">All</button>
      <button class="filter" data-filter="2024">2024</button>
      <button class="filter" data-filter="2023">2023</button>
      <button class="filter" data-filter="2022">2022</button>
    </div>
    
    <div class="publication-list large">
      {% for publication in site.data.publications %}
        <div class="publication-item">
          <h3>{{ publication.title }}</h3>
          <div class="authors">{{ publication.authors }}</div>
          <div class="venue">{{ publication.venue }}</div>
          <p>{{ publication.abstract }}</p>
          <div class="publication-links">
            {% for link in publication.links %}
              <a href="{{ link.url }}" class="pub-link">{{ link.name }}</a>
            {% endfor %}
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="call-for-collaboration">
  <div class="container">
    <h2 class="section-title">Collaborate with Us</h2>
    <p class="section-subtitle">Interested in collaborating on research papers or projects?</p>
    
    <div class="center-button">
      <a href="{{ site.baseurl }}/contact" class="button primary">Get in touch</a>
    </div>
  </div>
</section>