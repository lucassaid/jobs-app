import { Globe, Icon, LinkedinLogo } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { Job } from '../types/Job'

interface SocialLink {
  href: string
  Icon: Icon
}

const SocialLink = ({ href, Icon }: SocialLink) => (
  <a
      target="_blank"
      href={href}
      rel="noreferrer"
    >
      <Icon size={24} />
    </a>
)

export default function SocialLinks(job: Job) {
  const website = job.company.website ? (
    <SocialLink
      href={job.company.website}
      Icon={Globe}
    />
  ) : null

  const linkedin = job.linkedInCompanyId ? (
    <SocialLink
      href={`https://www.linkedin.com/company/${job.linkedInCompanyId}`}
      Icon={LinkedinLogo}
    />
  ) : null

  return (
    <div className="flex items-center gap-x-3">
      {website}
      {linkedin}
    </div>
  )
}