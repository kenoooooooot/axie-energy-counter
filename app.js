const value = document.querySelector('#value');
const valueUsed = document.querySelector('#value-used');
const valueGain = document.querySelector('#value-gain');
const valueDestroy = document.querySelector('#value-destroy');
const valueRound = document.querySelector('#round');
const btnsUsed = document.querySelectorAll(".btn-used");
const btnsGain = document.querySelectorAll(".btn-gain");
const btnsDestroy = document.querySelectorAll(".btn-destroy");
const btnsReset = document.querySelector('#btn-reset');
const btnsEnd = document.querySelector('#btn-end');
const btnsWin = document.querySelectorAll(".win");
const valueWin = document.querySelector('#w-count');
const btnsLose = document.querySelectorAll(".lose");
const valueLose = document.querySelector('#l-count');
const btnsDraw = document.querySelectorAll(".draw");
const valueDraw = document.querySelector('#d-count');
const btnsR = document.querySelectorAll(".reset")


//Clamp min-max

const min = 0;
const max = 10;

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

let usedCount = 0;
let gainCount = 0;
let destroyCount = 0;
let roundCount = 2;
let nextTurnEnergy = 2;
let wCount = 0;
let lCount = 0;
let dCount = 0;

//Energy Gain

btnsGain.forEach(function (btn) {
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease') && valueGain.textContent > 0){
            gainCount--;
        }
        else if(styles.contains('increase')){
            gainCount++;
        }
        valueGain.textContent = gainCount;
    });
});

//Energy Used

btnsUsed.forEach(function (btn) {
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease') && valueUsed.textContent > 0){
            usedCount--;
        }
        else if(usedCount >= value.textContent){
            usedCount = value.textContent;
        }

        else if(styles.contains('increase')){
            usedCount++;
        }
        valueUsed.textContent = usedCount;
    });
});

//Energy Destroy

btnsDestroy.forEach(function (btn) {
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease') && valueDestroy.textContent > 0){
            destroyCount--;
        }

        else if(destroyCount >= value.textContent){
            destroyCount = value.textContent;
        }

        else if(styles.contains('increase')){
            destroyCount++;
        }
        valueDestroy.textContent = destroyCount;
    });
});

//End Turn

btnsEnd.addEventListener("click", function(){
    if(clamp(Number(valueRound.textContent),min,25)>10-2){
        var btnBlood = document.getElementsByTagName('button');
        for(i = 0, x = btnBlood.length; i < x; i++)
        btnBlood[i].style.background ='linear-gradient(145deg, #501f1f, #5f2424)',
        btnBlood[i].style.boxShadow = '2px 2px 4px #3e1818, -2px -2px 4px #742c2c';
        document.getElementById("main").style.backgroundColor ='#592222';
        document.getElementById("container").style.background ='linear-gradient(145deg, #501f1f, #5f2424)';
        document.getElementById("container").style.boxShadow = '8px 8px 16px #3e1818, -8px -8px 16px #742c2c';
        document.getElementById("button-container").style.background ='linear-gradient(145deg, #501f1f, #5f2424)';
        document.getElementById("button-container").style.boxShadow = '8px 8px 16px #3e1818, -8px -8px 16px #742c2c';
        document.getElementById("wld-container").style.backgroundColor ='#592222';
        var btnBloodCounter = document.getElementsByClassName("wld-counter");
        for (i=0, x = btnBloodCounter.length; i < x; i++)
        btnBloodCounter[i].style.backgroundColor ='#592222',
        btnBloodCounter[i].style.boxShadow = 'inset 2px 2px 2px #240e0e, inset -2px -2px 2px #8e3636';
        energy = clamp((Number(value.textContent) + gainCount - usedCount - destroyCount), min, max);
        value.textContent = clamp((Number(energy + nextTurnEnergy)), min, max);
        valueRound.textContent = roundCount++;
        usedCount = 0;
        gainCount = 0;
        destroyCount = 0;
        valueUsed.textContent = 0;
        valueGain.textContent = 0;
        valueDestroy.textContent = 0;
        }
    else {
        energy = clamp((Number(value.textContent) + gainCount - usedCount - destroyCount), min, max);
        value.textContent = clamp((Number(energy + nextTurnEnergy)), min, max);
        valueRound.textContent = roundCount++;
        usedCount = 0;
        gainCount = 0;
        destroyCount = 0;
        valueUsed.textContent = 0;
        valueGain.textContent = 0;
        valueDestroy.textContent = 0;
        } 
    });

//Reset

btnsReset.addEventListener("click", function(e){
    var btnNormal = document.getElementsByTagName("button");
        for(i = 0, x = btnNormal.length; i < x; i++)
        btnNormal[i].style.background = null,
        btnNormal[i].style.boxShadow = null;
        document.getElementById("main").style.backgroundColor = null;
        document.getElementById("container").style.background = null;
        document.getElementById("container").style.boxShadow = null;
        document.getElementById("button-container").style.background = null;
        document.getElementById("button-container").style.boxShadow = null;
        document.getElementById("wld-container").style.backgroundColor = null;
        var btnBloodCounter = document.getElementsByClassName("wld-counter");
        for (i=0, x = btnBloodCounter.length; i < x; i++)
        btnBloodCounter[i].style.backgroundColor = null,
        btnBloodCounter[i].style.boxShadow = null;

    usedCount = 0;
    gainCount = 0;
    destroyCount = 0;
    valueUsed.textContent = 0;
    valueGain.textContent = 0;
    valueDestroy.textContent = 0;
    valueRound.textContent = 1;
    roundCount = 2;
    value.textContent = 3;
});

//Win Count

btnsWin.forEach(function (btn) {
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('win')){
            wCount++;
        }
        valueWin.textContent = wCount;
    });
});

//Lose Count
btnsLose.forEach(function (btn) {
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('lose')){
            lCount++;
        }
        valueLose.textContent = lCount;
    });
});

//Draw Count
btnsDraw.forEach(function (btn) {
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('draw')){
            dCount++;
        }
        valueDraw.textContent = dCount;
    });
});

//Reset Counter for WLD
btnsR.forEach(function (btn) {
    btn.addEventListener("click", function(e){
        wCount = 0;
        lCount = 0;
        dCount = 0;
        valueWin.textContent = 0;
        valueLose.textContent = 0;
        valueDraw.textContent = 0;
    });
});