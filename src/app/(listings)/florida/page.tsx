import FilterProperties from '@/components/listing/FilterProperties/FilterProperties';
import ListingHeader from '@/components/listing/ListingHeader/ListingHeader';
import React from 'react';

const FloridaPage = () => {
    return (
        <div>
            <ListingHeader
                title={"Florida Properties"}
                desc={"Find premium properties in the heart of Florida"}
                background={"/images/penthouse-gulf-view-luxury-florida.jpg"}
            />
            <FilterProperties />
        </div>
    );
};

export default FloridaPage;