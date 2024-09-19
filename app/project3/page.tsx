'use client';

import React from 'react';
import Image from 'next/image'
import map from '../../components/images/map.png'

const CovidStatsPage = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-4 mt-24">Number of COVID-19 cases reported to WHO</h1>
      <p>World, 28 days to 1 September 2024</p>

      {/* Tabs */}
      <div className="flex space-x-4 mt-12">
        <button className="bg-gray-100 py-2 px-4 rounded-lg">Last 7 days</button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Last 28 days</button>
        <button className="bg-gray-100 py-2 px-4 rounded-lg">Total cumulative</button>
      </div>

      {/* Case Count Section */}
      <div className="mt-12 flex justify-between">
        <div className="w-full">
          {/* Placeholder for the map */}
          <div className="bg-gray-300 w-100 h-100 flex items-center justify-center">
            <Image src={map} alt="Map" className="h-full object-cover" />
          </div>
        </div>
        <div className="ml-6">
          {/* Reported Cases */}
          <h2 className="text-4xl font-bold">249,849 <span className="text-red-500 text-xl">+29,406</span></h2>
          <p>increase on previous 28 days</p>
          <h3 className="text-xl font-semibold mt-4">Reported COVID-19 cases</h3>
          <p>World, 28 days to 1 September 2024</p>

          {/* Country case numbers */}
          <div className="mt-4">
            <div className="flex justify-between">
              <p>Country</p>
              <p>Cases</p>
            </div>
            <hr className="my-2"/>
            <div className="flex justify-between">
              <p>World</p>
              <p>250k</p>
            </div>
            <div className="flex justify-between">
              <p>Russian Federation</p>
              <p>62.2k</p>
            </div>
            <div className="flex justify-between">
              <p>Italy</p>
              <p>33.6k</p>
            </div>
            <button className="mt-2 text-blue-500">Show 80 more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CovidStatsPage;
