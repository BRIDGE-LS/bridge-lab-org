---
layout: default
title: Our Team
---

<section class="page-header">
  <div class="container">
    <h1>Our Team</h1>
    <p>Researchers and professionals dedicated to integrating academia and industry in software engineering.</p>
  </div>
</section>

<section class="team-section">
  <div class="container">
    <div class="team-grid large">
      {% for member in site.data.team %}
        <div class="team-member">
          <img src="{{ site.baseurl }}{{ member.image }}" alt="{{ member.name }}">
          <h3>{{ member.name }}</h3>
          <p>{{ member.role }}</p>
          <div class="member-bio">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="join-team">
  <div class="container">
    <h2 class="section-title">Join Our Team</h2>
    <p class="section-subtitle">We're always looking for talented researchers and collaborators.</p>
    
    <div class="positions">
      <div class="position-card">
        <h3>PhD Positions</h3>
        <p>We offer PhD positions in AI-assisted software engineering, generative architectures, and automated formal methods.</p>
        <a href="{{ site.baseurl }}/contact" class="button outline">Apply now</a>
      </div>
      
      <div class="position-card">
        <h3>Research Collaborations</h3>
        <p>If you're interested in collaborating with our team on research projects, we'd love to hear from you.</p>
        <a href="{{ site.baseurl }}/contact" class="button outline">Get in touch</a>
      </div>
      
      <div class="position-card">
        <h3>Industry Partnerships</h3>
        <p>We're open to partnerships with companies interested in applying our research to real-world problems.</p>
        <a href="{{ site.baseurl }}/contact" class="button outline">Partner with us</a>
      </div>
    </div>
  </div>
</section>