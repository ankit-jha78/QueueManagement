import { useState } from "react"
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";

export default function App(){
  const [queue,setQueue]=useState([]);

  const addToQueue=(customer)=>{
    //add data to queue
    setQueue([...queue,{...customer, id: Date.now(),status : "waiting"}]);
  }
  const onUpdateStatus=(id,newStatus)=>{
    //change data in queue
    setQueue(queue.map(customer =>
      customer.id===id ? {... customer ,status :newStatus}:customer
    ))
  };
  const removeFromQueue=(id)=>{
    //remove data from queue
    setQueue(queue.filter(customer => customer.id !==id))
  }

  return(
    <div >
    <header className="mt-16">
    <h1 className="text-blue-700 text-2xl text-center mb-1">Queue Managemnet Application</h1>
    <p className="text-center text-[16px]">Masnage your customers efficient</p>
    </header>
    <main className="flex justify-center m-6 space-x-6">
    <QueueForm onAdd={addToQueue}/>
    <QueueDisplay 
    queue={queue}
    onUpdateStatus={onUpdateStatus}
    oneRemove={removeFromQueue}
    />
    </main>
    </div>
  )
}