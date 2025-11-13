"use client";
import { IProperty } from '@/types/property';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
        <div className='container'>
            {property && !loading ?
                <div>
                    {property.title}
                </div>
                :
                <div>Loading...</div>
            }
        </div>
    );
};

export default PropertyDetails;