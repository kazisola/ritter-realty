import { Filter } from 'lucide-react';
import React from 'react';

const FilterProperties = () => {
    return (
        <div className='w-4xl max-md:max-w-120 max-sm:max-w-80 mx-auto bg-white shadow-2xl shadow-black/30 p-10 rounded-xl relative -mt-20 mb-20'>
            <div className='flex items-center justify-between'>
                <h4 className='text-gray-800 text-base font-semibold'>Filter Properties</h4>
                <h4 className='text-gray-800 flex items-center gap-2'><Filter size={20} /> Filters</h4>
            </div>
            <form className='grid grid-cols-3 max-sm:grid-cols-1 gap-6 mt-8'>
                <div className='flex flex-col gap-1'>
                    <label id="price_range" className='text-sm '>Price Range</label>
                    <select id="price_range" name="price_range" className='bg-[#dbb45c15] rounded-md p-2'>
                        <option value={"all_prices"}>All Prices</option>
                        <option value={"below_200k"}>Below 200K</option>
                        <option value={"200k_500k"}>200K - 500K</option>
                        <option value={"500k_1m"}>500K - 1M</option>
                        <option value={"1m_5m"}>1M - 5M</option>
                    </select>
                </div>
                <div className='flex flex-col gap-1'>
                    <label id="prop_type" className='text-sm '>Property Type</label>
                    <select id="prop_type" name="prop_type" className='bg-[#dbb45c15] rounded-md p-2'>
                        <option value={"all_properties"}>All Types</option>
                        <option value={"residential"}>Residential</option>
                        <option value={"commercial"}>Commercial</option>
                    </select>
                </div>
                <div className='flex flex-col gap-1'>
                    <label id="location" className='text-sm '>Location</label>
                    <select id="location" name="location" className='bg-[#dbb45c15] rounded-md p-2'>
                        <option value={"all_locations"}>All Locations</option>
                        <option value={"sarosota"}>Sarosota</option>
                        <option value={"naples"}>Naples</option>
                        <option value={"tampa"}>Tampa</option>
                        <option value={"miami"}>Miami</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default FilterProperties;