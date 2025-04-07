import { ProductSection } from "@/components/product";
import PropertiesListFullwidth from "@/components/properties-list-fullwidth";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1">
                <ProductSection />
                <PropertiesListFullwidth />
            </main>
        </div>
    )
}