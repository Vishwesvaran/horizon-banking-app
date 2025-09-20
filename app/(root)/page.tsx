import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalnaceBox from '@/components/TotalBalnaceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home = async () => {
  const loggedIn = await getLoggedInUser();


  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header '>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || 'Guest'}
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