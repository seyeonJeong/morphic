'use client'

import React from 'react'

// Project1 Page Component
const Project1 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Research</h1>
        <hr />

        {/* 새로 추가할 내용 */}
        <h2 className="text-xl font-semibold text-left">Major Areas of Research</h2>
        <ul className="list-disc list-inside text-left">
          <li className="mt-2">Bigdata Analytics and Privacy</li>
          <li className="mt-2">Artificial Intelligence, Deep Learning and Neural Networks</li>
          <li className="mt-2">Natural Language Processing</li>
          <li className="mt-2">Information Retrieval</li>
          <li className="mt-2">Computer Networks and Applications</li>
        </ul>

        {/* 빈칸 */}
        <div className="mt-8"></div>

        {/* 새로 추가할 내용 */}
        <h2 className="text-xl font-semibold text-left">Recent Research Topics</h2>
        <ul className="list-disc list-inside text-left">
          <li className="mt-2">
            <span className='font-bold'>Bigdata Analytics with Artificial Intelligence</span>
            <ol className="list-decimal ml-6">
                <li>Business Bigdata Analytics</li>
                <li>Biomedical Bigdata Analytics</li>
                <li>Web and Social Bigdata Analytics</li>
                <li>Network Bigdata Analytics</li>
            </ol>
          </li>


        <li className="mt-2">
            <span className="font-bold">Artificial Intelligence, Deep Learning and Neural Networks</span>
            <ol className="list-decimal ml-6">
                <li>Language Model</li>
                <li>Vision Question and Answering</li>
                <li>Machine Translation</li>
                <li>Word Embedding</li>
            </ol>
        </li>

        <li className="mt-2">
            <span className="font-bold">Information Retrieval with Artificial Intelligence</span>
            <ol className="list-decimal ml-6">
                <li>Recommendation System</li>
            </ol>
        </li>


        <li className="mt-2">
            <span className="font-bold">Time-series Forecasting-Heath and Stock Data with Artificial Intelligence</span>
        </li>

        

        <li className="mt-2">
            <span className="font-bold">Data Privacy with Artificial Intelligence</span>
        </li>

        <li className="mt-2">
            <span className="font-bold">Infectious Disease Surveillance System</span>
        </li>

        <li className="mt-2">
            <span className="font-bold">Location Based Service and System</span>
        </li>

        </ul>  
      </div>
    </div>
  )
}

export default Project1
