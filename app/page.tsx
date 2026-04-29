import Image from 'next/image'
import Button from './components/button'
import TyreCard from './components/TyreCard';

export default function Home() {
  //Data Array
  const featuredTyres = [
    { brand: 'Michelin', model: 'Pilot Sport 5', price: '24,500', image: '/michelin.jpg', tag: 'Best Seller' },
    { brand: 'Goodyear', model: 'Eagle F1 Asymmetric 6', price: '19,800', image: '/goodyear.jpg', tag: 'High Grip' },
    { brand: 'Continental', model: 'SportContact 7', price: '31,000', image: '/sportcontact.jpg', tag: 'Premium Comfort' },
    { brand: 'Pirelli', model: 'P Zero (PZ4)', price: '28,900', image: '/pirelli.jpg', tag: 'Sport Style' },
  ];
  return (
    <main className="relative min-h-screen w-full flex flex-col text-white">
      
      {/* 1. Background Image - Set to fixed so it stays behind scrolling content */}
      <div className="fixed inset-0 -z-20">
        <Image
          src="/tyre_image2.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* 2. Gradient Overlay inside fixed container */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/40 to-transparent" />
      </div>

      {/* Content section */}
      <div className="relative z-10 flex-1 flex flex-col justify-start pt-32 px-10 md:px-24">
        <div className="max-w-2xl space-y-8">

          <div className="flex items-center gap-2 bg-blue-600 text-white px-2 py-1 rounded-full w-fit text-[13px] font-medium mb-4">
            <span className="bg-white text-blue-600 px-1.5 py-0.5 rounded-full text-[10px] font-bold uppercase">
              ke
            </span>
            <span className="pr-1">Nairobi's #1 tyre broker</span>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-black leading-[1.1] uppercase tracking-tighter">
              Dominate the Road <br /> With Velocity
            </h1>
            <p className="text-lg md:text-2xl font-semibold text-blue-400">
              Performance, Safety, and Style for Every Drive.
            </p>
          </div>

          <p className="text-gray-300 text-sm md:text-base max-w-md leading-relaxed">
            Explore our curated collection of premium tyres for passenger
            vehicles, SUVs, and performance cars. Get them expertly fitted
            at your convenience.
          </p>

          <div className="flex gap-4">
            <Button text="SHOP ALL TYRES" variant="solid" />
            <Button text="FIND YOUR TYRE SIZES" variant="outline" />
          </div>

          {/* Tyre Finder Field */}
          <div className="w-full max-w-lg bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-2xl">
            <p className="text-[10px] font-bold text-gray-400 mb-3 tracking-[0.2em] uppercase">
              Start Your Tyre Finder
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
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
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded text-[10px] tracking-widest uppercase transition-all">
                FIND
              </button>
            </div>
          </div>

         

        </div>
         {/* Featured Tyres Section */}
         <div className="py-20">
          <div className='grid items-center text-center'>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-2">OUR TOP PICKS FOR THE ROAD</h2>
            <p className="text-blue-400 ">
              Explore our hand-picked selection of high-performance and reliable tyres, vetted by our experts in Nairobi.
            </p>
            </div>

            {/*---categories ------*/}
            <div className='flex gap-4 justify-center mt-5'>
              <button className='bg-blue-600 px-3 py-2 rounded-full w-fit'>[ ALL ]</button>
              <button className='bg-blue-600 px-3 py-2 rounded-full w-fit'>[ HIGH PERFOMANCE ]</button>
              <button className='bg-blue-600 px-3 py-2 rounded-full w-fit'>[ SUV / 4X4 ]</button>
              <button className='bg-blue-600 px-3 py-2 rounded-full w-fit'>[ ECO & TOURING]</button>

            </div>
            {/*--- map function --- */}
            {/* -- grid layout -- */}
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-7xl mx-auto'>
                {featuredTyres.map((tyre, index) =>(
                  <TyreCard
                  key={index}
                  brand={tyre.brand}
                  model={tyre.model}
                  price={tyre.price}
                  image={tyre.image}
                  tag={tyre.tag}
                  />
                ))}
              </div>

              {/*--- see all button*/}
              <div className='flex justify-center mt-7'>
                <button className='bg-blue-500 rounded-full py-2 px-2 hover:bg-gray-700'>SEE ALL FEATURED TYRES</button>
              </div>
            
          </div>
         
      </div>
    </main>
  )
}