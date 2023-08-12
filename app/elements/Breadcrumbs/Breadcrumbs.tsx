import React from 'react'
import { BreadcrumbsProps } from './Breadcrumbs.props'
import styles from './Breadcrumbs.module.css'

const Breadcrumbs = ({ children }: BreadcrumbsProps) => {
  return (
    <div className={styles.breadcrumbs}>{children}</div>
  )
}

export default Breadcrumbs