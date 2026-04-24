import React from 'react'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import MarketTable from './MarketTable.jsx'
import Features from './Features.jsx'
import Banner from './Banner.jsx'
import Footer from './Footer.jsx'

export default function OKXPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MarketTable />
        <Features />
        <Banner />
      </main>
      <Footer />
    </>
  )
}
