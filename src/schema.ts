/** 健身房门店 */
export interface GymStore {
  id: string;
  name: string;
  phone?: string;
  address?: string;

  /** 经纬度 */
  location?: {
    latitude: number;
    longitude: number;
  };

  /** 营业时间 */
  businessTime: string;

  /** 描述 */
  description?: string;

  /** 封面图 */
  cover?: string;

  /** 广告图 */
  advertisements?: string[];

  /** 会员等级 */
  memberLevels: GymStoreMemberLevel[];

  /** 团课设置 */
  classSettings: GymStoreClassSetting[];

  /** 场地设置 */
  classroomSettings: GymStoreClassroomSetting[];

  /** 会员 */
  members: GymStoreMember[];
}

/** 会员等级设置 */
export interface GymStoreMemberLevel {
  id: string;
  label: string;
  sort: number;
}

/** 团课设置 */
export interface GymStoreClassSetting {
  id: string;
  /** 会员等级最低要求 */
  memberLevel: string;
}

/** 场地设置 */
export interface GymStoreClassroomSetting {
  id: string;
  label: string;
}

/** 私教课 */
export interface GymStorePrivateClass {
  id: string;
  /** 排序编号 */
  sort: number;
}

/** 团课设置 */
export interface GymStoreClassSetting {
  id: string;
  /** 团课等级 */
  // level: GymStoreMemberLevel;
  /** 团课时间（单位秒） */
  duration: [number, number];
  /** 团课价格 */
  price: number;
  /** 团课描述 */
  description?: string;
}

/** 会员 */
export interface GymStoreMember {
  id: string;
  nickname: string;
  name: string;
  phone: string;

  /** 会员等级 */
  level: string;

  /** 余额 */
  balance: number;

  /** 性别 */
  gender?: 'male' | 'female';
  
  /** 生日, ISO 8601 格式 */
  birthday?: string;
}