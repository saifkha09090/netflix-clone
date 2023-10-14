import Form from "@/components/auth/form";
import { getSession, signIn } from "next-auth/react";

export default function SignUp () {
    const onSubmit = async (email, password) => {
        try {
            const response = await fetch("/api/auth/signup",{
        method: "POST",
        body: JSON.stringify({email, password}),
        headers: {
            "Content-Type": "application/json",
        }
        })
        if(response.ok) {
            alert("Sign Up Successfully");
        }
        } catch(err) {
            console.error(err)
        }
        
    };
    return <Form signin={false} onFormSubmit={onSubmit} />
};


export async function getServerSideProps({req}) {
    const session = await getSession({req});
    if(session) {
      return {
        redirect:{
        destination: "/",
        parmanent: false,
      }}
    }
    return {
      props:{}
    }
  }