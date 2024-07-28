export async function GET(){
    return Response.json(
        comment,{
            headers:{
                'set-cookie':"themeiiiiiiiiii"
            }
        }

    )
}
export async function POST(request){
    const newComment = await request.json()
    comment.push({
        id:comment.length+1,
        text: newComment.text
    })
    return Response.json({
        comment,
        message:"Response was "
    },)

    
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