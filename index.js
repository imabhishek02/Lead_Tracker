let myLeads=["abhishek","rohit"]
let inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")



inputBtn.addEventListener("click",function(){
  neword= inputEl.value
  myLeads.push(neword)
})

for(let i=0;i<myLeads.length;i++){
ulEl.textContent+=myLeads[i] +" "
}
