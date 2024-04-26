import { GymStoreBasicInfoSettings } from './basic';
import { GymStoreMemberSettings } from './member';
import { GymStoreClassSettings } from './class';
import { GymStoreClassroomSettings } from './classroom';

interface GymStoreInfoProps {
}

/**
 * 门店信息
 */
export function GymStoreInfoSettings({ }: GymStoreInfoProps) {
  return (
    <div>
      <GymStoreBasicInfoSettings />
      <GymStoreMemberSettings />
      <GymStoreClassSettings />
      <GymStoreClassroomSettings />
    </div>
  )
}
