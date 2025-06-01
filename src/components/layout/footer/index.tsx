import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './accordion'
import { BackToTop } from './back-to-top'
import Link from 'next/link'
import { External } from '@/components/ui/icons-outline/external'
import { cn } from '@/libs/utils/cn'

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

const offices: { label: string; content: string }[] = [
  {
    label: 'Address',
    content: `32/170 Soi Lat Phrao 23 Chandrakasem,\nChatuchak, Bangkok 10900 THAILAND`,
  },
  {
    label: 'Open Hours',
    content: 'Mon-Fri 9:00-18:00',
  },
]

const socials: { label: string; href: string }[] = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/ixoradesignlimited',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/ixora_design_limited',
  },
  {
    label: 'Pinterest',
    href: '#',
  },
]

const Footer = () => {
  const footerLinkClassName = cn(
    'border-gray-light-1 typo-body-2 hover:border-blue hover:text-blue inline-flex items-center gap-x-2.5 border-b transition-colors focus-visible:ring-offset-0',
  )

  return (
    <footer
      className={cn(
        'flex shrink-0 flex-col px-4 pt-10 pb-2.5',
        'lg:min-h-[28.875rem] lg:px-10 lg:pt-[7.125rem] lg:pb-5',
      )}
    >
      <Accordion className="lg:flex-1">
        <AccordionItem value="email">
          <AccordionTrigger>EMAIL</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {emails.map((item) => (
                <BlockItem key={item.label} label={item.label}>
                  <Link href={`mailto:${item.email}`} className={footerLinkClassName}>
                    {item.email}
                  </Link>
                </BlockItem>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="offices">
          <AccordionTrigger>OFFICES</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {offices.map((item) => (
                <BlockItem key={item.label} label={item.label}>
                  <p>{item.content}</p>
                </BlockItem>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="social">
          <AccordionTrigger>SOCIAL</AccordionTrigger>
          <AccordionContent>
            <div className="inline-flex flex-col gap-y-1.25 pl-0.5">
              {socials.map((item) => (
                <Link key={item.label} href={item.href} className={footerLinkClassName} target="_blank">
                  {item.label}
                  <External />
                </Link>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="mt-auto flex shrink-0 justify-center max-lg:mt-[6.25rem]">
        <BackToTop />
      </div>
    </footer>
  )
}

const BlockItem = ({ label, children }: { label: string; children?: React.ReactElement }) => {
  return (
    <div className="flex gap-x-5">
      <div className="typo-body-2 text-blue w-20 shrink-0">{label}</div>
      <div className="typo-body-2 flex-1 whitespace-pre-line">{children}</div>
    </div>
  )
}

export { Footer }
