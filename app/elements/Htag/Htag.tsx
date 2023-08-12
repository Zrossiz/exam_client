import React from 'react'
import { HtagProps } from './Htag.props'
import styles from './Htag.module.css'
import cn from 'classnames'

const Htag = ({ color = 'black', tag, children }: HtagProps) => {
  switch (tag) {
    case 'h1':
        return  <h1 className={styles.h1}>{children}</h1>;
    case 'h2':
        return <h2 className={cn(styles.h2, {
            [styles.black]: color == 'black',
            [styles.grey]: color == 'grey'
        })}>{children}</h2>
    default: 
        return <h2 className={cn(styles.h2, {
            [styles.black]: color == 'black',
            [styles.grey]: color == 'grey'
        })}>{children}</h2>
  }
}

export default Htag;