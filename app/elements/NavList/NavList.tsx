import React from 'react'
import Span from '../Span/Span'
import styles from './NavList.module.css'
import Link from 'next/link'

const NavList = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link href="/exam">
          <Span color='white' weight={400}>
            Экзамен
          </Span>
        </Link>
      </li>
      <li className={styles.item}>
        <Link href="/library">
          <Span color='white' weight={400}>
            Библиотека
          </Span>
        </Link>
      </li>
      <li className={styles.item}>
        <Link href="/contacts">
          <Span color='white' weight={400}>
            Контакты
          </Span>
        </Link>
      </li>
    </ul>
  )
}

export default NavList