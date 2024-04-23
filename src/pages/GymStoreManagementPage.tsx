import { GymStoreProvider } from '../biz/gym-store/GymStoreContext';
import { GymStoreList } from '../biz/gym-store/GymStoreList'
import { GymStoreManagement } from '../biz/gym-store/GymStoreManagement'

/**
 * 门店管理
 */
export function GymStoreManagementPage() {
  return (
    <GymStoreProvider>
      <div className='flex flex-row p-4 gap-x-4'>
        <div className='w-36 flex-grow-0'>
          <GymStoreList />
        </div>
        <div className=' flex-grow'>
          <GymStoreManagement />
        </div>
      </div>
    </GymStoreProvider>
  )
}
