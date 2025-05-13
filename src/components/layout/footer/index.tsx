import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './accordion'
import { BackToTop } from './back-to-top'
import Link from 'next/link'
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
    'border-gray-light-1 typo-body-2 hover:border-blue inline-flex items-center gap-x-2.5 border-b transition-colors focus-visible:ring-offset-0',
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
            <div className="inline-flex flex-col gap-y-[0.313rem] pl-0.5">
              {socials.map((item) => (
                <Link key={item.label} href={item.href} className={footerLinkClassName} target="_blank">
                  {item.label}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-px"
                  >
                    <path
                      d="M9.49726 2.8167C9.49726 2.54056 9.2734 2.3167 8.99726 2.3167L4.49726 2.3167C4.22112 2.3167 3.99726 2.54056 3.99726 2.8167C3.99726 3.09285 4.22112 3.3167 4.49726 3.3167L8.49726 3.3167L8.49726 7.3167C8.49726 7.59285 8.72112 7.8167 8.99726 7.8167C9.2734 7.8167 9.49726 7.59285 9.49726 7.3167L9.49726 2.8167ZM8.99726 2.8167L8.64371 2.46315L2.27975 8.82711L2.6333 9.18066L2.98685 9.53422L9.35082 3.17026L8.99726 2.8167Z"
                      fill="black"
                    />
                  </svg>
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
