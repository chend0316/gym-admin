import React from 'react'
import { Button, Col, Form, Input, Space, Typography } from 'antd'
import { GymStore } from '../../../schema';
import { useCurrentGymStoreContext } from '../GymStoreContext';

const { Title } = Typography;

export function GymStoreBasicInfoSettings() {
  const [editMode, setEditMode] = React.useState(false);
  const currentGymStore = useCurrentGymStoreContext()

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
      <div>
        <span className='inline-block w-20 text-right'>名称：</span>
        <span>{gymStore.name}</span>
      </div>
      <div>
        <span className='inline-block w-20 text-right'>联系电话：</span>
        <span>{gymStore.phone}</span>
      </div>
      <div>
        <span className='inline-block w-20 text-right'>地址：</span>
        <span>{gymStore.address}</span>
      </div>
      <div>
        <span className='inline-block w-20 text-right'>经度：</span>
        <span>{gymStore.location?.longitude}</span>
        <span className='inline-block w-20 text-right'>纬度：</span>
        <span>{gymStore.location?.latitude}</span>
      </div>
      <div>
        <span className='inline-block w-20 text-right'>营业时间：</span>
        <span>{gymStore.businessTime}</span>
      </div>
      <div>
        <span className='inline-block w-20 text-right'>描述：</span>
        <span>{gymStore.description}</span>
      </div>
    </>
  )
}

function BasicInfoEditor() {
  return (
    <>
      <Form labelCol={{ span: 3, offset: 0 }} >
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
        <Form.Item wrapperCol={{ offset: 3 }}>
          <Space>
            <Button>取消</Button>
            <Button type="primary">保存</Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  )
}
