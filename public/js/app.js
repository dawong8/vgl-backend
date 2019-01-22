const $container = $(".container");

// make Dropdown 

$("#dropdown").on('click', (e) => {
	//console.log("clocked");
	$(".dropdown-content").toggleClass("hide");
	$("#dropdown").toggleClass("special");
});


