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
import { Menu } from 'lucide-react'
import { Suspense } from 'react'
import { HistorySkeleton } from './history-skeleton'
import { useAppState } from '@/lib/utils/app-state'

type Menuprops = {
  location: 'sidebar' | 'header'
  children?: React.ReactNode
}

export default function Menubar({ location, children }: Menuprops) {
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

  const handleMenuItemClick = (path: string) => {
    // 메뉴 항목 클릭 시 처리할 동작을 여기에 구현합니다.
    router.push(path)
  }

  return (
    <Sheet onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn({
            'rounded-full text-foreground/30': location === 'header'
          })}
          disabled={isGenerating}
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side='right' className="w-80 rounded-tl-xl rounded-bl-xl fixed right-0 top-0 bottom-0">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-1 text-sm font-normal mb-2">
            <Menu size={18} />
            Menu
          </SheetTitle>
        </SheetHeader>
        <div className="my-2 h-full pb-12 md:pb-10">
          <div className="flex flex-col space-y-2">
            <div
              className="cursor-pointer p-4 rounded-lg hover:bg-muted"
              onClick={() => handleMenuItemClick('/project1')}
            >
              <div className="text-sm font-medium truncate select-none">
                Research
              </div>
            </div>

            <div
              className="cursor-pointer p-4 rounded-lg hover:bg-muted"
              onClick={() => handleMenuItemClick('/project2')}
            >
              <div className="text-sm font-medium truncate select-none">
                Publication
              </div>
            </div>

            <div
              className="cursor-pointer p-4 rounded-lg hover:bg-muted"
              onClick={() => handleMenuItemClick('/project3')}
            >
              <div className="text-sm font-medium truncate select-none">
                COVID-19 Dashboard
              </div>
            </div>

            <div
              className="cursor-pointer p-4 rounded-lg hover:bg-muted"
              onClick={() => handleMenuItemClick('/project4')}
            >
              <div className="text-sm font-medium truncate select-none">
                LLM Powered Autonomous Agents
              </div>
            </div>


          </div>
          <Suspense fallback={<HistorySkeleton />}>{children}</Suspense>
        </div>
      </SheetContent>
    </Sheet>
  )
}
