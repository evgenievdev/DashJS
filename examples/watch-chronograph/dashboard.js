 
// Simple variable to hold a radius (in pixels) for the Speedometer and Tachometer ticks (lines)
var TickRadius = 240;
var Color1 = "#FFF";
var Color2 = "#000";
var Font1 = "Bai Jamjuree";
 
var backgroundConfig = {
	Radius: TickRadius+30,
	StartAngle: 0,
	EndAngle: 360,
	Stroke: true,
	StrokeWidth:50,
	StrokeColor:Color2,
	Fill: true,
	FillColor: Color1,
	Align: "middle",
	Closed: true
};

var ShortLines_Config = {
	Quantity: 301,
	Radius: TickRadius,
	Length: 10,
	StartAngle: 0,
	EndAngle: 360, 
	Width: 2,
	FillColor: Color2
};

var LongLines_Config = {
	Quantity: 61,
	Radius: TickRadius,
	StartAngle: 0,
	EndAngle: 360,
	Length: 20,
	Width: 3,
	FillColor: Color2
};

var Labels_Config = {
	Values: [ "",1,2,"",4,5,"",7,8,"",10,11,"" ],
	Radius: TickRadius-30,
	StartAngle: 90,
	EndAngle: 450,
	Color: Color2,
	Align: "inner",
	FontSize: 40,
	FontFamily: Font1,
	FontFormat: "600", // acceptable: bold , italic , bold italic
	OffsetX: 0,
	OffsetY: 12 
};

var LabelsBig_Config = {
	Values: [ "","","","III","","","VI","","","IX","","","XII" ],
	Radius: TickRadius-25,
	StartAngle: 90,
	EndAngle: 450,
	Color: Color2,
	Align: "inner",
	FontSize: 52,
	FontFamily: Font1,
	FontFormat: "600", // acceptable: bold , italic , bold italic
	OffsetX: 0,
	OffsetY: 20 
};

var bezelArcConfig = {
	Radius: TickRadius+15,
	StartAngle: -45,
	EndAngle: 90,
	Stroke: true,
	StrokeWidth:2,
	StrokeColor:Color1,
	Align: "middle",
	Closed: false
};

var bezelLinesConfig = {
	Quantity: 40,
	Radius: TickRadius+20,
	Length: 5,
	StartAngle: -45,
	EndAngle: 90, 
	Width: 2,
	FillColor: Color1
};

var bezelLabelsConfig = {
	Values: [ 60 , "" , "" , "" , 400 , 300 , 240 , 200 , 180 , 160 , 140 , 130 , 120 , 110 , 100 , 90 , 85 , 80 , 75 , 70 , 65 , "" ],
	Radius: TickRadius+15 ,
	StartAngle: 90,
	EndAngle: 450,
	Color: Color1,
	Align: "outer",
	FontSize: 20,
	FontFamily: Font1,
	FontFormat: "normal", // acceptable: bold , italic , bold italic
	OffsetX: 0,
	OffsetY: 0,
	Rotated: true
};

var text1Config = {
	Value: "FOLEX",
	X: 0,
	Y: -120,
	Centered: true,
	FillColor: Color2,
	FontSize: 20,
	FontFamily: Font1,
	FontFormat: "bold"
};

var text2Config = {
	Value: "MOLLUSK PERPETUAL",
	X: 0,
	Y: -110,
	Centered: true,
	FillColor: Color2,
	FontSize: 12,
	FontFamily: Font1,
	FontFormat:"500"
};

var text3Config = {
	Value: "MAGNIFICENT CHRONOGRAPH",
	X: 0,
	Y: -98,
	Centered: true,
	FillColor: Color2,
	FontSize: 10,
	FontFamily: Font1,
	FontFormat:"500"
};

var text4Config = {
	Value: "UNOFFICIALLY CERTIFIED",
	X: 0,
	Y: -85,
	Centered: true,
	FillColor: Color2,
	FontSize: 10,
	FontFamily: Font1
};

var needleSecondsConfig = {
	Length: TickRadius +60 ,
	StartAngle: 90,
	EndAngle: 450,
	MinValue: 0,
	MaxValue: 60,
	PivotOffset: -60,
	OffsetX: 0,
	OffsetY: 0,
	Width: 5,
	SharpeningPercent: 40,
	TipLength: 5,
	BaseLength: 0,
	FillColor: Color2,
	Fill: true,
	Stroke: false,
	CurrentValue: 45
};

var needleMinutesConfig = {
	Length: TickRadius +30 ,
	StartAngle: 90,
	EndAngle: 450,
	MinValue: 0,
	MaxValue: 60,
	PivotOffset: -30,
	OffsetX: 0,
	OffsetY: 0,
	Width: 11,
	SharpeningPercent: 40,
	TipLength: 5,
	BaseLength: 0,
	FillColor: Color2,
	Fill: true,
	Stroke: false,
	CurrentValue: 20
};

var needleHoursConfig = {
	Length: TickRadius-40 ,
	StartAngle: 90,
	EndAngle: 450,
	MinValue: 0,
	MaxValue: 12,
	PivotOffset: -15,
	OffsetX: 0,
	OffsetY: 0,
	Width: 16,
	SharpeningPercent: 40,
	TipLength: 5,
	BaseLength: 0,
	FillColor: Color2,
	Fill: true,
	Stroke: false,
	CurrentValue: 1
};

var chronoArcConfig = {
	Radius:50,
	StartAngle: 0,
	EndAngle: 360,
	Stroke: true,
	StrokeWidth:18,
	StrokeColor:Color2,
	Align: "middle",
	Closed: true
};

var chrono1LinesConfig = {
	Quantity: 13,
	Radius: 56,
	Length: 12,
	StartAngle: 90,
	EndAngle: 450, 
	Width: 2,
	FillColor: Color1,
	Exclude:[1,4,7,10,13]
};

var chrono1LabelsConfig = {
	Values: [ 12,3,6,9,"" ],
	Radius: 54 ,
	StartAngle: 90,
	EndAngle: 450,
	Color: Color1,
	Align: "inner",
	FontSize: 18,
	FontFamily: Font1,
	FontFormat: "500", // acceptable: bold , italic , bold italic
	OffsetX: 0,
	OffsetY: 0,
	Rotated: true
};

var needleCircleConfig = {
	Radius: 8,
	StartAngle: 0,
	EndAngle: 360,
	Stroke: false,
	Fill: true,
	FillColor: Color2,
	Align: "middle",
	Closed: true
};

var chrono1NeedleConfig = {
	Length: 50,
	StartAngle: 90,
	EndAngle: 450,
	MinValue: 0,
	MaxValue: 12,
	PivotOffset: 0,
	OffsetX: 0,
	OffsetY: 0,
	Width: 7,
	SharpeningPercent: 40,
	TipLength: 5,
	BaseLength: 0,
	FillColor: Color2,
	Fill: true,
	Stroke: false,
	CurrentValue: 3
};

var chrono2NeedleConfig = JSON.parse(JSON.stringify(chrono1NeedleConfig));
chrono2NeedleConfig.MaxValue = 30;

var chrono2LinesConfig = {
	Quantity: 25,
	Radius: 56,
	Length: 12,
	StartAngle: 90,
	EndAngle: 450, 
	Width: 1.5,
	FillColor: Color1,
	Exclude:[1,25,9,17]
};

var chrono2LabelsConfig = {
	Values: [ 30,10,20,"" ],
	Radius: 54 ,
	StartAngle: 90,
	EndAngle: 450,
	Color: Color1,
	Align: "inner",
	FontSize: 16,
	FontFamily: Font1,
	FontFormat: "600", // acceptable: bold , italic , bold italic
	OffsetX: 0,
	OffsetY: 0,
	Rotated: true
};

var chrono3LinesConfig = {
	Quantity: 13,
	Radius: 56,
	Length: 12,
	StartAngle: 90,
	EndAngle: 450, 
	Width: 2,
	FillColor: Color1,
	Exclude:[1,5,9 ,13]
};

var chrono3LabelsConfig = {
	Values: [ 60,20,40,"" ],
	Radius: 54 ,
	StartAngle: 90,
	EndAngle: 450,
	Color: Color1,
	Align: "inner",
	FontSize: 18,
	FontFamily: Font1,
	FontFormat: "500", // acceptable: bold , italic , bold italic
	OffsetX: 0,
	OffsetY: 0,
	Rotated: true
};

var chrono3NeedleConfig = JSON.parse(JSON.stringify(chrono1NeedleConfig));
chrono3NeedleConfig.MaxValue = 60;

 

console.time("newInstance");

var Dashboard = new DashJS.dash({
	target: "#DashJS_Container"
});

var Watch = Dashboard.addGauge("watch",{ class: "Watch" , width:"600px",height:"600px" });
var Chrono1 = Dashboard.addGauge("chrono1",{ class: "Chrono1" , width:"150px",height:"150px" });
var Chrono2 = Dashboard.addGauge("chrono2",{ class: "Chrono2" , width:"150px",height:"150px" });
var Chrono3 = Dashboard.addGauge("chrono3",{ class: "Chrono3" , width:"150px",height:"150px" });

// Elements for the Temperature Cluster
Dashboard.addElement( Watch , "base" , 'background' , 'Arc' , backgroundConfig );
Dashboard.addElement( Watch , "base" , 'short-lines' , 'Ticks' , ShortLines_Config );
Dashboard.addElement( Watch , "base" , 'long-lines' , 'Ticks' , LongLines_Config );
Dashboard.addElement( Watch , "base" , 'numbers' , 'Labels' , Labels_Config );
Dashboard.addElement( Watch , "base" , 'numbers-big' , 'Labels' , LabelsBig_Config );
Dashboard.addElement( Watch , "base" , 'bezel-arc' , 'Arc' , bezelArcConfig );
Dashboard.addElement( Watch , "base" , 'bezel-lines' , 'Ticks' , bezelLinesConfig );
Dashboard.addElement( Watch , "base" , 'bezel-labels' , 'Labels' , bezelLabelsConfig );
Dashboard.addElement( Watch , "base" , 'text-1' , 'text' , text1Config );
Dashboard.addElement( Watch , "base" , 'text-2' , 'text' , text2Config );
Dashboard.addElement( Watch , "base" , 'text-3' , 'text' , text3Config );
Dashboard.addElement( Watch , "base" , 'text-4' , 'text' , text4Config );

var needleHours = Dashboard.addElement( Watch , "base" , 'needle-hours' , 'Needle' , needleHoursConfig , true );
var needleMinutes = Dashboard.addElement( Watch , "base" , 'needle-minutes' , 'Needle' , needleMinutesConfig , true );
var needleSeconds = Dashboard.addElement( Watch , "base" , 'needle-seconds' , 'Needle' , needleSecondsConfig , true );

Dashboard.addElement( Chrono1 , "base" , 'background' , 'Arc' , chronoArcConfig );
Dashboard.addElement( Chrono1 , "base" , 'lines' , 'Ticks' , chrono1LinesConfig );
Dashboard.addElement( Chrono1 , "base" , 'labels' , 'Labels' , chrono1LabelsConfig );
Dashboard.addElement( Chrono1 , "base" , 'needle-circle' , 'Arc' , needleCircleConfig );
Dashboard.addElement( Chrono1 , "base" , 'needle' , 'Needle' , chrono1NeedleConfig );

Dashboard.addElement( Chrono2 , "base" , 'background' , 'Arc' , chronoArcConfig );
Dashboard.addElement( Chrono2 , "base" , 'lines' , 'Ticks' , chrono2LinesConfig );
Dashboard.addElement( Chrono2 , "base" , 'labels' , 'Labels' , chrono2LabelsConfig );
Dashboard.addElement( Chrono2 , "base" , 'needle-circle' , 'Arc' , needleCircleConfig );
Dashboard.addElement( Chrono2 , "base" , 'needle' , 'Needle' , chrono2NeedleConfig );

Dashboard.addElement( Chrono3 , "base" , 'background' , 'Arc' , chronoArcConfig );
Dashboard.addElement( Chrono3 , "base" , 'lines' , 'Ticks' , chrono3LinesConfig );
Dashboard.addElement( Chrono3 , "base" , 'labels' , 'Labels' , chrono3LabelsConfig );
Dashboard.addElement( Chrono3 , "base" , 'needle-circle' , 'Arc' , needleCircleConfig );
Dashboard.addElement( Chrono3 , "base" , 'needle' , 'Needle' , chrono3NeedleConfig );

console.timeEnd("newInstance");
 

// ------------------------------------------------------------------------------------------------------------------------
// DEMO ANIMATION (CAN BE REMOVED)
// ------------------------------------------------------------------------------------------------------------------------

var ticksPerSecond = 5;
var seconds = 0, minutes = 0 , hours = 0;
var secondsInt = window.setInterval( function(){

	seconds+=1/ticksPerSecond;
	needleSeconds.Methods.SetValue(seconds);
	if( seconds >= 60 ) {
		minutes++;
		needleMinutes.Methods.SetValue(minutes);
		seconds=0;
	}

	if( minutes > 60 ) {
		hours++;
		needleHours.Methods.SetValue(hours);
		minutes = 0;
	}

	if( hours > 12 ) {
		hours = 0;
	}

} , 1000/ticksPerSecond );