import React from 'react'
import { Button, Form, Input, Typography } from 'antd'
import { GymStore } from '../../../schema';
import { useGymStoreStateContext } from '../GymStoreContext';

const { Title } = Typography;

export function GymStoreBasicInfo() {
  const [editMode, setEditMode] = React.useState(false);
  const { currentGymStore } = useGymStoreStateContext()

  return (
    <>
      <div className='flex flex-row justify-between items-center'>
        <Title level={5}>基本信息</Title>
        <Button type="primary" onClick={() => setEditMode(!editMode)}>编辑信息</Button>
      </div>
      {
        editMode ? <BasicInfoEditor /> :
          <BasicInfoViewer gymStore={currentGymStore} />
      }
    </>
  )
}

function BasicInfoViewer({ gymStore }: { gymStore: GymStore }) {
  return (
    <>
      <div>名称：{gymStore.name}</div>
      <div>联系电话：{gymStore.phone}</div>
      <div>地址：{gymStore.address}</div>
    </>
  )
}

function BasicInfoEditor() {
  return (
    <>
      <Form labelCol={{ span: 5, offset: 0 }} >
        <Form.Item label='名称' name='name'>
          <Input />
        </Form.Item>
        <Form.Item label='联系电话' name='phone'>
          <Input />
        </Form.Item>
        <Form.Item label='地址' name='address'>
          <Input />
        </Form.Item>
        <Form.Item label='描述' name='description'>
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 5 }}>
          <Button type="primary">
            保存
          </Button>
          <Button>
            取消
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
