import { Select, Space, Typography } from "antd";
import { useCurrentGymStoreContext } from "../GymStoreContext";

export function GymStoreClassSettings() {
  const store = useCurrentGymStoreContext();

  return <div>
    <Typography.Title level={5}>团课设置</Typography.Title>
    <Space>
      <span>团课支持</span>
      <Select className="w-28" options={store.memberLevels.map(item => ({ value: item.id, label: item.label }))} />
      <span>及以上等级报名</span>
    </Space>
  </div>
}