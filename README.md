# BRIDGE Lab Website

This repository contains the source code for the BRIDGE Lab website, which is built using Jekyll and hosted on GitHub Pages.

## Overview

BRIDGE (Bridging Research, Innovation, and Development for Generative Engineering) is a research lab focused on the intersection of academia and industry in software engineering, with a particular emphasis on artificial intelligence and generative techniques.

## Setup

### Prerequisites

- Ruby version 2.5.0 or higher
- RubyGems
- GCC and Make

### Installation

1. Install Jekyll and Bundler:
   ```
   gem install jekyll bundler
   ```

2. Clone this repository:
   ```
   git clone https://github.com/your-organization/bridge-lab.git
   cd bridge-lab
   ```

3. Install dependencies:
   ```
   bundle install
   ```

4. Start the local server:
   ```
   bundle exec jekyll serve
   ```

5. Browse to http://localhost:4000

## Site Structure

- `_config.yml`: Configuration file
- `_layouts/`: Layout templates
- `_includes/`: Reusable components
- `_sass/`: Sass partials for styling
- `assets/`: Static files (CSS, JS, images)
- `_data/`: Data files for navigation, team members, etc.
- `_research/`: Collection of research areas
- `index.md`: Homepage

## Adding Content

### Adding Research Projects

Create a new markdown file in the `_research/` directory with the following front matter:

```yaml
---
layout: page
title: Your Research Title
excerpt: A brief description of the research area
order: [position number]
---
```

### Adding Team Members

Edit the `_data/team.yml` file to add new team members:

```yaml
- name: Name of Team Member
  role: Role/Position
  image: /assets/images/team/member-image.jpg
  # Or use placeholder: true for a placeholder image
```

### Adding Publications

Edit the `_data/publications.yml` file to add new publications:

```yaml
- title: Publication Title
  authors: Author1, A., Author2, B.
  venue: Journal or Conference, Year
  abstract: Brief abstract of the publication
  links:
    - name: PDF
      url: link-to-pdf
    - name: DOI
      url: link-to-doi
```

## Customization

### Changing Colors and Styles

The main styles are located in `_sass/main.scss`. Update the color variables at the top of the file to change the color scheme.

### Updating Navigation

Edit the `_data/navigation.yml` file to update the navigation menu items.

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch. No additional steps are required for deployment.

## License

This project is licensed under the MIT License - see the LICENSE file for details.