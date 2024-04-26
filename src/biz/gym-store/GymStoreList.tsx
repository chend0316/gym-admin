import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Dropdown, MenuProps } from 'antd';
import cx from 'classnames';
import { useGymStoreDispatchContext, useGymStoreStateContext } from './GymStoreContext';
import { GymStore } from '../../schema';

interface GymSotreListProps {
}

/**
 * 健身房门店列表
 */
export function GymStoreList({ }: GymSotreListProps) {
  const { gymStoreList: list, currentGymStoreId: activeId } = useGymStoreStateContext();
  const dispatch = useGymStoreDispatchContext();

  return (
    <>
      <div className=' flex flex-row justify-between'>
        <h2>门店列表</h2>
        <Button type='primary' size="small" icon={<PlusOutlined />}></Button>
      </div>
      <div className=' divide-y'>
        {list.map((item) => <GymStoreListItem key={item.id} value={item} active={item.id === activeId} onClick={() => dispatch({ type: 'select-gym-store', payload: item.id })} />)}
      </div>
    </>
  )
}

function GymStoreListItem({ value, active, onClick }: { value: GymStore, active: boolean, onClick: () => void }) {
  const dispatch = useGymStoreDispatchContext();

  const handleDelete = () => {
    dispatch({ type: 'delete-gym-store', payload: value.id })
  }

  const dropdownItems: MenuProps['items'] = [
    {
      key: '1',
      label: <button onClick={handleDelete}>删除</button>
    }
  ];

  return <div className='group h-10 flex flex-row items-center justify-between hover:cursor-pointer' onClick={onClick}>
    <span className={cx({ ' text-blue-500': active })}>{value.name}</span>
    <Dropdown menu={{ items: dropdownItems }} placement='bottom'>
      <EllipsisOutlined className='invisible group-hover:visible cursor-pointer p-1' />
    </Dropdown>
  </div>
}