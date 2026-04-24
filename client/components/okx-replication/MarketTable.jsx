import React, { useState } from 'react'
import styles from './MarketTable.module.css'

const PLACEHOLDER_ASSETS = [
  { rank: 1, name: 'Bitcoin', symbol: 'BTC', price: 67432.50, change24h: 2.34, volume: '4.2B', marketCap: '1.32T', positive: true },
  { rank: 2, name: 'Ethereum', symbol: 'ETH', price: 3521.40, change24h: 1.87, volume: '2.1B', marketCap: '423B', positive: true },
  { rank: 3, name: 'Solana', symbol: 'SOL', price: 182.30, change24h: -0.52, volume: '890M', marketCap: '82B', positive: false },
  { rank: 4, name: 'BNB', symbol: 'BNB', price: 612.80, change24h: 0.95, volume: '540M', marketCap: '89B', positive: true },
  { rank: 5, name: 'XRP', symbol: 'XRP', price: 0.6284, change24h: -1.23, volume: '1.2B', marketCap: '36B', positive: false },
  { rank: 6, name: 'USDC', symbol: 'USDC', price: 1.000, change24h: 0.01, volume: '3.8B', marketCap: '32B', positive: true },
  { rank: 7, name: 'Cardano', symbol: 'ADA', price: 0.5812, change24h: 3.45, volume: '320M', marketCap: '20B', positive: true },
  { rank: 8, name: 'Avalanche', symbol: 'AVAX', price: 42.16, change24h: -2.10, volume: '410M', marketCap: '17B', positive: false },
  { rank: 9, name: 'Dogecoin', symbol: 'DOGE', price: 0.1842, change24h: 5.62, volume: '680M', marketCap: '26B', positive: true },
  { rank: 10, name: 'Polkadot', symbol: 'DOT', price: 9.34, change24h: -0.78, volume: '180M', marketCap: '12B', positive: false },
]

const TABS = ['All', 'Spot', 'Futures', 'DeFi', 'New listings']

const COIN_COLORS = {
  BTC: '#F7931A',
  ETH: '#627EEA',
  SOL: '#9945FF',
  BNB: '#F3BA2F',
  XRP: '#00AAE4',
  USDC: '#2775CA',
  ADA: '#0033AD',
  AVAX: '#E84142',
  DOGE: '#C2A633',
  DOT: '#E6007A',
}

function SparkLine({ positive }) {
  const points = positive
    ? 'M0,30 L20,25 L40,28 L60,18 L80,20 L100,12 L120,15'
    : 'M0,15 L20,18 L40,14 L60,22 L80,25 L100,28 L120,30'

  return (
    <svg width="80" height="32" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d={points}
        stroke={positive ? '#00c087' : '#f0444b'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

function CoinIcon({ symbol }) {
  const color = COIN_COLORS[symbol] || '#777'
  return (
    <div className={styles.coinIcon} style={{ backgroundColor: color }} aria-hidden="true">
      {symbol.charAt(0)}
    </div>
  )
}

export default function MarketTable() {
  const [activeTab, setActiveTab] = useState('All')

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Market overview</h2>
          <a href="#" className={styles.viewAll}>View all markets →</a>
        </div>

        <div className={styles.tabs} role="tablist">
          {TABS.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>#</th>
                <th className={styles.th}>Name</th>
                <th className={`${styles.th} ${styles.right}`}>Price</th>
                <th className={`${styles.th} ${styles.right}`}>24h Change</th>
                <th className={`${styles.th} ${styles.right} ${styles.hideSmall}`}>24h Volume</th>
                <th className={`${styles.th} ${styles.right} ${styles.hideMedium}`}>Market Cap</th>
                <th className={`${styles.th} ${styles.right} ${styles.hideMedium}`}>7d Trend</th>
                <th className={styles.th} />
              </tr>
            </thead>
            <tbody>
              {PLACEHOLDER_ASSETS.map((asset) => (
                <tr key={asset.symbol} className={styles.row}>
                  <td className={styles.td}>
                    <span className={styles.rank}>{asset.rank}</span>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.assetName}>
                      <CoinIcon symbol={asset.symbol} />
                      <div>
                        <div className={styles.assetSymbol}>{asset.symbol}</div>
                        <div className={styles.assetFullName}>{asset.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className={`${styles.td} ${styles.right}`}>
                    <span className={styles.price}>
                      ${asset.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 })}
                    </span>
                  </td>
                  <td className={`${styles.td} ${styles.right}`}>
                    <span className={asset.positive ? styles.positive : styles.negative}>
                      {asset.positive ? '+' : ''}{asset.change24h.toFixed(2)}%
                    </span>
                  </td>
                  <td className={`${styles.td} ${styles.right} ${styles.hideSmall}`}>
                    <span className={styles.muted}>${asset.volume}</span>
                  </td>
                  <td className={`${styles.td} ${styles.right} ${styles.hideMedium}`}>
                    <span className={styles.muted}>${asset.marketCap}</span>
                  </td>
                  <td className={`${styles.td} ${styles.right} ${styles.hideMedium}`}>
                    <SparkLine positive={asset.positive} />
                  </td>
                  <td className={styles.td}>
                    <a href="#" className={styles.tradeBtn}>Trade</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
