---
layout: post
title:  "Furniture Forays"
location: Berlin
tagline: A first step into CNC-routed furniture design
hanger: Furniture
tags: furn

shape: square
thumb: blumenstand.gif

image:
  - src: tables-animated.gif
    alt: 'Animated Tables'
    class: max-1200
  - src: blumenstand.jpg
    alt: 'Blumenstand'
  - src: nacht-tisch.jpg
    alt: 'Nachttisch'
---

{% assign image = page.image[0] %}
{% include snippet-srcset.html %}

{% assign image = page.image[1] %}
{% include snippet-srcset.html %}

{% assign image = page.image[2] %}
{% include snippet-srcset.html %}
