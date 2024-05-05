/* eslint-disable no-const-assign */
//get Data

export const getData =()=>{
    let jobs = [];
    const getItem = localStorage.getItem('job')
    if(getItem){
        jobs = JSON.parse(getItem)
    }
    return jobs
}
//set item

export const setData =(id)=>{

    const getId = getData();
    const isExist = getId.find((d)=>d ===id )
    if(!isExist){
        getId.push(id)
    
        localStorage.setItem('job',JSON.stringify(getId))
    }

}