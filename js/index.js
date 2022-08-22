/* document.getElementById('player-contain').addEventListener('click',function(event)
{
     const a= event.target.innerText;
     if(a==='Select')
     {
       const playerName= document.getElementById('')
     }
    //  console.log(typeof(a))
}) */








 function addFriendList(playerName){
    const list =document.getElementById('listDisplay');
   const li= document.createElement('li');
    li.innerText=playerName;
     
    const n= document.querySelectorAll('.list-decimal li')
    console.log(n);
    console.log(n.length);
        if(n.length<5)
        {
         list.appendChild(li);
        }
        else {
         alert("Full");
        }    
 }

   
 document.getElementById('mbappy').addEventListener('click',function()
 {
    const  player = document.getElementById('Kylian Mbappé');
    const playerName= player.innerText;
    addFriendList(playerName);   
 })
 document.getElementById('Messi').addEventListener('click',function()
 {
    const  player = document.getElementById('Lionel-Messi');
    const playerName= player.innerText;
    addFriendList(playerName);  
 })
 document.getElementById('Neymar').addEventListener('click',function()
 {
    const  player = document.getElementById('Neymar-Jr');
    const playerName= player.innerText;
    addFriendList(playerName);  
 })
 document.getElementById('Sergio').addEventListener('click',function()
 {
    const  player = document.getElementById('Sergio-Ramos');
    const playerName= player.innerText;
    addFriendList(playerName);  
 })
 document.getElementById('Vítor').addEventListener('click',function()
 {
    const  player = document.getElementById('Vítor-Machado');
    const playerName= player.innerText;
    addFriendList(playerName);  
 })
 document.getElementById('Renato').addEventListener('click',function()
 {
    const  player = document.getElementById('Renato-Sanches');
    const playerName= player.innerText;
    addFriendList(playerName);  
 })
 document.getElementById('Thibaut').addEventListener('click',function()
 {
    const  player = document.getElementById('Thibaut-Courtois');
    const playerName= player.innerText;
    addFriendList(playerName);  
 })
 document.getElementById('Karim').addEventListener('click',function()
 {
    const  player = document.getElementById('Karim-Benzema');
    const playerName= player.innerText;
    addFriendList(playerName);  
 })
 document.getElementById('Kaka1').addEventListener('click',function()
 {
    const  player = document.getElementById('Kaka');
    const playerName= player.innerText;
    addFriendList(playerName);  
 })