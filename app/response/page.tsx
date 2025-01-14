'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '../../components/ui/button'
import Textarea from 'react-textarea-autosize'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface Message {
  sender: 'user' | 'bot'
  text: string
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')

  const chatBoxRef = useRef<HTMLDivElement>(null)
  const searchParams = useSearchParams()
  const userQuery = searchParams.get('query')

  // ---------------------------
  // ?query=... 로 들어온 질문 처리
  // ---------------------------
  const prevQuery = useRef<string | null>(null)
  useEffect(() => {
    if (userQuery && userQuery !== prevQuery.current) {
      prevQuery.current = userQuery
      handleUserMessage(userQuery)
    }
  }, [userQuery])

  // ---------------------------
  // 메시지 추가 시 스크롤 자동 아래로
  // ---------------------------
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight
    }
  }, [messages])

  // ---------------------------
  // 1) 사용자 메시지 처리
  // ---------------------------
  const handleUserMessage = (text: string) => {
    if (!text.trim()) return

    // 사용자 메시지 추가
    setMessages(prev => [...prev, { sender: 'user', text }])
    // 봇 응답
    handleBotResponse(text)
  }

  // ---------------------------
  // 2) 봇 응답 처리
  // ---------------------------
  const handleBotResponse = async (userMessage: string) => {
    // 봇 메시지 추가: 처음엔 "Typing..." 상태
    setMessages(prev => [...prev, { sender: 'bot', text: 'Typing...' }])

    // 백엔드에서 실제 답변 가져오기
    const fullText = await callBackend(userMessage)

    let typed = ''
    let currentIndex = 0

    const intervalId = setInterval(() => {
      if (currentIndex >= fullText.length) {
        clearInterval(intervalId)
        return
      }

      // 첫 글자 출력 직전 (Typing... → '')
      if (currentIndex === 0) {
        typed = '' // "Typing..." 지우고 빈 문자열로
      }

      typed += fullText[currentIndex]

      setMessages(prev => {
        const lastIndex = prev.length - 1
        const lastMsg = prev[lastIndex]
        if (lastMsg.sender !== 'bot') return prev

        // 새로운 배열 복사
        const newArr = [...prev]
        newArr[lastIndex] = { sender: 'bot', text: typed }
        return newArr
      })

      currentIndex++
    }, 40)
  }

  // ---------------------------
  // 3) 백엔드 호출
  // ---------------------------
  const callBackend = async (userMessage: string): Promise<string> => {
    try {
      const res = await fetch('http://165.132.192.52:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
      })
      if (!res.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await res.json()
      return data.response ?? ''
    } catch (error) {
      console.error(error)
      return '서버 응답 중 오류가 발생했습니다.'
    }
  }

  // ---------------------------
  // 4) 폼 제출
  // ---------------------------
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.trim()) return
    handleUserMessage(input)
    setInput('')
  }

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="flex flex-col w-full max-w-3xl h-[80vh] bg-white rounded-lg shadow-lg overflow-hidden">
        {/* 채팅 내용 */}
        <div ref={chatBoxRef} className="flex-1 overflow-y-auto p-4">
          {messages.map((message, index) => {
            const isTyping =
              message.text === 'Typing...' && message.sender === 'bot'
            return (
              <div
                key={index}
                className={`mb-4 p-4 rounded-lg shadow ${
                  message.sender === 'user'
                    ? 'bg-blue-50 self-end'
                    : 'bg-gray-50 self-start'
                }`}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* 
                    Q: / A: 는 항상 같은 줄에 
                    Typing...인 경우에도 A:와 함께 표시
                  */}
                  {message.sender === 'user' ? (
                    <span>
                      <strong className="mr-2">Q:</strong>
                      {message.text}
                    </span>
                  ) : // bot일 때
                  isTyping ? (
                    // Typing... 인 경우
                    <span className="flex items-center gap-2">
                      <strong className="mr-1">A:</strong>
                      <div className="loader" />
                      <span>Typing...</span>
                    </span>
                  ) : (
                    // 실제 답변 문자열
                    <span>
                      <strong className="mr-1">A:</strong>
                      {message.text}
                    </span>
                  )}
                </motion.div>
              </div>
            )
          })}
        </div>

        {/* 입력 폼 */}
        <form
          onSubmit={handleSubmit}
          className="p-4 border-t flex items-center space-x-2 bg-white"
        >
          <Textarea
            rows={1}
            maxRows={4}
            placeholder="Ask a question..."
            value={input}
            onChange={e => setInput(e.target.value)}
            className="resize-none w-full p-2 rounded-lg border border-gray-300 focus:outline-none"
          />
          <Button
            type="submit"
            size="icon"
            variant="ghost"
            disabled={!input.trim()}
          >
            <ArrowRight size={20} />
          </Button>
        </form>
      </div>

      <style jsx>{`
        .loader {
          width: 16px;
          height: 16px;
          border: 2px solid #ccc;
          border-top-color: #333;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}
