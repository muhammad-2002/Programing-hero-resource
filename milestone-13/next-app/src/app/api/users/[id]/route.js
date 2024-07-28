export async function PATCH(request,{params}){
    const updatedDoc = await request.json()
    console.log(updatedDoc)
   const index = comment.findIndex((c)=>c.id === parseInt(params.id))
   console.log(index)
   
    
    comment[index]={
        text:updatedDoc.text
    }
    return  Response.json({
        message:"Successfully done",
        comment
    })


}



const comment =[
    {
        id:1,
        text:"text 1"
    },
    {
        id:2,
        text:"text 2"
    },
    {
        id:3,
        text:"text 3"
    },
]