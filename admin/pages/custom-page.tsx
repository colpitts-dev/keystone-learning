import React from 'react'
import { PageContainer } from '@keystone-6/core/admin-ui/components'

export default function CustomPage() {
  return (
    <PageContainer header="Custom Page">
      <h1>This is a custom Admin UI Page</h1>
      <p>
        It can be accessed via the route <a href="/custom-page">/custom-page</a>
      </p>
    </PageContainer>
  )
}
