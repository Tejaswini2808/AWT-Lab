function getPincode(citycode){
    return new Promise((resolve,reject)=>{
        console.log("Pincode of "+citycode);
        setTimeout(()=>{
            resolve({
               citycode:"Hyd",
               pincode:500060
            });
        },1000)
    })
}

function getCity(pincode){
    return new Promise((resolve,reject)=>{
        console.log("City name of Pincode");
        setTimeout(()=>{
            resolve("Hyderabad");
        },2000)
    });
}

function getWeather(city){
    return new Promise((resolve,reject)=>{
        console.log("Weather Details of "+city);
        setTimeout(()=>{
            resolve("40 degrees"); 
        },3000)
    });

}
async function Weather(citycode) {
    pincode=await getPincode(citycode)
    name=await getCity(pincode)
    weather=await getWeather(name)
    console.log("Weather in "+name+" is "+weather);
  }
  Weather("Hyd")