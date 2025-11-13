"use client";
import React, { useEffect, useState } from 'react';
import Property from './Property';
import axios from 'axios';
import { usePathname } from 'next/navigation';
import { IProperty } from '@/types/property';

interface PropertiesProps {
    region: string
}

const Properties = ({ region }: PropertiesProps) => {
    const pathname = usePathname();
    const [properties, setProperties] = useState<IProperty[]>([]);
    useEffect(() => {
        const handleGetProperties = async () => {
            const res = await axios.get(`/data/${pathname === '/listings/florida' ? 'florida' : pathname === '/listings/dubai' ? 'dubai' : pathname === '/listings/saudi-arabia' ? 'saudi-arabia' : null}.json`);
            console.log(res);
            if (res.status === 200) {
                setProperties(res.data);
            }
        };
        handleGetProperties();
    }, [region, pathname])
    return (
        <div className='container'>
            {properties.length > 0 ?
                <div className='grid grid-cols-3 gap-10 max-md:grid-cols-2 max-md:gap-7 max-sm:grid-cols-1 max-sm:gap-7'>
                    {properties.map((property, index) => (
                        <Property key={index} property={property} />
                    ))}
                </div>
                :
                <div>No Properties Found</div>
            }
        </div>
    );
};

export default Properties;