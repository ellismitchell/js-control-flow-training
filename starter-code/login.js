console.log("login.js loaded");
let userLogin = {name: "joe", password: "passw0rd"};
let p = window.prompt(`Enter password for user ${userLogin.name}`);
if (p === userLogin.password)
	alert("Password match!");
else {
	alert("Passwords don't match");
	let attempts = 1;
	while (p != userLogin.password) {
		if (attempts >= 3) {
			alert("Sorry. 3 tries maximum");
			break;
		}
		p = window.prompt("Try again");
		attempts++;
	}
}
