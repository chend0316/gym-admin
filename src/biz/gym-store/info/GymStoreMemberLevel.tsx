
import React, { useState } from 'react'
import { Button, Form, Input, Modal, Space, Table, TableProps, Typography } from 'antd'
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { MenuOutlined } from '@ant-design/icons';
import { CSS } from '@dnd-kit/utilities';
import { useGymStoreDispatchContext, useGymStoreStateContext } from '../GymStoreContext';
import type { GymStoreMemberLevel } from '../../../schema';

export function GymStoreMemberLevelSettings() {
  const { currentGymStore } = useGymStoreStateContext();
  const dispatch = useGymStoreDispatchContext();

  const data = currentGymStore.memberLevels;

  const columns: TableProps<GymStoreMemberLevel>['columns'] = [
    {
      key: 'sort',
    },
    {
      title: '会员等级',
      dataIndex: 'label',
      key: 'label',
      render: text => <span>{text}</span>,
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <a onClick={() => { }}>编辑</a>
          <a onClick={() => { console.log(record) }}>删除</a>
        </Space>
      )
    }
  ]

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id === over?.id) return;
    const activeIndex = data.findIndex(i => i.id === active.id)
    const overIndex = data.findIndex(i => i.id === over?.id)
    dispatch({type: 'move-member-levels-by-idx', payload: { from: activeIndex, to: overIndex }});
  }

  return (
    <div>
      <div className=' flex flex-row justify-between items-center'>
        <Typography.Title level={5}>
          会员等级设置
        </Typography.Title>
        <AddMemberLevelButton />
      </div>

      <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={handleDragEnd}>
        <SortableContext items={data} strategy={verticalListSortingStrategy}>
          <Table size='small'
            rowKey="id"
            components={{
              body: {
                row: Row,
              }
            }} dataSource={data} columns={columns} />
        </SortableContext>
      </DndContext>
    </div>
  )
}

function AddMemberLevelButton() {
  const dispatch = useGymStoreDispatchContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      await form.validateFields();
      const label = form.getFieldValue("label") as string;
      setLoading(true);
      dispatch({ type: 'add-member-level', payload: label });
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      setIsModalOpen(false);
      setLoading(false)
    } catch (_) {
      return;
    }
  };

  const handleCancel = async () => {
    setIsModalOpen(false)
  };

  return (
    <>
      <Button type='primary' onClick={showModal}>新增会员等级</Button>
      <Modal title="新增会员等级" open={isModalOpen} confirmLoading={loading} onOk={handleOk} onCancel={handleCancel}>
        <Form form={form}>
          <Form.Item label='等级名称' name='label' rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  'data-row-key': string;
}

const Row = ({ children, ...props }: RowProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: props['data-row-key'],
  });

  const style: React.CSSProperties = {
    ...props.style,
    transform: CSS.Transform.toString(transform && { ...transform, scaleY: 1 }),
    transition,
    ...(isDragging ? { position: 'relative', zIndex: 9999 } : {}),
  };

  return (
    <tr {...props} ref={setNodeRef} style={style} {...attributes}>
      {React.Children.map(children, (child) => {
        if ((child as React.ReactElement).key === 'sort') {
          return React.cloneElement(child as React.ReactElement, {
            children: (
              <MenuOutlined
                ref={setActivatorNodeRef}
                style={{ touchAction: 'none', cursor: 'move' }}
                {...listeners}
              />
            ),
          });
        }
        return child;
      })}
    </tr>
  );
};
