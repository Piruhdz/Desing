$(document).ready(function(){
    
    
    $('.button-menu-mobile').click(function(){
        var $menuMobil=$('.mobil-menu');
        if($menuMobil.css("opacity")=="0"){
            $menuMobil.addClass('mostrarMenu');
        }else{
            $menuMobil.removeClass("mostrarMenu");
        }
                  
    });
    var map;
	function initialize() {
	  var myLatlng = new google.maps.LatLng(13.869593, -88.626956);
	  var mapOptions = {
	    zoom: 16,
	    center: new google.maps.LatLng(13.869593, -88.626956),
	    mapTypeId: google.maps.MapTypeId.HYBRID
	  };
	  map = new google.maps.Map(document.getElementById('maps'),
	    mapOptions);
	  var marker = new google.maps.Marker({
	    position: myLatlng,
	    map: map,
	    title: 'Instituto Catolico Nuestra Señora de Guadalupe'
	  });
	}
	google.maps.event.addDomListener(window, 'load', initialize);

});
