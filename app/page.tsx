import Image from 'next/image'

export default function Home(){
  return(
    <main className="min-h-screen flex items-center justify-center">
      <Image
      src="/tyre_image2.jpg"
      alt='Tyre Background'
      fill   //makes image fill parent
      className='object-cover -z-10'
      priority  // loads image faster
      />

     //

     <div className="relative z-10 space-y-3 max-w-3xl px-8 text-center">
  <h1 className="text-5xl font-bold text-white drop-shadow-lg">
    Home Page
  </h1>
  <p className="text-gray-100 text-lg">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia 
    atque vel nulla ratione quae voluptate sequi veritatis voluptatem porro? 
  </p>
</div>
    </main>
  )
}