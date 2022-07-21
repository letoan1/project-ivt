import React from 'react'
import { Layout } from 'antd'

const { Header } = Layout;

const Heading = () => {
  return (
    <Header style={{
        positon: 'fixed',
        width: '100%',
        zIndex: '1000',
        height: '64px',
        color: '#fff',
    }}
    >
        Header
    </Header>
  )
}

export default Heading