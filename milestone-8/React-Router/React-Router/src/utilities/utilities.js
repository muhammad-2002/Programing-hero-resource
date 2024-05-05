import toast from "react-hot-toast";

// get data into local storage
export const getData =()=>{
    let blogs =[];
    const storedData = localStorage.getItem('blog')
    if(storedData){
        blogs= JSON.parse(storedData)
    }
    return blogs;

}

//set data localStorage
export const setData = (blog)=>{
    const blogs = getData()
    const isExist = blogs.find((b)=>b.id===blog.id)
    if(isExist){
       return toast.error("Allrady Added")
    }
    blogs.push(blog)
    localStorage.setItem('blog',JSON.stringify(blogs))
    toast.success("Successfully added")
}


// remove Data local storage
export const removeData=(id)=>{
    const blogs = getData();
     const remaining =blogs.filter((b)=>b.id!==id);
     localStorage.setItem('blog',JSON.stringify(remaining))
     toast.success('Blog Removed from Bookmark!')

}
    
