<!DOCTYPE html>
<html>
<head>
	
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta http-equiv="cache-control" content="max-age=0" />
	<meta http-equiv="cache-control" content="no-cache" />
	<meta http-equiv="expires" content="0" />
	<meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
	<meta http-equiv="pragma" content="no-cache" />
	
	<title>DashJS Builder</title>
	
	<style>

		@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,700');

		/* http://meyerweb.com/eric/tools/css/reset/ 
		   v2.0 | 20110126
		   License: none (public domain)
		*/

		html, body, div, span, applet, object, iframe,
		h1, h2, h3, h4, h5, h6, p, blockquote, pre,
		a, abbr, acronym, address, big, cite, code,
		del, dfn, em, img, ins, kbd, q, s, samp,
		small, strike, strong, sub, sup, tt, var,
		b, u, i, center,
		dl, dt, dd, ol, ul, li,
		fieldset, form, label, legend,
		table, caption, tbody, tfoot, thead, tr, th, td,
		article, aside, canvas, details, embed, 
		figure, figcaption, footer, header, hgroup, 
		menu, nav, output, ruby, section, summary,
		time, mark, audio, video {
			margin: 0;
			padding: 0;
			border: 0;
			font-size: 100%;
			font: inherit;
			vertical-align: baseline;
		}
		/* HTML5 display-role reset for older browsers */
		article, aside, details, figcaption, figure, 
		footer, header, hgroup, menu, nav, section {
			display: block;
		}
		body {
			line-height: 1;
		}
		ol, ul {
			list-style: none;
		}
		blockquote, q {
			quotes: none;
		}
		blockquote:before, blockquote:after,
		q:before, q:after {
			content: '';
			content: none;
		}
		table {
			border-collapse: collapse;
			border-spacing: 0;
		}

		/* Some basic styles */
		body {
			background:#f1f1f1;
			font-family: "Open Sans", sans-serif;
			font-size:14px;
			color:#666;
		}

		.content {
			transform: translateY(-50%);
			position:absolute;
			top:50vh;
			width:100%;
		}

		.content .header {
			text-align: center;
			font-size:42px;
			padding:20px;
			text-transform: uppercase;
		}

		.content .inner {
			padding:20px;
			text-align: center;
		}

		.button {
		 
			border:0;
			padding: 30px 80px;
			border-radius: 10px;
			background:#FFF;
			transition: 0.3s all;
			cursor:pointer;
			font-size:20px;
			letter-spacing: 2px;
		}

		.button:hover {
			background:#02ded6;
			color:#fff;
			border-radius: 35px;
			font-size:30px;
		}

		.h1 { 
		  background-color: #353535;
		  color: transparent;
		  text-shadow: 0px 2px 3px rgba(255,255,255,0.5);
		  -webkit-background-clip: text;
			 -moz-background-clip: text;
				  background-clip: text;
				  transition: 0.2s all;
				  
		}

	</style>

</head>
<body>

	<div class="content">
		<div class="header">
			<div class="h1" style="font-size:100px;margin-bottom:60px;">
				Dash.js
			</div>
			<div class="h1"> 
				Library Builder
			</div>
			<div style="font-size:15px;margin-top:60px;">
				Click the build button to compile the library into a zip archive containing a minified and unminifed version of dash.js.
			</div>
		</div>
		<div class="inner">
			
			<button class="button" onclick='window.location="build.php"'> Build </button>

		</div>
	</div>

</body>
</html>