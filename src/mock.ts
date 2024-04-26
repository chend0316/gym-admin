import { GymStore } from "./schema";

const gymStoreList: GymStore[] = [
  {
    id: "1",
    name: 'aa',
    description: "这是一个健身房",
    location: {
      latitude: 39.916527,
      longitude: 116.397128,
    },
    businessTime: "8:00~22:00",
    memberLevels: [
      {
        id: '1',
        label: '普通会员',
        sort: 1,
      },
      {
        id: '2',
        label: '高级会员',
        sort: 2,
      },
      {
        id: '3',
        label: 'VIP会员',
        sort: 3,
      },
    ],
    classSettings: [
      {
        id: '1',
        memberLevel: '1',
        duration: [30 * 60, 60 * 60],
        price: 100,
      },
    ],
    classroomSettings: [
      {
        id: '1',
        label: '1号场地',
      },
      {
        id: '2',
        label: '2号场地',
      },
      {
        id: '3',
        label: '3号场地',
      },
      {
        id: '4',
        label: '4号场地',
      },
    ],
    members: [
      {
        id: '1',
        level: "2",
        name: '张三',
        nickname: '张三',
        phone: '13800138000',
        balance: 1000,
      },
      {
        id: '2',
        level: '1',
        name: '李四',
        nickname: '李四',
        phone: '13800138001',
        balance: 300,
      },
    ]
  },
  {
    id: "2",
    name: 'bb',
    description: "这是一个健身房",
    businessTime: "8:00~22:00",
    memberLevels: [
      {
        id: '1',
        label: '普通会员',
        sort: 1,
      },

    ],
    classSettings: [
      {
        id: '1',
        memberLevel: '1',
        duration: [30 * 60, 60 * 60],
        price: 100,
      },
    ],
    classroomSettings: [
      {
        id: '1',
        label: '1号场地',
      },
      {
        id: '2',
        label: '2号场地',
      },
    ],
    members: []
  }
]

export const mockData = {
  gymStoreList,
}
