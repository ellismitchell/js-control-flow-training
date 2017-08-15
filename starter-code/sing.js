console.log("sing.js loaded");

for (let i = window.prompt("How many verses?"); i > 0; i--) {
	if (i == 2)
		console.log(`${i} bottles of beer on the wall,\n${i} bottles of beer!\nTake one down and pass it around,\n${i-1} bottle of beer on the wall!`);
	else if (i == 1)
		console.log(`${i} bottle of beer on the wall,\n${i} bottle of beer!\nTake one down and pass it around,\nNo more bottles of beer on the wall!`);
	else
		console.log(`${i} bottles of beer on the wall,\n${i} bottles of beer!\nTake one down and pass it around,\n${i-1} bottles of beer on the wall!`);
}