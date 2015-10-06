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
//= require_tree .

$(document).ready(function(){

	// Limit number of checkboxes selected
	// http://jsfiddle.net/vVxM2/
	if($("div").hasClass("limited-multi-select")){
	    var limit = 3;

	    $('.limited-multi-select input').on('change', function(evt) {
	        if($(this).parent().siblings().children(':checked').length >= limit) {
	            this.checked = false;
	            console.log('more than 3');
	        }
	        //console.log('check');
	    });
	}

//	$("#question_two").children('input').on("click", function(){
	//	$("").html("input:selected")
	//});

	/*$("#question_two .field").on('change', function () {
    //get the selected option's text and store it in map
    var map = $(this).children("input :selected").map(function () {
        var txt = $(this).siblings("p").text();
        //do not add the value to map[] if the chosen value begins with "Select"
        return txt.indexOf("Select") === -1 ? txt + " , " : "";
				console.log(txt);
    }).get();
    //add it to div
    $("#selection_q3_1").html(map);
		console.log('something here');
});*/


    /*$('#question_two .field').on('change', function(evt) {

				var x = $(this).children("input:selected").serializeArray();
        $.each(x, function(i, p){
            $("#selection_q3_" + i).append(p.value);
						console.log("#selection_q3_" + i);
        });

				console.log(this);
    });*/

		$("#question_three").hide();
		$("#question_four").hide();
		$("#question_six").hide();
		$("#question_seven").hide();

		$("#question_two input").click(function(){
				var limit = 2;
				var x = $("#question_two input[value='1']").serializeArray();

				if($(this).parent().siblings().children(':checked').length >= limit) {
						console.log('Print Labels');
						$("#question_three").show();
						$("#question_four").show();

						$.each(x, function(i, field){
		            $("#selection_q3_" + i).append("Selection " + (i + 1) + ": " + field.name);
								$("#selection_q4_" + i).append("Selection " + (i + 1) + ": " + field.name);
		        });
				}

        console.log(x);
				console.log('selection made');
    });

		$("#question_five input").click(function(){
				var limit = 2;
				var x = $("#question_five input[value='1']").serializeArray();

				if($(this).parent().siblings().children(':checked').length >= limit) {
						console.log('Print Labels');
						$("#question_six").show();
						$("#question_seven").show();

						$.each(x, function(i, field){
		            $("#selection_q6_" + i).append("Selection " + (i + 1) + ": " + field.name);
								$("#selection_q7_" + i).append("Selection " + (i + 1) + ": " + field.name);
		        });
				}

        console.log(x);
				console.log('selection made');
    });




    //$('input:textbox').val("");

  /*$('.other-field input:text').focus(function(){
    console.log('clicked');

      if ($('.otherfield input:checkbox').attr('checked')) {
        $('.otherfield input:checkbox').attr('checked', false);
        console.log('something');
      } else {
        $('.otherfield input:checkbox').attr('checked', true);
      }
  })*/

});
