'use client';

import React from 'react';

const FullPublications = () => {
  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 py-12">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full mt-16">
        <h1 className="text-2xl font-bold text-center mb-6 text-indigo-600">Full Publications</h1> {/* 제목 크기 줄임 */}
        <hr className="mb-8 border-gray-300" />

        <h2 className="text-xl font-semibold mb-4 text-indigo-500">2024</h2> {/* 섹션 제목 크기 줄임 */}

        <ol className="list-decimal list-inside space-y-4 text-base text-gray-700 leading-relaxed"> {/* 전체 글자 크기 줄임 */}
          <li>
            <span className="font-semibold">Privacy-Preserving Generation and Publication of Synthetic Trajectory Microdata: A Comprehensive Survey</span>, Jong Wook Kim and Beakcheol Jang, <i>Journal of Network and Computer Applications (JNCA)</i>, October 2024. (<a href="#" className="text-indigo-600 underline">IF 2022: 8.3, JCR IF Top 3%</a>)
          </li>
          <li>
            <span className="font-semibold">Enhancing Machine-Generated Text Detection: Adversarial Fine-Tuning of Pre-Trained Language Models</span>, Dong Hee Lee and Beakcheol Jang, <i>IEEE Access</i>, May 2024. (<a href="#" className="text-indigo-600 underline">IF 2022: 3.9</a>)
          </li>
          <li>
            <span className="font-semibold">Enhancing Financial Sentiment Analysis Ability of Language Model via Targeted Numerical Change-Related Masking</span>, Hui Do Jung and Beakcheol Jang, <i>IEEE Access</i>, April 2024. (<a href="#" className="text-indigo-600 underline">IF 2022: 3.9</a>)
          </li>
          <li>
            <span className="font-semibold">Heterogeneous macroeconomic factors' effects on stocks across sizes, styles, and sectors in the South Korean market</span>, Chulyoung Cho, Jinseok Yang and Beakcheol Jang, <i>PLOS ONE</i>, April 2024. (<a href="#" className="text-indigo-600 underline">IF 2022: 3.7</a>)
          </li>
          <li>
            <span className="font-semibold">A survey on multimodal bidirectional machine learning translation of image and natural language processing</span>, Wongyung Nam and Beakcheol Jang, <i>Expert Systems with Applications</i>, January 2024. (<a href="#" className="text-indigo-600 underline">IF 2022: 8.5, JCR IF Top 10%</a>)
          </li>
          <li>
            <span className="font-semibold">An Approach on Improving the Recommender System: Predicting Movie Genres Based on Plot Summaries</span>, Gun Il Kim, Jae Heon Kim, Minkyoung Kim, Taekyoung Kwon, and Beakcheol Jang, <i>International Conference on Artificial Intelligence in Information and Communication (ICAIIC)</i>, February 2024.
          </li>
          <li>
            <span className="font-semibold">FTT: Fourier Transform based Transformer for Brain CT Report Generation</span>, Jieun Kim, Byeong Su Kim, Insung Choi, Zepa Yang, and Beakcheol Jang, <i>International Conference on Artificial Intelligence in Information and Communication (ICAIIC)</i>, February 2024.
          </li>
          <li>
            <span className="font-semibold">Comparative study of user reactions in OTT service platforms using text mining</span>, Soonchan Kwon, Jieun Kim, and Beakcheol Jang, <i>Journal of Internet Computing and Services (JICS)</i>, June 2024. (KCI)
          </li>
          <li>
            <span className="font-semibold">Optimizing Language Models through Dataset-Specific Post-Training: A Focus on Financial Sentiment Analysis</span>, Hui Do Jung, Jae Heon Kim, and Beakcheol Jang, <i>Journal of Internet Computing and Services (JICS)</i>, February 2024. (KCI)
          </li>
          <li>
            <span className="font-semibold">Zero-shot Korean Sentiment Analysis with Large Language Models: Comparison with Pre-trained Language Models</span>, Soonchan Kwon, Donghee Lee, and Beakcheol Jang, <i>Journal of The Korea Society of Computer and Information (JKSCI)</i>, February 2024. (KCI)
          </li>
        </ol>
      </div>
    </div>
  );
};

export default FullPublications;
