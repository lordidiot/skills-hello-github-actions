import React, { useState } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>The World&apos;s Leading Crypto Platform</div>
          <h1 className={styles.heading}>
            Trade smarter.<br />
            Build faster.<br />
            <span className={styles.highlight}>Own more.</span>
          </h1>
          <p className={styles.subheading}>
            Join 50 million+ traders on the world&apos;s most powerful crypto exchange.
            Trade 300+ assets with institutional-grade security.
          </p>

          <form className={styles.signupForm} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.emailInput}
              aria-label="Email or phone number"
            />
            <button type="submit" className={styles.getStartedBtn}>
              Get started
            </button>
          </form>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>$20B+</span>
              <span className={styles.statLabel}>Daily volume</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statValue}>300+</span>
              <span className={styles.statLabel}>Crypto assets</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statValue}>50M+</span>
              <span className={styles.statLabel}>Users worldwide</span>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.tradingCard}>
            <div className={styles.cardHeader}>
              <span className={styles.pair}>BTC/USDT</span>
              <span className={styles.positiveChange}>+2.34%</span>
            </div>
            <div className={styles.price}>$67,432.50</div>
            <div className={styles.miniChart} aria-hidden="true">
              <svg viewBox="0 0 280 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 60 L35 45 L70 50 L105 30 L140 35 L175 20 L210 25 L245 10 L280 15"
                  stroke="#00c087"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0 60 L35 45 L70 50 L105 30 L140 35 L175 20 L210 25 L245 10 L280 15 L280 80 L0 80 Z"
                  fill="url(#greenGradient)"
                  opacity="0.15"
                />
                <defs>
                  <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00c087" />
                    <stop offset="100%" stopColor="#00c087" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className={styles.cardStats}>
              <div>
                <div className={styles.cardStatLabel}>24h High</div>
                <div className={styles.cardStatValue}>$68,120.00</div>
              </div>
              <div>
                <div className={styles.cardStatLabel}>24h Low</div>
                <div className={styles.cardStatValue}>$65,890.00</div>
              </div>
              <div>
                <div className={styles.cardStatLabel}>Volume</div>
                <div className={styles.cardStatValue}>$4.2B</div>
              </div>
            </div>
          </div>

          <div className={styles.floatingCard1}>
            <span className={styles.floatCoin}>ETH</span>
            <span className={styles.floatValue}>$3,521.40</span>
            <span className={styles.positiveChange}>+1.87%</span>
          </div>

          <div className={styles.floatingCard2}>
            <span className={styles.floatCoin}>SOL</span>
            <span className={styles.floatValue}>$182.30</span>
            <span className={styles.negativeChange}>-0.52%</span>
          </div>
        </div>
      </div>
    </section>
  )
}
