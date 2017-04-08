DashJS 0.1
====================

[![GitHub release](https://img.shields.io/badge/version-0.1-red.svg)](https://github.com/evgenievdev/DashJS)
[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg)]()


DashJS is a lightweight, standalone JavaScript library, used for the creation of vector-based Dashboards.

DashJS uses Scalable Vector Graphics (SVG) to create resolution-independent dashboards, usable within any SVG-compatible browser or within software such as **Adobe Illustrator, Phooshop, GIMP, Paint Shop Pro, etc.**

 
[Examples](https://github.com/evgenievdev/DashJS/tree/master/examples) &mdash;
[Documentation](https://github.com/evgenievdev/DashJS/wiki) &mdash;
[Production Version](https://github.com/evgenievdev/DashJS/tree/master/production) &mdash;
[Developer Version](https://github.com/evgenievdev/DashJS/tree/master/developer) &mdash;
[Editor](https://github.com/evgenievdev/DashJS/tree/master/editor)

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
var Dash = new DashJS.Dash( Container );
```

**Container** - the ID of the html element where the dashboard will be rendered

### Creating a Cluster
```javascript
var Properties = {
  CSS_Class: 'CSS_Class_Name_Here',
  Name: 'Reference_For_Cluster'
};

var Cluster = Dash.New.Cluster( Properties );
```
**CSS_Class** - string - the css class used for the cluster's wrapper (div). The dimensions of the cluster are defined via the width & height property of the CSS Class used 

**Name** - string - the name used to reference this cluster ( property in hash-table )

**NOTE:** It is possible not to supply a 'Name' parameter for the cluster. Instead a random reference number will be generated automatically.

**The function returns the reference for the newly created layer.**

### Creating a Layer
```javascript
var Layer = Dash.New.Layer( ClusterReference , LayerName );
```

**NOTE:** If LayerName is not defined, an automatic reference will be created for the layer.

**The function returns the reference for the newly created layer**

### Creating an Element
```javascript
var Element = Dash.New.Element( ClusterReference , LayerReference , ElementName , ElementType , ElementProperties , ExportMethods );
```

**ElementType** - string - the type of element you wish to create (there is a list of elements to choose from, each with its own properties)

**ElementProperties** - object - this is an object with various attributes (some compulsory, some optional) which can be defined to 

**ExportMethods** - boolean - some element types have their own custom methods (functions - e.g. SetValue/GetValue for the 'needle' element type). If ExportMethods is set to true, any existing methods will be returned by this function.

**NOTE:** If ElementName is not defined,  an automatic reference will be created for the element.

**NOTE2:** Every element type has it's own unique set of required and optional properties. For more information on the structure of the various element types, see the **documentation**. 

**The function returns the reference for the newly created element.**
