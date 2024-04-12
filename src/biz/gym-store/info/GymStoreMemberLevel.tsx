
import React from 'react'
import { Button, Space, Table, TableProps, Typography } from 'antd'
import { DndContext } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { MenuOutlined } from '@ant-design/icons';
import { CSS } from '@dnd-kit/utilities';

interface MemberLevel {
  key: string;
  label: string;
}

export function GymStoreMemberLevel() {
  const data: MemberLevel[] = [
    {
      key: '1',
      label: '普通会员',
    },
    {
      key: '2',
      label: '高级会员',
    },
  ]

  const columns: TableProps<MemberLevel>['columns'] = [
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

  return (
    <div>
      <div className=' flex flex-row justify-between items-center'>
        <Typography.Title level={5}>
          会员等级设置
        </Typography.Title>
        <Button type='primary'>新增会员等级</Button>
      </div>

      <DndContext modifiers={[restrictToVerticalAxis]}>
        <SortableContext items={data.map(item => item.key)} strategy={verticalListSortingStrategy}>
          <Table components={{
            body: {
              row: Row,
            }
          }} dataSource={data} columns={columns} />
        </SortableContext>
      </DndContext>
    </div>
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
