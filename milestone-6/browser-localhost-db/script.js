const handleKeyValueInput =()=>{
    const key =document.getElementById('key')
    const value =document.getElementById('value')
    const keyInput = key.value;
    const valueInput = value.value;
    
    value.value ='';
    key.value ='';
    // displayToUI(keyInput,valueInput)
    saveToLocalStorage(keyInput,valueInput)
}

const StorageToLocalStorage =()=>{
    const mass = localStorage.getItem('bike');
    let cards = {}
    if(mass){
        cards =JSON.parse(mass)
    }
    return cards

}
const saveToLocalStorage = (key,value)=>{

    let card = StorageToLocalStorage()
   
    card[key]=value;
    const cardContained = JSON.stringify(card)
    localStorage.setItem('bike',cardContained)
}

const displayToUI =()=>{
    const card = StorageToLocalStorage();
    const ui = document.getElementById('data-container')
    for(let i in card){
        const value =card[i]
        const li =document.createElement('li')
        li.innerText =`${i} : ${value}`
        ui.appendChild(li)
        

    }
  

}
displayToUI()