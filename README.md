DashJS 0.1
====================

![Demo](https://camo.githubusercontent.com/d521db039d333848a324f7431b81f0b210337b77/68747470733a2f2f707265766965772e6962622e636f2f64525872466b2f646173686a735f6361725f64617368626f6172645f612e6a7067)

[![GitHub release](https://img.shields.io/badge/version-0.1-red.svg)](https://github.com/evgenievdev/DashJS)
[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg)]()


DashJS is a lightweight, standalone JavaScript library, used for the creation of vector-based Dashboards.

DashJS uses Scalable Vector Graphics (SVG) to create resolution-independent dashboards, usable within any SVG-compatible browser or within software such as **Adobe Illustrator, Phooshop, GIMP, Paint Shop Pro, etc.**

 
[1. Examples](https://github.com/evgenievdev/DashJS/wiki/Examples)

[2. Documentation](https://github.com/evgenievdev/DashJS/wiki)

[3. Production Version](https://github.com/evgenievdev/DashJS/tree/master/production) 

[4. Developer Version](https://github.com/evgenievdev/DashJS/tree/master/developer)

[5. Editor](https://github.com/evgenievdev/DashJS/tree/master/editor)
 
Hierarchy
---------------------

The library uses a layer approach with the following hierarchy: 
**Dashboard -> Cluster -> Layer -> Element**. 

First a Dashboard is created.

Within the Dashboard, an unrestricted number of Clusters can be created.

Within each Cluster, an unrestricted number of Layers can be created.

Within each Layer, an unrestricted number of Elements of various types can be created.

Basic Usage
---------------------
### Load Library
```html
<script src="path/to/dashjs.min.js"></script>
```

### Initialisation (Dashboard)
```javascript
var Dashboard = new DashJS.dash({
 target: "#container-selector" // Uses querySelector by default (if you have JQuery, it uses that instead)
});
```
