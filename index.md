---
layout: default
---

<!-- Hero Section -->
<section class="hero">
  <div class="container">
    <div class="hero-content">
      <div class="hero-text">
        <h1>Connecting Research and Industry in Generative Engineering</h1>
        <p>The BRIDGE lab conducts innovative research at the intersection of academia and industry, using artificial intelligence techniques to advance the practical application of software engineering.</p>
        <a href="#about" class="btn">Learn about our work</a>
      </div>
      <div class="hero-image">
        <img src="/api/placeholder/500/300" alt="Collaborative research illustration" />
      </div>
    </div>
  </div>
</section>

<!-- About Section -->
<section id="about" class="about">
  <div class="container">
    <div class="section-heading">
      <h2>Our Mission</h2>
      <p>Drive innovation in software engineering through applied research and collaboration between academia and industry.</p>
    </div>
    <div class="about-cards">
      <div class="about-card">
        <h3>Research</h3>
        <p>We investigate new methodologies and tools to improve software development using artificial intelligence and machine learning techniques.</p>
      </div>
      <div class="about-card">
        <h3>Innovation</h3>
        <p>We develop creative solutions for complex software engineering challenges, promoting the adoption of advanced technologies in industry.</p>
      </div>
      <div class="about-card">
        <h3>Development</h3>
        <p>We transform theoretical knowledge into practical applications, building tools and frameworks that can be used in real-world contexts.</p>
      </div>
    </div>
  </div>
</section>

<!-- Research Section -->
<section id="research" class="research">
  <div class="container">
    <div class="section-heading">
      <h2>Research Areas</h2>
      <p>Our main research focuses and ongoing projects.</p>
    </div>
    <div class="research-grid">
      {% for item in site.research limit: 4 %}
        <div class="research-item">
          <div class="research-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.excerpt }}</p>
            <a href="{{ item.url | relative_url }}" class="read-more">Learn more</a>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</section>

<!-- Team Section -->
<section id="team" class="team">
  <div class="container">
    <div class="section-heading">
      <h2>Our Team</h2>
      <p>Researchers and professionals dedicated to integrating academia and industry.</p>
    </div>
    <div class="team-grid">
      {% for member in site.data.team %}
        <div class="team-member">
          {% if member.placeholder %}
            <img src="/api/placeholder/200/200" alt="{{ member.name }}" />
          {% else %}
            <img src="{{ member.image | relative_url }}" alt="{{ member.name }}" />
          {% endif %}
          <h3>{{ member.name }}</h3>
          <p>{{ member.role }}</p>
        </div>
      {% endfor %}
    </div>
  </div>
</section>

<!-- Publications Section -->
<section id="publications" class="publications">
  <div class="container">
    <div class="section-heading">
      <h2>Recent Publications</h2>
      <p>Scientific contributions from our lab to advance software engineering.</p>
    </div>
    <div class="publication-list">
      {% for publication in site.data.publications %}
        <div class="publication-item">
          <h3>{{ publication.title }}</h3>
          <div class="authors">{{ publication.authors }}</div>
          <div class="venue">{{ publication.venue }}</div>
          <p>{{ publication.abstract }}</p>
          <div class="links">
            {% for link in publication.links %}
              <a href="{{ link.url }}">{{ link.name }}</a>
            {% endfor %}
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</section>

<!-- Contact Section -->
<section id="contact" class="contact">
  <div class="container">
    <div class="section-heading">
      <h2>Get in Touch</h2>
      <p>Interested in collaborating or learning more about our work? Contact us.</p>
    </div>
    <div class="contact-container">
      <div class="contact-info">
        <h3>Let's Talk</h3>
        <p>We're open to partnerships with companies, research institutions, and other academic groups interested in advancing generative software engineering.</p>
        <div class="contact-details">
          <div>
            <i>📍</i>
            <span>Federal University of Pernambuco, Center for Informatics</span>
          </div>
          <div>
            <i>📧</i>
            <span>contact@bridge-lab.org</span>
          </div>
          <div>
            <i>📱</i>
            <span>+55 (81) 3333-3333</span>
          </div>
        </div>
      </div>
      <div class="contact-form">
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Your full name">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Your email address">
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" placeholder="Message subject">
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" placeholder="Your message..."></textarea>
          </div>
          <div class="form-group">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>