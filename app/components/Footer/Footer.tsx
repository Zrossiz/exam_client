import React from 'react'
import Span from '../../elements/Span/Span'
import styles from './Footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Span weight={400} color='white'>
        Нашли ошибку, есть пожелания? Напишите <Link className={styles.link} href='/contacts'>нам!</Link>
      </Span>
      <div className={styles.agreement}>
        <Span weight={300} color='white'>
          <Link className={styles.link} href='/'>
            Пользовательское соглашение 
          </Link>
        </Span>
      </div>
    </footer>
  )
}

export default Footer