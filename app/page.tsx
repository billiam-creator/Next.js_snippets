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

 
</div>
    </main>
  )
}