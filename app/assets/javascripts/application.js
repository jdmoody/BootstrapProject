// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require_tree .

$(function () {
  $("#contact-form").on("submit", function (event) {
    event.preventDefault();
    $(".alert").remove();
    $(".has-error, .has-success").removeClass("has-error has-success");
    var $inputs = $(event.currentTarget).find("input, textarea");
    var errors = [];
    $inputs.each(function (idx) {
      var $input = $(this);
      var $label = $input.parent();
      if ($input.val() === "") {
        $label.parent().addClass("has-error");
        errors.push($label.text() + " can't be blank");
      }
      else {
        $label.parent().addClass("has-success");
      }
    });
    var $alert = $('<div>');
    if (errors.length) {
      $alert.addClass('alert alert-danger');
      errors.forEach(function(error) {
        $alert.append('<p>' + error + '</p>');
      });
    } else {
      $alert.addClass('alert alert-success');
      $alert.text('Submission successful!');
    }
    $(event.currentTarget).prepend($alert);
  });

  $('a[data-toggle=tooltip]').tooltip();
});