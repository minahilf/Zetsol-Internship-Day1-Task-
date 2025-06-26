'use client'
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useRouter } from "next/navigation";


export default function Home() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const router = useRouter();



  const LogIn = async () => {
    try { 
      await signInWithEmailAndPassword(auth, email, password) 
      alert("LogIn sucessfull")
      router.push("/todo");
    } catch(error:any) {
      alert(error.message)
    }
  }

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      alert("SignUp Sucessfull")
      router.push("/todo");
    } catch(error:any) {
      alert(error.message)
    }
  }

  return (
    <div className="min-h-screen p-4 flex flex-col justify-center items-center">
      <h1 className=" text-2xl text-center text-black font-serif uppercase">
        Todo List Authentication
      </h1>

      <div className="flex flex-col justify-center items-center gap-6 mt-2">
        <input
          type="email"
          name="email"
          className="w-[250px] h-[40px] rounded-lg mt-4 p-4 text-black border border-[#63E4FF] font-serif"
          placeholder="hello12@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          name="password"
          className="w-[250px] h-[40px] rounded-lg  p-4 text-black border border-[#63E4FF] font-serif"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex flex-col gap-2">
          <button onClick={signUp}  className="w-[150px] h-[40px] bg-[#63E4FF] rounded-full text-black font-bold hover:bg-[#47c3db] duration-100">
            SignUp
          </button>

          <button onClick={LogIn}  className="w-[150px] h-[40px] bg-[#63E4FF] rounded-full text-black font-bold hover:bg-[#47c3db] duration-100">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
