import FilterProperties from '@/components/listing/FilterProperties/FilterProperties';
import ListingHeader from '@/components/listing/ListingHeader/ListingHeader';
import React from 'react';

const SaudiArabiaPage = () => {
    return (
        <div>
            <ListingHeader
                title={"Saudi Arabia Properties"}
                desc={"Premium properties in the heart of Saudi Arabia"}
                background={"/images/waterfront-modern-estate-luxury-home.jpg"}
            />
            <FilterProperties />
        </div>
    );
};

export default SaudiArabiaPage;