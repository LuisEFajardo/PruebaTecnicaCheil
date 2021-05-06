export function getHotels(){
    const url='https://us-central1-hotels-3d69a.cloudfunctions.net/app/api/hotels';

    return fetch(url).then((response) =>{
        return response.json();
    }).then((result)=>{
        return result;
    });
}

export function getHotelByCity(city){
    const url=`https://us-central1-hotels-3d69a.cloudfunctions.net/app/api/hotels/search?city=${city}`;
    const requestOptions = {
        method: 'POST',
    };
    return fetch(url,requestOptions).then((response) =>{
        return response.json();
    }).then((result)=>{
        return result;
    });
}

export function getHotelByPrice(price){
    const url=`https://us-central1-hotels-3d69a.cloudfunctions.net/app/api/hotels/search/min?minPrice=${price}`;
    const requestOptions = {
        method: 'POST',
    };
    return fetch(url,requestOptions).then((response) =>{
        return response.json();
    }).then((result)=>{
        return result;
    });
}