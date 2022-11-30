const Days=document.querySelector("#day")
const Hours=document.querySelector("#hour")
const Minu=document.querySelector("#minute")
const Sec=document.querySelector("#second")

const currentyear=new Date().getFullYear()

//console.log(currentyear)
function countdown(){
const newyear=new Date(`Dec 25 ${currentyear} 00:00:00`)
//console.log(newyear)
const sample=new Date();
const diff=newyear-sample;

const Day=Math.floor(diff/1000/60/60/24)
const Hour=Math.floor((diff/1000/60/60)%24)
const Minute=Math.floor((diff/1000/60)%60)
const Second=Math.floor((diff/1000)%60)

Days.innerHTML=Day<10?"0"+Day:Day 
Hours.innerHTML=Hour<10?"0"+Hour:Hour
Minu.innerHTML=Minute<10?"0"+Minute:Minute
Sec.innerHTML=Second<10?"0"+Second:Second
}

setInterval(countdown,1000)




