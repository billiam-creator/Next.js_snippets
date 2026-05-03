import Image from 'next/image'
import Button from './components/button'
import TyreCard from './components/TyreCard';
import FeatureCard from './components/FeatureCard';
import { ShieldCheck, Truck, Wrench, Tag, Wallet, Headset, Users, Disc, Star, MapPin } from 'lucide-react';
import StatsBar from './components/StatsBar';


export default function Home() {
  // 1. Featured Tyres Data array
  const featuredTyres = [
    { brand: 'Michelin', model: 'Pilot Sport 5', price: '24,500', image: '/michelin.jpg', tag: 'Best Seller' },
    { brand: 'Goodyear', model: 'Eagle F1 Asymmetric 6', price: '19,800', image: '/goodyear.jpg', tag: 'High Grip' },
    { brand: 'Continental', model: 'SportContact 7', price: '31,000', image: '/sportcontact.jpg', tag: 'Premium Comfort' },
    { brand: 'Pirelli', model: 'P Zero (PZ4)', price: '28,900', image: '/pirelli.jpg', tag: 'Sport Style' },
  ];

  // 2. Why Choose Us Data array
  const featureCardsData = [
    { 
        heading: 'PREMIUM QUALITY TYRES', 
        description: 'We stock only trusted brands that deliver superior performance, safety and durability.', 
        icon: ShieldCheck 
    },
    { 
        heading: 'FAST DELIVERY', 
        description: 'Quick and reliable delivery in Nairobi. Get your tyres when you need them.', 
        icon: Truck 
    },
    { 
        heading: 'EXPERT FITTING', 
        description: 'Professional fitting by experienced technicians using advanced equipment.', 
        icon: Wrench 
    },
    { 
        heading: 'COMPETITIVE PRICING', 
        description: 'Top quality tyres at the best prices. No hidden fees, just great value', 
        icon: Tag 
    },
    { 
        heading: 'PAY ON DELIVERY', 
        description: "Pay when your tyres are delivered and you're satisfied. Safe, simple, and convenient.", 
        icon: Wallet,
        isActive: true, // Triggers blue highlight in FeatureCard
        tag: 'CASH ON DELIVERY'
    },
    { 
        heading: '24/7 CUSTOMER SUPPORT', 
        description: 'Our team is always ready to help you chose the right tyres and answer any questions', 
        icon: Headset 
    }
  ];

  const statsData = [
    {label:'Happy Customers', value:'500+', icon: Users},
    {label:'Tyres Sold', value:'1000+', icon: Disc},
    {label:'Customer Rating', value:'4.8', icon:Star },
    {label:'Proudly Serving', value:'Nairobi', icon: MapPin},
  ]

  return (
    <main className="relative min-h-screen w-full flex flex-col text-white">
      
      {/* Background Image & Overlay */}
      <div className="fixed inset-0 -z-20">
        <Image
          src="/tyre_image2.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/40 to-transparent" />
      </div>

      {/* --- HERO SECTION --- */}
      <div className="relative z-10 flex-1 flex flex-col justify-start pt-32 px-10 md:px-24">
        <div className="max-w-2xl space-y-8">
          <div className="flex items-center gap-2 bg-blue-600 text-white px-2 py-1 rounded-full w-fit text-[13px] font-medium mb-4">
            <span className="bg-white text-blue-600 px-1.5 py-0.5 rounded-full text-[10px] font-bold uppercase">ke</span>
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
            <p className="text-[10px] font-bold text-gray-400 mb-3 tracking-[0.2em] uppercase">Start Your Tyre Finder</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input type="text" placeholder="Car Make" className="flex-1 bg-white/5 border border-white/10 rounded px-3 py-2 text-xs text-white outline-none focus:ring-1 focus:ring-blue-500" />
              <input type="text" placeholder="Car Model" className="flex-1 bg-white/5 border border-white/10 rounded px-3 py-2 text-xs text-white outline-none focus:ring-1 focus:ring-blue-500" />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded text-[10px] tracking-widest uppercase transition-all">FIND</button>
            </div>
          </div>
        </div>

        {/* --- FEATURED TYRES SECTION --- */}
        <div className="py-24 max-w-7xl mx-auto w-full">
          <div className='text-center mb-12'>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-2">OUR TOP PICKS FOR THE ROAD</h2>
            <p className="text-blue-400">Explore our hand-picked selection of high-performance and reliable tyres, vetted by our experts in Nairobi.</p>
          </div>

          {/* Categories */}
          <div className='flex flex-wrap gap-4 justify-center mt-5'>
            {["ALL", "HIGH PERFORMANCE", "SUV / 4X4", "ECO & TOURING"].map((cat) => (
              <button key={cat} className='bg-blue-600/20 border border-blue-600/30 px-5 py-2 rounded-full text-xs font-bold hover:bg-blue-600 transition-colors uppercase'>
                [ {cat} ]
              </button>
            ))}
          </div>

          {/* Tyre Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16'>
            {featuredTyres.map((tyre, index) => (
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

          <div className='flex justify-center mt-12'>
            <button className='bg-blue-600 text-white font-bold px-8 py-3 rounded-full transition-all hover:scale-105 hover:bg-blue-700 uppercase text-xs tracking-widest'>
              SEE ALL FEATURED TYRES
            </button>
          </div>
        </div>
          
        { /* --- WHY CHOOSE US SECTION --- */}
        <section className="py-24 max-w-7xl mx-auto w-full  px-6">
          <div className="flex justify-center mb-6">
            <span className="border border-blue-600 text-blue-600 rounded-full py-2 px-6 text-xs font-bold uppercase tracking-widest">
              Why Choose Us
            </span>
          </div>

          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-6xl font-black leading-tight uppercase tracking-tighter">
              BUILT FOR PERFORMANCE.<br />
              CHOSEN FOR <span className="text-blue-600">TRUST.</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">We make buying tyres simple, reliable, and worry-free.</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {featureCardsData.map((item, index) => (
              <FeatureCard
                key={index}
                heading={item.heading}
                description={item.description}
                icon={item.icon}
                isActive={item.isActive}
                tag={item.tag}
              />
            ))}
          </div>
        </section>

        {/* --- STATS BAR WILL GO HERE --- */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full px-6 mt-10'>
  {statsData.map((item, index) => (
    <StatsBar
      key={index}
      label={item.label}
      value={item.value}
      icon={item.icon}
    />
  ))}
</div>

      </div>
    </main>
  )
}