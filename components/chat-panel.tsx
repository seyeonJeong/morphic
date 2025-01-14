'use client'

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import Textarea from 'react-textarea-autosize'
import { ArrowRight } from 'lucide-react'
import { EmptyScreen } from './empty-screen'
import { cn } from '@/lib/utils'

interface ChatPanelProps {
  query?: string
}

export function ChatPanel({ query }: ChatPanelProps) {
  const [input, setInput] = useState('')
  const router = useRouter()
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const [showEmptyScreen, setShowEmptyScreen] = useState(false)
  const isFirstRender = useRef(true)

  async function handleQuerySubmit(query: string) {
    setInput(query)
    // 페이지 이동을 위해 query를 포함해 URL로 이동
    router.push(`/response?query=${encodeURIComponent(query)}`)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await handleQuerySubmit(input)
  }

  useEffect(() => {
    if (isFirstRender.current && query && query.trim().length > 0) {
      handleQuerySubmit(query)
      isFirstRender.current = false
    }
  }, [query])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div
      className="fixed bottom-8 left-0 right-0 top-10 mx-auto h-screen flex flex-col items-center justify-center"
    >
      <form onSubmit={handleSubmit} className="max-w-2xl w-full px-6">
        {/* 입력 필드 위에 추가할 텍스트 */}
        <div className="mb-2 text-left">
          <h1 className="text-2xl font-bold text-black slide-in-left-1">Welcome to</h1>
          <h2 className="text-3xl font-bold text-blue-500 slide-in-left-2"> 
            Artificial Intelligence
            Natural Language Processing &
            Bigdata Analytics Laboratory (ANDlab)
          </h2>
        </div>
        
        {/* 입력 필드에 위쪽 여백 더 추가 */}
        <div className="relative flex items-center w-full mt-10">
          <Textarea
            ref={inputRef}
            name="input"
            rows={1}
            maxRows={5}
            tabIndex={0}
            placeholder="Ask a question..."
            spellCheck={false}
            value={input}
            className="resize-none w-full min-h-12 rounded-lg bg-muted border border-input pl-4 pr-10 pt-3 pb-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'"
            onChange={e => {
              setInput(e.target.value)
              setShowEmptyScreen(e.target.value.length === 0)
            }}
            onKeyDown={e => {
              if (
                e.key === 'Enter' &&
                !e.shiftKey &&
                !e.nativeEvent.isComposing
              ) {
                if (input.trim().length === 0) {
                  e.preventDefault()
                  return
                }
                e.preventDefault()
                const textarea = e.target as HTMLTextAreaElement
                textarea.form?.requestSubmit()
              }
            }}
            onFocus={() => setShowEmptyScreen(true)}
            onBlur={() => setShowEmptyScreen(false)}
          />
          <Button
            type="submit"
            size={'icon'}
            variant={'ghost'}
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            disabled={input.length === 0}
          >
            <ArrowRight size={20} />
          </Button>
        </div>
        <EmptyScreen
          submitMessage={message => {
            setInput(message)
          }}
          className={cn(showEmptyScreen ? 'visible' : 'invisible')}
        />
      </form>
    </div>
  )
}