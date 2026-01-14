import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState, useEffect } from "react";

type VehicleModel = {
  name: string;
  specs: Record<string, string>;
};

type VehicleMake = {
  name: string;
  models: Record<string, VehicleModel>;
};

type VehicleData = Record<string, VehicleMake>;

// Mock Database for Vehicle Specs
const vehicleData: VehicleData = {
  tesla: {
    name: "Tesla",
    models: {
      model3_rwd: {
        name: "Model 3 RWD (60 kWh)",
        specs: {
          "Battery Capacity": "60 kWh (usable)",
          "Onboard Charger": "11.5 kW (Max DC: 250 kW)",
          "Chemistry": "LFP (Li-Fe-PO)",
        },
      },
      modelY_lr: {
        name: "Model Y Long Range (81 kWh)",
        specs: {
          "Battery Capacity": "81 kWh (usable)",
          "Onboard Charger": "11.5 kW (Max DC: 250 kW)",
          "Chemistry": "NMC (Li-Ni-Mn-Co)",
        },
      },
      models_plaid: {
        name: "Model S Plaid (100 kWh)",
        specs: {
          "Battery Capacity": "100 kWh (usable)",
          "Onboard Charger": "11.5 kW (Max DC: 250 kW)",
          "Chemistry": "NCA (Li-Ni-Co-Al)",
        },
      },
    },
  },
  ford: {
    name: "Ford",
    models: {
      mache_er: {
        name: "Mustang Mach-E (Ext. Range)",
        specs: {
          "Battery Capacity": "91 kWh (usable)",
          "Onboard Charger": "10.5 kW (Max DC: 150 kW)",
          "Chemistry": "NMC (Li-Ni-Mn-Co)",
        },
      },
      f150_lr: {
        name: "F-150 Lightning (Ext. Range)",
        specs: {
          "Battery Capacity": "131 kWh (usable)",
          "Onboard Charger": "19.2 kW",
          "Chemistry": "NMC (Li-Ni-Mn-Co)",
        },
      },
    },
  },
  rivian: {
    name: "Rivian",
    models: {
      r1t_large: {
        name: "R1T (Large Pack)",
        specs: {
          "Battery Capacity": "135 kWh (usable)",
          "Onboard Charger": "11.5 kW (Max DC: 220 kW)",
          "Chemistry": "NCA (Li-Ni-Co-Al)",
        },
      },
      r1s_max: {
        name: "R1S (Max Pack)",
        specs: {
          "Battery Capacity": "149 kWh (usable)",
          "Onboard Charger": "11.5 kW (Max DC: 220 kW)",
          "Chemistry": "NCA (Li-Ni-Co-Al)",
        },
      },
    },
  },
  volkswagen: {
    name: "Volkswagen",
    models: {
      id4_pro: {
        name: "ID.4 Pro (77 kWh)",
        specs: {
          "Battery Capacity": "77 kWh (usable)",
          "Onboard Charger": "11 kW (Max DC: 170 kW)",
          "Chemistry": "NMC (Li-Ni-Mn-Co)",
        },
      },
    },
  },
};

export default function VehicleSelection() {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [chargerLevel, setChargerLevel] = useState("dcfast");
  const [ambTemp, setAmbTemp] = useState(22);
  const [startSoc, setStartSoc] = useState(10);
  const [targetSoc, setTargetSoc] = useState(80);

  // Generate years array
  const currentYear = new Date().getFullYear() + 1;
  const years = Array.from({ length: currentYear - 2010 + 1 }, (_, i) => currentYear - i);

  // Set default year on mount
  useEffect(() => {
    setSelectedYear(String(currentYear - 1));
  }, []);

  // Get available models for selected make
  const availableModels = selectedMake ? vehicleData[selectedMake]?.models ?? null : null;

  // Get vehicle summary
  const getVehicleSummary = () => {
    if (selectedMake && selectedModel) {
      const make = vehicleData[selectedMake];
      const model = make?.models[selectedModel];
      if (model?.specs) {
        return Object.entries(model.specs)
          .map(([key, value]) => `${key.padEnd(30)}: ${value}`)
          .join("\n");
      }
    }
    return "Select a vehicle model to see its specifications.";
  };

  const handleClear = () => {
    setSelectedMake("");
    setSelectedModel("");
    setSelectedYear(String(currentYear - 1));
    setChargerLevel("dcfast");
    setAmbTemp(22);
    setStartSoc(10);
    setTargetSoc(80);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16 bg-gray-100 dark:bg-gray-900 flex items-center justify-center min-h-screen p-4">
        {/* Main UI Card */}
        <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-xl w-full max-w-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
          {/* Header */}
          <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-xl font-semibold flex items-center space-x-3">
              <span className="text-2xl">🚗</span>
              <span>VEHICLE SELECTION</span>
            </h1>
          </div>

          {/* Form Area */}
          <div className="p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Vehicle Make */}
              <div>
                <label htmlFor="vehicle-make" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Vehicle Make <span className="text-red-500">*</span>
                </label>
                <select
                  id="vehicle-make"
                  value={selectedMake}
                  onChange={(e) => {
                    setSelectedMake(e.target.value);
                    setSelectedModel("");
                  }}
                  className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-base shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400"
                >
                  <option value="">Select a make...</option>
                  {Object.entries(vehicleData).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Model/Variant */}
              <div>
                <label htmlFor="vehicle-model" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Model/Variant <span className="text-red-500">*</span>
                </label>
                <select
                  id="vehicle-model"
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  disabled={!selectedMake}
                  className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-base shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 disabled:opacity-50"
                >
                  <option value="">{selectedMake ? "Select a model..." : "Select a make first..."}</option>
                  {availableModels &&
                    Object.entries(availableModels).map(([key, value]) => (
                      <option key={key} value={key}>
                        {value.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            {/* Production Year */}
            <div>
              <label htmlFor="vehicle-year" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Production Year
              </label>
              <select
                id="vehicle-year"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full md:w-1/3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-base shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Divider & Buttons */}
            <hr className="border-gray-200 dark:border-gray-600" />
            <div className="flex items-center space-x-4">
              <button
                onClick={() => {}}
                className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors"
              >
                Show Specifications
              </button>
              <button className="px-5 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100 rounded-lg font-medium shadow-sm hover:bg-gray-300 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors">
                Custom Entry
              </button>
            </div>
            <hr className="border-gray-200 dark:border-gray-600" />

            {/* Vehicle Summary */}
            <div>
              <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center space-x-2">
                <span className="text-lg">📋</span>
                <span>Vehicle Summary (Auto-populated):</span>
              </h2>
              <div className="bg-gray-100 dark:bg-gray-900/50 rounded-lg border border-gray-300 dark:border-gray-700 p-4 min-h-[180px]">
                <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono">
                  {getVehicleSummary()}
                </pre>
              </div>
            </div>

            {/* CHARGER SELECTION SECTION */}
            <hr className="border-gray-200 dark:border-gray-600" />
            <div>
              <h2 className="text-xl font-semibold flex items-center space-x-3 text-gray-900 dark:text-gray-100">
                <span className="text-2xl">⚡</span>
                <span>CHARGER SELECTION</span>
              </h2>
            </div>

            {/* Charging Level */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Charging Level <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-3">
                {[
                  { level: "level1", label: "Level 1", sublabel: "120V / 1.4kW" },
                  { level: "level2", label: "Level 2", sublabel: "240V / 11.5kW" },
                  { level: "dcfast", label: "DC Fast", sublabel: "50-350kW" },
                ].map((item) => (
                  <button
                    key={item.level}
                    type="button"
                    onClick={() => setChargerLevel(item.level)}
                    className={`flex flex-col items-center justify-center p-3 px-4 border-2 rounded-lg cursor-pointer transition-all duration-200 min-w-[110px] ${
                      chargerLevel === item.level
                        ? "bg-blue-600 border-blue-600 text-white dark:bg-blue-500 dark:border-blue-500"
                        : "border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    <span className="font-semibold">{item.label}</span>
                    <span className="text-xs">{item.sublabel}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Level 2 Options */}
            {chargerLevel === "level2" && (
              <div className="p-4 bg-gray-100 dark:bg-gray-900/50 rounded-lg border border-gray-300 dark:border-gray-700 space-y-4">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Level 2 Options</h3>
                <div>
                  <label htmlFor="l2-power" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Power Rating <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <select
                      id="l2-power"
                      className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-base shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400"
                    >
                      <option value="3.3">3.3 kW</option>
                      <option value="7.7">7.7 kW</option>
                      <option value="9.6">9.6 kW</option>
                      <option value="11.5">11.5 kW (48A @ 240V)</option>
                    </select>
                    <span className="text-sm text-blue-500 dark:text-blue-400 whitespace-nowrap">◄ Recommend</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Charger Cooling</label>
                  <div className="flex items-center space-x-6">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="l2-cooling"
                        className="form-radio text-blue-600 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-blue-500"
                      />
                      <span className="text-sm">Passive (no fan)</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="l2-cooling"
                        defaultChecked
                        className="form-radio text-blue-600 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-blue-500"
                      />
                      <span className="text-sm">Active (fan/liquid)</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* DC Fast Options */}
            {chargerLevel === "dcfast" && (
              <div className="p-4 bg-gray-100 dark:bg-gray-900/50 rounded-lg border border-gray-300 dark:border-gray-700 space-y-4">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">DC Fast Options</h3>
                <div>
                  <label htmlFor="dc-power" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Power Rating <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="dc-power"
                    className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-base shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400"
                  >
                    <option value="50">50 kW</option>
                    <option value="100">100 kW</option>
                    <option value="150">150 kW (CCS2)</option>
                    <option value="200">200 kW</option>
                    <option value="250">250 kW</option>
                    <option value="350">350 kW</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Connector Type</label>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {[
                      { value: "ccs1", label: "CCS1 (US)" },
                      { value: "ccs2", label: "CCS2 (EU)", checked: true },
                      { value: "nacs", label: "NACS (Tesla)" },
                      { value: "chademo", label: "CHAdeMO" },
                    ].map((connector) => (
                      <label key={connector.value} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="dc-connector"
                          defaultChecked={connector.checked}
                          className="form-checkbox text-blue-600 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-blue-500 rounded"
                        />
                        <span className="text-sm">{connector.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ENVIRONMENTAL CONDITIONS SECTION */}
            <hr className="border-gray-200 dark:border-gray-600" />
            <div>
              <h2 className="text-xl font-semibold flex items-center space-x-3 text-gray-900 dark:text-gray-100">
                <span className="text-2xl">🌡️</span>
                <span>ENVIRONMENTAL CONDITIONS</span>
              </h2>
            </div>

            {/* Ambient Temperature Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label htmlFor="amb-temp" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Ambient Temperature:
                </label>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Value: {ambTemp} °C</span>
              </div>
              <input
                type="range"
                id="amb-temp"
                min="-10"
                max="50"
                value={ambTemp}
                onChange={(e) => setAmbTemp(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>-10°C</span>
                <span className="text-yellow-600 dark:text-yellow-400">⚠️ Winter mode (5°C)</span>
                <span>50°C</span>
              </div>
            </div>

            {/* SIMULATION PARAMETERS SECTION */}
            <hr className="border-gray-200 dark:border-gray-600" />
            <div>
              <h2 className="text-xl font-semibold flex items-center space-x-3 text-gray-900 dark:text-gray-100">
                <span className="text-2xl">⚙️</span>
                <span>SIMULATION PARAMETERS</span>
              </h2>
            </div>

            {/* Starting SoC Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label htmlFor="start-soc" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Starting SoC:
                </label>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Value: {startSoc} %</span>
              </div>
              <input
                type="range"
                id="start-soc"
                min="0"
                max="100"
                value={startSoc}
                onChange={(e) => setStartSoc(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>0%</span>
                <span>(If &gt;80%, shows CV phase only)</span>
                <span>100%</span>
              </div>
            </div>

            {/* Target SoC Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label htmlFor="target-soc" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Target SoC:
                </label>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Value: {targetSoc} %</span>
              </div>
              <input
                type="range"
                id="target-soc"
                min="0"
                max="100"
                value={targetSoc}
                onChange={(e) => setTargetSoc(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>0%</span>
                <span className="text-yellow-600 dark:text-yellow-400">⚠️ To 100% may add 40-50% time</span>
                <span>100%</span>
              </div>
            </div>

            {/* Time Resolution */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Time Resolution</label>
              <div className="flex items-center space-x-6">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="time-resolution"
                    defaultChecked
                    className="form-radio text-blue-600 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-blue-500"
                  />
                  <span className="text-sm">Standard (1 min steps)</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="time-resolution"
                    className="form-radio text-blue-600 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-blue-500"
                  />
                  <span className="text-sm">High (10 sec)</span>
                </label>
              </div>
            </div>

            {/* FINAL ACTION BUTTONS */}
            <hr className="border-gray-200 dark:border-gray-600" />
            <div className="flex flex-wrap justify-end gap-3">
              <button
                onClick={handleClear}
                className="px-5 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100 rounded-lg font-medium shadow-sm hover:bg-gray-300 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors"
              >
                CLEAR
              </button>
              <button className="px-5 py-2 bg-green-600 text-white rounded-lg font-medium shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors">
                SAVE CONFIG
              </button>
              <button className="px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors text-base">
                START SIMULATION
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
