import React, { useState } from 'react'
import styles from './Header.module.css'

const NAV_LINKS = [
  { label: 'Buy Crypto', href: '#' },
  { label: 'Markets', href: '#' },
  { label: 'Trade', href: '#', hasDropdown: true },
  { label: 'Earn', href: '#', hasDropdown: true },
  { label: 'Web3', href: '#', hasDropdown: true },
  { label: 'Institutional', href: '#' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Logo */}
        <a href="/" className={styles.logo} aria-label="OKX Home">
          <OKXLogo />
        </a>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className={styles.navLink}>
              {link.label}
              {link.hasDropdown && <ChevronDown />}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          <a href="#" className={styles.loginBtn}>Log in</a>
          <a href="#" className={styles.signupBtn}>Sign up</a>
          <a href="#" className={styles.downloadBtn}>Download</a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className={styles.mobileLink}>
              {link.label}
            </a>
          ))}
          <div className={styles.mobileActions}>
            <a href="#" className={styles.loginBtn}>Log in</a>
            <a href="#" className={styles.signupBtn}>Sign up</a>
          </div>
        </div>
      )}
    </header>
  )
}

function OKXLogo() {
  return (
    <svg width="64" height="20" viewBox="0 0 64 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <text x="0" y="17" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="20" fill="white" letterSpacing="-0.5">OKX</text>
    </svg>
  )
}

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
