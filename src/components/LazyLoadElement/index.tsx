import React, { ReactNode, Suspense } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

interface RouterProps {
  element: ReactNode
  fallback?: ReactNode
  path?: string
}

function LazyLoadElement(props: RouterProps) {
  // for handle add configs to route sections

  const { element, ...rest } = props
  return (
      <Suspense fallback={props?.fallback || <div>Loading ...</div>}>{element}</Suspense>
  )
}

export default LazyLoadElement
