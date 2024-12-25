import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Content from './Content'
import './Main.css'

const Main = () => {
  return (
    <div className='home-container'>
      <Navbar className='navbar'></Navbar>
      <Content className='content'></Content>
      <Footer className='footer'></Footer>
    </div>
  )
}

export default Main