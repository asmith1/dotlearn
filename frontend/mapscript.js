var ghanaLat = 7.892899;
var ghanaLng = -1.048289;

var ghanaCtr;
var map;

var mapOptions = {
	zoom: 7,
	center: ghanaCtr,
	mapTypeId: google.maps.MapTypeId.ROADMAP
}


function init()
{
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    ghanaCtr = new google.maps.LatLng(ghanaLat, ghanaLng);
    map.panTo(ghanaCtr);
}
