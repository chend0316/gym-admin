import { Dispatch, createContext, useContext } from "react";
import { GymStore, GymStoreMember, GymStoreMemberLevel } from "../../schema";
import { mockData } from "../../mock";
import { useImmerReducer, ImmerReducer } from 'use-immer'
import { v4 as uuidv4 } from 'uuid';

type GymStoreState = {
  gymStoreList: GymStore[],
  currentGymStoreId: string,
  currentGymStore: GymStore,
}

type GymStoreAction = { type: 'edit-basic-info', payload: GymStore }
  | { type: 'add-member-level', payload: string }
  | { type: 'edit-member-levels', payload: GymStoreMemberLevel[] }
  | { type: 'delete-gym-store', payload: string }
  | { type: 'add-member', payload: GymStoreMember }
  | { type: 'move-member-levels-by-idx', payload: { from: number, to: number } };

const initState: GymStoreState = {
  gymStoreList: mockData.gymStoreList,
  currentGymStoreId: '1',
  get currentGymStore() {
    return this.gymStoreList.find(gymStore => gymStore.id === this.currentGymStoreId)!;
  }
}

export const gymStoreReducer: ImmerReducer<GymStoreState, GymStoreAction> = (draft, action) => {
  switch (action.type) {
    case 'delete-gym-store': {
      draft.gymStoreList = draft.gymStoreList.filter(gymStore => gymStore.id !== action.payload);
      break;
    }
    case 'edit-basic-info': {
      return draft;
    }
    case 'add-member-level': {
      draft.currentGymStore.memberLevels.push({
        id: uuidv4(),
        label: action.payload,
        sort: draft.currentGymStore.memberLevels.length,
      });
      break;
    }
    case 'edit-member-levels': {
      return draft;
    }
    case 'move-member-levels-by-idx': {
      const { from, to } = action.payload;
      const memberLevels = draft.currentGymStore.memberLevels;
      if (from < to) {
        const [tmp] = memberLevels.splice(from, 1);
        memberLevels.splice(to, 0, tmp);
      } else {
        const [tmp] = memberLevels.splice(from, 1);
        memberLevels.splice(to - 1, 0, tmp);
      }
      break;
    }
  }
}

const GymStoreStateContext = createContext<GymStoreState>(initState);
const GymStoreDispatchContext = createContext<Dispatch<GymStoreAction>>(() => { });

export function GymStoreProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useImmerReducer(gymStoreReducer, initState)

  return <GymStoreStateContext.Provider value={state}>
    <GymStoreDispatchContext.Provider value={dispatch}>
      {children}
    </GymStoreDispatchContext.Provider>
  </GymStoreStateContext.Provider>
}

export function useGymStoreStateContext() {
  return useContext(GymStoreStateContext)
}

export function useGymStoreDispatchContext() {
  return useContext(GymStoreDispatchContext)
}
