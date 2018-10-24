<?php
  
	require 'header.php';
	use MatthiasMullie\Minify;

	$src = "../source/";
	$dir = $src."custom/";
	$exclude = array();
  
	$minifierJS = new Minify\JS();
 
	$unminifiedJS = "";

	$unminifiedJS .= file_get_contents( $src."core.js" )."\n";
 	$unminifiedJS .= file_get_contents( $src."elements.js" )."\n";
 	 
	 
	function getModules( $dir , $exclude ) { 
	  
		$css = array();
		$js = array();

		if (is_dir($dir)) {

		    if ($dh = opendir($dir)) {

		        while (($file = readdir($dh)) !== false) {

		        	if( $file == "." || $file == ".." ) { continue; }

		        	$parts = pathinfo( $dir.$file );

		        	if( in_array( $parts["filename"] , $exclude ) ) {
		        		continue;
		        	}
					
		        	if( $parts["extension"] == "css" ) { 
		        		//array_push( $css , $parts["filename"] );
		        	} else if( $parts["extension"] == "js" ) {
		        		array_push( $js , $parts["filename"] );
		        	}
	 
		        }

		        closedir($dh);
		    }

		}

		return array( "css"=>$css,"js"=>$js);

	}

	$data = getModules($dir,$exclude);
	 
	foreach( $data["js"] as $f ) {
 	
 		$unminifiedJS .= file_get_contents( $dir.$f.".js" )."\n";

	}
 
	$minifierJS->add( $unminifiedJS );
 
	// save minified file to disk
	 
	$tempPath = '_temp/';

	$libJS = $minifierJS->minify();

	require 'vendor/autoload.php';
 
	$tmpfname = tempnam( $tempPath , "gui");
   
	// create new archive
	$zipFile = new \PhpZip\ZipFile();

	$zipFile
	    ->addFromString("dashjs.min.js", $libJS );

	$zipFile
		->addFromString("dashjs.js", $unminifiedJS );
	$zipFile
		->addFromString("README.txt", "This file has been automatically generated on ".date("Y-m-d h:i:sa")."." )
		->saveAsFile( $tmpfname ) // save the archive to a file
	    ->close(); // close archive

	// Force file download
	header('Content-Type: application/zip');
	header('Content-disposition: attachment; filename=dashjs.zip');
	header('Content-Length: ' . filesize($tmpfname));
	readfile($tmpfname);

    // delete the file from the server
	unlink($tmpfname);

	echo "Download of compiled DashJS package starting...";
 

?>