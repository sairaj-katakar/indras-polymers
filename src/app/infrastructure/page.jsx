
import InfrastructureHero from "@/sections/infrastructure/InfrastructureHero";
import FacilityOverview from "@/sections/infrastructure/FacilityOverview";
import WarehouseGallery from "@/sections/infrastructure/WarehouseGallery";
import StorageHandling from "@/sections/infrastructure/StorageHandling";
import InfrastructureCTA from "@/sections/infrastructure/InfrastructureCTA";

export default function InfrastructurePage() {
  return (
    <main>
      <InfrastructureHero />
      <FacilityOverview />
      <WarehouseGallery />
      <StorageHandling />
      <InfrastructureCTA />
    </main>
  );
}
