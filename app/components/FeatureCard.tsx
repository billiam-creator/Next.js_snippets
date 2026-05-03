import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
    heading: string;
    description: string;
    icon: LucideIcon; 
    isActive?: boolean; 
    tag?: string
}

const FeatureCard = ({ heading, description, icon: Icon, isActive, tag }: FeatureCardProps)=>{
    return (
        /* Parent Card  */
        <div className={`bg-[#0A0A0A] border rounded-2xl p-8 transition-all duration-300 flex flex-col gap-6 ${
            isActive 
            ? 'border-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.15)]' 
            : 'border-white/10 hover:border-blue-600/50'
        }`}>
            
            {/*Icon Container */}
            <div className="flex items-center justify-center w-14 h-14 bg-blue-600/10 rounded-full text-blue-500 shrink-0">
                <Icon size={28} strokeWidth={2} /> 
            </div>

            {/* Info Section */}
            <div>
                <h3 className="text-white text-lg font-bold uppercase mb-2 tracking-tight">
                    {heading}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    {description}
                </p>

                {tag && (
        <span className="inline-block bg-blue-600 text-[10px] font-black px-3 py-1 rounded-full text-white uppercase tracking-wider">
          {tag}
        </span>
      )}
            </div>
        </div>
    );
};

export default FeatureCard;