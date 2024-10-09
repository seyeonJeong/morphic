'use client'

import React from 'react'

const Project1 = () => {
  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full mt-16">
        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-600">Research</h1>
        <hr className="mb-8 border-gray-300" />

        {/* Major Areas of Research */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-500">Major Areas of Research</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
            <li className="mt-2">Bigdata Analytics and Privacy</li>
            <li className="mt-2">Artificial Intelligence, Deep Learning and Neural Networks</li>
            <li className="mt-2">Natural Language Processing</li>
            <li className="mt-2">Information Retrieval</li>
            <li className="mt-2">Computer Networks and Applications</li>
          </ul>
        </div>

        {/* Recent Research Topics */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-indigo-500">Recent Research Topics</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
            <li className="mt-4">
              <span className="font-bold text-indigo-600">Bigdata Analytics with Artificial Intelligence</span>
              <ol className="list-decimal ml-6 text-base text-gray-600 mt-2">
                <li>Business Bigdata Analytics</li>
                <li>Biomedical Bigdata Analytics</li>
                <li>Web and Social Bigdata Analytics</li>
                <li>Network Bigdata Analytics</li>
              </ol>
            </li>

            <li className="mt-4">
              <span className="font-bold text-indigo-600">Artificial Intelligence, Deep Learning and Neural Networks</span>
              <ol className="list-decimal ml-6 text-base text-gray-600 mt-2">
                <li>Language Model</li>
                <li>Vision Question and Answering</li>
                <li>Machine Translation</li>
                <li>Word Embedding</li>
              </ol>
            </li>

            <li className="mt-4">
              <span className="font-bold text-indigo-600">Information Retrieval with Artificial Intelligence</span>
              <ol className="list-decimal ml-6 text-base text-gray-600 mt-2">
                <li>Recommendation System</li>
              </ol>
            </li>

            <li className="mt-4">
              <span className="font-bold text-indigo-600">Time-series Forecasting - Health and Stock Data with Artificial Intelligence</span>
            </li>

            <li className="mt-4">
              <span className="font-bold text-indigo-600">Data Privacy with Artificial Intelligence</span>
            </li>

            <li className="mt-4">
              <span className="font-bold text-indigo-600">Infectious Disease Surveillance System</span>
            </li>

            <li className="mt-4">
              <span className="font-bold text-indigo-600">Location Based Service and System</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Project1
