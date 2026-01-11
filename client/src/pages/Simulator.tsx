import { Navbar } from "@/components/Navbar";
import { ChargingSimulator } from "@/components/ChargingSimulator";
import { Footer } from "@/components/Footer";

export default function Simulator() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <ChargingSimulator />
      </div>
      <Footer />
    </div>
  );
}
