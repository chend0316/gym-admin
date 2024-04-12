import React from 'react'
import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Dropdown, MenuProps } from 'antd';

/**
 * 健身房门店列表
 */
export function GymStoreList() {
  const storeList = ['aaa', 'bbb', 'ccc', 'ddd'];

  return (
    <div className=' p-2 w-36'>
      <div className=' flex flex-row justify-between'>
        <h2>门店列表</h2>
        <Button type='primary' size="small" icon={<PlusOutlined />}></Button>
      </div>
      <div className=' divide-y'>
        {storeList.map((store) => <GymStoreListItem key={store} name={store} />)}
      </div>
    </div>
  )
}

function GymStoreListItem({ name }: { name: string }) {
  const dropdownItems: MenuProps['items'] = [
    {
      key: '1',
      label: <button>删除</button>
    }
  ];

  return <div className='group h-10 flex flex-row items-center justify-between'>
    <span>{name}</span>
    <Dropdown menu={{ items: dropdownItems }} placement='bottom'>
      <EllipsisOutlined className='invisible group-hover:visible cursor-pointer p-1' />
    </Dropdown>
  </div>
}