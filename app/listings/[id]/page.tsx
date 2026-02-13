"use client";

import PropertyDetailsPage from "@/components/PropertyDetails";
import { useRouter } from "next/navigation";

// Mock property data - in a real app, this would come from a database
const propertyDatabase = {
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
    description: "Stunning modern villa with premium finishes, smart home technology, and breathtaking views. This 4-bedroom residence features an open-concept living area, chef's kitchen, and heated pool.",
    features: [
      "Open Concept Living",
      "Designer Kitchen",
      "Smart Home Technology",
      "Heated Pool",
      "Wine Cellar",
      "Home Theater",
      "Gourmet Appliances",
      "Radiant Floor Heating",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    ],
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
    description:
      "Luxurious penthouse in the heart of downtown Toronto. Floor-to-ceiling windows with panoramic city views, premium appliances, and exclusive access to building amenities.",
    features: [
      "City Views",
      "Floor to Ceiling Windows",
      "Concierge Service",
      "Rooftop Access",
      "Premium Appliances",
      "In-Unit Laundry",
      "Private Balcony",
      "Valet Parking",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c0c4b00?w=800&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    ],
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
    description:
      "Spacious suburban home perfect for families. 5 bedrooms, 4 bathrooms, modern kitchen, and large backyard. Located in a quiet neighborhood with excellent schools.",
    features: [
      "Large Backyard",
      "Quiet Neighborhood",
      "Modern Kitchen",
      "Garage",
      "Master Suite",
      "Home Office",
      "Deck",
      "Finished Basement",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c0c4b00?w=800&q=80",
    ],
  },
};

interface PropertyDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PropertyDetailsRoute({
  params,
}: PropertyDetailsPageProps) {
  const { id } = await params;
  const property =
    propertyDatabase[id as keyof typeof propertyDatabase] || null;

  if (!property) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h1 className="text-4xl font-black text-slate-900 mb-4">
          Property Not Found
        </h1>
        <p className="text-slate-600 mb-8">
          Sorry, we couldn't find the property you're looking for.
        </p>
      </div>
    );
  }

  return (
    <PropertyDetailsPageWrapper property={property} />
  );
}

function PropertyDetailsPageWrapper({ property }: any) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return <PropertyDetailsPage property={property} onBack={handleBack} />;
}
