
const store_name="Tyler";
top_title.innerHTML=(store_name + "'s Used Smart Phone Store");


bottom_title.innerHTML=("Your one stop shop for used phones - "+store_name+"'s");            

let hits= 0;
let spins=0;
//let wins;
let over_half=false;
let hits_spins_ratio
let progress;

hits_span.innerHTML = hits; 
spins_span.innerHTML = spins;

function changeClassName(element) {
    spins++;
    if (element.className == 'item') {
        element.className = 'item rotate';
    }

    if (spins < 2 * hits && hits < spins) {
        over_half = true;
    }

    spins_span.innerHTML = spins;
    hits_spins_ratio = hits / spins; // Recalculate the ratio here
    hit_spin_span.innerHTML = (hits_spins_ratio).toFixed(2);

    // -- Winning progress depends on hits/spins
// CHAT GPT Solution
if (hits_spins_ratio >= 0.5 && hits < spins) {
    progress = 'You win!';
} else if (hits_spins_ratio >= 0.25) {
    progress = 'Almost there!';
} else if (hits_spins_ratio > 0) {
    progress = 'On your way!';
} else {
    progress = 'Get going!';
}
win_Span.innerHTML = progress;
}

/* In CLass Code
let hits_spins_ratio = hits/spins;
let progress;

if (hits_spins_ratio > 0.5 ) {
    if (hits<spins){
    progress = 'On your way!';
    }

} else if(hits_spins_ratio >= 0.25){
progress = ' Almost There!';
} else if(hits_spins_ratio >= 0.5 ){

} else if (hits < spins) {
progress = 'you win!'
} else {
progress = 'Get Going!'
}

win_Span.innerHTML=progress; }
*/




function resetClassName(element) {
    if (element.className == 'item rotate') {
        element.className = 'item';
        hits += 2; // Simplified the increment operation
    } else {
        changeClassName(element);
    }

    if (spins < 2 * hits) {
        over_half = true;
    }

    hits_span.innerHTML = hits;
    hits_spins_ratio = hits / spins; // Recalculate the ratio here
    hit_spin_span.innerHTML = (hits_spins_ratio).toFixed(2);


    // -- Winning progress depends on hits/spins
  // CHAT GPT Solution
  
  if (hits_spins_ratio >= 0.5 && hits < spins) {
    progress = 'You win!';
} else if (hits_spins_ratio >= 0.25) {
    progress = 'Almost there!';
} else if (hits_spins_ratio > 0) {
    progress = 'On your way!';
} else {
    progress = 'Get going!';
}
win_Span.innerHTML = progress;
  
  
 /*  In CLass Code
 
let hits_spins_ratio = hits/spins;
let progress;
    
    if (hits_spins_ratio > 0.5 ) {
        if (hits<spins){
        progress = 'On your way!';
        }
    
    } else if(hits_spins_ratio >= 0.25){
    progress = ' Almost There!';
    } else if(hits_spins_ratio >= 0.5 ){
    
    } else if (hits < spins) {
    progress = 'you win!'
    } else {
    progress = 'Get Going!'
    }
    
    win_Span.innerHTML=progress;

} */ 
}
