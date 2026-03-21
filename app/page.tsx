import Image from 'next/image'
import Button from './components/button'

export default function Home(){
  return(
    <main className="min-h-screen flex items-center justify-center">
      {/* -----Background Image------ */}
      <Image
      src="/tyre_image2.jpg"
      alt='Tyre Background'
      fill   //makes image fill parent
      className='object-cover -z-10'
      priority  // loads image faster
      />
     {/*----------content------ */}

     <div className="relative z-10 space-y-6 max-w-3xl px-8 text-center">
  <div className="space-y-3">
    <h1 className="text-5xl font-bold text-white drop-shadow-lg">
      DOMINATE THE ROAD WITH VELOCITY
    </h1>
    <h2 className='text-3xl text-white'>
      Performance, Safety, and Style for Every Drive
    </h2>
    <p className="text-gray-100 text-lg">
      Explore our curated collection of premium tyres for passenger
      vehicles, SUVs, and performance cars. Get them expertly fitted
      at your convenience.
    </p>
  </div>

  {/* 4. Use the reusable component twice here */}
  <div className='flex gap-4 justify-center'>
    <Button text="SHOP ALL TYRES" variant="solid" />
    <Button text="FIND YOUR TYRE SIZES" variant="outline" />
  </div>

  {/* --- The Finder Box --- */}
<div className="mt-12 bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 w-full max-w-2xl mx-auto">
  <h3 className="text-xl font-bold text-white mb-4 text-left">
    FIND THE RIGHT TYRES FOR YOUR VEHICLE
  </h3>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  
  <input 
    type="text" 
    placeholder="Width (e.g. 205)" 
    className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />


  <input 
    type="text" 
    placeholder="Profile (e.g. 55)" 
    className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

</div>
<button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all 
shadow-lg active:scale-95">Find</button>
</div>

 
</div>
    </main>
  )
}