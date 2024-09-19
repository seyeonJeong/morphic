'use client'

import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { History as HistoryIcon } from 'lucide-react'
import { ChevronRight, Menu } from 'lucide-react'
import { Suspense } from 'react'
import { HistorySkeleton } from './history-skeleton'
import { useAppState } from '@/lib/utils/app-state'

type HistoryProps = {
  location: 'sidebar' | 'header'
  children?: React.ReactNode
}

export function History({ location, children }: HistoryProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const { isGenerating, setIsGenerating } = useAppState()

  const onOpenChange = (open: boolean) => {
    if (open) {
      startTransition(() => {
        router.refresh()
      })
    }
  }

  console.log(location)
  return (
    <Sheet onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn({
            'rounded-full text-foreground/30': location === 'sidebar'
          })}
          disabled={isGenerating}
        >
          <ChevronRight size={16} />
        </Button>
      </SheetTrigger>
      <SheetContent side = 'left' className="w-64 rounded-tr-xl rounded-br-xl fixed left-0 top-0 bottom-0">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-1 text-sm font-normal mb-2">
            <HistoryIcon size={14} />
            History
          </SheetTitle>
        </SheetHeader>
        <div className="my-2 h-full pb-12 md:pb-10">
          <Suspense fallback={<HistorySkeleton />}>{children}</Suspense>
        </div>
      </SheetContent>
    </Sheet>
  )
}
