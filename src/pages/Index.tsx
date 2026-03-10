import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GroupTrips from "@/components/GroupTrips";
import Destinations from "@/components/Destinations";
import Cruises from "@/components/Cruises";
import Services from "@/components/Services";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <GroupTrips />
      <Destinations />
      <Cruises />
      <Services />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
