import { Layout } from 'antd'
import React from 'react'
const {Content} = Layout

const Blank = () => {
  return (
    <Content style={{ padding: '0 48px' }}>
        <div
          style={{
            minHeight: 800,
            padding: 24,
          }}
        >
          Danh sách lớp
        </div>
      </Content>
  )
}

export default Blank
