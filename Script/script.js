let con = document.querySelector('.container')
let btn = document.querySelector('.btn')

btn.addEventListener('click', fetch_Data);

async function fetch_Data(){
    let res = await fetch('https://api.adviceslip.com/advice')
    let data = await res.json()
    //return data
    
    updateUI(data);
    console.log("yey!")
}

let updateUI = data=>{
    // con.innerHTML = `
    // <div id="advice-num"> Advice #${data.slip.id}</div>
    // <div class="advice"> <q>${data.slip.advice}</q> </div>
    // <img class="pattern" src="images/pattern-divider-desktop.svg" alt="">
    // <button class="btn"><img class="btn" src="images/icon-dice.svg" alt=""></button>

    // `
    let advice_num = con.firstElementChild ;
    let advice = con.firstElementChild.nextElementSibling;
    let num = `Advice #${data.slip.id}`
    let ad = `<q>${data.slip.advice}</q>`
    advice_num.innerHTML = num
    advice.innerHTML = ad
}
