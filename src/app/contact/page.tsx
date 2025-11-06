import { ContactHeroSection, DirectContactCard, OfficeShowcaseSection, ResponseTimeSection } from '@/components/contact';
import React from 'react';

const ContactPage = () => {
    return (
        <main>
            <ContactHeroSection />
            <DirectContactCard />
            <ResponseTimeSection />
            <OfficeShowcaseSection />
        </main>
    );
};

export default ContactPage;