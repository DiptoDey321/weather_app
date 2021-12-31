const btnn = document.getElementById("buttn");
btnn.addEventListener("click",()=>{
    const city_name = document.getElementById("city_name").value
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city_name+"&appid=1a75e5b1128343626e42a317eca1bbdc")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.getElementById("current_temp").innerHTML = (data.main.temp-273).toFixed(2)+'°C';  
        document.getElementById("feels_temp").innerHTML = (data.main.feels_like-273).toFixed(2)+'°C';  
        document.getElementById("max_temp").innerHTML = (data.main.pressure).toFixed(2);  
        document.getElementById("min_temp").innerHTML = (data.main.humidity).toFixed(2);  
        const img_source = document.getElementById("image");
        img_source.src = "http://openweathermap.org/img/wn/"+data.weather[0].icon+".png"
        document.getElementById("desc").innerHTML= data.weather[0].description
    })
})

function time(){
const today = new Date(); 
if(today.getHours() < 10){
    document.getElementById("hour").innerHTML = '0'+today.getHours()
}else{
    document.getElementById("hour").innerHTML = today.getHours()
}

if(today.getMinutes() < 10){
    document.getElementById("min").innerHTML = '0'+today.getMinutes()
}else{
    document.getElementById("min").innerHTML = today.getMinutes()
}

if(today.getSeconds() < 10){
    document.getElementById("sec").innerHTML = '0'+today.getSeconds()
}else{
    document.getElementById("sec").innerHTML = today.getSeconds()
}
}
setInterval(() => {
   time();
}, 1000);

const today = new Date(); 
document.getElementById("month").innerHTML = today.toLocaleString('default', { month: 'short' })
document.getElementById("date").innerHTML = today.getDate();
document.getElementById("year").innerHTML = today.getFullYear();