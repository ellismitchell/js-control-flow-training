console.log("security_questions.js loaded");
let securityQuestions = [
	{question:"What is your mother's maiden name?", expectedAnswer:"Govan"},
	{question:"What is your middle name?", expectedAnswer:"George"},
	{question:"What street did you grow up on?", expectedAnswer:"Willow"}
	];

for (q of securityQuestions) {
	let a = window.prompt(q.question);
	if (!(a === q.expectedAnswer)) {
		alert("Wrong answer");
		break;
	}

}