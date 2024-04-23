import { Typography } from 'antd'
import { GymStoreBasicInfo } from './GymStoreBasicInfo';
import { GymStoreMemberLevelSettings } from './GymStoreMemberLevel';
import { GymStore } from '../../../schema';

const { Title } = Typography;

interface GymStoreInfoProps {
}

/**
 * 门店信息
 */
export function GymStoreInfo({ }: GymStoreInfoProps) {
  return (
    <div>
      <GymStoreBasicInfo />
      <GymStoreMemberLevelSettings />
      <Title level={5}>团课等级</Title>
      <Title level={5}>教室/场地</Title>
    </div>
  )
}
