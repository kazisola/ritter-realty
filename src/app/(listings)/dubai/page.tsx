import FilterProperties from '@/components/listing/FilterProperties/FilterProperties';
import ListingHeader from '@/components/listing/ListingHeader/ListingHeader';
import React from 'react';

const DubaiPage = () => {
    return (
        <div>
            <ListingHeader
                title={"Dubai Properties"}
                desc={"Find premium luxurious properties in Dubai"}
                background={"/images/luxury-dubai-skyline-modern-architecture-palm-jume.jpg"}
            />
            <FilterProperties />
        </div>
    );
};

export default DubaiPage;