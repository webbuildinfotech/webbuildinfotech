import React from 'react'
import { PageMeta, toCanonicalUrl } from '@/components/pageMeta'
import { RoutePaths } from '@/routes/constant/path'
import CompanyAbout from '@/sections/Company/CompanyAbout'

const Company = () => {
  return (
    <div className="min-h-screen bg-background-light pt-24 dark:bg-background-dark sm:pt-28">
      <PageMeta
        title="About WebBuild Infotech | Our Company & Team"
        description="Learn about WebBuild Infotech—our mission, engineering culture, and how we partner with clients to ship reliable web and enterprise software."
        keywords="about WebBuild Infotech, web development company, IT agency India, software team"
        canonical={toCanonicalUrl(RoutePaths.COMPANY)}
      />
      <CompanyAbout />
    </div>
  )
}

export default Company
