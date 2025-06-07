import { SocialShareProvider } from '@/components/modules/article-detail/sns-share-context'
import { SnsShareSticky } from '@/components/modules/article-detail/sns-share-sticky'
import { ProjectDetailContent } from '@/components/modules/project-detail/project-detail-content'

export default function ProjectDetail() {
  return (
    <SocialShareProvider>
      <div className="article-detail-container-large">
        <SnsShareSticky
          title="SARANSIRI PRACHAUTHIT 90"
          coverImage="/mockup/project.jpg"
          className="social-share-sticky"
        />
        <ProjectDetailContent />
      </div>
    </SocialShareProvider>
  )
}
