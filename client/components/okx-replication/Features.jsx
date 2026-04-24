import React from 'react'
import styles from './Features.module.css'

const FEATURES = [
  {
    icon: <ShieldIcon />,
    title: 'Industry-leading security',
    description: 'Your assets are protected by multi-layer security including cold wallet storage, 2FA, and anti-phishing systems.',
  },
  {
    icon: <SpeedIcon />,
    title: 'Ultra-low latency',
    description: 'Execute trades with sub-millisecond order matching engine built for professional traders and institutions.',
  },
  {
    icon: <ChartIcon />,
    title: '300+ trading pairs',
    description: 'Access spot, futures, options, and perpetual markets across hundreds of digital assets with tight spreads.',
  },
  {
    icon: <WalletIcon />,
    title: 'Web3 & DeFi ready',
    description: 'Connect your OKX wallet to access DEXs, NFT marketplaces, and thousands of dApps across 80+ chains.',
  },
]

function ShieldIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2L4 6v6c0 5.5 3.6 10.7 8 12 4.4-1.3 8-6.5 8-12V6L12 2z" stroke="#3d84ff" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="#3d84ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SpeedIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="#3d84ff" strokeWidth="1.5" />
      <path d="M12 7v5l3 3" stroke="#3d84ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChartIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="#3d84ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function WalletIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="6" width="20" height="14" rx="2" stroke="#3d84ff" strokeWidth="1.5" />
      <path d="M16 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fill="#3d84ff" />
      <path d="M2 10h20" stroke="#3d84ff" strokeWidth="1.5" />
      <path d="M6 6V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" stroke="#3d84ff" strokeWidth="1.5" />
    </svg>
  )
}

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Why choose OKX?</h2>
          <p className={styles.subtitle}>
            Trusted by 50 million users across 180+ countries with $20B+ in daily trading volume
          </p>
        </div>

        <div className={styles.grid}>
          {FEATURES.map((feature) => (
            <div key={feature.title} className={styles.card}>
              <div className={styles.iconWrapper}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
