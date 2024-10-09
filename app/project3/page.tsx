'use client';

import React from 'react';
import Image from 'next/image';
import map from '../../components/images/map.png'; // 업로드하신 이미지를 사용해야 하므로 경로가 맞는지 확인하세요.

const CovidStatsPage = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-4 mt-24 text-center text-indigo-600">Number of COVID-19 cases reported to WHO</h1>
      <p className="text-center text-gray-600">World, 28 days to 1 September 2024</p>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mt-12">
        <button className="bg-gray-200 py-2 px-6 rounded-lg hover:bg-gray-300">Last 7 days</button>
        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">Last 28 days</button>
        <button className="bg-gray-200 py-2 px-6 rounded-lg hover:bg-gray-300">Total cumulative</button>
      </div>

      {/* Case Count Section */}
      <div className="mt-16 flex justify-between items-start">
        <div className="w-2/3 bg-white shadow-lg rounded-lg p-6">
          {/* Map */}
          <div className="w-full h-auto bg-gray-300 flex items-center justify-center rounded-lg overflow-hidden">
            <Image 
              src={map} 
              alt="Map" 
              width={800} // 원하는 이미지 크기로 설정
              height={500} 
              className="object-contain" // 이미지를 잘리지 않도록 설정
            />
          </div>
        </div>

        <div className="ml-6 w-1/3 bg-white shadow-lg rounded-lg p-6">
          {/* Reported Cases */}
          <h2 className="text-5xl font-bold">249,849 <span className="text-red-500 text-2xl">+29,406</span></h2>
          <p className="text-gray-600 mt-2">Increase on previous 28 days</p>
          <h3 className="text-xl font-semibold mt-6 text-indigo-500">Reported COVID-19 cases</h3>
          <p className="text-gray-600">World, 28 days to 1 September 2024</p>

          {/* Country case numbers */}
          <div className="mt-6">
            <div className="flex justify-between font-semibold text-indigo-600">
              <p>Country</p>
              <p>Cases</p>
            </div>
            <hr className="my-2 border-gray-300"/>
            <div className="flex justify-between text-gray-700">
              <p>World</p>
              <p>250k</p>
            </div>
            <div className="flex justify-between text-gray-700">
              <p>Russian Federation</p>
              <p>62.2k</p>
            </div>
            <div className="flex justify-between text-gray-700">
              <p>Italy</p>
              <p>33.6k</p>
            </div>
            <button className="mt-4 text-blue-600 font-semibold hover:underline">Show 80 more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CovidStatsPage;
