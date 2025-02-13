
   
   mapboxgl.accessToken = mapToken;


const map = new mapboxgl.Map({
    container: 'map', // The ID of the container element
    style: 'mapbox://styles/mapbox/streets-v11',
    center:listing.geometry.coordinates, // Default center coordinates (New Delhi)
    zoom: 9,
});


const marker=new mapboxgl.Marker({ color: 'red' })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
       .setHTML(`<h4>${listing.title}</h4><p>Exact Location provided after booking</p>`)
    )
    .addTo(map);
