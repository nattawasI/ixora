import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './accordion'
import { BackToTop } from './back-to-top'
import Link from 'next/link'

const emails: { label: string; email: string }[] = [
  {
    label: 'New project',
    email: 'newbiz@ixoradesign.com',
  },
  {
    label: 'Press',
    email: 'press@ixoradesign.com',
  },
  {
    label: 'Exhibitions',
    email: 'exhibitions@ixoradesign.com',
  },
]

const Footer = () => {
  return (
    <footer className="flex min-h-[28.875rem] shrink-0 flex-col px-4 pt-10 lg:px-10 lg:pt-[7.125rem]">
      <Accordion className="lg:flex-1">
        <AccordionItem value="email">
          <AccordionTrigger>EMAIL</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {emails.map((item) => (
                <div className="flex gap-x-5" key={item.email}>
                  <div className="typo-body-2 text-gray w-24 shrink-0">{item.label}</div>
                  <div className="typo-body-2 flex-1">
                    <Link href={`mailto:${item.email}`} className="text-black hover:underline">
                      {item.email}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="offices">
          <AccordionTrigger>OFFICES</AccordionTrigger>
          <AccordionContent>Accordion Content</AccordionContent>
        </AccordionItem>
        <AccordionItem value="social">
          <AccordionTrigger>SOCIAL</AccordionTrigger>
          <AccordionContent>Accordion Content</AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="mt-auto flex shrink-0 justify-center">
        <BackToTop />
      </div>
    </footer>
  )
}

export { Footer }
