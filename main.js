$("#textarea").val($("#text").html());
$("#bottom_edit").hide(0);
$("#bottom_style").hide(0);
	
$("#btn_edit").click(function() {

	$("#btn_edit").hide(150);
	$("#bottom_edit").slideToggle(250);
	$("#textarea").val($("#text").html());

});

$("#bottom_edit_btn").click(function() {

	$("#bottom_edit").hide(250);
	$("#btn_edit").show(150);
	$("#text").html($("#textarea").val());
	$("#textarea").val("");

});

$("#text_bottom_style_btn_c").click(function() {

		// $("#palitra_c").css("display", "block");
		// $("#palitra_bg").css("display", "none");
		// $("#text_bottom_style_btn_c").addClass("text_bottom_style_btn_active");
		// $("#text_bottom_style_btn_bg").removeClass("text_bottom_style_btn_active");
		// $(".text_bottom_style").css("margin-top", "10px");
		$(".text_bottom_style_buttons").css("bottom", "22px")
		$(".text_bottom_style_position").css("bottom", "43px")
		$("#palitra_c").css("display", "block");
		$("#palitra_bg").css("display", "none");
		$("#text_bottom_style_btn_c").addClass("text_bottom_style_btn_active");
		$("#text_bottom_style_btn_bg").removeClass("text_bottom_style_btn_active");

});

$("#text_bottom_style_btn_bg").click(function() {

		// $("#palitra_bg").css("display", "block");
		// $("#palitra_c").css("display", "none");
		// $("#text_bottom_style_btn_bg").addClass("text_bottom_style_btn_active");
		// $("#text_bottom_style_btn_c").removeClass("text_bottom_style_btn_active");
		// $(".text_bottom_style").css("margin-top", "10px");
		$(".text_bottom_style_buttons").css("bottom", "22px")
		$(".text_bottom_style_position").css("bottom", "43px")
		$("#palitra_bg").css("display", "block");
		$("#palitra_c").css("display", "none");
		$("#text_bottom_style_btn_bg").addClass("text_bottom_style_btn_active");
		$("#text_bottom_style_btn_c").removeClass("text_bottom_style_btn_active");
		
});

let style = 0;

$("#btn_style").click(function() {

	$("#bottom_style").slideToggle(250);
	$("#btn_style").hide(150);

});

$(".radio_item").click(function() {

	let fs = $(this).val();
	$("#text").css("font-size", fs);

});

$("#font_family_choose").change(function() {

	let ff = $(this).val();
	$("#text").css("font-family", ff);

});

let font_style = 0;

$(".checkbox_item").click(function() {

	if (font_style === 0) {

		let fst = $(this).val();
		$("#text").css("font-style", fst);

		font_style = 1;
	} else if (font_style = 1) {
		let fst = $(this).val();
		$("#text").css("font-style", 'normal');

		font_style = 0;
	}

});

let font_style_bold = 0;

$("#checkbox_item_bold").click(function() {

	if (font_style_bold === 0) {

		$("#text").css("font-weight", "300");

		font_style_bold = 1;

	} else if (font_style_bold === 1) {

		$("#text").css("font-weight", "900");

		font_style_bold = 0;

	}

});

$(".red").click(function() {

	$("#text").css("color", "red");

});

$(".green").click(function() {

	$("#text").css("color", "green");

});

$(".blue").click(function() {

	$("#text").css("color", "blue");

});

$(".white").click(function() {

	$("#text").css("color", "white");

});

$(".orange").click(function() {

	$("#text").css("color", "orange");

});

$(".pink").click(function() {

	$("#text").css("color", "pink");

});

$(".black").click(function() {

	$("#text").css("color", "black");

});

$(".grey").click(function() {

	$("#text").css("color", "grey");

});

$(".lightgrey").click(function() {

	$("#text").css("color", "lightgrey");

});

$(".red_bg").click(function() {

	$(".top").css("background-color", "red");
	$(".top").css("border", "3px solid #fff");

});

$(".green_bg").click(function() {

	$(".top").css("background-color", "green");
	$(".top").css("border", "3px solid #fff");

});

$(".blue_bg").click(function() {

	$(".top").css("background-color", "blue");
	$(".top").css("border", "3px solid #fff");

});

$(".white_bg").click(function() {

	$(".top").css("background-color", "white");
	$(".top").css("border", "3px solid #fff");

});

$(".orange_bg").click(function() {

	$(".top").css("background-color", "orange");
	$(".top").css("border", "3px solid #fff");

});

$(".pink_bg").click(function() {

	$(".top").css("background-color", "pink");
	$(".top").css("border", "3px solid #fff");

});

$(".black_bg").click(function() {

	$(".top").css("background-color", "black");
	$(".top").css("border", "3px solid #fff");

});

$(".grey_bg").click(function() {

	$(".top").css("background-color", "grey");
	$(".top").css("border", "3px solid #fff");

});

$(".lightgrey_bg").click(function() {

	$(".top").css("background-color", "lightgrey");
	$(".top").css("border", "3px solid #fff");

});

$("#text_bottom_style_btn_close").click(function() {

	$("#bottom_style").hide(250)
	$("#btn_style").show(150)

});

$("#clear").click(function() {

	$("#textarea").val(" ");

})
	