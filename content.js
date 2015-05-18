function clickPrev()
{
	document.getElementById("page-menu-previous-button").click();
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

function attachListener()
{
	// wait a sec for loading content inside iframe
	setTimeout(function()
	{
		document.getElementById("frame").contentDocument.body.addEventListener('keydown', shortyHandler, false);
	}, 1000);
}
attachListener();

window.addEventListener('keydown', shortyHandler, true);
window.onhashchange = attachListener;

/**
 * MYO ARMBAND SUPPORT
 * Myo.js works only on http so far
 */

if (location.protocol === "http:")
{
	var myMyo = Myo.create();

	myMyo.on('wave_out', function(edge)
	{
		// to the left/prev slide
		if(!edge || !document.hasFocus()) return;
		clickPrev();
	});

	myMyo.on('wave_in', function(edge)
	{
		// to the right/next slide
		if(!edge || !document.hasFocus()) return;
		clickNext();
	});
}