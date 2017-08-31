var id_google = "";

function onSignIn(googleUser) {
	var profile = googleUser.getBasicProfile();
	console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
	console.log('Name: ' + profile.getName());
	console.log('Image URL: ' + profile.getImageUrl());
	console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
	id_google = profile.getId();

	$("#g_login").val(id_google);
	$("#g_login").text(id_google);


	var input = $('#g_login');
	    input.val(id_google);
	    input.trigger('input'); // Use for Chrome/Firefox/Edge
	    input.trigger('change'); // Use for Chrome/Firefox/Edge + IE11
	    console.log(1);
 	
 	setTimeout(checkVariable, 1000);

 	$('#gform');

}

function checkVariable() {
	console.log("timeout");
	console.log("b : "+id_google);
   if (id_google !== '') {
       $("#g_log").click();
   }else{
   		console.log("c'est vide : "+id_google);
   }
 }
