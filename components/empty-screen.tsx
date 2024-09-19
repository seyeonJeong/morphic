import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: "What's today's COVID-19 case count?",
    message: "What's today's COVID-19 case count?"
  },
  {
    heading: 'What is the current risk level of COVID-19?',
    message: 'What is the current risk level of COVID-19?'
  },
  {
    heading: 'How do variants of viruses like COVID-19 affect the efficacy of treatments and vaccines?',
    message: 'How do variants of viruses like COVID-19 affect the efficacy of treatments and vaccines?'
    
  },
  {
    heading: 'How do healthcare systems prepare for and manage pandemics like COVID-19 or influenza outbreaks?',
    message: 'How do healthcare systems prepare for and manage pandemics like COVID-19 or influenza outbreaks?'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
