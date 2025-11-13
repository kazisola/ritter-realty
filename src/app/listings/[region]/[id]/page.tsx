import PropertyDetails from '@/components/listing/Properties/PropertyDetails';
import React from 'react';

interface PropertyDetailsPageProps {
    params: Promise<
        {
            region: string;
            id: number;
        }
    >
}

const PropertyDetailsPage = async ({ params }: PropertyDetailsPageProps) => {
    const { region, id } = await params;
    return (
        <PropertyDetails region={region} id={id} />
    );
};

export default PropertyDetailsPage;