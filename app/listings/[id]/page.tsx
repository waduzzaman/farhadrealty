import PropertyDetailsPageWrapper from "@/components/PropertyDetailsWrapper";

// 1. Define the Interface strictly to match your component's needs
interface Property {
  id: string;
  title: string;
  price: string;
  priceNumeric: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  type: string;
  description: string;
  features: string[];
  gallery: string[];
}

// 2. Type the database as a Record of Property objects
const propertyDatabase: Record<string, Property> = {
  "1": {
    id: "1",
    title: "Modern Villa",
    price: "$1,250,000",
    priceNumeric: 1250000,
    location: "Oakville, ON",
    beds: 4,
    baths: 3,
    sqft: 2800,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c0c4b00?w=800&q=80",
    type: "For Sale",
    description: "Stunning modern villa with premium finishes, smart home technology, and breathtaking views.",
    features: ["Open Concept Living", "Designer Kitchen", "Smart Home Technology", "Heated Pool"],
    gallery: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"],
  },
  "2": {
    id: "2",
    title: "Penthouse",
    price: "$2,100,000",
    priceNumeric: 2100000,
    location: "Toronto, ON",
    beds: 3,
    baths: 3,
    sqft: 1950,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    type: "Featured",
    description: "Luxurious penthouse in the heart of downtown Toronto. Floor-to-ceiling windows with panoramic city views.",
    features: ["City Views", "Floor to Ceiling Windows", "Concierge Service", "Rooftop Access"],
    gallery: ["https://images.unsplash.com/photo-1600596542815-ffad4c0c4b00?w=800&q=80"],
  },
  "3": {
    id: "3",
    title: "Suburban Home",
    price: "$899,000",
    priceNumeric: 899000,
    location: "Richmond Hill, ON",
    beds: 5,
    baths: 4,
    sqft: 3200,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    type: "New Listing",
    description: "Spacious suburban home perfect for families. Located in a quiet neighborhood with excellent schools.",
    features: ["Large Backyard", "Quiet Neighborhood", "Modern Kitchen", "Garage"],
    gallery: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"],
  },
};

interface PropertyDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

// 3. The Main Route Component
export default async function PropertyDetailsRoute({
  params,
}: PropertyDetailsPageProps) {
  const { id } = await params;
  
  // TypeScript now understands that 'property' is either a Property object or undefined
  const property = propertyDatabase[id];

  if (!property) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h1 className="text-4xl font-black text-slate-900 mb-4">
          Property Not Found
        </h1>
        <p className="text-slate-600 mb-8">
          Sorry, we could not find the property you are looking for.
        </p>
      </div>
    );
  }

  // Passing the typed property to the wrapper will no longer throw a 'priceNumeric' error
  return <PropertyDetailsPageWrapper property={property} />;
}