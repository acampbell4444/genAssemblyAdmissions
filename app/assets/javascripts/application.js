// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require_tree .
$(document).on({
    mouseenter: function () {
        alert("Be Careful, this information may be disturbing. *You are seeing this message because I used the 'mouseenter jQuery' function to call an alert when the mouse enters the button's field");
    },
    mouseleave: function () {
        alert("Now that the mouse is outside the buttons field, you are seeing a different Message. Pretty annoying, huh? You should probably click the button to prevent the page from creating additional dialogs")
    }
}, "#below_box > #link");
