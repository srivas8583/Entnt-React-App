import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CompanyProvider } from './context/CompanyContext';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import CompanyList from './components/companies/CompanyList';
import CalendarView from './components/calendar/CalendarView';
import AnalyticsDashboard from './components/analytics/AnalyticsDashboard';

export default function App() {
  return (
    <CompanyProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="companies" element={<CompanyList />} />
            <Route path="calendar" element={<CalendarView />} />
            <Route path="analytics" element={<AnalyticsDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CompanyProvider>
  );
}