 
// Simple variable to hold a radius (in pixels) for the Speedometer and Tachometer ticks (lines)
var TickRadius = 180;

var TempCold_Config = {
	Radius: 91,
	StartAngle: -10,
	EndAngle: 0,
	StrokeWidth: 16,
	StrokeColor: "#2c8cd6",
	Align: "inner",
	Closed: false
};

var TempHot_Config = {
	Radius: 91,
	StartAngle: 90,
	EndAngle: 100,
	StrokeWidth: 16,
	StrokeColor: "#e64418",
	Align: "inner",
	Closed: false
};

var TempShortLines_Config = {
	Quantity: 5,
	Radius: 90,
	Length: 10,
	StartAngle: -10,
	EndAngle: 100, 
	Width: 2,
	FillColor: "#FFF"
};

var TempLongLines_Config = {
	Quantity: 3,
	Radius: 90,
	StartAngle: -10,
	EndAngle: 100,
	Length: 15,
	Width: 4,
	FillColor: "#FFF"
};

var TempLabels_Config = {
	Values: [ "50" , "90" , "130" ],
	Radius: 68,
	StartAngle: -10,
	EndAngle: 100,
	Color: "#FFF",
	Align: "inner",
	FontSize: 15,
	FontFamily: "Arial",
	FontFormat: "normal", // acceptable: bold , italic , bold italic
	OffsetX: 0,
	OffsetY: 5 
};

var TempOutline_Config = {
	Radius: 89.5,
	StartAngle: -11.25,
	EndAngle: 101.25,
	StrokeWidth: 2,
	StrokeColor: "#ffffff",
	Align: "outer",
	Closed: false
};

var TempNeedle_Config = {
	Length: 90 ,
	StartAngle: -10,
	EndAngle: 100,
	MinValue: 50,
	MaxValue: 130,
	PivotOffset: -5,
	OffsetX: 0,
	OffsetY: 0,
	Width: 7,
	SharpeningPercent: 40,
	TipLength: 2,
	BaseLength: 0,
	FillColor: "#e6261b",
	Fill: true,
	Stroke: false,
	CurrentValue: 90
};


var Tachometer_LongLines_Config = {
	Quantity: 7,
	Radius: TickRadius,
	StartAngle: -10,
	EndAngle: 140,
	Length: 20,
	Width: 4,
	FillColor: "#FFF",
	Exclude: [7],
	RoundCap: false
};

var Tachometer_MediumLines_Config = {
	Quantity: 31,
	Radius: TickRadius,
	StartAngle: -10,
	EndAngle: 140,
	Length: 15,
	Width: 2,
	FillColor: "#FFF",
};

var Tachometer_RedLines_Config = {
	Quantity: 3,
	Radius: TickRadius + 2,
	StartAngle: 140,
	EndAngle: 190,
	Length: 22,
	Width: 6,
	FillColor: "#c72411",
	Stroke: true,
	StrokeColor: "#111",
	StrokeWidth: 2
};

var Tachometer_Numbers_Config = {
	Values: [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ],
	Radius: TickRadius - 27,
	StartAngle: -10,
	EndAngle: 190,
	Color: "#FFF",
	Align: "inner",
	FontSize: 24,
	FontFamily: "Arial",
	FontFormat: "normal", // acceptable: bold , italic , bold italic
	OffsetX: 0,
	OffsetY: 5,
	Rotated: false
};

var Tachometer_Redline_Config = {
	Radius: TickRadius,
	StartAngle: 140,
	EndAngle: 190,
	StrokeWidth: 15,
	StrokeColor: "#c72411",
	Align: "inner",
	Closed: false,
	
};

var Tachometer_RPMLabel_Config = {
	Value: "x1000r/min",
	X: 0,
	Y: -60,
	Centered: true,
	FillColor: "#ffffff",
	FontSize: 15,
	FontFamily: "Arial"
};

var Tachometer_Needle_Config = {
	Length: TickRadius +5 ,
	StartAngle: -10,
	EndAngle: 190,
	MinValue: 0,
	MaxValue: 8000,
	PivotOffset: -20,
	OffsetX: 0,
	OffsetY: 0,
	Width: 8,
	SharpeningPercent: 40,
	TipLength: 5,
	BaseLength: 0,
	FillColor: "#e6261b",
	Fill: true,
	Stroke: false,
	CurrentValue: 0
};

var Tachometer_Box_Config = {
	Width:50,
	Height:45,
	RadiusX: 5,
	RadiusY: 5,
	Fill: true,
	FillColor: "#0e0e0e",
	StrokeColor: "#1b1b1b",
	Stroke: false,
	StrokeWidth: 1,
	HAlign: "center",
	VAlign: "center",
	Centered:true,
	X: 0,
	Y: 70
};

var Tachometer_Gear_Config = {
	Value: "1",
	X: 0,
	Y: 103,
	Centered: true,
	FillColor: "#ffffff",
	FontSize: 40,
	FontFamily: "Digital-7" 
};
	  


var Speedometer_ShortLines_Config = {
	Quantity: 111,
	Radius: TickRadius,
	StartAngle: -10,
	EndAngle: 190,
	Length: 9,
	Width: 1.5,
	FillColor: "#FFF",
};

var Speedometer_MediumLines_Config = {
	Quantity: 23,
	Radius: TickRadius,
	StartAngle: -10,
	EndAngle: 190,
	Length: 15,
	Width: 2,
	FillColor: "#FFF",
};

var Speedometer_LongLines_Config = {
	Quantity: 12,
	Radius: TickRadius,
	StartAngle: -10,
	EndAngle: 190,
	Length: 20,
	Width: 3,
	FillColor: "#FFF",
};

var Speedometer_NumbersKMH_Config = {
	Values: [ 0 , 20 , 40 , 60 , 80 , 100 , 120 , 140 , 160 , 180 , 200 , 220 ],
	Radius: TickRadius - 27,
	StartAngle: -10,
	EndAngle: 190,
	Color: "#FFF",
	Align: "inner",
	FontSize: 20,
	FontFamily: "Arial",
	FontFormat: "normal", // acceptable: bold , italic , bold italic
	OffsetX: 0,
	OffsetY: 5,
	Rotated: false
};

 

var Speedometer_Box_Config = {
	Width:140,
	Height:45,
	RadiusX: 5,
	RadiusY: 5,
	Fill: true,
	FillColor: "#0e0e0e",
	StrokeColor: "#1b1b1b",
	Stroke: false,
	StrokeWidth: 1,
	HAlign: "center",
	VAlign: "center",
	Centered:true,
	X: 0,
	Y: 70
};

var Speedometer_Needle_Config = {
	Length: TickRadius +5 ,
	StartAngle: -10,
	EndAngle: 190,
	MinValue: 0,
	MaxValue: 220,
	PivotOffset: -20,
	OffsetX: 0,
	OffsetY: 0,
	Width: 8,
	SharpeningPercent: 40,
	TipLength: 5,
	BaseLength: 0,
	FillColor: "#e6261b",
	Fill: true,
	Stroke: false,
	CurrentValue: 0
};

var Speedometer_KMHLabel_Config = {
	Value: "km/h",
	X: 40,
	Y: 90,
	Centered: true,
	FillColor: "#ffffff",
	FontSize: 17,
	FontFamily: "Digital-7" 
	
};

var Speedometer_SpeedLabel_Config = {
	Value: "---",
	X: -10,
	Y: 103,
	Centered: true,
	FillColor: "#ffffff",
	FontSize: 40,
	FontFamily: "Digital-7" 
};


var Fuel_ShortLines_Config = {
	Quantity: 5,
	Radius: 90,
	StartAngle: 80,
	EndAngle: 190,
	Length: 10,
	Width: 2,
	FillColor: "#FFF",
};

var Fuel_LongLines_Config = {
	Quantity: 3,
	Radius: 90,
	StartAngle: 80,
	EndAngle: 190,
	Length: 15,
	Width: 4,
	FillColor: "#FFF",
};

var Fuel_Outline_Config = {
	Radius: 90,
	StartAngle: 78.5,
	EndAngle: 191.5,
	StrokeWidth: 2,
	StrokeColor: "#ffffff",
	Align: "outer",
	Closed: false
};

var Fuel_Needle_Config = {
	Length: 90 ,
	StartAngle: 80,
	EndAngle: 190,
	MinValue: 60,
	MaxValue: 0,
	PivotOffset: -5,
	OffsetX: 0,
	OffsetY: 0,
	Width: 7,
	SharpeningPercent: 40,
	TipLength: 2,
	BaseLength: 0,
	FillColor: "#e6261b",
	Fill: true,
	Stroke: false,
	CurrentValue: 45
};

var Fuel_Labels_Config = {
	Values: [ "F" , "1/2" , "E" ],
	Radius: 70,
	StartAngle: 80,
	EndAngle: 190,
	Color: "#FFF",
	Align: "inner",
	FontSize: 17,
	FontFamily: "Arial",
	FontFormat: "normal", // acceptable: bold , italic , bold italic
	OffsetX: 0,
	OffsetY: 5 
};

console.time("newInstance");

var Dashboard = new DashJS.dash({
	target: "#DashJS_Container"
});

var Temperature = Dashboard.addGauge("temperature",{ class: "Temperature" , width:"200px",height:"200px" });
var Tachometer = Dashboard.addGauge("tachometer",{ class: "Tachometer" , width:"400px",height:"400px" });
var Speedometer = Dashboard.addGauge("speedometer",{ class: "Speedometer" , width:"400px",height:"400px" });
var Fuel = Dashboard.addGauge("fuel",{ class: "Fuel" , width:"200px",height:"200px" });

 

// Elements for the Temperature Cluster
Dashboard.addElement( Temperature , "base" , 'Cold' , 'Arc' , TempCold_Config );
Dashboard.addElement( Temperature , "base" , 'Hot' , 'Arc' , TempHot_Config );
Dashboard.addElement( Temperature , "base" , 'ShortLines' , 'Ticks' , TempShortLines_Config );
Dashboard.addElement( Temperature , "base" , 'LongLines' , 'Ticks' , TempLongLines_Config );
Dashboard.addElement( Temperature , "base" , 'Labels' , 'Labels' , TempLabels_Config );
Dashboard.addElement( Temperature , "base" , 'Outline' , 'Arc' , TempOutline_Config );
var Temperature_Needle = Dashboard.addElement( Temperature , "base" , 'Needle' , 'Needle' , TempNeedle_Config , true );

// Elements for the Tachometer
Dashboard.addElement( Tachometer , "base" , "Redline" , "Arc" , Tachometer_Redline_Config );
Dashboard.addElement( Tachometer , "base" , "MedLines" , "Ticks" , Tachometer_MediumLines_Config );
Dashboard.addElement( Tachometer , "base" ,  "LongLines" , "Ticks" , Tachometer_LongLines_Config );
Dashboard.addElement( Tachometer , "base" , "Numbers" ,  "Labels" , Tachometer_Numbers_Config ); 
Dashboard.addElement( Tachometer , "base" , "RedLines" ,  "Ticks" , Tachometer_RedLines_Config );
Dashboard.addElement( Tachometer , "base" , "RPMLabel" ,  "Text" , Tachometer_RPMLabel_Config );
Dashboard.addElement( Tachometer , "base" , "Box" ,  "Box" , Tachometer_Box_Config );
var Tachometer_Needle = Dashboard.addElement( Tachometer , "base" , "Needle" , "Needle", Tachometer_Needle_Config , true );
var Tachometer_Gear = Dashboard.addElement( Tachometer , "base" , "Gear" , "Text", Tachometer_Gear_Config , true );

// Elements for the Speedometer
Dashboard.addElement( Speedometer , "base" , "ShortLines" , "Ticks" , Speedometer_ShortLines_Config ); 
Dashboard.addElement( Speedometer , "base" , "MedLines" ,  "Ticks" , Speedometer_MediumLines_Config );
Dashboard.addElement( Speedometer , "base" , "LongLines" ,  "Ticks" , Speedometer_LongLines_Config );
Dashboard.addElement( Speedometer , "base" , "NumbersKMH" ,  "Labels" , Speedometer_NumbersKMH_Config ); 
Dashboard.addElement( Speedometer , "base" , "Box" ,  "Box" , Speedometer_Box_Config );
Dashboard.addElement( Speedometer , "base" , "KMHLabel" ,  "Text" , Speedometer_KMHLabel_Config );
var Speedometer_SpeedLabel = Dashboard.addElement( Speedometer , "base" , "SpeedLabel" ,  "Text" , Speedometer_SpeedLabel_Config , true );
var Speedometer_Needle = Dashboard.addElement( Speedometer , "base" , "Needle" ,  "Needle" , Speedometer_Needle_Config , true );

// Elements for the Fuel Cluster
Dashboard.addElement( Fuel , "base" , "ShortLines" , "Ticks" , Fuel_ShortLines_Config );
Dashboard.addElement( Fuel , "base" , "LongLines" ,  "Ticks" , Fuel_LongLines_Config );
Dashboard.addElement( Fuel , "base" , "Outline" ,  "Arc" , Fuel_Outline_Config );
Dashboard.addElement( Fuel , "base" , "Labels" ,  "Labels" , Fuel_Labels_Config );
var Fuel_Needle = Dashboard.addElement( Fuel , "base" , "Needle" ,  "Needle" , Fuel_Needle_Config , true );

console.timeEnd("newInstance");


// ---------------------------------------------------------------------------------------------------------------------
// DEMO ANIMATION (CAN BE REMOVED)
// ---------------------------------------------------------------------------------------------------------------------

var RPM = 0;
var RPM_Target = 0;
var Redline = 6000;
var Gear = 1;
var GearRatios = [ 4.00 , 2.54 , 1.64 , 1.00 , 0.83 ];
var Gear_Change_Speed = 100;
var Throttle = 1;
var Timer = 0 , TimeLimit = 300;


update();


function shift( how ) {
	
	if( how === "up" ) {
	
		if( Gear > 1 ) {
		
			Gear--;
			RPM_Target = RPM_Target * (GearRatios[Gear-1] / GearRatios[Gear]);
			Tachometer_Gear.Methods.SetValue( ""+Gear , true );
		
		}
		
	} else if( how === "down" ) {
	
		if( Gear < GearRatios.length ) {
		
			Gear++;
			RPM_Target = RPM_Target * (GearRatios[Gear-1] / GearRatios[Gear-2]);
			Tachometer_Gear.Methods.SetValue( ""+Gear , true );
		
		}
		
	}
	
}

function update() {
	
	requestAnimationFrame( update );
	
	if( !Dashboard.gaugeExists("speedometer")
		|| !Dashboard.gaugeExists("tachometer")
		|| !Dashboard.gaugeExists("fuel")
		|| !Dashboard.gaugeExists("temperature")
	) { return; }
	
	Timer++;
	if( Timer > TimeLimit ) {
		
		Timer = 0;
		TimeLimit = 300 + Math.trunc( Math.random() * 400 );
		
		var Switch = Math.trunc( Math.random() * 300 );

		if( Switch > 150 ) {
			Throttle = 1;
		} else {
			Throttle = 0;
		}
		
	}
	
	if( Gear === 1 && RPM < 2000 ) { 
		
		Throttle = 1;
		
	}
	
	var RPM_Change = 0;
	if( Throttle === 1 ) {
		
		RPM_Change = 9*GearRatios[ Gear-1 ];
		
	} else {
		
		RPM_Change = -5*GearRatios[ Gear-1 ];;
	
	}
	 
	 
	if( RPM_Target < Redline ) {
		
		RPM_Target = RPM_Target + RPM_Change;
		//RPM = RPM + RPM_Change;
		
		if( RPM_Target < 2500 && Gear > 1 ) {
			
			shift("up");
			
		}
		 
		
	} else {
		
		if( Gear < GearRatios.length  ) {
			
			shift("down");
			
		} else {
		
			//RPM = RPM - 70;
			
			RPM_Target = RPM_Target - 50;
			
		}
	 
	}
 
	if( RPM < Redline-50 ) {
	
		var nVal2 = Speedometer_Needle.Methods.GetValue();
		var Speed = ( RPM_Target * 26 ) / ( 336.13552 * GearRatios[ Gear-1 ] * 3.00 );
		Speedometer_Needle.Methods.SetValue( Speed , true );
		//Speedometer_SpeedLabel.setProperty( "Value", ""+nVal2.toFixed(0) );
		Speedometer_SpeedLabel.Methods.SetValue( ""+nVal2.toFixed(0) , true );
		
	}
	
	if( RPM < RPM_Target ) {
		RPM += Gear_Change_Speed;
	} else {
		RPM -= Gear_Change_Speed;
	}
	if( RPM <= RPM_Target+Gear_Change_Speed && RPM >= RPM_Target-Gear_Change_Speed ){
		RPM = RPM_Target;
	}
	
	Tachometer_Needle.Methods.SetValue( RPM , true );
	
	var nVal3 = Fuel_Needle.Methods.GetValue();
	Fuel_Needle.Methods.SetValue( nVal3 - 0.001*Throttle , true );
	
	var nVal4 = Temperature_Needle.Methods.GetValue();
	Temperature_Needle.Methods.SetValue( nVal4 + 0.005*Throttle * RPM_Target/Redline , true );
	
};  