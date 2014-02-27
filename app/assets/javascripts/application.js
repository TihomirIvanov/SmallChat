// This is a manifest file that"ll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It"s not advisable to add code directly here, but if you do, it"ll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require private_pub
//= require_tree .

$(function() {
  $( "#toggle_button" ).click( function() {
     $( "#chat_box.toggle" ).toggle( "slide" );
  });

  $( "#submit_name" ).click( function() {
    var name = $.trim($( "#name" ).val());
    if ( name === "" ) {
    		alert( "Please write your name." );
    } else {
		    $( "#set_name" ).hide( "slide" );
		    $( "#name_span" ).html( name );
		    $( "#message_author" ).val( name );

		    $( "#toggle_button" ).trigger( "click" );
		    $( "#toggle_button" ).css( "visibility","visible" );   
		    $( "#message_text" ).focus(); 
    }
  });  
});  


$( document ).ready( function() {
  $( "#set_name" ).show( "slide" );
   
});
