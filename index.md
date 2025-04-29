---
layout: default
---

<section class="hero">
  <div class="container">
    <div class="hero-content">
      <h1>Connecting Research<br>and Industry in<br>Generative Engineering</h1>
      <p>At BRIDGE, we conduct innovative research at the intersection of academia and industry, developing AI techniques to advance the practical application of software engineering.</p>
      
      <a href="{{ site.baseurl }}/research" class="button primary">Explore our research</a>
    </div>
  </div>
</section>

<section class="mission">
  <div class="container">
    <h2 class="section-title">Our Mission</h2>
    
    <p class="mission-statement">
      Our research teams investigate innovative approaches to software engineering, integrating academic rigor with practical industry applications — so that AI technologies can have a positive impact on software development practices.
    </p>
  </div>
</section>

<section class="research-areas">
  <div class="container">
    <h2 class="section-title">Research Areas</h2>
    
    <div class="area-cards">
      <div class="area-card">
        <h3>AI-Assisted Software Engineering</h3>
        <p>We investigate how AI algorithms can assist in code generation, bug detection, automatic refactoring, and software system optimization.</p>
        <a href="{{ site.baseurl }}/research/ai-assisted-software-engineering" class="learn-more">Learn more</a>
      </div>
      
      <div class="area-card">
        <h3>Generative Architectures</h3>
        <p>We develop systems that can automatically generate software architectures adaptable to specific requirements, optimizing for performance, security, and scalability.</p>
        <a href="{{ site.baseurl }}/research/generative-architectures" class="learn-more">Learn more</a>
      </div>
      
      <div class="area-card">
        <h3>Automated Formal Methods</h3>
        <p>We work on tools that apply formal verification automatically during the development process, ensuring more reliable software.</p>
        <a href="{{ site.baseurl }}/research/automated-formal-methods" class="learn-more">Learn more</a>
      </div>
    </div>
  </div>
</section>

<section class="team-preview">
  <div class="container">
    <h2 class="section-title">Our Team</h2>
    <p class="section-subtitle">Researchers and professionals dedicated to integrating academia and industry.</p>
    
    <div class="team-grid">
      {% for member in site.data.team limit:4 %}
        <div class="team-member">
          <img src="{{ site.baseurl }}{{ member.image }}" alt="{{ member.name }}">
          <h3>{{ member.name }}</h3>
          <p>{{ member.role }}</p>
        </div>
      {% endfor %}
    </div>
    
    <div class="center-button">
      <a href="{{ site.baseurl }}/team" class="button outline">View all team members</a>
    </div>
  </div>
</section>

<section class="publications-preview">
  <div class="container">
    <h2 class="section-title">Recent Publications</h2>
    <p class="section-subtitle">Scientific contributions from our lab to advance software engineering.</p>
    
    <div class="publication-list">
      {% for publication in site.data.publications limit:3 %}
        <div class="publication-item">
          <h3>{{ publication.title }}</h3>
          <div class="authors">{{ publication.authors }}</div>
          <div class="venue">{{ publication.venue }}</div>
          <p>{{ publication.abstract }}</p>
        </div>
      {% endfor %}
    </div>
    
    <div class="center-button">
      <a href="{{ site.baseurl }}/publications" class="button outline">View all publications</a>
    </div>
  </div>
</section>

<section class="contact-preview">
  <div class="container">
    <h2 class="section-title">Get in Touch</h2>
    <p class="section-subtitle">Interested in collaborating or learning more about our work?</p>
    
    <div class="center-button">
      <a href="{{ site.baseurl }}/contact" class="button primary">Contact us</a>
    </div>
  </div>
</section>