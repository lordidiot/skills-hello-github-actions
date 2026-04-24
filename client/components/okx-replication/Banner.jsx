import React from 'react'
import styles from './Banner.module.css'

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <h2 className={styles.title}>Start trading in minutes</h2>
            <p className={styles.desc}>
              Create your account, verify your identity, deposit funds, and start trading
              the world&apos;s most popular cryptocurrencies.
            </p>
          </div>

          <div className={styles.steps}>
            <Step number={1} label="Create account" />
            <div className={styles.connector} aria-hidden="true" />
            <Step number={2} label="Verify identity" />
            <div className={styles.connector} aria-hidden="true" />
            <Step number={3} label="Deposit & trade" />
          </div>

          <a href="#" className={styles.cta}>Get started now →</a>
        </div>
      </div>
    </section>
  )
}

function Step({ number, label }) {
  return (
    <div className={styles.step}>
      <div className={styles.stepNumber}>{number}</div>
      <span className={styles.stepLabel}>{label}</span>
    </div>
  )
}
