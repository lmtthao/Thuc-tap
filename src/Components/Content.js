import React from 'react'
import './Content.css'
import { FaSearch } from 'react-icons/fa';

const Content = () => {
  return (
    <div className='main-content'>
      <div className='new-content'>
        <div className='header-new-content'>
          <div className='title'>Tin mới</div>
          <div className="find">
            <input type="text" placeholder="Nhập để tìm kiếm" className="search-input" />
            <button className="search-button">
              <FaSearch /> 
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
