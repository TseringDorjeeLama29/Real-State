import React from 'react'
import Banner from './Home/Banner'
import BannerMid from './Home/BannerMid'
import FeatureItem from './Home/FeatureItem'
import StaffMembers from './Home/StaffMembers'

export default function Home() {
  return (
    <>
        <Banner />
        <FeatureItem />
        <BannerMid />
        <StaffMembers />
    </>
  )
}
