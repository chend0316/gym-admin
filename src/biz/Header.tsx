import { UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import React from 'react'

export function Header() {
  return (
    <div className='h-full flex flex-row items-center justify-between p-4'>
      <div>header</div>
      <Avatar size="large" icon={<UserOutlined />} />
    </div>
  )
}
