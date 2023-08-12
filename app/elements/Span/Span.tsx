import React from 'react'
import { SpanProps } from './Span.props'
import cn from 'classnames'
import styles from './Span.module.css'

const Text = ({ children, color="black", weight=400 }: SpanProps) => {
  return (
    <span className={cn(styles.text, {
        [styles.thin]: weight == 300,
        [styles.normal]: weight == 400,
        [styles.bold]: weight == 600,
        [styles.white]: color == "white"
    })}>
        {children}
    </span>
  )
}

export default Text