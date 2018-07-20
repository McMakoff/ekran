$(document).ready(function() {

	$("#contact").submit(function() {
		$.ajax({
			type: "POST",
			url: "../mail.php",
			data: $(this).serialize()
		}).done(function() {
			$("#form_content").hide();
			$("#form_header").hide();
			$("#note").show();
		});
		return false;
	});
	
});