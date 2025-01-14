'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { useEffect } from 'react'

export default function ResponsePage() {
  const searchParams = useSearchParams()
  const userQuery = searchParams.get('query') || 'No query provided'
  const answer = searchParams.get('answer') || 'No answer available'
  const router = useRouter()

  const handleBack = () => {
    router.push('/')
  }

  useEffect(() => {
    // 입력 필드로 자동 스크롤링
    window.scrollTo(0, document.body.scrollHeight)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10">
      <div className="max-w-2xl w-full bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <h1 className="text-2xl font-bold mb-2">Your Question</h1>
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="text-lg text-gray-800">{userQuery}</p>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">AI Response</h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-lg text-gray-600">{answer}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="text-blue-500 font-semibold hover:text-blue-700"
            onClick={handleBack}
          >
            Ask Another Question
          </button>
        </div>
      </div>
    </div>
  )
}
