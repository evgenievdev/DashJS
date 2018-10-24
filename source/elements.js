var DashJS = DashJS || {};

DashJS.elements[ "ticks" ] = (function( Export ){

	var SetAttributes = function( Range ) {
	 
		var Config = this.element.config;
		
		var Width = this.layer.svg.clientWidth || this.layer.svg.parentNode.clientWidth;
		var Height = this.layer.svg.clientHeight || this.layer.svg.parentNode.clientHeight;

		var nTicks = Config.Quantity;
		var aStart = Config.StartAngle;
		var aEnd = Config.EndAngle;
		var aRange = aEnd - aStart;
		var aInterval = aRange / (nTicks - 1);
		var Rad = Config.Radius;
		var Len = Config.Length;
		var tWidth = Config.Width;
		var tCap = Config.RoundCap === true ? "round" : "butt";
	  
	 
		var x1,y1;
		var aDeg , aRad , mCos , mSin, mCos2 , mSin2;
		 
		
		var Fill = Config.Fill === true ? Config.FillColor : "none";
		var Stroke = Config.Stroke === true ? Config.StrokeColor : "none";
		
		for( var t = 0; t < nTicks; t++ ) {
			
			if( Config.Exclude === false || ( Config.Exclude.constructor === Array && Config.Exclude.indexOf( t+1 ) === -1 ) ) {
				 
				aDeg = aStart + t * aInterval;
				aRad = DashJS.tools.DegToRad( aDeg );
				
				mCos = Math.cos( aRad );
				mSin = Math.sin( aRad );
				
				mCos2 = Math.cos( aRad + Math.PI/2 );
				mSin2 = Math.sin( aRad + Math.PI/2 );
				
				x1 = Width/2 - mCos * Rad + Config.OffsetX - ( tWidth/2 * mCos2 );
				y1 = Height/2 - mSin * Rad + Config.OffsetY  - ( tWidth/2 * mSin2 );
				 
				this.element.Object[ t ].setAttribute( "x" , x1 );
				this.element.Object[ t ].setAttribute( "y" , y1 );
				this.element.Object[ t ].setAttribute( "width" , Len );
				this.element.Object[ t ].setAttribute( "height" , tWidth );
				this.element.Object[ t ].setAttribute( "transform" , "rotate( "+aDeg+" , "+x1+" , "+y1+" )" );
				this.element.Object[ t ].setAttribute( "stroke-linecap" , tCap ); 
				this.element.Object[ t ].setAttribute( "fill" , Fill ); 
				this.element.Object[ t ].setAttribute( "stroke" , Stroke ); 
				this.element.Object[ t ].setAttribute( "stroke-width" , Config.StrokeWidth ); 
				 
		 
				
			} else {
			
				this.element.Object[ t ].removeAttribute( "x" );
				this.element.Object[ t ].removeAttribute( "y" );
				this.element.Object[ t ].removeAttribute( "width" );
				this.element.Object[ t ].removeAttribute( "height");
				this.element.Object[ t ].removeAttribute( "transform" );
				
				this.element.Object[ t ].removeAttribute( "fill" ); 
				this.element.Object[ t ].removeAttribute( "stroke" ); 
				this.element.Object[ t ].removeAttribute( "stroke-width" ); 
				this.element.Object[ t ].removeAttribute( "stroke-linecap" ); 
		 
				
			}

		}

	};


	Export.Schema = {

		SVG_Elem : "rect",
		Quantifier: "Quantity",
		
		Properties : {
		
			"Quantity" : { Type: "integer" },
			"Radius" : { Type: "number" },
			"Length" : { Type: "number" },
			"StartAngle" : { Type: "number" },
			"EndAngle" : { Type: "number" },
		 
		
			"Stroke" : { Type: "boolean" , Default: false },
			"StrokeColor" : { Type: "hex" , Default: "#FF0000" },
			"StrokeWidth" : { Type: "number" , Default: 1 },
			
			"Fill" : { Type: "boolean" , Default: true },
			"FillColor" : { Type: "hex" , Default: "#000000" },
		
			"Width" : { Type: "number" , Default: 1 },
			"Exclude" : { Type: "array" , Default: [] },
			"OffsetX" : { Type: "number" , Default: 0 },
			"OffsetY" : { Type: "number" , Default: 0 },
			"RoundCap" : { Type: "boolean" , Default: false } 
			
		}

	};

	Export.Update = function() {

		SetAttributes.bind( this )( "0-"+this.element.Object.length-1 );

	};

	Export.Methods = {

		Restore: function() {

			Export.Update();

		},

		Modify: function( Range ) {
			
			if( Range === undefined ) {

				return false;

			}

			var tempData;

			tempData = Range;
			tempData = tempData.split(",");

			var tempSet, min , max;
			for( var set = 0; set < tempData.length; set++ ) {

				tempSet = tempData[ set ].split("-");

				min = tempSet[ 0 ].trim();
				max = tempSet[ 1 ].trim();

				for( var el = min; el <= max; el++ ) {

					this.element.Object[ el ].setAttribute( "fill" , "#ff0000" ); 

				}

			}
	

			return tempData;

		}

	};

	return Export;

})( {} );



DashJS.elements[ "labels" ] = (function( Export ){

	Export.Schema = {

		SVG_Elem : "text",
		Quantifier: "Values",

		Properties: {
		
			"Values" : { Type: "array" },
			"Radius" : { Type: "number" },
			"StartAngle" : { Type: "number" },
			"EndAngle" : { Type: "number" },
		
			"Color" : { Type: "hex" , Default: "#000000" },
			"Align" : { Type: "string" , Default: "middle" },
			"FontSize" : { Type: "number" , Default: 15 },
			"FontFamily" : { Type: "string" , Default: "Arial" },
			"FontFormat" : { Type: "string" , Default: "" },
			"OffsetX" : { Type: "number" , Default: 0 },
			"OffsetY" : { Type: "number" , Default: 0 },
			"Rotated" : { Type: "boolean" , Default: false }
		}

	};


	Export.Update = function() {

		var Config = this.element.config;
	
		var Values = Config.Values;
		if( !DashJS.tools.isArray( Values ) || Values.length === 0 ) { 
			
			return false; 
			
		} 

		var Width = this.layer.svg.clientWidth || this.layer.svg.parentNode.clientWidth;
		var Height = this.layer.svg.clientHeight || this.layer.svg.parentNode.clientHeight;
		
		var nValues = Values.length;
		var aStart = Config.StartAngle;
		var aEnd = Config.EndAngle;
		var aRange = aEnd - aStart;
		var aInterval = aRange / ( nValues - 1);
		var Rad = Config.Radius;
		var Len = Config.Length;
		var Align = Config.Align.trim().toLowerCase();
		var Font = Config.Font;
		
	  
		 
		var aDeg, aRad, mCos, mSin;
		var val, x, y , BBox , txtAlignX , txtAlignY;
		var offsetDir = 0;
		if( Align === "inner" ) { offsetDir = 1; }
		else if( Align === "outer" ) { offsetDir = -1; }
		 
		var SVG_Style = 'font-weight:'+Config.FontFormat+';font-size:'+Config.FontSize+'px; font-family:'+Config.FontFamily.trim()+'; fill:'+Config.Color+'; text-anchor:middle; ';
	 
		for( var i = 0; i < nValues; i++ ) {
			
			val = typeof Values[ i ] !== "string" ? String( Values[ i ] ) : Values[ i ];
			
			if( val.trim().length > 0 && val !== undefined ) {
				
				aDeg = aStart + i * aInterval;
				aRad = DashJS.tools.DegToRad( aDeg );
					
				mCos = Math.cos( aRad );
				mSin = Math.sin( aRad );
				 
				this.element.Object[ i ].setAttribute( "style" , SVG_Style );
				this.element.Object[ i ].textContent = val;
				
				// Bounding box for the element
				BBox = this.element.Object[ i ].getBBox();
				if( Config.Rotated === true ) {
					
					txtAlignX = BBox.height / 2;
					txtAlignY = txtAlignX;
					
				} else {
				
					txtAlignX = BBox.width / 2;
					txtAlignY = BBox.height / 2;
				
				}
				 
				
				x = Width/2 - mCos * (Rad - txtAlignX * offsetDir ) + Config.OffsetX;
				y = Height/2 - mSin * (Rad - txtAlignY * offsetDir ) + Config.OffsetY;
			 
				this.element.Object[ i ].setAttribute( "x" , x );
				this.element.Object[ i ].setAttribute( "y" , y );
				
				if( Config.Rotated === true ) {
					
					this.element.Object[ i ].setAttribute( "transform" , "rotate( "+(aDeg-90)+" , "+x+" , "+y+" )" );
					
				} else {
				
					this.element.Object[ i ].removeAttribute( "transform" );
				
				}
				
			
			}
			
		}

	};

	return Export;

})( {} );



DashJS.elements[ "text" ] = (function( Export ){

	var AlignText = function( Width , Height , Element ) {
	
		var Config = Element.config;
		var BBox = Element.Object.getBBox();
		var bWidth = BBox.width;
		var bHeight = BBox.height;
		
		var vAlign = Config.VAlign.trim().toLowerCase();
		var vOffset = -bHeight/2;
		if( vAlign === "top" ) { vOffset = -bHeight; }
		else if( vAlign === "bottom" ) { vOffset = 0; }
		
		var hAlign = Config.HAlign.trim().toLowerCase();
		var hOffset = -bWidth/2;
		if( hAlign === "left" ) { hOffset = -bWidth; }
		else if( hAlign === "right" ) { hOffset = 0; }
		
		var cOffsetX = 0 , cOffsetY = 0;
		if( Config.Centered === true ) {
			cOffsetX = Width / 2;
			cOffsetY = Height / 2;
		}
		
		var X = Config.X + hOffset + cOffsetX;
		var Y = Config.Y + vOffset + cOffsetY;
		 
		Element.Object.setAttribute( "x" , X );
		Element.Object.setAttribute( "y" , Y );
		
		return { X: X , Y: Y };
		
	};


	Export.Schema = {

		SVG_Elem: "text",
		
		Properties: {
		
			"Value" : { Type: "string" },
			
			"X" : { Type: "number" },
			"Y" : { Type: "number" },
	
			"Fill" : { Type: "boolean" , Default: true },
			"FillColor" : { Type: "hex" , Default: "#000000" },
			
			"Stroke" : { Type: "boolean" , Default: false },
			"StrokeColor" : { Type: "hex" , Default: "#FF0000" },
			"StrokeWidth" : { Type: "number" , Default: 1 },
			 
			"FontSize" : { Type: "number" , Default: 15 },
			"FontFamily" : { Type: "string" , Default: "Arial" },
			"FontFormat" : { Type: "string" , Default: "" },
		 
			"Angle" : { Type: "number" , Default: 0 },
			
			"Opacity" : { Type: "number" , Default: 1.0 },
			
			"VAlign" : { Type: "string" , Default: "center" },
			"HAlign" : { Type: "string" , Default: "center" },
			
			"Centered" : { Type: "boolean" , Default: false }
			
			
		}
	
	};


	Export.Update = function() {

		var Config = this.element.config;
		
		var Width = this.layer.svg.clientWidth || this.layer.svg.parentNode.clientWidth;
		var Height = this.layer.svg.clientHeight || this.layer.svg.parentNode.clientHeight;

		var Fill = Config.Fill === true ? Config.FillColor : "none";
		var Stroke = Config.Stroke === true ? Config.StrokeColor : "none";
		var Opacity = Math.min( Math.max( Config.Opacity , 0 ) , 1 );
		var txtVal = Config.Value;
		
		this.element.Object.textContent = txtVal;
		this.element.Object.setAttribute( "fill" , Fill );
		this.element.Object.setAttribute( "stroke" , Stroke );
		this.element.Object.setAttribute( "stroke-width" , Config.StrokeWidth );
		this.element.Object.setAttribute( "opacity" , Opacity );
		this.element.Object.setAttribute( "font-size" , Config.FontSize );
		this.element.Object.setAttribute( "font-family" , Config.FontFamily );
		this.element.Object.setAttribute( "font-weight" , Config.FontFormat );
		
		var Pos = AlignText( Width , Height , this.element );
		 
		this.element.Object.setAttribute( "transform" , "rotate( "+Config.Angle+" , "+Pos.X+" , "+Pos.Y+" )" );

	};


	Export.Methods = {

		SetValue: function( Val , Realign ) {
			
			var Width = this.layer.svg.clientWidth || this.layer.svg.parentNode.clientWidth;
			var Height = this.layer.svg.clientHeight || this.layer.svg.parentNode.clientHeight;
									
			this.element.config.Value = Val;
			this.element.Object.textContent = Val;
			
			if( Realign !== undefined && Realign === true ) {
				AlignText( Width , Height , this.element );
			}
			
		},
		
		GetValue: function() {
			
			return this.element.Object.textContent;
			
		}


	};


	return Export;

})( {} );



DashJS.elements[ "needle" ] = (function( Export ){

	var SetNeedleAngle = function( Val , Clamp ) {

		var Width = this.layer.svg.clientWidth || this.layer.svg.parentNode.clientWidth;
		var Height = this.layer.svg.clientHeight || this.layer.svg.parentNode.clientHeight;

		var cfg = this.element.config;
			
		var min = cfg.MinValue;
		var max = cfg.MaxValue;
		if( min > max ) { 
			min = max;
			max = cfg.MinValue;
		}
 		 
		cfg.CurrentValue = ( Clamp !== undefined && Clamp === true ) ? DashJS.tools.Clamp( Val , min , max ) : Val;

		var range = cfg.EndAngle - cfg.StartAngle;
		var ang = cfg.StartAngle + range * ( (cfg.CurrentValue - cfg.MinValue) / (cfg.MaxValue - cfg.MinValue) );
	 	
	  
		this.element.Object.setAttribute( "transform" , "rotate("+ang+","+(Width/2+cfg.OffsetX)+","+(Height/2+cfg.OffsetY)+")" );

	};


	Export.Schema = {
 			
		SVG_Elem : "polygon",
	
		Properties: {
		
			"MinValue" : { Type: "number" },
			"MaxValue" : { Type: "number" },
			"Length" : { Type: "number" },
			"StartAngle" : { Type: "number" },
			"EndAngle" : { Type: "number" },
		 
			"CurrentValue" : { Type: "number" , Default: 0 },
			
			"Width" : { Type: "number" , Default: 5 },
			
			"Fill" : { Type: "boolean" , Default: true },
			"FillColor" : { Type: "hex" , Default: "#D10000" },
			
			"Stroke" : { Type: "boolean" , Default: false },
			"StrokeColor" : { Type: "hex" , Default: "#FF0000" },
			"StrokeWidth" : { Type: "number" , Default: 1 },
			
			"PivotOffset" : { Type: "number" , Default: 0 },
			"OffsetX" : { Type: "number" , Default: 0 },
			"OffsetY" : { Type: "number" , Default: 0 },
			
			"SharpeningPercent" : { Type: "number" , Default: 50 },
			"TipLength" : { Type: "number" , Default: 6 },
			"BaseLength" : { Type: "number" , Default: 10 }
			
		}

	};


	Export.Update = function() {

		var Config = this.element.config;
		
		var Width = this.layer.svg.clientWidth || this.layer.svg.parentNode.clientWidth;
		var Height = this.layer.svg.clientHeight || this.layer.svg.parentNode.clientHeight;

		var aStart = Config.StartAngle;
		var aEnd = Config.EndAngle;
		var aRange = aEnd - aStart;
		
		var minVal = Config.MinValue;
		var maxVal = Config.MaxValue;
		var vRange = maxVal - minVal;
		var curVal = Config.CurrentValue;
		 
		
		var nw = Config.Width;
		var nLen = Config.Length;
		var nTipLen = Config.TipLength;
		var nBaseLen = Config.BaseLength;
		var nSharpen = (100 - Config.SharpeningPercent) / 100;
	 
		var nPivotOffset = Config.PivotOffset;
		var nOffsetX = Config.OffsetX;
		var nOffsetY = Config.OffsetY;
		
		 
		var cAng, sCos , sSin , oCos, oSin;
		
		//cAng = aStart + aRange * ( (curVal - minVal) / vRange );
		
		cAng = 0; // or aStart; USe start angle only, because afterwards it will cause inconsistency in rotation if currentValue is used when building the needle
		cAng = DashJS.tools.DegToRad( cAng );
		
		sCos = Math.cos( cAng );
		sSin = Math.sin( cAng );
		oCos = Math.cos( cAng + Math.PI / 2 ) * nw/2;
		oSin = Math.sin( cAng + Math.PI / 2 ) * nw/2;
		
		var w2 = (Width/2) - sCos*nPivotOffset + nOffsetX;
		var h2 = (Height/2) - sSin*nPivotOffset + nOffsetY;
	 
		
		var pts = {
			x: [],
			y: []
		};
		
		pts.x.push( w2 - sCos * nLen );
		pts.y.push( h2 - sSin * nLen );
	 
		pts.x.push( w2 - sCos * (nLen - nTipLen) - oCos*nSharpen );
		pts.y.push( h2 - sSin * (nLen - nTipLen) - oSin*nSharpen );
		
		pts.x.push( w2 - oCos );
		pts.y.push( h2 - oSin );
		
		pts.x.push( w2 + sCos * nBaseLen );
		pts.y.push( h2 + sSin * nBaseLen );
		
		pts.x.push( w2 + oCos );
		pts.y.push( h2 + oSin );
		
		pts.x.push( w2 - sCos * (nLen - nTipLen) + oCos*nSharpen );
		pts.y.push( h2 - sSin * (nLen - nTipLen) + oSin*nSharpen );
		
		
		
		var pstr = "";
		for( var p = 0; p < pts.x.length; p++ ) {
			
			pstr += pts.x[ p ] + "," + pts.y[ p ] + " "; 
			
		}
		
		var Fill = Config.Fill === true ? Config.FillColor : "none";
		var Stroke = Config.Stroke === true ? Config.StrokeColor : "none";
	 
		this.element.Object.setAttribute( "points" , pstr );
		this.element.Object.setAttribute( "fill" , Fill );
		this.element.Object.setAttribute( "stroke" , Stroke );
		this.element.Object.setAttribute( "stroke-width" , Config.StrokeWidth );

		SetNeedleAngle.bind( this )( curVal , false );

	};

	Export.Methods = {

		SetValue: function( Val , Clamp ) {
							 	
			if( Val == undefined || !DashJS.tools.isNumber( Val ) ) { return false; }
			 
			SetNeedleAngle.bind( this )( Val , Clamp );
			
			return true;
			
		},
		
		GetValue: function() {
		 
			var cVal = this.element.config.CurrentValue;

			return cVal;
			
		}

	};

	return Export;

})( {} );


DashJS.elements[ "arc" ] = (function( Export ){

	Export.Schema = {
 			
		SVG_Elem : "path",

		Properties : {
		
			"Radius" : { Type: "number" },
			"StartAngle" : { Type: "number" },
			"EndAngle" : { Type: "number" },
		 
			
			"Closed" : { Type: "boolean" , Default: false },
			"Iterations" : { Type: "integer" , Default: 100 },
			
			"Stroke" : { Type: "boolean" , Default: true },
			"StrokeColor" : { Type: "hex" , Default: "#FF0000" },
			"StrokeWidth" : { Type: "number" , Default: 10 },
			
			"Fill" : { Type: "boolean" , Default: false },
			"FillColor" : { Type: "hex" , Default: "#000000" },
			
			"Align" : { Type: "string" , Default: "middle" },
			"OffsetX" : { Type: "number" , Default: 0 },
			"OffsetY" : { Type: "number" , Default: 0 } 
			
		}

	};

  

	Export.Update = function() {
 
		var Config = this.element.config;
 	
		var Width = this.layer.svg.clientWidth || this.layer.svg.parentNode.clientWidth;
		var Height = this.layer.svg.clientHeight || this.layer.svg.parentNode.clientHeight;

	    var OffsetX = Config.OffsetX;
	    var OffsetY = Config.OffsetY;
	 
		var arcWidth = Config.StrokeWidth;
		var Align = Config.Align.trim().toLowerCase();
	     
		var aOffset = 0;
		if( Align === "inner" ) { aOffset = -1; }
		else if( Align === "outer" ) { aOffset = 1; }
		aOffset = ( arcWidth / 2 ) * aOffset;
		
		var Closed = ( Config.Closed === true || Config.Fill === true ) ? true : false;
		
		var Fill = Config.Fill === true ? Config.FillColor : "none";
		var Stroke = Config.Stroke === true ? Config.StrokeColor : "none";

		var endAngle = Config.EndAngle;
		if( Closed && endAngle == 360 ) { endAngle = 359; }
		
		var Pts = DashJS.shapes.SVG_Circle( Width/2 + OffsetX , Height/2 + OffsetY , Config.Radius + aOffset , Config.StartAngle , endAngle , Closed );
	 
	   
	    //Element.Object.setAttribute( "points" , Pts );
		this.element.Object.setAttribute( "d" , Pts );
		this.element.Object.setAttribute( "fill" , Fill );
		this.element.Object.setAttribute( "stroke" , Stroke );
		this.element.Object.setAttribute( "stroke-width" , arcWidth );


	};

	return Export;

})( {} );


DashJS.elements[ "box" ] = (function( Export ){

	Export.Schema = {
 			
		SVG_Elem : "rect",
		
		Properties : {
		 
			"Width" : { Type: "number" },
			"Height" : {  Type: "number" },

			"RadiusX" : { Type: "number" , Default: 0 }, 
			"RadiusY" : { Type: "number" , Default: 0 },
			 
			"Stroke" : { Type: "boolean" , Default: true },
			"StrokeColor" : { Type: "hex" , Default: "#FF0000" },
			"StrokeWidth" : { Type: "number" , Default: 10 },
			
			"Fill" : { Type: "boolean" , Default: false },
			"FillColor" : { Type: "hex" , Default: "#000000" },
			
			"X" : { Type: "number" , Default: 0 },
			"Y" : { Type: "number" , Default: 0 },
			
			"Opacity" : { Type: "number" , Default: 1.0 },
			
			"VAlign" : { Type: "string" , Default: "center" },
			"HAlign" : { Type: "string" , Default: "center" },
			
			"Centered" : { Type: "boolean" , Default: false }
			
		}
  
	};


	Export.Update = function() {
 
		var Config = this.element.config;
		
		var Width = this.layer.svg.clientWidth || this.layer.svg.parentNode.clientWidth;
		var Height = this.layer.svg.clientHeight || this.layer.svg.parentNode.clientHeight;

		var Fill = Config.Fill === true ? Config.FillColor : "none";
		var Stroke = Config.Stroke === true ? Config.StrokeColor : "none";
		
		var Opacity = Math.min( Math.max( Config.Opacity , 0 ) , 1 );
		
		var bWidth = Config.Width;
		var bHeight = Config.Height;
		
		
		var vAlign = Config.VAlign.trim().toLowerCase();
		var vOffset = -bHeight/2;
		if( vAlign === "top" ) { vOffset = -bHeight; }
		else if( vAlign === "bottom" ) { vOffset = 0; }
		
		var hAlign = Config.HAlign.trim().toLowerCase();
		var hOffset = -bWidth/2;
		if( hAlign === "left" ) { hOffset = -bWidth; }
		else if( hAlign === "right" ) { hOffset = 0; }
		
		var cOffsetX = 0 , cOffsetY = 0;
		if( Config.Centered === true ) {
			cOffsetX = Width / 2;
			cOffsetY = Height / 2;
		}
		
		var X = Config.X + hOffset + cOffsetX;
		var Y = Config.Y + vOffset + cOffsetY;
		
		this.element.Object.setAttribute( "fill" , Fill );
		this.element.Object.setAttribute( "stroke" , Stroke );
		this.element.Object.setAttribute( "stroke-width" , Config.StrokeWidth );
		
		this.element.Object.setAttribute( "x" , X );
		this.element.Object.setAttribute( "y" , Y );
		
		this.element.Object.setAttribute( "width" , bWidth );
		this.element.Object.setAttribute( "height" , bHeight );
		
		this.element.Object.setAttribute( "rx" , Config.RadiusX );
		this.element.Object.setAttribute( "ry" , Config.RadiusY );
		
		this.element.Object.setAttribute( "opacity" , Opacity );

		
	};

	return Export;

})( {} );


DashJS.elements[ "bar" ] = (function( Export ){

	Export.Schema = {

		SVG_Elem : "rect",

		Properties: {
 
			"Angle" : { Type: "number" , Default: 0 },

			"Value" : { Type: "number" , Default: 0 },
			"MinValue" : { Type: "number" , Default: 0 },
			"MaxValue" : { Type: "number" , Default: 100 },

			"Length" : { Type: "number" },
			"Width" : { Type: "number" },

			"Stroke" : { Type: "boolean" , Default: true },
			"StrokeColor" : { Type: "hex" , Default: "#FF0000" },
			"StrokeWidth" : { Type: "number" , Default: 10 },
			
			"Fill" : { Type: "boolean" , Default: false },
			"FillColor" : { Type: "hex" , Default: "#000000" },
			
			"X" : { Type: "number" , Default: 0 },
			"Y" : { Type: "number" , Default: 0 },
			
			"Opacity" : { Type: "number" , Default: 1.0 },

			"VAlign" : { Type: "string" , Default: "center" },
			"HAlign" : { Type: "string" , Default: "center" },
			
			"Centered" : { Type: "boolean" , Default: false }

		}

	};

	Export.Update = function() {

		var Config = this.element.config;
		
		var Width = this.layer.svg.clientWidth || this.layer.svg.parentNode.clientWidth;
		var Height = this.layer.svg.clientHeight || this.layer.svg.parentNode.clientHeight;

		var Fill = Config.Fill === true ? Config.FillColor : "none";
		var Stroke = Config.Stroke === true ? Config.StrokeColor : "none";
		
		var Opacity = DashJS.tools.Clamp( Config.Opacity , 0 , 1 );
		

		var bLength = Config.Length;
		var bWidth = Config.Width;
		 
		var vAlign = Config.VAlign.trim().toLowerCase();
		var vOffset = -bWidth/2;
		if( vAlign === "top" ) { vOffset = -bWidth; }
		else if( vAlign === "bottom" ) { vOffset = 0; }
		
		var hAlign = Config.HAlign.trim().toLowerCase();
		var hOffset = -bLength/2;
		if( hAlign === "left" ) { hOffset = -bLength; }
		else if( hAlign === "right" ) { hOffset = 0; }
		
		var cOffsetX = 0 , cOffsetY = 0;
		if( Config.Centered === true ) {
			cOffsetX = Width / 2;
			cOffsetY = Height / 2;
		}
		
		var X = Config.X + hOffset + cOffsetX;
		var Y = Config.Y + vOffset + cOffsetY;
		
		this.element.Object.setAttribute( "fill" , Fill );
		this.element.Object.setAttribute( "stroke" , Stroke );
		this.element.Object.setAttribute( "stroke-width" , Config.StrokeWidth );
		
		this.element.Object.setAttribute( "x" , X );
		this.element.Object.setAttribute( "y" , Y );
	
		this.element.Object.setAttribute( "width" , bLength );
		this.element.Object.setAttribute( "height" , bWidth );
	 
		this.element.Object.setAttribute( "rx" , Config.RadiusX );
		this.element.Object.setAttribute( "ry" , Config.RadiusY );
		
		this.element.Object.setAttribute( "opacity" , Opacity );

		this.element.Object.setAttribute( "transform" , "rotate("+Config.Angle+","+(X-hOffset)+","+(Y-vOffset)+")" );

	};

	Export.Methods = {

		SetValue: function( Val ) {

			if( !DashJS.tools.isNumber( Val ) ) {

				return false;

			}

			var Cfg = this.element.config;

			if( Val === Cfg.Value ) { 
				return false; 
			}

			var Min = Cfg.MinValue;
			var Max = Cfg.MaxValue;

			var Clamped = ( Val < Min || Val > Max ) ? DashJS.tools.Clamp( Val , Min , Max ) : Val;

			var Progress = ( Clamped - Min ) / ( Max - Min );

			var NewLength = Cfg.Length * Progress;
 		
			this.element.Object.setAttribute( "width" , NewLength );
			this.element.Object.setAttribute( "height" , Cfg.Width );
			
			Cfg.Value = Clamped;

		},

		GetValue: function() {

			return this.element.config.Value;

		}

	};

	return Export;

})( {} );


DashJS.elements[ "linegraph" ] = (function( Export ){

	Export.Schema = {

		SVG_Elem : "polyline",

		Properties: {

			"Width" : { Type: "number" , Min: 10 },
			"Height" : { Type: "number" , Min: 10 },

			"Points" : { Type: "array" },

			"X" : { Type: "number" , Default: 0 },
			"Y" : { Type: "number" , Default: 0 },
			
			"Opacity" : { Type: "number" , Default: 1.0 },

			"VAlign" : { Type: "string" , Default: "center" },
			"HAlign" : { Type: "string" , Default: "center" },
			
			"Centered" : { Type: "boolean" , Default: true }


		}

	};

	Export.Update = function() {

		var Config = this.element.config;
		
		var Width = this.layer.svg.clientWidth || this.layer.svg.parentNode.clientWidth;
		var Height = this.layer.svg.clientHeight || this.layer.svg.parentNode.clientHeight;

		var Pts = Config.Points;

		var pLen = Pts.length;

		if( pLen === 0 ) {

			// Add code to remove all points if the array is empty

			return false;

		}

		var bWidth = Config.Width;
		var bHeight = Config.Height;

		var vAlign = Config.VAlign.trim().toLowerCase();
		var vOffset = -bHeight/2;
		if( vAlign === "top" ) { vOffset = -bHeight; }
		else if( vAlign === "bottom" ) { vOffset = 0; }
		
		var hAlign = Config.HAlign.trim().toLowerCase();
		var hOffset = -bWidth/2;
		if( hAlign === "left" ) { hOffset = -bWidth; }
		else if( hAlign === "right" ) { hOffset = 0; }
		
		var cOffsetX = 0 , cOffsetY = 0;
		if( Config.Centered === true ) {
			cOffsetX = Width / 2;
			cOffsetY = Height / 2;
		}
		
		var X = Config.X + hOffset + cOffsetX;
		var Y = Config.Y + vOffset + cOffsetY;
	 

		var pData = '';

		var px = 0, py = 0;
		var y_min = Math.min.apply(Math, Pts), y_max = Math.max.apply(Math, Pts), y_range = y_max - y_min; 
		var interval_x = bWidth / (pLen-1);
		
		for( var p = 0; p < pLen; ++p ) {

			if( Pts[ p ] !== false ) { 

			px = X + interval_x * p;
			py = Y + Config.Height - ( (Pts[ p ] - y_min) / y_range ) * Config.Height;

			pData += px+','+py+' ';

			}

		}

		this.element.Object.setAttribute( "points" , pData );

		this.element.Object.setAttribute( "fill" , 'none' );
		this.element.Object.setAttribute( "stroke" , '#ff0000' );
		this.element.Object.setAttribute( "stroke-width" , 3 );

	};

	Export.Methods = {

	};

	return Export;

})( {} );