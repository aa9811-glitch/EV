import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState, useEffect } from "react";

export default function EVSE() {
  // State management
  const [mainBreaker, setMainBreaker] = useState("100");
  const [mainBreakerOther, setMainBreakerOther] = useState("");
  const [breakerSpaces, setBreakerSpaces] = useState("2");
  const [livingArea, setLivingArea] = useState("");
  const [livingAreaUnit, setLivingAreaUnit] = useState("sqft");
  const [hasRange, setHasRange] = useState("no");
  const [rangeKW, setRangeKW] = useState("");
  const [hasWaterHeater, setHasWaterHeater] = useState("no");
  const [waterHeaterKW, setWaterHeaterKW] = useState("");
  const [hasDryer, setHasDryer] = useState("no");
  const [dryerKW, setDryerKW] = useState("");
  const [hasAC, setHasAC] = useState("no");
  const [acAmps, setAcAmps] = useState("");
  const [hasHeating, setHasHeating] = useState("no");
  const [heatingKW, setHeatingKW] = useState("");
  const [hasOther, setHasOther] = useState("no");
  const [otherKW, setOtherKW] = useState("");
  const [chargerAmps, setChargerAmps] = useState("0");
  const [distance, setDistance] = useState("");
  const [structure, setStructure] = useState("no");

  // Calculation results
  const calculations = useCalculations({
    mainBreaker,
    mainBreakerOther,
    breakerSpaces,
    livingArea,
    livingAreaUnit,
    hasRange,
    rangeKW,
    hasWaterHeater,
    waterHeaterKW,
    hasDryer,
    dryerKW,
    hasAC,
    acAmps,
    hasHeating,
    heatingKW,
    hasOther,
    otherKW,
    chargerAmps,
    distance,
  });

  const handleReset = () => {
    setMainBreaker("100");
    setMainBreakerOther("");
    setBreakerSpaces("2");
    setLivingArea("");
    setLivingAreaUnit("sqft");
    setHasRange("no");
    setRangeKW("");
    setHasWaterHeater("no");
    setWaterHeaterKW("");
    setHasDryer("no");
    setDryerKW("");
    setHasAC("no");
    setAcAmps("");
    setHasHeating("no");
    setHeatingKW("");
    setHasOther("no");
    setOtherKW("");
    setChargerAmps("0");
    setDistance("");
    setStructure("no");
    window.scrollTo(0, 0);
  };

  const handleUnitChange = (newUnit: string) => {
    const area = parseFloat(livingArea) || 0;
    if (area === 0) {
      setLivingAreaUnit(newUnit);
      return;
    }
    if (newUnit === "m2") {
      setLivingArea((area / 10.7639).toFixed(1));
    } else {
      setLivingArea((area * 10.7639).toFixed(0));
    }
    setLivingAreaUnit(newUnit);
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-gray-900">
      <Navbar />
      <div className="pt-16">
        <div className="container mx-auto max-w-7xl p-4 sm:p-8 my-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <svg className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 text-center">EVSE Installation Assessment Tool</h1>
          </div>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-2 mb-10">A live calculator to evaluate your home's electrical readiness.</p>

          <div className="flex flex-col md:flex-row md:space-x-8">
            {/* Left Column: Form Sections */}
            <div className="md:w-2/3 space-y-8">
              {/* Section A: Electrical Service */}
              <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 border-b border-slate-200 dark:border-gray-700 pb-3 mb-6">Section A: Your Electrical Service</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">A1. Main breaker rating:</label>
                    <div className="space-y-2 mt-2">
                      {["60", "100", "150", "200"].map((value) => (
                        <label key={value} className="flex items-center p-3 rounded-md border border-slate-200 dark:border-gray-600 hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                          <input
                            type="radio"
                            name="mainBreaker"
                            value={value}
                            checked={mainBreaker === value}
                            onChange={(e) => setMainBreaker(e.target.value)}
                            className="h-4 w-4 text-blue-600 border-slate-300 dark:border-gray-600 focus:ring-blue-500"
                          />
                          <span className="ml-3 block text-sm font-medium text-gray-800 dark:text-gray-200">{value} A</span>
                        </label>
                      ))}
                      <label className="flex items-center p-3 rounded-md border border-slate-200 dark:border-gray-600 hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                        <input
                          type="radio"
                          name="mainBreaker"
                          value="other"
                          checked={mainBreaker === "other"}
                          onChange={(e) => setMainBreaker(e.target.value)}
                          className="h-4 w-4 text-blue-600 border-slate-300 dark:border-gray-600 focus:ring-blue-500"
                        />
                        <span className="ml-3 block text-sm font-medium text-gray-800 dark:text-gray-200">Other:</span>
                        <input
                          type="number"
                          value={mainBreakerOther}
                          onChange={(e) => setMainBreakerOther(e.target.value)}
                          disabled={mainBreaker !== "other"}
                          className="ml-2 w-24 rounded-md border-slate-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm disabled:opacity-50"
                          placeholder="Amps"
                        />
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Available breaker spaces:</label>
                    <div className="space-y-2 mt-2">
                      <label className="flex items-center p-3 rounded-md border border-slate-200 dark:border-gray-600 hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                        <input
                          type="radio"
                          name="breakerSpaces"
                          value="2"
                          checked={breakerSpaces === "2"}
                          onChange={(e) => setBreakerSpaces(e.target.value)}
                          className="h-4 w-4 text-blue-600 border-slate-300 dark:border-gray-600 focus:ring-blue-500"
                        />
                        <span className="ml-3 block text-sm font-medium text-gray-800 dark:text-gray-200">2+ spaces available</span>
                      </label>
                      <label className="flex items-center p-3 rounded-md border border-slate-200 dark:border-gray-600 hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                        <input
                          type="radio"
                          name="breakerSpaces"
                          value="0"
                          checked={breakerSpaces === "0"}
                          onChange={(e) => setBreakerSpaces(e.target.value)}
                          className="h-4 w-4 text-blue-600 border-slate-300 dark:border-gray-600 focus:ring-blue-500"
                        />
                        <span className="ml-3 block text-sm font-medium text-gray-800 dark:text-gray-200">Panel full</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section B: Home Loads */}
              <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 border-b border-slate-200 dark:border-gray-700 pb-3 mb-6">Section B: Existing Home Loads</h2>
                
                <div>
                  <label htmlFor="livingArea" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">B2. Approximate heated living area:</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      id="livingArea"
                      value={livingArea}
                      onChange={(e) => setLivingArea(e.target.value)}
                      className="w-full rounded-md border-slate-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm"
                      placeholder="e.g., 2000"
                    />
                    <select
                      value={livingAreaUnit}
                      onChange={(e) => handleUnitChange(e.target.value)}
                      className="w-32 flex-shrink-0 rounded-md border-slate-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm"
                    >
                      <option value="sqft">sq ft</option>
                      <option value="m2">m²</option>
                    </select>
                  </div>
                </div>

                <hr className="my-6 border-slate-200 dark:border-gray-700" />
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">B1. Major 240V Load Inventory</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Electric Range */}
                  <LoadItem
                    label="Electric range/cooktop:"
                    hasValue={hasRange}
                    setHasValue={setHasRange}
                    kwValue={rangeKW}
                    setKwValue={setRangeKW}
                    placeholder="e.g., 7.5"
                  />
                  {/* Water Heater */}
                  <LoadItem
                    label="Electric water heater:"
                    hasValue={hasWaterHeater}
                    setHasValue={setHasWaterHeater}
                    kwValue={waterHeaterKW}
                    setKwValue={setWaterHeaterKW}
                    placeholder="e.g., 4.5"
                  />
                  {/* Dryer */}
                  <LoadItem
                    label="Electric dryer:"
                    hasValue={hasDryer}
                    setHasValue={setHasDryer}
                    kwValue={dryerKW}
                    setKwValue={setDryerKW}
                    placeholder="e.g., 5"
                  />
                  {/* HVAC */}
                  <div className="p-4 border border-slate-200 dark:border-gray-600 rounded-lg">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">HVAC (AC or Heat Pump):</label>
                    <div className="flex flex-row space-x-4 mt-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="yes"
                          checked={hasAC === "yes"}
                          onChange={(e) => setHasAC(e.target.value)}
                          className="h-4 w-4 text-blue-600 border-slate-300 dark:border-gray-600 focus:ring-blue-500"
                        />
                        <span className="ml-3 block text-sm font-medium text-gray-800 dark:text-gray-200">Yes</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="no"
                          checked={hasAC === "no"}
                          onChange={(e) => setHasAC(e.target.value)}
                          className="h-4 w-4 text-blue-600 border-slate-300 dark:border-gray-600 focus:ring-blue-500"
                        />
                        <span className="ml-3 block text-sm font-medium text-gray-800 dark:text-gray-200">No</span>
                      </label>
                    </div>
                    {hasAC === "yes" && (
                      <div className="mt-3">
                        <label htmlFor="acAmps" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Rating (Amps at 240V):</label>
                        <input
                          type="number"
                          id="acAmps"
                          value={acAmps}
                          onChange={(e) => setAcAmps(e.target.value)}
                          className="w-full rounded-md border-slate-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm"
                          placeholder="e.g., 25"
                        />
                      </div>
                    )}
                  </div>
                  {/* Heating */}
                  <LoadItem
                    label="Electric heating (Baseboards):"
                    hasValue={hasHeating}
                    setHasValue={setHasHeating}
                    kwValue={heatingKW}
                    setKwValue={setHeatingKW}
                    placeholder="e.g., 15"
                    kwLabel="Total Rating (kW):"
                  />
                  {/* Other */}
                  <LoadItem
                    label="Other 240V Loads (Hot Tub, etc.):"
                    hasValue={hasOther}
                    setHasValue={setHasOther}
                    kwValue={otherKW}
                    setKwValue={setOtherKW}
                    placeholder="e.g., 8"
                    kwLabel="Total Rating (kW):"
                  />
                </div>
              </div>

              {/* Section C: EV Charger */}
              <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 border-b border-slate-200 dark:border-gray-700 pb-3 mb-6">Section C: EV Charger Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="chargerAmps" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Charger amperage rating:</label>
                    <select
                      id="chargerAmps"
                      value={chargerAmps}
                      onChange={(e) => setChargerAmps(e.target.value)}
                      className="w-full rounded-md border-slate-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm"
                    >
                      <option value="0">Select charger amps</option>
                      <option value="24">24 A (requires 30A breaker)</option>
                      <option value="32">32 A (requires 40A breaker)</option>
                      <option value="40">40 A (requires 50A breaker)</option>
                      <option value="48">48 A (requires 60A breaker)</option>
                      <option value="50">50 A (requires 70A breaker)</option>
                      <option value="60">60 A (requires 80A breaker)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="distance" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Distance from panel (feet):</label>
                    <input
                      type="number"
                      id="distance"
                      value={distance}
                      onChange={(e) => setDistance(e.target.value)}
                      className="w-full rounded-md border-slate-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm"
                      placeholder="e.g., 40"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Is location a separate structure (detached building)?</label>
                  <div className="space-y-2 mt-2">
                    <label className="flex items-center p-3 rounded-md border border-slate-200 dark:border-gray-600 hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                      <input
                        type="radio"
                        value="yes"
                        checked={structure === "yes"}
                        onChange={(e) => setStructure(e.target.value)}
                        className="h-4 w-4 text-blue-600 border-slate-300 dark:border-gray-600 focus:ring-blue-500"
                      />
                      <span className="ml-3 block text-sm font-medium text-gray-800 dark:text-gray-200">
                        Yes <span className="text-xs font-normal text-gray-500 dark:text-gray-400 ml-1">(requires 4-wire feeder + ground rod)</span>
                      </span>
                    </label>
                    <label className="flex items-center p-3 rounded-md border border-slate-200 dark:border-gray-600 hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                      <input
                        type="radio"
                        value="no"
                        checked={structure === "no"}
                        onChange={(e) => setStructure(e.target.value)}
                        className="h-4 w-4 text-blue-600 border-slate-300 dark:border-gray-600 focus:ring-blue-500"
                      />
                      <span className="ml-3 block text-sm font-medium text-gray-800 dark:text-gray-200">
                        No <span className="text-xs font-normal text-gray-500 dark:text-gray-400 ml-1">(attached or subpanel option)</span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Live Summary */}
            <div className="md:w-1/3 mt-8 md:mt-0">
              <div className="sticky top-8 space-y-6">
                <SummaryCards calculations={calculations} onReset={handleReset} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Helper component for load items
function LoadItem({
  label,
  hasValue,
  setHasValue,
  kwValue,
  setKwValue,
  placeholder,
  kwLabel = "Rating (kW):",
}: {
  label: string;
  hasValue: string;
  setHasValue: (v: string) => void;
  kwValue: string;
  setKwValue: (v: string) => void;
  placeholder: string;
  kwLabel?: string;
}) {
  return (
    <div className="p-4 border border-slate-200 dark:border-gray-600 rounded-lg">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>
      <div className="flex flex-row space-x-4 mt-2">
        <label className="flex items-center">
          <input
            type="radio"
            value="yes"
            checked={hasValue === "yes"}
            onChange={(e) => setHasValue(e.target.value)}
            className="h-4 w-4 text-blue-600 border-slate-300 dark:border-gray-600 focus:ring-blue-500"
          />
          <span className="ml-3 block text-sm font-medium text-gray-800 dark:text-gray-200">Yes</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            value="no"
            checked={hasValue === "no"}
            onChange={(e) => setHasValue(e.target.value)}
            className="h-4 w-4 text-blue-600 border-slate-300 dark:border-gray-600 focus:ring-blue-500"
          />
          <span className="ml-3 block text-sm font-medium text-gray-800 dark:text-gray-200">No (or Gas)</span>
        </label>
      </div>
      {hasValue === "yes" && (
        <div className="mt-3">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{kwLabel}</label>
          <input
            type="number"
            value={kwValue}
            onChange={(e) => setKwValue(e.target.value)}
            className="w-full rounded-md border-slate-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm"
            placeholder={placeholder}
          />
        </div>
      )}
    </div>
  );
}

// Summary cards component
function SummaryCards({ calculations, onReset }: { calculations: any; onReset: () => void }) {
  const { totalCalculatedAmps, mainBreakerAmps, maxSafeLoad, loadPercent, safePercent, isServiceAdequate, hasSpace, requiredBreaker, wireSize, needsEMSonPath, needsUpgradeOnPath, path } = calculations;

  return (
    <>
      {/* Panel Capacity */}
      <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Live Panel Capacity</h2>
        <div className="relative w-full h-8 bg-slate-200 dark:bg-gray-700 rounded-full overflow-hidden border border-slate-300 dark:border-gray-600">
          <div
            className={`absolute top-0 left-0 h-full transition-all duration-300 ${loadPercent > safePercent ? 'bg-red-600' : 'bg-blue-600'}`}
            style={{ width: `${Math.min(loadPercent, 100)}%` }}
          ></div>
          <div className="absolute top-0 h-full border-r-2 border-dashed border-red-500 transition-all duration-300" style={{ left: `${safePercent}%` }}>
            <span className="absolute -top-5 -right-px translate-x-1/2 text-xs font-medium text-red-600 dark:text-red-400">80%</span>
          </div>
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-700 dark:text-gray-300">
          <div>
            <span className="font-medium">Total Load:</span>
            <span className="font-bold"> {totalCalculatedAmps.toFixed(1)} A</span>
          </div>
          <div>
            <span className="font-medium">Service:</span>
            <span className="font-bold"> {mainBreakerAmps} A</span>
          </div>
        </div>
        <div className="text-center text-sm mt-1 text-red-600 dark:text-red-400 font-medium">
          Safe Limit: {maxSafeLoad.toFixed(1)} A
        </div>
      </div>

      {/* Recommendation */}
      <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Recommendation</h2>
        <ResultBox calculations={calculations} />
      </div>

      {/* Electrician Checklist */}
      <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">Checklist for Electrician</h2>
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Main Service:</span>
            <span className="font-semibold bg-slate-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-2 py-0.5 rounded">{mainBreakerAmps} A</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Existing Load:</span>
            <span className="font-semibold bg-slate-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-2 py-0.5 rounded">{calculations.existingLoadTotalA.toFixed(1)} A</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Charger:</span>
            <span className="font-semibold bg-slate-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-2 py-0.5 rounded">{parseFloat(calculations.chargerAmps) > 0 ? `${calculations.chargerAmps} A` : '...'}</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Total Load:</span>
            <span className="font-semibold bg-slate-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-2 py-0.5 rounded">{totalCalculatedAmps.toFixed(1)} A</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Req. Breaker:</span>
            <span className="font-semibold bg-slate-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-2 py-0.5 rounded">{requiredBreaker > 0 ? `${requiredBreaker} A` : '...'}</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Req. Wire:</span>
            <span className="font-semibold bg-slate-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-2 py-0.5 rounded">{wireSize} Copper</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">EMS Needed:</span>
            <span className={`font-semibold px-2 py-0.5 rounded ${needsEMSonPath ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300' : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'}`}>
              {needsEMSonPath ? 'Yes' : 'No'}
            </span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Upgrade Needed:</span>
            <span className={`font-semibold px-2 py-0.5 rounded ${needsUpgradeOnPath ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300' : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'}`}>
              {needsUpgradeOnPath ? 'Yes' : 'No'}
            </span>
          </li>
        </ul>
        <button
          type="button"
          onClick={onReset}
          className="w-full mt-6 px-6 py-2 font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all duration-300 transform hover:scale-105 bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"
        >
          Reset Form
        </button>
      </div>
    </>
  );
}

// Result box component
function ResultBox({ calculations }: { calculations: any }) {
  const { chargerAmps, hasSpace, isServiceAdequate, needsUpgradeOnPath, needsEMSonPath } = calculations;

  if (parseFloat(chargerAmps) === 0) {
    return (
      <div className="mt-4 p-4 rounded-lg border-2 flex items-start bg-blue-50 border-blue-300 text-blue-900">
        <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        <div>
          <strong>Select a Charger</strong>
          <p className="text-sm">Please select a charger amperage to see your recommendation.</p>
        </div>
      </div>
    );
  }

  if (!hasSpace) {
    return (
      <div className="mt-4 p-4 rounded-lg border-2 flex items-start bg-red-50 border-red-300 text-red-900">
        <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
        <div>
          <strong>Panel Space: FULL</strong>
          <p className="text-sm">Your panel is full. You will need a solution from your electrician, such as a subpanel or using tandem breakers.</p>
        </div>
      </div>
    );
  }

  if (isServiceAdequate) {
    return (
      <div className="mt-4 p-4 rounded-lg border-2 flex items-start bg-green-50 border-green-300 text-green-900">
        <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <div>
          <strong>Service Adequate</strong>
          <p className="text-sm">Your service has capacity for this charger. No upgrades or EMS are required.</p>
        </div>
      </div>
    );
  }

  if (needsUpgradeOnPath) {
    return (
      <div className="mt-4 p-4 rounded-lg border-2 flex items-start bg-red-50 border-red-300 text-red-900">
        <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
        <div>
          <strong>Service Upgrade Required</strong>
          <p className="text-sm">Your service is overloaded. An EMS is likely not enough; a service upgrade is recommended.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 p-4 rounded-lg border-2 flex items-start bg-red-50 border-red-300 text-red-900">
      <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
        <line x1="12" y1="9" x2="12" y2="13"></line>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
      </svg>
      <div>
        <strong>EMS Recommended</strong>
        <p className="text-sm">Your service is overloaded. An EMS is strongly recommended to avoid a costly service upgrade.</p>
      </div>
    </div>
  );
}

// Custom hook for calculations
function useCalculations(state: any) {
  const {
    mainBreaker,
    mainBreakerOther,
    breakerSpaces,
    livingArea,
    livingAreaUnit,
    hasRange,
    rangeKW,
    hasWaterHeater,
    waterHeaterKW,
    hasDryer,
    dryerKW,
    hasAC,
    acAmps,
    hasHeating,
    heatingKW,
    hasOther,
    otherKW,
    chargerAmps,
    distance,
  } = state;

  // Calculate existing home load
  let area = parseFloat(livingArea) || 0;
  if (livingAreaUnit === "sqft") {
    area = area / 10.7639;
  }

  let basicLoad = 0;
  if (area <= 90) {
    basicLoad = 5000;
  } else {
    const additionalIncrements = Math.ceil((area - 90) / 90);
    basicLoad = 5000 + additionalIncrements * 1000;
  }

  let heatingLoad = 0;
  if (hasHeating === "yes") {
    let heatingKWVal = (parseFloat(heatingKW) || 0) * 1000;
    heatingLoad = heatingKWVal > 10000 ? 10000 + (heatingKWVal - 10000) * 0.75 : heatingKWVal;
  }

  let coolingLoad = hasAC === "yes" ? (parseFloat(acAmps) || 0) * 240 : 0;
  let hvacLoad = Math.max(heatingLoad, coolingLoad);
  let rangeLoad = hasRange === "yes" ? Math.max((parseFloat(rangeKW) || 0) * 1000, 6000) : 0;

  let otherLoadTotalW = 0;
  if (hasWaterHeater === "yes") otherLoadTotalW += (parseFloat(waterHeaterKW) || 0) * 1000;
  if (hasDryer === "yes") otherLoadTotalW += (parseFloat(dryerKW) || 0) * 1000;
  if (hasOther === "yes") otherLoadTotalW += (parseFloat(otherKW) || 0) * 1000;
  let otherLoadDemand = otherLoadTotalW * 0.25;

  let existingLoadTotalW = basicLoad + hvacLoad + rangeLoad + otherLoadDemand;
  let existingLoadTotalA = existingLoadTotalW / 240;

  // Add charger
  let chargerAmpsNum = parseFloat(chargerAmps) || 0;

  // Total load
  let totalCalculatedAmps = existingLoadTotalA + chargerAmpsNum;

  // Panel capacity
  let mainBreakerAmps = mainBreaker === "other" ? (parseFloat(mainBreakerOther) || 100) : parseFloat(mainBreaker);
  let maxSafeLoad = mainBreakerAmps * 0.8;
  let isServiceAdequate = totalCalculatedAmps <= maxSafeLoad;

  // Breaker sizing
  const standardBreakers = [20, 30, 40, 50, 60, 70, 80, 100];
  let requiredAmps = chargerAmpsNum * 1.25;
  let requiredBreaker = standardBreakers.find((b) => b >= requiredAmps) || 0;

  // Wire sizing
  let distanceNum = parseFloat(distance) || 0;
  let wireSize = "...";
  if (chargerAmpsNum === 0) wireSize = "...";
  else if (chargerAmpsNum <= 24) {
    wireSize = distanceNum <= 100 ? "10 AWG" : "8 AWG";
  } else if (chargerAmpsNum <= 32) {
    if (distanceNum <= 50) wireSize = "8 AWG";
    else if (distanceNum <= 100) wireSize = "6 AWG";
    else wireSize = "4 AWG";
  } else if (chargerAmpsNum <= 40) {
    if (distanceNum <= 50) wireSize = "6 AWG";
    else if (distanceNum <= 100) wireSize = "4 AWG";
    else wireSize = "2 AWG";
  } else if (chargerAmpsNum <= 48) {
    if (distanceNum <= 50) wireSize = "6 AWG";
    else if (distanceNum <= 100) wireSize = "4 AWG";
    else wireSize = "2 AWG";
  } else {
    if (distanceNum <= 50) wireSize = "4 AWG";
    else if (distanceNum <= 100) wireSize = "2 AWG";
    else wireSize = "1 AWG";
  }

  // Feasibility
  let hasSpace = breakerSpaces === "2";
  let needsUpgrade = !isServiceAdequate;
  let needsEMSonPath = false;
  let needsUpgradeOnPath = false;

  let path = "";
  if (!needsUpgrade && hasSpace) {
    path = "No upgrades needed. Proceed with standard installation.";
  } else if (needsUpgrade && hasSpace) {
    path = "Install an EMS. This is the recommended path to avoid a service upgrade.";
    needsEMSonPath = true;
  } else if (!needsUpgrade && !hasSpace) {
    path = "Panel work required. Your service capacity is adequate, but your panel is full.";
  } else {
    path = "EMS + Panel Work required. You need both an EMS to manage the load AND panel work.";
    needsEMSonPath = true;
  }

  if (mainBreakerAmps <= 60 && needsUpgrade) {
    path = "Service Upgrade LIKELY REQUIRED. Your 60A service is likely too small.";
    needsEMSonPath = false;
    needsUpgradeOnPath = true;
  }

  let loadPercent = (totalCalculatedAmps / mainBreakerAmps) * 100;
  let safePercent = 80;

  return {
    existingLoadTotalA,
    chargerAmps: chargerAmpsNum,
    totalCalculatedAmps,
    mainBreakerAmps,
    maxSafeLoad,
    isServiceAdequate,
    requiredBreaker,
    wireSize,
    hasSpace,
    needsEMSonPath,
    needsUpgradeOnPath,
    path,
    loadPercent,
    safePercent,
  };
}

