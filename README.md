DashJS 0.1
====================

![Demo](https://image.ibb.co/gncfwV/preview.jpg)

[![GitHub release](https://img.shields.io/badge/version-0.1-red.svg)](https://github.com/evgenievdev/DashJS)
[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg)]()


DashJS is a lightweight, standalone JavaScript library, used for the creation of vector-based Dashboards and Gauges.

DashJS uses Scalable Vector Graphics (SVG) to create resolution-independent dashboards, usable within any SVG-compatible browser or within software such as **Adobe Illustrator, Phooshop, GIMP, Paint Shop Pro, etc.**

 
[1. Examples](https://github.com/evgenievdev/DashJS/wiki/Examples)

[2. Documentation](https://github.com/evgenievdev/DashJS/wiki)

[3. Production Version](https://github.com/evgenievdev/DashJS/tree/master/build) 

[4. Developer Version](https://github.com/evgenievdev/DashJS/tree/master/source)

[5. Editor](https://github.com/evgenievdev/DashJS/tree/master/editor)
 
Hierarchy
---------------------

The library follows a simple hierarchical order: From left to right is the level of abstraction in descending order:
**Dashboard -> Gauge -> Layer -> Element**. 
From left to right is the level of abstraction in descending order. 
Similar to programs like Adobe Photoshop, each gauge has a layering system to allow separation between different elements. If used correctly, this can increase performance.

The process of dashboard creation can be simplified to the following 4 steps:
- Create a new dashboard instance
- Create as many gauges within the dashboard as needed.
- Create as many layers within each gauge as needed (by default every gauge has a "base" layer, so you can skip this step)
- For each layer in your gauges, create static and dynamic elements (e.g. lines, labels, needles).

Alternatively, if you only need one gauge, you can skip creating the dashboard and simply create a new gauge instance.

Once your dashboard is complete you can use the custom methods for certain elements (e.g. needles) to make your dashboard gauges dynamic. You can also alter the look of every element after it has been created. 

Getting Started
---------------------
### Load Library
```html
<script src="path/to/dashjs.min.js"></script>
```

For a detailed outline of the API, check the **documentation** and the **examples**. 

NOTE: To create complex dashboards, a lot of effort is needed, which makes this library somewhat difficult to use by beginners. 
To streamline the process, an editor is currently in early development.
