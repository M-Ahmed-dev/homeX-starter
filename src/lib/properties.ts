export interface Property {
    id: string;
    title: string;
    description: string;
    price: number;
    location: string;
    address: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    image: string;
    type: 'sale' | 'rent';
    propertyType: 'apartment' | 'house' | 'villa' | 'condo' | 'penthouse';
    featured: boolean;
    amenities: string[];
    yearBuilt: number;
}

export const properties: Property[] = [
    {
        id: '1',
        title: 'Modern Luxury Penthouse',
        description:
            'Stunning penthouse with panoramic city views, featuring floor-to-ceiling windows, premium finishes, and a private rooftop terrace.',
        price: 2500000,
        location: 'Manhattan, NY',
        address: '432 Park Avenue, New York, NY 10022',
        bedrooms: 4,
        bathrooms: 3,
        area: 3500,
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
        type: 'sale',
        propertyType: 'penthouse',
        featured: true,
        amenities: ['Pool', 'Gym', 'Concierge', 'Parking', 'Terrace'],
        yearBuilt: 2020
    },
    {
        id: '2',
        title: 'Elegant Waterfront Villa',
        description:
            'Breathtaking waterfront property with private dock, infinity pool, and Mediterranean-inspired architecture.',
        price: 4800000,
        location: 'Miami Beach, FL',
        address: '1500 Ocean Drive, Miami Beach, FL 33139',
        bedrooms: 6,
        bathrooms: 5,
        area: 6200,
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
        type: 'sale',
        propertyType: 'villa',
        featured: true,
        amenities: ['Pool', 'Private Dock', 'Garden', 'Security', 'Wine Cellar'],
        yearBuilt: 2018
    },
    {
        id: '3',
        title: 'Downtown Luxury Apartment',
        description:
            'Sophisticated urban living in the heart of the city. Features smart home technology and designer interiors.',
        price: 8500,
        location: 'Los Angeles, CA',
        address: '900 Wilshire Blvd, Los Angeles, CA 90017',
        bedrooms: 2,
        bathrooms: 2,
        area: 1800,
        image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
        type: 'rent',
        propertyType: 'apartment',
        featured: true,
        amenities: ['Gym', 'Rooftop', 'Doorman', 'Parking', 'Pet Friendly'],
        yearBuilt: 2019
    },
    {
        id: '4',
        title: 'Contemporary Family Home',
        description:
            'Spacious family home with open floor plan, gourmet kitchen, and beautifully landscaped backyard with pool.',
        price: 1200000,
        location: 'Austin, TX',
        address: '2400 Lake Austin Blvd, Austin, TX 78703',
        bedrooms: 5,
        bathrooms: 4,
        area: 4200,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
        type: 'sale',
        propertyType: 'house',
        featured: true,
        amenities: ['Pool', 'Garden', 'Home Office', 'Smart Home', 'Garage'],
        yearBuilt: 2021
    },
    {
        id: '5',
        title: 'Chic Urban Condo',
        description:
            'Sleek and modern condo in a boutique building with stunning views and premium amenities.',
        price: 750000,
        location: 'San Francisco, CA',
        address: '888 Brannan Street, San Francisco, CA 94103',
        bedrooms: 2,
        bathrooms: 2,
        area: 1400,
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
        type: 'sale',
        propertyType: 'condo',
        featured: true,
        amenities: ['Gym', 'Rooftop Deck', 'Concierge', 'Bike Storage'],
        yearBuilt: 2017
    },
    {
        id: '6',
        title: 'Beachfront Paradise Villa',
        description:
            'Exclusive beachfront property with direct ocean access, private beach, and resort-style amenities.',
        price: 7500000,
        location: 'Malibu, CA',
        address: '21000 Pacific Coast Hwy, Malibu, CA 90265',
        bedrooms: 7,
        bathrooms: 6,
        area: 8500,
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
        type: 'sale',
        propertyType: 'villa',
        featured: true,
        amenities: ['Private Beach', 'Pool', 'Home Theater', 'Guest House', 'Spa'],
        yearBuilt: 2022
    },
    {
        id: '7',
        title: 'Historic Brownstone',
        description:
            'Beautifully restored brownstone with original details, modern updates, and a private garden.',
        price: 3200000,
        location: 'Brooklyn, NY',
        address: '150 Clinton Street, Brooklyn, NY 11201',
        bedrooms: 4,
        bathrooms: 3,
        area: 3800,
        image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=600&fit=crop',
        type: 'sale',
        propertyType: 'house',
        featured: false,
        amenities: ['Garden', 'Fireplace', 'Wine Cellar', 'Original Details'],
        yearBuilt: 1890
    },
    {
        id: '8',
        title: 'Skyline View Apartment',
        description:
            'Premium high-rise living with breathtaking city views and world-class building amenities.',
        price: 6500,
        location: 'Chicago, IL',
        address: '360 N Michigan Ave, Chicago, IL 60601',
        bedrooms: 3,
        bathrooms: 2,
        area: 2200,
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
        type: 'rent',
        propertyType: 'apartment',
        featured: false,
        amenities: ['Pool', 'Gym', 'Doorman', 'Parking', 'Business Center'],
        yearBuilt: 2016
    },
    {
        id: '9',
        title: 'Mountain Retreat Home',
        description:
            'Stunning mountain home with floor-to-ceiling windows, spa, and direct ski-in/ski-out access.',
        price: 5500000,
        location: 'Aspen, CO',
        address: '1000 Ute Avenue, Aspen, CO 81611',
        bedrooms: 5,
        bathrooms: 5,
        area: 5800,
        image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop',
        type: 'sale',
        propertyType: 'house',
        featured: false,
        amenities: ['Ski Access', 'Hot Tub', 'Fireplace', 'Home Theater', 'Heated Garage'],
        yearBuilt: 2019
    },
    {
        id: '10',
        title: 'Luxury Garden Apartment',
        description:
            'Ground floor luxury apartment with private garden access and high-end finishes throughout.',
        price: 4200,
        location: 'Boston, MA',
        address: '100 Beacon Street, Boston, MA 02116',
        bedrooms: 2,
        bathrooms: 2,
        area: 1600,
        image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop',
        type: 'rent',
        propertyType: 'apartment',
        featured: false,
        amenities: ['Private Garden', 'Gym', 'Concierge', 'Pet Friendly'],
        yearBuilt: 2015
    },
    {
        id: '11',
        title: 'Desert Modern Estate',
        description:
            'Architectural masterpiece in the desert with infinity pool, outdoor living spaces, and mountain views.',
        price: 3800000,
        location: 'Scottsdale, AZ',
        address: '8500 E Dynamite Blvd, Scottsdale, AZ 85266',
        bedrooms: 4,
        bathrooms: 4,
        area: 4800,
        image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop',
        type: 'sale',
        propertyType: 'house',
        featured: false,
        amenities: ['Pool', 'Outdoor Kitchen', 'Fire Pit', 'Golf Course View'],
        yearBuilt: 2020
    },
    {
        id: '12',
        title: 'Trendy Loft Space',
        description:
            'Industrial-chic loft with exposed brick, high ceilings, and open concept living in arts district.',
        price: 3500,
        location: 'Portland, OR',
        address: '500 NW 9th Ave, Portland, OR 97209',
        bedrooms: 1,
        bathrooms: 1,
        area: 1100,
        image: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&h=600&fit=crop',
        type: 'rent',
        propertyType: 'apartment',
        featured: false,
        amenities: ['Exposed Brick', 'High Ceilings', 'Rooftop Access', 'Bike Storage'],
        yearBuilt: 2010
    }
];

export const getFeaturedProperties = () => properties.filter((p) => p.featured);

export const getPropertyById = (id: string) => properties.find((p) => p.id === id);

export const formatPrice = (price: number, type: 'sale' | 'rent') => {
    if (type === 'rent') {
        return `$${price.toLocaleString()}/mo`;
    }
    
return `$${price.toLocaleString()}`;
};
