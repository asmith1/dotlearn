function initmap()
{
    infowindow = new google.maps.InfoWindow();
    ghanalat = 7.892899;
    ghanalon = -1.048289;
    ghanacntr = new google.maps.LatLng(ghanalat, ghanalon);
    map = new google.maps.Map(document.getElementById('ghanacntr'), {
          zoom: 8,
          center: ghanacntr
    });
}
