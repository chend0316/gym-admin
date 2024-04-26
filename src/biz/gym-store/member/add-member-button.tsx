import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import { useState } from "react";
import { useCurrentGymStoreContext } from "../GymStoreContext";

interface GymStoreAddMemberModalProps {
}

export function GymStoreAddMemberButton({ }: GymStoreAddMemberModalProps) {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const store = useCurrentGymStoreContext();

  const handleCancel = () => {
    setIsModalOpen(false)
  };

  return <>
    <Button type="primary" onClick={() => setIsModalOpen(true)}>新增会员</Button>
    <Modal title="新增会员" open={isModalOpen} onCancel={handleCancel}>
      <Form form={form} labelCol={{ span: 4 }}>
        <Form.Item label='姓名' name='name' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label='昵称' name='nickname'>
          <Input />
        </Form.Item>
        <Form.Item label='手机号' name='phone' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="生日" name="birthday">
          <DatePicker className=" w-full" onChange={(_, dateString) => {
            console.log(dateString)
          }} />
        </Form.Item>
        <Form.Item label="会员等级" name="memberLevel">
          <Select options={store.memberLevels.map(item => ({ value: item.id, label: item.label }))} />
        </Form.Item>
        <Form.Item label="账户余额" name="balance">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  </>
}