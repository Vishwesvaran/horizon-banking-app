import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalnaceBox from '@/components/TotalBalnaceBox';
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: "Vishwa", lastName: 'M', email: 'vishwesvaranm25@gmail.com' };


  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header '>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and Manage your account and transactions efficiently"
          />
          <TotalBalnaceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.30}
          />
        </header>
        RECENT TRANSTACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transtaction={[]}
        banks={[{currentBalance:1234},{currentBalance:1234}]}
      />
    </section>
  )
}

export default Home