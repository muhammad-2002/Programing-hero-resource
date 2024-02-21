//get ElementBy ID Function
const getElementById =(element)=>{
    return document.getElementById(element)

}
//find all cards
const cards = document.querySelectorAll('.card')
let titleNO = 1;
let totalPrise =0;
for( let i =0; i<cards.length;i++ ){
    const card = cards[i]
    card.addEventListener('click',()=>{
        const title = card.querySelector('h3').innerText
        const price = parseFloat(card.querySelector('span').innerText)
        const showHeading = getElementById('showHeading')
        const p = document.createElement('p')
        p.innerText = titleNO +". "+ title;
        showHeading.appendChild(p)
        titleNO+=1
        //sum total selected card prise
        totalPrise+=price
        
        getElementById('totalPrise').innerText = totalPrise.toFixed(2)
        getElementById('total').innerText = totalPrise.toFixed(2)
        // coupon button active
        if(totalPrise>= 200){
            getElementById('applyBtn').removeAttribute('disabled')
            
        }
        if(totalPrise>0){
            getElementById('purchaseBtn').removeAttribute('disabled')
        }
        
    })
    

}


// Coupon code function 
let discountPrise;
function couponCodeActivate(){
    const inputValue = getElementById('inputCoupon').value.split(' ').join('').toUpperCase()
    if(inputValue === 'SELL200'){
        discountPrise = totalPrise*0.2;
        getElementById('discount').innerText =discountPrise.toFixed(2);
        getElementById('total').innerText = (totalPrise - discountPrise).toFixed(2)


    }else{
        alert('sorry viya valid coupon koro')
    }
    

}
// Go home and Reload page
function BackHome(){
    window.location.href = "index.html"
}