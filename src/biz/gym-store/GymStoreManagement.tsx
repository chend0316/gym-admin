import { Link } from 'react-router-dom'
import { GymStoreInfo } from './info/GymStoreInfo'
import { GymStoreMemberManagement } from './member/GymStoreMemberManagement'
import { GymStoreCoachManagement } from './coach/GymStoreCoachManagement'
import { GymStoreCourseManagement } from './course/GymStoreCourseManagement'
import { useGymStoreTabActiveKey } from '../../router'
import { Tabs, TabsProps } from 'antd'

export function GymStoreManagement() {
  const activeKey = useGymStoreTabActiveKey();

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


  return <Tabs size='small' items={tabItems} activeKey={activeKey} />
}
