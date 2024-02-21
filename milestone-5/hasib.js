// function checkName(name) {
//     if( typeof name === 'string'){
//     const lastLetter=['a', 'y', 'i' , 'e', 'o' , 'u', 'w'];
//     for(let i of lastLetter){
//     if(lastLetter.includes(name.charAt(name.length-1).toLowerCase())){
//     return "good Name"
//     }else{
//     return 'Bad Name'
//     }
//     }
//     }else{
//     return 'invalid'
//     }
//     }
//     console.log(checkName('AkaiW'));


function password(obj) {
    const objKey = Object.keys(obj)
    const stringYear= String(obj.birthYear)
    if(objKey.includes('name')&& objKey.includes('birthYear')&&objKey.includes('siteName')&& stringYear.length ===4 ){
    const password = obj.siteName[0].toUpperCase()+obj.siteName.slice(1)+"#"+obj.name+'*'+obj.birthYear
    return password
    }else{
    return "invalid"
    }
    }

    console.log( password({ name: 'toky' , birthYear: 200, siteName: 'Facebook' } ))