---
layout: post
title:  "Furniture Forays"
location: Berlin
tagline: A first step into CNC-routed furniture design
hanger: Furniture
tags: furn

shape: portrait
thumb: nacht-tisch.jpg

image:
  - src: blumenstand.jpg
    alt: 'Blumenstand'
  - src: nacht-tisch.jpg
    alt: 'Nachttisch'
---

{% assign image = page.image[0] %}
{% include snippet-srcset.html %}

{% assign image = page.image[1] %}
{% include snippet-srcset.html %}
