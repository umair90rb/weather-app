export const getLngLat = (navigator, cb, cbe) => navigator.geolocation.getCurrentPosition(({ coords }) => cb({ lat: coords.latitude.toFixed(), lon: coords.longitude.toFixed() }), (error) => cbe(error))

