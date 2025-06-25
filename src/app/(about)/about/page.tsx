import { AboutPageContent } from '@/components/modules/about'

export default function AboutPage() {
  return <AboutPageContent licenseKey={process.env.FP_LICENSE_KEY as string} />
}
