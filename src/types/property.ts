export interface IProperty {
    id: number;
    slug: string;
    title: string;
    location: string;
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
    project_overview: {
        developer: string,
        ownership: string,
        property_type: string
      unit_finish: string
      floors: number,
      anticipated_completion: string,
      service_charges: string,
      registration_fee: string,
      resale_allowed: string
    },
    unit_types: [
        {
            type: string,
            size_range: string,
            starting_price: string,
            parking: string
        }
    ],
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