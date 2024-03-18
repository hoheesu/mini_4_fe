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
