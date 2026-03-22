import Image from 'next/image'
import Button from './components/button'

export default function Home() {
  return (
    <main className="relative h-screen w-full flex flex-col overflow-hidden text-white">
      
      {/* 1. Background Image */}
      <Image
        src="/tyre_image2.jpg"
        alt="Background"
        fill
        className="object-cover -z-20"
        priority
      />

      {/* 2. Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent -z-10" />

      {/*content section */}
      
      <div className="relative z-10 flex-1 flex flex-col justify-start pt-27 px-10 md:px-24">
        
        <div className="max-w-2xl space-y-6">

        <div className="flex items-center gap-2 bg-blue-600 text-white px-2 py-1 rounded-full w-fit text-[13px] font-medium mb-4 mb-6">
  <span className="bg-white text-blue-600 px-1.5 py-0.5 rounded-full text-[10px] font-bold uppercase">
    ke
  </span>
  <span className="pr-1">Nairobi's #1 tyre broker</span>
</div>
          
          {/* Header Section */}
          <div className="space-y-1">
            
            <h1 className="text-4xl md:text-5xl font-black leading-[1.1] uppercase tracking-tighter">
              Dominate the Road <br /> With Velocity
            </h1>
            <p className="text-lg md:text-xl font-semibold opacity-90 text-blue-400">
              Performance, Safety, and Style for Every Drive.
            </p>
          </div>

          {/* Subtext */}
          <p className="text-gray-300 text-sm md:text-base max-w-md leading-relaxed">
            Explore our curated collection of premium tyres for passenger
            vehicles, SUVs, and performance cars. Get them expertly fitted
            at your convenience.
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button text="SHOP ALL TYRES" variant="solid" />
            <Button text="FIND YOUR TYRE SIZES" variant="outline" />
          </div>

          {/* --- Tyre Finder Field --- */}
          <div className="w-full max-w-lg bg-black/40 backdrop-blur-md p-5 rounded-xl border border-white/10 shadow-2xl mt-4">
            <p className="text-[10px] font-bold text-gray-400 mb-3 tracking-[0.2em] uppercase">
              Start Your Tyre Finder
            </p>
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Car Make" 
                className="flex-1 bg-white/5 border border-white/10 rounded px-3 py-2 text-xs text-white outline-none focus:ring-1 focus:ring-blue-500"
              />
              <input 
                type="text" 
                placeholder="Car Model" 
                className="flex-1 bg-white/5 border border-white/10 rounded px-3 py-2 text-xs text-white outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded text-[10px] tracking-widest uppercase">
                FIND
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}