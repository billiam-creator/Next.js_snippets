import Image from 'next/image';

interface TyreCardProps {
    brand: string;
    model: string;
    price: string;
    image: string;
    tag?: string;
}

const TyreCard = ({ brand, model, price, image, tag }: TyreCardProps) => {
return(
    <div className='bg-white/5 border border-white/10 rounded-2xl p-4 transition-all hover:border-blue-500 hover:scale-[1.02] group'>
        {/*----tyre image----*/}
        <div className='relative h-48 w-full mb-4'>
            <Image src={image} alt={model} fill className='object-contain' />
            {tag && (
                <span className='absolute top-0 left-0 bg-blue-600 text-[10px] font-bold px-2 py-1 rounded uppercase'>
                    {tag}
                </span>
            )}
        </div>

        { /*info*/ }
        <div className='space-y-1'>
          <p className='text-gray-400 text-xs font-bold uppercase'>{brand}</p>
          <h3 className='text-white font-bold text-lg'>{model}</h3>
          <p className='text-blue-400 font-bold mt-2'>KES {price}</p>
        </div>

        {/* buttons */}
        <div className='mt-6 flex gap-2'>
            <button className='flex-1 bg-blue-600 text-white text-[10px] font-bold py-2 rounded uppercase hover:bg-blue-700'>
                Shop Now
            </button>
            <button className='flex-1 border border-white/20 text-white text-[10px] font-bold py-2 rounded uppercase hover:bg-white/10'>
                Details
            </button>
        </div>
    </div>

);
};
export default TyreCard;