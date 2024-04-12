import React from 'react'
import { Tabs, TabsProps } from 'antd'
import { Link } from 'react-router-dom'
import { GymStoreInfo } from '../biz/gym-store/info/GymStoreInfo'
import { GymStoreMemberManagement } from '../biz/gym-store/member/GymStoreMemberManagement'
import { GymStoreCoachManagement } from '../biz/gym-store/coach/GymStoreCoachManagement'
import { GymStoreCourseManagement } from '../biz/gym-store/course/GymStoreCourseManagement'
import { useGymStoreTabActiveKey } from '../router'
import { GymStoreList } from '../biz/GymStoreList'

/**
 * 门店管理
 */
export default function GymStoreManagement() {
  const activeKey = useGymStoreTabActiveKey();

  return (
    <div className='flex flex-row p-4'>
      <GymStoreList />
      <Tabs items={tabItems} activeKey={activeKey} />
    </div>
  )
}

const tabItems: TabsProps['items'] = [
  {
    key: 'index',
    label: <Link to="/gym-store/index">基本信息</Link>,
    children: <GymStoreInfo />
  },
  {
    key: 'member',
    label: <Link to="/gym-store/member">会员管理</Link>,
    children: <GymStoreMemberManagement />
  },
  {
    key: 'coach',
    label: <Link to="/gym-store/coach">教练管理</Link>,
    children: <GymStoreCoachManagement />
  },
  {
    key: 'course',
    label: <Link to="/gym-store/course">课程管理</Link>,
    children: <GymStoreCourseManagement />
  },
]
