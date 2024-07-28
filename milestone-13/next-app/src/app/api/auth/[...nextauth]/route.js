import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
export const options ={
    secret:process.env.NEXT_PUBLIC_AUTH_SECRET,
    session:{
        strategy:'jwt' 
    },
    providers:[
        CredentialsProvider({
            credentials:{
                email:{type:"email",required:true, placeholder:'Enter your Email',label:"Email" },
                password:{type:'password',required:true, placeholder:'password',label:'Password'}
            },
            async authorize(credentials){
               
                const {email,password} =credentials;
                console.log(email,password)
                if(!credentials){
                    return null
                }
            if(email){
                const currentUser = users.find((user)=>user.email=== email)
                if(currentUser.password === password){
                    return currentUser
                }
            }
                    
            }
           
        }),
       

    ]
}
const handler =NextAuth(options)
const users = [
    {
      id: 1,
      name: "Alice Smith",
      email: "alice@gmail.com",
      password: "password123"
    },
    {
      id: 2,
      name: "Bob Johnson",
      email: "bob@example.com",
      password: "password456"
    },
    {
      id: 3,
      name: "Charlie Brown",
      email: "charlie@gmail.com",
      password: "password789"
    },
    {
      id: 4,
      name: "Diana Prince",
      email: "diana@example.com",
      password: "password101"
    }
  ];
  

export { handler as GET, handler as POST };

