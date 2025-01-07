let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl= document.getElementById("stage")
let fightButton= document.getElementById("fightButton")
let announcement=document.getElementById("announcement")
let count =0;

function onclick(){
let randomIndexOne = Math.floor( Math.random() * fighters.length )
let randomIndexTwo = Math.floor( Math.random() * fighters.length )
stageEl.textContent=fighters[randomIndexOne] + " vs " + fighters[randomIndexTwo]
if(randomIndexOne === randomIndexTwo){
    announcement.textContent="Finally you won 🥳🎉";
    
}else{ 
    
    announcement.textContent="try again🥺";
}


// fightButton.addEventListener('click', () => {
//     count++; // Increment the counter
//     if (count++===3){
//         announcement.textContent="try again🥺";
//     }
//     else{
//         announcement.textContent="";
//     }

//   })
}

fightButton.addEventListener("click",onclick)

