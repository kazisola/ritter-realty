interface ProjectOverview {
    developer: string,
    ownership: string,
    property_type: string
    unit_finish: string
    floors: number,
    anticipated_completion: string,
    service_charges: string,
    registration_fee: string,
    resale_allowed: string
}

interface UnitTypes {
    type: string,
    size_range: string,
    starting_price: string,
    parking: string
}

export interface IProperty {
    id: number;
    slug: string;
    title: string;
    location: string;
    location_slug: string;
    type: string;
    price: string;
    beds: number;
    baths: number;
    sqft: string;
    images: string[];
    video?: string;
    lot_size: string;
    year_built: number;
    status: string;
    parking: string;
    description: string;
    amenities: string[];
    project_overview: ProjectOverview,
    unit_types: UnitTypes[],
    payment_plan: [
        {
            stage: string,
            percentage: number
        }
    ],
    agent: {
        name: string;
        phone: string;
        email: string;
    }
}