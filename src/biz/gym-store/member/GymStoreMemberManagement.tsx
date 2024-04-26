import { Button, Input, Select, Space, Table, TableProps } from 'antd';
import { useCurrentGymStoreContext, useGymStoreDispatchContext } from '../GymStoreContext';
import { GymStoreMember } from '../../../schema';
import { useState } from 'react';
import { GymStoreAddMemberButton } from './add-member-button';

const columns: TableProps<GymStoreMember>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    render: (id: string) => <a>{id}</a>,
  },
  {
    title: '昵称',
    dataIndex: 'nickname',
  },
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '手机号',
    dataIndex: 'phone',
  },
  {
    title: '课程表',
    render: (_, member) => {
      return (
        <a href={`/gym-store/course?memberId=${member.id}`}>课程表</a>
      );
    }
  },
  {
    title: '操作',
    render: (_, member) => {
      return (
        <>
          <Button type="link" size="small" onClick={() => { }}>编辑</Button>
          <Button type="link" size="small" onClick={() => { console.log(member) }}>删除</Button>
        </>
      );
    }
  }
];

/**
 * 会员管理
 */
export function GymStoreMemberManagement() {
  const currentGymStore = useCurrentGymStoreContext()
  const members = currentGymStore.members;
  const dispatch = useGymStoreDispatchContext();

  return (
    <div>
      <div className=' flex flex-row justify-between mb-4'>
        <div>
          <Space>
            <Space.Compact>
              <Select style={{ width: '200px' }} defaultValue="id" options={[
                {
                  label: '会员ID',
                  value: 'id',
                },
                {
                  label: '姓名',
                  value: 'name',
                },
                {
                  label: '手机号',
                  value: 'phone',
                }
              ]}>
              </Select>
              <Input placeholder="" />
            </Space.Compact>
            <Button type="primary" onClick={() => { }}>搜索</Button>
          </Space>
        </div>
        <GymStoreAddMemberButton />
      </div>
      <Table dataSource={members} columns={columns} />
    </div>
  )
}
