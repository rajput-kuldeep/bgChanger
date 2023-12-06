import { useState } from 'react';

function App() {
  const [color, setColor] = useState("pink")

  return (
    <>
     <div className='w-full h-screen flex flex-wrap justify-center items-end pb-8 duration-200
     ' style={{backgroundColor: color}}>
      <div className='flex flex-wrap justify-center inset-x-1 bg-white px-6 py-2 rounded-3xl gap-3'>
        
          <button className='text-white rounded-2xl px-4 py-1' style={{backgroundColor: "red"}} onClick={()=> setColor("red")}>red</button>
          <button className='text-white bg-teal-800 rounded-2xl px-4 py-1' onClick={() => setColor("teal")}>teal</button>
          <button className='text-white bg-black rounded-2xl px-4 py-1' onClick={() => setColor("black")}>black</button>
          <button className='text-white bg-gray-800 rounded-2xl px-4 py-1' onClick={() => setColor("gray")}>gray</button>
          <button className='text-white bg-yellow-300 rounded-2xl px-4 py-1' onClick={() => setColor("yellow")}>yellow</button>
          <button className='text-white bg-orange-600 rounded-2xl px-4 py-1' onClick={() => setColor("orange")}>orange</button>
          <button className='text-white bg-indigo-950 rounded-2xl px-4 py-1' onClick={() => setColor("indigo")}>indigo</button>
          <button className='text-white bg-violet-300 rounded-2xl px-4 py-1' onClick={() => setColor("violet")}>violet</button>
          <button className='text-white bg-purple-700 rounded-2xl px-4 py-1' onClick={() => setColor("purple")}>purple</button>
          <button className='text-white bg-pink-700 rounded-2xl px-4 py-1' onClick={() => setColor("pink")}>pink</button>
        
      </div>
     </div>
    </>
  )
}

export default App
