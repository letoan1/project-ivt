import React from 'react'
import ColumDemo from '../chart/ColumDemo'
import LineDemo from '../chart/LineDemo'

const Dashboard = () => {
  return (
    <div className='dashboard'>
     <LineDemo />
     <div className='space'></div>
     Demo
     <ColumDemo />
    </div>
  )
}

export default Dashboard