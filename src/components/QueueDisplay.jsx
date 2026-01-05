export default function QueueDisplay({ queue, onUpdateStatus, oneRemove }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "waiting":
        return "var(--warning)";
      case "serving":
        return "var(--success)";
      case "completed":
        return "var(--info)";
      default:
        return "var(--text)";
    }
  };
  return (
    <div className="w-2xl bg-neutral-900 text-white p-3 rounded-md">
      <h2 className="text-center text-2xl text-blue-700 font-semibold">
        Current queue
      </h2>
      {queue.length === 0 ? (<p className="text-center">No customer Data</p> ):(
        <div>
           {queue.map((customer)=>(
            <div key={customer.id} className="bg-gray-900 p-3  capitalize m-4 rounded-md flex justify-between">
               <div className="">
                <h3 className="text-[18px]">{customer.name}</h3>
                <p className="text-gray-400">{customer.service}</p>
                 <span className="mt-2"
                style={{color :getStatusColor(customer.status)}}>
                    {customer.status}
                </span>
                </div> 
               
                <div className="space-x-7 my-4">
                    {customer.status === "waiting"  && (
                        <button 
                        className="bg-green-700 px-4 py-2 rounded-sm outline-0 cursor-pointer
                        hover:bg-green-800"
                        onClick={()=>onUpdateStatus(customer.id, "serving")}>Serve</button>
                    )}
                     {customer.status === "serving" && (
                        <button
                         className="bg-green-700 px-4 py-2 rounded-sm outline-0 cursor-pointer
                        hover:bg-green-800" 
                        onClick={()=>onUpdateStatus(customer.id, "completed")}>Completed</button>
                    )}
                     <button
                      className="bg-red-700 px-4 py-2 rounded-sm outline-0 cursor-pointer
                        hover:bg-red-800"
                     onClick={()=>oneRemove(customer.id)}>Remove</button>
                </div>

            </div>
           ))} 

        </div>
        )}
    </div>
  );
}
