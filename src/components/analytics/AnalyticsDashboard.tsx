import React from 'react';
import { BarChart, Activity, TrendingUp } from 'lucide-react';
import CommunicationChart from './CommunicationChart';
import EffectivenessMetrics from './EffectivenessMetrics';
import TrendAnalysis from './TrendAnalysis';

export default function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Communication Methods</h3>
            <BarChart className="h-5 w-5 text-gray-400" />
          </div>
          <CommunicationChart />
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Effectiveness</h3>
            <Activity className="h-5 w-5 text-gray-400" />
          </div>
          <EffectivenessMetrics />
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Trends</h3>
            <TrendingUp className="h-5 w-5 text-gray-400" />
          </div>
          <TrendAnalysis />
        </div>
      </div>
    </div>
  );
}