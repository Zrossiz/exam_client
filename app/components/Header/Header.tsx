import React from 'react'
import Logo from '../../elements/Logo/Logo'
import NavList from '../../elements/NavList/NavList'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo firstHalf="Допог" secondHalf="билеты 2023"/>
      <NavList />
    </header>
  )
}

export default Header