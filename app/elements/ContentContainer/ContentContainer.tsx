import React from 'react'
import { ContentContainerProps } from './ContentContainer.props'
import styles from './ContentContainer.module.css';

const ContentContainer = ({ children }: ContentContainerProps) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default ContentContainer