
import React from 'react'
import { Typography } from 'antd'
import { GymStoreBasicInfo } from './GymStoreBasicInfo';
import { GymStoreMemberLevel } from './GymStoreMemberLevel';

const { Title } = Typography;

/**
 * 门店信息
 */
export function GymStoreInfo() {
  return (
    <div>
      <GymStoreBasicInfo />
      <GymStoreMemberLevel />
      <Title level={5}>团课等级</Title>
      <Title level={5}>教室/场地</Title>
    </div>
  )
}
