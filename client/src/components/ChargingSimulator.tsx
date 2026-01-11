import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Battery, Zap, TrendingUp, Play, Car } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// EV Models Database - 34 vehicles
const evModels = [
  { id: "tesla-model-3-sr", name: "Tesla Model 3 SR", capacity: 57 },
  { id: "tesla-model-3-lr", name: "Tesla Model 3 LR", capacity: 75 },
  { id: "tesla-model-y-sr", name: "Tesla Model Y SR", capacity: 60 },
  { id: "tesla-model-y-lr", name: "Tesla Model Y LR", capacity: 81 },
  { id: "tesla-model-s-lr", name: "Tesla Model S LR", capacity: 100 },
  { id: "tesla-model-s-plaid", name: "Tesla Model S Plaid", capacity: 100 },
  { id: "tesla-model-x-lr", name: "Tesla Model X LR", capacity: 100 },
  { id: "tesla-model-x-plaid", name: "Tesla Model X Plaid", capacity: 100 },
  { id: "chevy-bolt-ev", name: "Chevrolet Bolt EV", capacity: 66 },
  { id: "chevy-bolt-euv", name: "Chevrolet Bolt EUV", capacity: 66 },
  { id: "chevy-equinox-ev", name: "Chevrolet Equinox EV", capacity: 85 },
  { id: "ford-mache-sr", name: "Ford Mustang Mach-E SR", capacity: 70 },
  { id: "ford-mache-er", name: "Ford Mustang Mach-E ER", capacity: 91 },
  { id: "ford-f150-sr", name: "Ford F-150 Lightning SR", capacity: 98 },
  { id: "ford-f150-er", name: "Ford F-150 Lightning ER", capacity: 131 },
  { id: "rivian-r1t-std", name: "Rivian R1T Standard", capacity: 105 },
  { id: "rivian-r1t-large", name: "Rivian R1T Large", capacity: 135 },
  { id: "rivian-r1s-large", name: "Rivian R1S Large", capacity: 135 },
  { id: "rivian-r1s-max", name: "Rivian R1S Max", capacity: 149 },
  { id: "vw-id4-pro", name: "VW ID.4 Pro", capacity: 77 },
  { id: "vw-id4-pro-s", name: "VW ID.4 Pro S", capacity: 77 },
  { id: "hyundai-ioniq5-sr", name: "Hyundai Ioniq 5 SR", capacity: 58 },
  { id: "hyundai-ioniq5-lr", name: "Hyundai Ioniq 5 LR", capacity: 77 },
  { id: "hyundai-ioniq6-lr", name: "Hyundai Ioniq 6 LR", capacity: 77 },
  { id: "kia-ev6-sr", name: "Kia EV6 SR", capacity: 58 },
  { id: "kia-ev6-lr", name: "Kia EV6 LR", capacity: 77 },
  { id: "kia-ev9-lr", name: "Kia EV9 LR", capacity: 99 },
  { id: "bmw-i4-edrive35", name: "BMW i4 eDrive35", capacity: 66 },
  { id: "bmw-i4-edrive40", name: "BMW i4 eDrive40", capacity: 84 },
  { id: "bmw-ix-xdrive50", name: "BMW iX xDrive50", capacity: 112 },
  { id: "mercedes-eqs-450", name: "Mercedes EQS 450+", capacity: 108 },
  { id: "mercedes-eqe-350", name: "Mercedes EQE 350+", capacity: 90 },
  { id: "audi-etron-gt", name: "Audi e-tron GT", capacity: 93 },
  { id: "porsche-taycan", name: "Porsche Taycan 4S", capacity: 93 },
];

// Custom Slider Component
function CustomSlider({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  unit = "",
  color = "emerald",
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  color?: "emerald" | "blue" | "purple" | "amber";
}) {
  const percentage = ((value - min) / (max - min)) * 100;
  
  const colors = {
    emerald: "#10b981",
    blue: "#3b82f6",
    purple: "#8b5cf6",
    amber: "#f59e0b",
  };

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <label className="text-xs font-medium text-muted-foreground">
          {label}
        </label>
        <span className="text-sm font-semibold text-foreground">
          {typeof value === 'number' && !Number.isInteger(value) ? value.toFixed(1) : value}{unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, ${colors[color]} 0%, ${colors[color]} ${percentage}%, hsl(var(--muted)) ${percentage}%, hsl(var(--muted)) 100%)`,
          accentColor: colors[color],
        }}
      />
    </div>
  );
}

export function ChargingSimulator() {
  const [selectedModel, setSelectedModel] = useState("tesla-model-3-lr");
  const [chargerPower, setChargerPower] = useState(130);
  const [chargerEfficiency, setChargerEfficiency] = useState(85);
  const [arrivalSoc, setArrivalSoc] = useState(30);
  const [targetSoc, setTargetSoc] = useState(80);
  const [parkingTime, setParkingTime] = useState(3.1);
  const [isSimulating, setIsSimulating] = useState(false);

  const selectedVehicle = evModels.find((m) => m.id === selectedModel);
  const batteryCapacity = selectedVehicle?.capacity || 75;

  // Simulation calculations
  const simulationResults = useMemo(() => {
    const efficiency = chargerEfficiency / 100;
    const effectivePower = chargerPower * efficiency;
    
    const energyNeeded = batteryCapacity * ((targetSoc - arrivalSoc) / 100);
    const timeToTarget = energyNeeded / effectivePower;
    
    const energyAddedDuringParking = effectivePower * parkingTime;
    const socAddedDuringParking = (energyAddedDuringParking / batteryCapacity) * 100;
    const maxSocAchievable = Math.min(arrivalSoc + socAddedDuringParking, 100);
    const socAfterParking = Math.min(arrivalSoc + socAddedDuringParking, 100);
    const maxPower = chargerPower * 1.545;

    return {
      timeToTarget: Math.max(0, timeToTarget),
      socAfterParking,
      maxPower,
      maxSoc: maxSocAchievable,
    };
  }, [batteryCapacity, chargerPower, chargerEfficiency, arrivalSoc, targetSoc, parkingTime]);

  // Generate chart data for SoC profiles
  const socChartData = useMemo(() => {
    const data = [];
    const efficiency = chargerEfficiency / 100;
    const effectivePower = chargerPower * efficiency;
    const steps = 20;
    const timeStep = parkingTime / steps;

    for (let i = 0; i <= steps; i++) {
      const time = i * timeStep;
      const energyAdded = effectivePower * time;
      const socAdded = (energyAdded / batteryCapacity) * 100;
      
      let sessionSoc = arrivalSoc + socAdded;
      if (sessionSoc > 80) {
        const excessSoc = sessionSoc - 80;
        sessionSoc = 80 + excessSoc * 0.3;
      }
      sessionSoc = Math.min(sessionSoc, targetSoc);

      const parkingSoc = Math.min(arrivalSoc + socAdded, 100);
      const maxTheoreticalSoc = Math.min(arrivalSoc + socAdded * 1.05, 100);

      data.push({
        time: time.toFixed(2),
        sessionSoc: Math.min(sessionSoc, 100).toFixed(1),
        parkingSoc: parkingSoc.toFixed(1),
        maxTheoreticalSoc: maxTheoreticalSoc.toFixed(1),
      });
    }

    return data;
  }, [batteryCapacity, chargerPower, chargerEfficiency, arrivalSoc, targetSoc, parkingTime]);

  // Generate chart data for Power profiles
  const powerChartData = useMemo(() => {
    const data = [];
    const steps = 20;
    const timeStep = parkingTime / steps;
    const efficiency = chargerEfficiency / 100;
    const effectivePower = chargerPower * efficiency;

    for (let i = 0; i <= steps; i++) {
      const time = i * timeStep;
      const energyAdded = effectivePower * time;
      const currentSoc = arrivalSoc + (energyAdded / batteryCapacity) * 100;

      let power = chargerPower;
      if (currentSoc > 80) {
        const taperFactor = Math.max(0.1, 1 - (currentSoc - 80) * 0.04);
        power = chargerPower * taperFactor;
      } else if (currentSoc > 60) {
        const taperFactor = 1 - (currentSoc - 60) * 0.005;
        power = chargerPower * taperFactor;
      }

      power = power * (0.95 + Math.random() * 0.1);

      data.push({
        time: time.toFixed(2),
        power: Math.max(0, power).toFixed(1),
      });
    }

    return data;
  }, [batteryCapacity, chargerPower, chargerEfficiency, arrivalSoc, parkingTime]);

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => setIsSimulating(false), 500);
  };

  return (
    <section id="simulator" className="min-h-screen bg-background py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-1">
            <div className="p-1.5 bg-primary/10 rounded-lg">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-xl font-bold text-foreground">
              EV Charging Simulator
            </h1>
          </div>
          <p className="text-sm text-muted-foreground ml-9">
            Configure parameters and visualize charging profiles
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left Panel - Controls */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-4">
            {/* Model Selection Card */}
            <Card className="p-4 bg-card border-border">
              <div className="flex items-center gap-2 mb-3">
                <Car className="w-4 h-4 text-primary" />
                <h2 className="text-sm font-semibold text-foreground">Select EV Model</h2>
              </div>
              
              <Select value={selectedModel} onValueChange={setSelectedModel}>
                <SelectTrigger className="w-full h-9 text-sm bg-background border-border text-foreground">
                  <SelectValue placeholder="Select a model" />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border max-h-[250px]">
                  {evModels.map((model) => (
                    <SelectItem
                      key={model.id}
                      value={model.id}
                      className="text-sm"
                    >
                      {model.name} ({model.capacity} kWh)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-border text-xs">
                <span className="text-muted-foreground">
                  {evModels.length} models
                </span>
                <span className="font-medium text-primary">
                  {batteryCapacity} kWh
                </span>
              </div>
            </Card>

            {/* Charging Parameters Card */}
            <Card className="p-4 bg-card border-border">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-4 h-4 text-primary" />
                <h2 className="text-sm font-semibold text-foreground">Parameters</h2>
              </div>

              <div className="space-y-4">
                <CustomSlider
                  label="Charger Power"
                  value={chargerPower}
                  onChange={setChargerPower}
                  min={7}
                  max={350}
                  step={1}
                  unit=" kW"
                  color="emerald"
                />

                <CustomSlider
                  label="Charger Efficiency"
                  value={chargerEfficiency}
                  onChange={setChargerEfficiency}
                  min={70}
                  max={98}
                  step={1}
                  unit="%"
                  color="blue"
                />

                <CustomSlider
                  label="Arrival SoC"
                  value={arrivalSoc}
                  onChange={setArrivalSoc}
                  min={0}
                  max={95}
                  step={1}
                  unit="%"
                  color="amber"
                />

                <CustomSlider
                  label="Target Departure SoC"
                  value={targetSoc}
                  onChange={setTargetSoc}
                  min={10}
                  max={100}
                  step={1}
                  unit="%"
                  color="purple"
                />

                <CustomSlider
                  label="Parking Time"
                  value={parkingTime}
                  onChange={setParkingTime}
                  min={0.5}
                  max={12}
                  step={0.1}
                  unit="h"
                  color="emerald"
                />
              </div>

              <Button
                onClick={handleRunSimulation}
                className="w-full mt-4 h-9 text-sm font-medium"
                disabled={isSimulating}
              >
                <Play className="w-4 h-4 mr-1.5" />
                {isSimulating ? "Simulating..." : "Run Simulation"}
              </Button>
            </Card>
          </div>

          {/* Right Panel - Results & Charts */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-4">
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Card className="p-3 bg-card border-border">
                <div className="flex items-center gap-1.5 mb-1">
                  <Clock className="w-3.5 h-3.5 text-blue-500" />
                  <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">
                    Time to Target
                  </span>
                </div>
                <p className="text-xl font-bold text-foreground">
                  {simulationResults.timeToTarget.toFixed(2)}
                  <span className="text-sm font-normal text-muted-foreground ml-0.5">h</span>
                </p>
              </Card>

              <Card className="p-3 bg-card border-border">
                <div className="flex items-center gap-1.5 mb-1">
                  <Battery className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">
                    SoC After Parking
                  </span>
                </div>
                <p className="text-xl font-bold text-foreground">
                  {simulationResults.socAfterParking.toFixed(1)}
                  <span className="text-sm font-normal text-muted-foreground ml-0.5">%</span>
                </p>
              </Card>

              <Card className="p-3 bg-card border-border">
                <div className="flex items-center gap-1.5 mb-1">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">
                    Max Power
                  </span>
                </div>
                <p className="text-xl font-bold text-foreground">
                  {simulationResults.maxPower.toFixed(1)}
                  <span className="text-sm font-normal text-muted-foreground ml-0.5">kW</span>
                </p>
              </Card>

              <Card className="p-3 bg-card border-border">
                <div className="flex items-center gap-1.5 mb-1">
                  <TrendingUp className="w-3.5 h-3.5 text-purple-500" />
                  <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">
                    Max SoC
                  </span>
                </div>
                <p className="text-xl font-bold text-foreground">
                  {simulationResults.maxSoc.toFixed(1)}
                  <span className="text-sm font-normal text-muted-foreground ml-0.5">%</span>
                </p>
              </Card>
            </div>

            {/* SoC Charging Profiles Chart */}
            <Card className="p-4 bg-card border-border">
              <h3 className="text-sm font-semibold text-foreground mb-3">
                SoC Charging Profiles
              </h3>
              <div className="h-[220px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={socChartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis
                      dataKey="time"
                      tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
                      axisLine={{ stroke: 'hsl(var(--border))' }}
                      tickLine={{ stroke: 'hsl(var(--border))' }}
                    />
                    <YAxis
                      tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
                      domain={[0, 100]}
                      axisLine={{ stroke: 'hsl(var(--border))' }}
                      tickLine={{ stroke: 'hsl(var(--border))' }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--popover))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '6px',
                        fontSize: '12px',
                        color: 'hsl(var(--popover-foreground))',
                      }}
                    />
                    <Legend 
                      wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }}
                    />
                    <Line
                      type="monotone"
                      dataKey="sessionSoc"
                      name="Session SoC"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="parkingSoc"
                      name="Parking SoC"
                      stroke="#10b981"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="maxTheoreticalSoc"
                      name="Max Theoretical"
                      stroke="#ef4444"
                      strokeWidth={1.5}
                      strokeDasharray="4 4"
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* Charging Power Profiles Chart */}
            <Card className="p-4 bg-card border-border">
              <h3 className="text-sm font-semibold text-foreground mb-3">
                Charging Power Profile
              </h3>
              <div className="h-[220px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={powerChartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis
                      dataKey="time"
                      tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
                      axisLine={{ stroke: 'hsl(var(--border))' }}
                      tickLine={{ stroke: 'hsl(var(--border))' }}
                    />
                    <YAxis
                      tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
                      axisLine={{ stroke: 'hsl(var(--border))' }}
                      tickLine={{ stroke: 'hsl(var(--border))' }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--popover))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '6px',
                        fontSize: '12px',
                        color: 'hsl(var(--popover-foreground))',
                      }}
                    />
                    <Legend 
                      wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }}
                    />
                    <Line
                      type="monotone"
                      dataKey="power"
                      name="Charging Power (kW)"
                      stroke="#8b5cf6"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <style>{`
        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: hsl(var(--primary));
          cursor: pointer;
          border: 2px solid hsl(var(--background));
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        }
        input[type="range"]::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: hsl(var(--primary));
          cursor: pointer;
          border: 2px solid hsl(var(--background));
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  );
}
