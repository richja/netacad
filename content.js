function shortyHandler(e)
{
	console.log("pressed");
	switch(e.keyCode)
	{
		// '<-'
		case 37:
			document.getElementById("page-menu-next-button").click();
			break;
		// '->'
		case 39:
			document.getElementById("page-menu-previous-button").click();
			break;
	}
}

window.addEventListener('keydown', shortyHandler, true);

document.getElementById("frame").onload= function()
{
	document.getElementById("frame").contentDocument.addEventListener('keydown', shortyHandler, false);
	document.getElementById("frame").addEventListener('keydown', shortyHandler);
	console.log("loaded", document.getElementById("frame"));
}

var myMyo = Myo.create();
/*myMyo.on('fist', function(edge){
    if(!edge) return;
    console.log('Hello Myo!');
    myMyo.vibrate();
});*/

myMyo.on('wave_out', function(edge){
    if(!edge) return;
    console.log('To the left!');
    // myMyo.unlock(3000);
	document.getElementById("page-menu-previous-button").click();
});

myMyo.on('wave_in', function(edge){
    if(!edge) return;
    console.log('To the right!');
    // myMyo.unlock(3000);
	document.getElementById("page-menu-next-button").click();
});