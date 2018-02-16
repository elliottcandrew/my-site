---
layout: projects
title:  "Furniture Forays"
date:   2016-05-18
location: Berlin
thumbnail: blumenstand.jpg
headline: Furniture Forays
tagline: A first step into CNC-routed furniture design
hanger: Furniture
tags: furn

shape: portrait
thumb: nacht-tisch.jpg

image:
  - src: blumenstand.jpg
    alt: 'Blumenstand'
  - src: nachttisch.jpg
    alt: 'Nachttisch'
---

{% assign image = page.image[0] %}
{% include snippet-srcset.html %}

{% assign image = page.image[1] %}
{% include snippet-srcset.html %}
