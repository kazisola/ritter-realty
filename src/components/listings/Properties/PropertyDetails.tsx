"use client";
import { IProperty } from '@/types/property';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PropertyHeroGallery from './PropertyHeroGallery';
import PropertyDetailsSection from './PropertyDetailsSection';
import PropertyAmenities from './PropertyAmenities';
import PropertyContactSidebar from './PropertyContactSidebar';
import PropertyFinancing from './PropertyFinancing';

interface PropertyDetailsProp {
    region: string;
    id: number;
}

const PropertyDetails = ({ region, id }: PropertyDetailsProp) => {
    const [property, setProperty] = useState<IProperty | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        const handleGetProperties = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`/data/${region}.json`);
                if (res.status === 200) {
                    const found = res.data.find((p: IProperty) => p.id === Number(id));
                    setProperty(found);
                }
            } catch (error) {
                console.log(error);
                setLoading(false);
            } finally {
                setLoading(false);
            }
        };
        handleGetProperties();
    }, [region, id]);
    console.log(property)
    return (
        <div className=''>
            {property && !loading ?
                <div>
                    <PropertyHeroGallery images={property.images} video={property.video} title={property.title} />

                    <div className="container px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            <PropertyDetailsSection property={property} />
                            <PropertyAmenities amenities={property.amenities} />
                            {/* <PropertyFinancing price={property.price} /> */}
                        </div>

                        <div className="lg:sticky lg:top-32 h-fit">
                            <PropertyContactSidebar property={property} />
                        </div>
                    </div>
                </div>
                :
                <div className='container py-4'>Loading...</div>
            }
        </div>
    );
};

export default PropertyDetails;