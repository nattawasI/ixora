import { cn } from '@/libs/utils/cn'
import { BackToTop } from './back-to-top'
import { FooterAccordion } from './footer-accordion'
import { FooterLink } from './footer-link'
import { BlockItem } from './block-item'

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
  return (
    <footer
      id="contact"
      className={cn(
        'flex shrink-0 flex-col px-4.75 pt-10 pb-2.5',
        'lg:min-h-[28.875rem] lg:px-10 lg:pt-[7.125rem] lg:pb-5',
      )}
    >
      <FooterAccordion
        className="lg:flex-1"
        items={[
          {
            id: 'email',
            title: 'EMAIL',
            content: (
              <div className="space-y-2">
                {emails.map((item) => (
                  <BlockItem key={item.label} label={item.label}>
                    <FooterLink href={`mailto:${item.email}`}>{item.email}</FooterLink>
                  </BlockItem>
                ))}
              </div>
            ),
          },
          {
            id: 'offices',
            title: 'OFFICES',
            content: (
              <div className="space-y-2">
                {offices.map((item) => (
                  <BlockItem key={item.label} label={item.label}>
                    <p>{item.content}</p>
                  </BlockItem>
                ))}
              </div>
            ),
          },
          {
            id: 'social',
            title: 'SOCIAL',
            content: (
              <div className="inline-flex flex-col gap-y-1.25 pl-0.5">
                {socials.map((item) => (
                  <FooterLink key={item.label} href={item.href} isExternal>
                    {item.label}
                  </FooterLink>
                ))}
              </div>
            ),
          },
        ]}
      />
      <div className="mt-auto flex shrink-0 justify-center max-lg:mt-[6.25rem]">
        <BackToTop />
      </div>
    </footer>
  )
}

export { Footer }
