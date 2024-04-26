import { Button, Table, TableProps, Typography } from "antd";
import { GymStoreClassroomSetting } from "../../../schema";
import { useCurrentGymStoreContext } from "../GymStoreContext";

export function GymStoreClassroomSettings() {
  const store = useCurrentGymStoreContext();
  const data = store.classroomSettings;

  const columns: TableProps<GymStoreClassroomSetting>['columns'] = [
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
        <div>
          <Button type="link" size="small" onClick={() => { }}>编辑</Button>
          <Button type="link" size="small" onClick={() => { console.log(record) }}>删除</Button>
        </div>
      )
    }
  ]

  return <>
    <div className="flex flex-row justify-between items-center">
      <Typography.Title level={5}>教室/场地</Typography.Title>
      <Button type='primary'>新增教室/场地</Button>
    </div>
    <Table size='small'
      rowKey="id"
      pagination={false}
      dataSource={data} columns={columns} />
  </>
}