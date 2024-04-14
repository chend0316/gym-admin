import { Button, Input, Select, Space, Table, TableProps } from 'antd';
import React from 'react'

interface Member {
  id: string;
  nickname: string;
  name: string;
  phone: string;
}

const columns: TableProps<Member>['columns'] = [
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
        <Space>
          <a>编辑</a>
          <a>删除</a>
        </Space >
      );
    }
  }
];

/**
 * 会员管理
 */
export function GymStoreMemberManagement() {
  const data: Member[] = [
    {
      id: '1',
      nickname: 'zhangsan',
      name: 'zhangsan',
      phone: '18888888888',
    },
    {
      id: '2',
      nickname: 'zhangsan',
      name: 'zhangsan',
      phone: '18888888888',
    }
  ];

  return (
    <div>
      <div className=' flex flex-row justify-between'>
        <div>
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
          <Button onClick={() => { }}>搜索</Button>
        </div>
        <Button type="primary" onClick={() => { }}>新增会员</Button>
      </div>
      <Table dataSource={data} columns={columns} />
    </div>
  )
}
