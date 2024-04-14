import './App.css'
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { Layout } from './biz/HomePageLayout';
import { Link, Outlet } from 'react-router-dom'
import { useMenuActiveKey } from './router'
import { Header } from './biz/Header';
export default function App() {
  const menuActiveKey = useMenuActiveKey();
  console.log(menuActiveKey)

  return (
    <>
      <Layout header={<Header />} leftMenu={
        <Menu className='h-full' items={menuItems} mode='inline' selectedKeys={[menuActiveKey]} />
      } body={<Outlet />} />
    </>
  )
}

const menuItems: MenuProps['items'] = [
  {
    key: 'gym-store',
    label: <Link to="/gym-store">门店管理</Link>,
  },
  {
    key: 'permission-management',
    label: '权限管理',
    children: [
      {
        key: 'admin-management',
        label: <Link to="/">角色管理</Link>,
      },
      {
        key: 'operation-management',
        label: <Link to="/">操作日志</Link>,
      }
    ]
  }
]