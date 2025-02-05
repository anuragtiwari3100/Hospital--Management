import React from 'react'
import SpecialtyMenu from '../components/SpecialtyMenu'
import Header from '../components/Header'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
const Home = () => {
  return (
  <div>
   <Header/>
    <SpecialtyMenu/>
    <TopDoctors/>
    <Banner/>
  </div>
  )
}

export default Home
