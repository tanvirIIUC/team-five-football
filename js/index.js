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
    
   
    
 }

   
 document.getElementById('mbappy').addEventListener('click',function()
 {

    const  player = document.getElementById('Kylian Mbappé');
    const playerName= player.innerText;
    addFriendList(playerName);
   
    
   
 })
 document.getElementById('Messi').addEventListener('click',function()
 {

    const  player = document.getElementById('Lionel Messi');
    const playerName= player.innerText;
    addFriendList(playerName);
    
   
 })