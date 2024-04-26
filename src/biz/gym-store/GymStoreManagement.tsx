import { Link } from 'react-router-dom'
import { GymStoreInfoSettings } from './info'
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
      label: <Link to="/gym-store/index">门店信息</Link>,
      children: <GymStoreInfoSettings />
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
