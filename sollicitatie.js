document.getElementById("sollicitatieForm")
.addEventListener("submit", async function(e){

e.preventDefault();

const webhook =
"JOUW_WEBHOOK_URL";

await fetch(webhook,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
embeds:[
{
title:"Nieuwe Sollicitatie",
color:3447003,
fields:[
{
name:"Naam",
value:document.getElementById("naam").value
},
{
name:"Functie",
value:document.getElementById("functie").value
},
{
name:"Motivatie",
value:document.getElementById("motivatie").value
}
]
}
]
})
});

alert("Sollicitatie verzonden!");
});
