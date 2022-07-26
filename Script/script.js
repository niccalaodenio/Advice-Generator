let con = document.querySelector('.container')
let btn = document.querySelector('.btn')

btn.addEventListener('click', fetch_Data);

async function fetch_Data(){
    let res = await fetch('https://api.adviceslip.com/advice')
    let data = await res.json()
    //return data
    let advice_num = con.firstElementChild ;
    let advice = con.firstElementChild.nextElementSibling;
    let num = `Advice #${data.slip.id}`
    let ad = `<q>${data.slip.advice}</q>`
    advice_num.innerHTML = num
    advice.innerHTML = ad
    console.log("yey!")
}
