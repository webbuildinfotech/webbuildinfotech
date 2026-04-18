import React from 'react'
import { PageMeta, toCanonicalUrl } from '@/components/pageMeta'
import { RoutePaths } from '@/routes/constant/path'

const Industries = () => {
  return (
    <div>
      <PageMeta
        title="Industries We Serve | Web & Software Solutions | WebBuild Infotech"
        description="WebBuild Infotech delivers tailored web and software solutions across industries. Discover how we help businesses digitize and scale."
        keywords="industry solutions, business web development, digital transformation, WebBuild Infotech"
        canonical={toCanonicalUrl(RoutePaths.INDUSTRIES)}
      />
      Industries
    </div>
  )
}

export default Industries