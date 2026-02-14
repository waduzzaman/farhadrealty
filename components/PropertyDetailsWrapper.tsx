"use client";

import { useRouter } from "next/navigation";
import PropertyDetails from "./PropertyDetails";

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

interface PropertyDetailsWrapperProps {
  property: Property;
}

export default function PropertyDetailsPageWrapper({
  property,
}: PropertyDetailsWrapperProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return <PropertyDetails property={property} onBack={handleBack} />;
}
