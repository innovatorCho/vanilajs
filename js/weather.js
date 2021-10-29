onGeoSucess = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    console.log(`my location is ${lat}, ${lon}`);
};

onGeoError = () => {
    alert("on Geo Error");
};

navigator.geolocation.getCurrentPosition(onGeoSucess, onGeoError);