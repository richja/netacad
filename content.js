function clickPrev()
{
	document.getElementById("page-menu-prev-button").click();
}

function clickNext()
{
	document.getElementById("page-menu-next-button").click();
}

function shortyHandler(e)
{
	switch(e.keyCode)
	{
		// '<-'
		case 37:
			clickPrev();
			break;

		// '->'
		case 39:
			clickNext();
			break;
	}
}


window.addEventListener('keydown', shortyHandler, true);

document.getElementById("frame").onload= function()
{
	document.getElementById("frame").contentDocument.addEventListener('keydown', shortyHandler, false);
}

 // Myo script works only on http so far
if (location.protocol === "http:")
{
	var myMyo = Myo.create();

	myMyo.on('wave_out', function(edge){
	    if(!edge) return;
		clickPrev();
	    console.log('To the left!');
	});

	myMyo.on('wave_in', function(edge){
	    if(!edge) return;
		clickNext();
	    console.log('To the right!');
	});
}