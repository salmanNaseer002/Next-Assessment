import React from "react";

const KPIModal = ({ kpi }: { kpi: any }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">KPI Details</h2>
        <p className="mb-2">Business Questions: {kpi.businessQuestions}</p>
        <p className="mb-2">Metric IDs: {kpi.metricIds}</p>
        <p className="mb-2">Description: {kpi.description}</p>
        <p className="mb-2">Calculation: {kpi.calculation}</p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default KPIModal;
