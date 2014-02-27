# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$ ->
  $("#toggle_button").click ->
    $("#chat_box.toggle").toggle "slide"

  $("#submit_name").click ->
    name = $.trim($("#name").val())
    if name is ""
      alert "Please write your name."
    else
      $("#set_name").hide "slide"
      $("#name_span").html name
      $("#message_author").val name
      $("#toggle_button").trigger "click"
      $("#toggle_button").css "visibility", "visible"
      $("#message_text").focus()

$(document).ready ->
  $("#set_name").show "slide"


