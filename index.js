function result() {
  let time = new Date()
  let h = time.getHours();
  let M = time.getMinutes();
  let S = time.getSeconds();
  if(h>12){
    h=h-12;
  }
  if(h<10){
    h="0"+h;
  }
  if(M<10){
    M="0"+M
  }
  if(S<10){
    S="0"+S
  }
  
  let value1= document.getElementById("Hou");
  let  value2 = document.getElementById("Min");
  let value3 = document.getElementById("Sec");
  
  value1.innerHTML=h;
  value2.innerHTML=M;
  value3.innerHTML=S;

}
setInterval(result, 1000);
