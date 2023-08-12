import React from 'react'
import Link from 'next/link'
import { LogoProps } from './Logo.props'
import styles from './Logo.module.css'

const Logo = ({ firstHalf, secondHalf }: LogoProps) => {
  return (
    <>
        <Link className={styles.link} href='/'>
            <span className={styles.firstHalf}>{firstHalf} </span>
            <span className={styles.secondHalf}>{secondHalf}</span>
        </Link>
    </>
  )
}

export default Logo