import { LucideIcon, Star } from 'lucide-react';

interface StatsBarProps {
    label: string;
    value: string;
    icon: LucideIcon;
}

const StatsBar = ({ label, value, icon: Icon }: StatsBarProps) => {
    return (
        <div className='border border-white/5 rounded-xl p-6 backdrop-blur-md bg-white/[0.02] flex items-center gap-4 group hover:bg-white/[0.05] transition-all duration-300'>
            {/* 1. The Icon */}
            <div className='relative flex items-center justify-center'>
                <div className="absolute inset-0 bg-blue-600/20 blur-lg rounded-full group-hover:bg-blue-600/40 transition-all" />
                <Icon className='relative text-blue-500' size={24} strokeWidth={1.5} />
            </div>

            {/* 2. Value and Label Group */}
            <div className='flex flex-row items-baseline gap-3'>
                <h2 className='text-3xl md:text-4xl font-black text-white tracking-tighter'>
                    {value}
                </h2>
                
                <div className='flex flex-col justify-center'>
                    {/* Special case for Rating Stars */}
                    {label === "Customer Rating" && (
                        <div className="flex gap-0.5 mb-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={10} className="fill-blue-500 text-blue-500" />
                            ))}
                        </div>
                    )}
                    <p className='text-[9px] leading-tight font-bold text-gray-400 uppercase tracking-[0.2em] max-w-[70px]'>
                        {label}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StatsBar;
