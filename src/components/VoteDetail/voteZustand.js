import { create } from "zustand";

const listStore = (set) => ({
  listsAll: [],
  setList: (list) => set(() => ({ listsAll: list })),
  setDeleteList: (listId) =>
    set((state) => ({
      listsAll: state.listsAll.filter((list) => list.id !== listId),
    })),
});
export const useListStore = create(listStore);

const detailEditStore = (set) => ({
  isEdit: false,
  setIsEdit: (edit) => set(() => ({ isEdit: edit })),
});

export const useIsEditStore = create(detailEditStore);

const detailList = (set) => ({
  // 상세 페이 {게시글번호,옵션,보트히스토리}
  detilaList: {},
  setDetailList: (list) => set(() => ({ detailList: list })),
  // editDetailList: (list) => set(()=> ({}))
  // 업데이트에 대한 함수 <<
  // 옵션 클릭하면?

  // 보트 아이디
  // 옵션아이디
  // 유저아이디
});
export const useDetailList = create(detailList);
