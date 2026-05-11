---
layout: page
title: photography
permalink: /photography/
description: Personal photography projects.
nav: true
nav_order: 2
---

<div class="projects projects-photography-albums">
  <div class="row justify-content-center align-items-stretch">
    {% assign sorted_photo = site.photography | sort: "importance" %}
    {% for project in sorted_photo %}
    <div class="col-12 col-md-4 mb-3 mb-md-0 d-flex">
      <a class="photography-album-link w-100 d-flex" href="{{ project.url | relative_url }}">
        <div class="card hoverable w-100 flex-fill d-flex flex-column">
          {% if project.img %}
          <img class="card-img-top flex-shrink-0" src="{{ project.img | relative_url }}" alt="{{ project.title }}">
          {% else %}
          <div class="photo-card-placeholder flex-shrink-0">{{ project.title | slice: 0, 1 }}</div>
          {% endif %}
          <div class="card-body d-flex flex-column flex-grow-1">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text small mt-auto">{{ project.description }}</p>
          </div>
        </div>
      </a>
    </div>
    {% endfor %}
  </div>
</div>
