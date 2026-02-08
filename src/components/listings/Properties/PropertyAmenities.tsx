import { CheckCircle, Home, Wifi, Car, Dumbbell, Shield, Waves, TreePine, Sparkles, LucideIcon } from "lucide-react";

interface PropertyAmenitiesProps {
  amenities: string[]
}

const getAmenityIcon = (amenity: string) => {
  const iconMap: { [key: string]: LucideIcon } = {
    'WiFi': Wifi,
    'Parking': Car,
    'Gym': Dumbbell,
    'Security': Shield,
    'Pool': Waves,
    'Garden': TreePine,
  };
  
  const IconComponent = Object.keys(iconMap).find(key => 
    amenity.toLowerCase().includes(key.toLowerCase())
  );
  
  return IconComponent ? iconMap[IconComponent] : Sparkles;
};

const PropertyAmenities = ({ amenities }: PropertyAmenitiesProps) => {
  return (
    <div className="py-12">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00786F]/10 to-emerald-50 px-4 py-2 rounded-full mb-4">
          <Home className="w-4 h-4 text-[#00786F]" />
          <span className="text-sm font-semibold text-[#00786F] uppercase tracking-wider">Premium Features</span>
        </div>
        <h2 className="text-4xl font-serif font-bold text-slate-900 mb-3">
          World-Class Amenities
        </h2>
        <p className="text-slate-600">
          Experience luxury living with thoughtfully curated amenities designed for your comfort and convenience
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {amenities.map((amenity, index) => {
          const Icon = getAmenityIcon(amenity);
          
          return (
            <div
              key={index}
              className="group relative overflow-hidden bg-gradient-to-br from-white to-slate-50/50 rounded-2xl p-8 border border-slate-200/60 hover:border-[#00786F]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[#00786F]/10 hover:-translate-y-1"
            >

              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#00786F]/5 to-transparent rounded-bl-full transform translate-x-6 -translate-y-6 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00786F] to-emerald-600 flex items-center justify-center group-hover:rotate-6 transition-transform duration-300 shadow-lg shadow-[#00786F]/20">
                  <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>

                <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md">
                  <CheckCircle className="w-4 h-4 text-white" fill="currentColor" />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-slate-800 group-hover:text-[#00786F] transition-colors duration-300">
                {amenity}
              </h3>

              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#00786F] to-emerald-400 rounded-full group-hover:w-full transition-all duration-500" />
            </div>
          );
        })}
      </div>
    
    </div>
  );
};

export default PropertyAmenities;