import { createBrowserRouter, RouteObject, useLocation } from 'react-router-dom'
import { GymStoreManagementPage } from './pages/GymStoreManagementPage.tsx'
import { GymStoreInfo } from './biz/gym-store/info/GymStoreInfo.tsx'
import { GymStoreMemberManagement } from './biz/gym-store/member/GymStoreMemberManagement.tsx'
import { GymStoreCoachManagement } from './biz/gym-store/coach/GymStoreCoachManagement.tsx'
import { GymStoreCourseManagement } from './biz/gym-store/course/GymStoreCourseManagement.tsx'

import App from './App.tsx'

const routerConfig: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'gym-store',
        element: <GymStoreManagementPage />,
        children: [
          {
            path: 'index',
            element: <GymStoreInfo />,
          },
          {
            path: 'member',
            element: <GymStoreMemberManagement />,
          },
          {
            path: 'coach',
            element: <GymStoreCoachManagement />,
          },
          {
            path: 'course',
            element: <GymStoreCourseManagement />,
          },
        ]
      },
    ]
  },
]

export const router = createBrowserRouter(routerConfig)

export function useMenuActiveKey() {
  const location = useLocation();

  const pathArr = location.pathname.split('/');
  const activeKey = pathArr[1]

  return activeKey;
}

export function useGymStoreTabActiveKey() {
  const location = useLocation();

  const pathArr = location.pathname.split('/');
  const activeKey = pathArr[pathArr.length - 1]

  return activeKey;
}