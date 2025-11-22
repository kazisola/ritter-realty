import React from 'react';

interface ListingHeaderProps {
    title: string;
    desc: string;
    background: string
}

const ListingHeader = ({ title, desc, background }: ListingHeaderProps) => {
    return (
        <div className=' flex flex-col justify-center items-center pt-36 pb-56 max-sm:pt-26 max-sm:pb-44 w-full bg-[#dbb45c15] bg-no-repeat bg-center bg-cover object-cover relative'
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className='absolute inset-0 bg-black/40 px-10'></div>
            <div className='relative text-center'>
                <h2 className='font-extrabold text-5xl max-sm:text-4xl mb-3 text-white'>{title}</h2>
                <p className='capitalize font-extralight text-lg text-slate-300'>{desc}</p>
            </div>
        </div>
    );
};

export default ListingHeader;