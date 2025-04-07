// pages/properties/[slug].jsx
import { PropertyDetailComplete } from "@/components/property-detail-complete";
import { properties } from "@/components/properties-list-fullwidth";

export async function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.title.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export default async function PropertyDetail({ params }) {
  const resolvedParams = await params;
  const property = properties.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-') === resolvedParams.slug
  );

  if (!property) {
    return <div className="text-center py-10 text-[#1d1d1f]">Property not found</div>;
  }

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <PropertyDetailComplete property={property} />
      </main>
    </div>
  );
}