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
    
        if(n.length<5)
        {
         list.appendChild(li);
        }
        else {
         alert(" List Full !!!");
        }    
 }

   
 document.getElementById('mbappy').addEventListener('click',function()
 {
    const  player = document.getElementById('Kylian Mbappé');
    const playerName= player.innerText;
    addFriendList(playerName);   
    document.getElementById("mbappy").disabled = true;
    document.getElementById("mbappy").style.background = "white";
    
 })
 document.getElementById('Messi').addEventListener('click',function()
 {
    const  player = document.getElementById('Lionel-Messi');
    const playerName= player.innerText;
    addFriendList(playerName);  
    document.getElementById("Messi").disabled = true;
    document.getElementById("Messi").style.background = "white";
    
 })
 document.getElementById('Neymar').addEventListener('click',function()
 {
    const  player = document.getElementById('Neymar-Jr');
    const playerName= player.innerText;
    addFriendList(playerName);  
    document.getElementById("Neymar").disabled = true;
    document.getElementById("Neymar").style.background = "white";
    
 })
 document.getElementById('Sergio').addEventListener('click',function()
 {
    const  player = document.getElementById('Sergio-Ramos');
    const playerName= player.innerText;
    addFriendList(playerName); 
    document.getElementById("Sergio").disabled = true;
    document.getElementById("Sergio").style.background = "white";
     
 })
 document.getElementById('Vítor').addEventListener('click',function()
 {
    const  player = document.getElementById('Vítor-Machado');
    const playerName= player.innerText;
    addFriendList(playerName);  
    document.getElementById("Vítor").disabled = true;
    document.getElementById("Vítor").style.background = "white";
    
 })
 document.getElementById('Renato').addEventListener('click',function()
 {
    const  player = document.getElementById('Renato-Sanches');
    const playerName= player.innerText;
    addFriendList(playerName);  
    document.getElementById("Renato").disabled = true;
    document.getElementById("Renato").style.background = "white";
    
 })
 document.getElementById('Thibaut').addEventListener('click',function()
 {
    const  player = document.getElementById('Thibaut-Courtois');
    const playerName= player.innerText;
    addFriendList(playerName);  
    document.getElementById("Thibaut").disabled = true;
    document.getElementById("Thibaut").style.background = "white";
    
 })
 document.getElementById('Karim').addEventListener('click',function()
 {
    const  player = document.getElementById('Karim-Benzema');
    const playerName= player.innerText;
    addFriendList(playerName);  
    document.getElementById("Karim").disabled = true;
    document.getElementById("Karim").style.background = "white";
    
 })
 document.getElementById('Kaka1').addEventListener('click',function()
 {
    const  player = document.getElementById('Kaka');
    const playerName= player.innerText;
    addFriendList(playerName);  
    document.getElementById("Kaka1").disabled = true;
    document.getElementById("Kaka1").style.background = "white";
    
 })

 function totalPlayersCost()
 {
   const perPlayer= document.getElementById('Per-Player');
   const perPlayerCost =parseInt(perPlayer.value) ;
   
    const playerCostTotal = document.getElementById('player-cost-total');
    playerCostTotal.innerText= perPlayerCost*5;
    return playerCostTotal;
 }


 document.getElementById('total-player-cost').addEventListener('click',function()
 {
   totalPlayersCost();
 }
 )

 document.getElementById('Calculate-Total').addEventListener('click',function()
 {
   const manager = document.getElementById('manager');
   const managercost = parseInt(manager.value);
   const coach = document.getElementById('coach');
   const coachcoat = parseInt(coach.value);
   const p= totalPlayersCost();
  
   const totalCost= managercost+coachcoat+ parseInt(p.innerText);

   const total= document.getElementById('total');
   total.innerText= totalCost;
   
 })