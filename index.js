var ketqua =  document.getElementById("search");
document.getElementById("close").onclick = function () {
  
   ketqua.style.visibility = "hidden"
   ketqua.style.opacity = "0"
 

} 
document.getElementById("get").onclick = function () {
  ketqua.style.visibility = "visible"
  ketqua.style.opacity = "1"

}
// dark and light 
document.getElementById("switchButton").onclick = function DarkLight () {
  document.getElementById("myBody").classList.toggle("dark");

};
document.getElementById("bars").onclick = function () {
  document.getElementById("closes").style.display = "block"
  document.getElementById("bars").style.display = "none"

}
document.getElementById("closes").onclick = function () {
  document.getElementById("closes").style.display = "none"
  document.getElementById("bars").style.display = "block"

}