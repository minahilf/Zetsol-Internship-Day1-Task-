'use client'
import { useState, useEffect } from "react";
import { addDoc, collection , onSnapshot , deleteDoc, doc} from "firebase/firestore";
import { db } from "../firebase";

export default function Todo() {
    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState<any[]>([])

    // frontend pe task show honge 
    useEffect(()=>{
        const stop = onSnapshot(collection(db, "todos"), (snapshot) => {
            const tasksList = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setTasks(tasksList)
        })
        return () => stop()
    }, [])

    // add task 
    const AddTask = async () => {
        if(task === ""){
            alert("Add task")
        } else {
           try{
             await addDoc(collection(db, "todos"),{
                text: task,
             })
             setTask("")
           } catch(error:any) {
            alert("error.message")
           }
        }
    }

    // delete task 
    const deleteTask = async (id:string) => {
        await deleteDoc(doc(db, "todos", id))
    }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white p-4 gap-6">
      <h1 className="text-2xl font-bold text-center">Todo List</h1>

      <input
        type="text"
        placeholder="Enter a task"
        className="w-[250px] h-[45px] rounded-md p-3 text-black focus:outline-none"
        onChange={(e) => setTask(e.target.value)}
      />

    
        <button onClick={AddTask} className="w-[130px] h-[45px] bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-full">
          Add Task
        </button>
       
    

    <ul className="mt-4 w-[280px] bg-white rounded-xl shadow-lg p-4 space-y-3">
  {tasks.map((item: any) => (
    <li
      key={item.id}
      className="flex justify-between items-center text-black font-medium px-3 py-2 bg-gray-100 rounded-md"
    >
      <span>{item.text}</span>
      <button
        onClick={() => deleteTask(item.id)}
        className="text-xs px-3 py-1 bg-red-500 hover:bg-red-400 text-white rounded-full font-semibold"
      >
        Delete
      </button>
    </li>
  ))}
</ul>

    </div>
  );
}
