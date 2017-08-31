function onSignIn(googleUser) {
	var profile = googleUser.getBasicProfile();
	id_google = profile.getId();

	$("#g_login").val(id_google);
	$("#g_login").text(id_google);

	$("#g_login_btn").click();
}

function onSignInRegister(googleUser) {
	var profile = googleUser.getBasicProfile();
	var name = profile.getName().split(" ");

	$("#register_name").val(name[0]);
	$("#register_lastname").val(name[1]);
	$("#register_email").val(profile.getEmail());
	$("#register_googleid").val(profile.getId());
}