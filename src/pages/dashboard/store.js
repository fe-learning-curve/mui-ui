import create from "zustand";
import { v4 } from "uuid";

const useCounterStore = create((set) => ({
  counter: 0,
  list: [{ id: 1, title: "Blog the gioi", content: `testing content` }],
  addItem: () => {
    const newId = v4();
    const name = `New Item ${newId}`;

    const newItem = {
      id: newId,
      name,
    };
    set((state) => ({ list: [...state?.list, newItem] }));
  },

  deleteItem: (id) => {
    set((state) => ({ list: state?.list?.filter((item) => item?.id !== id) }));
  },

  updateItem: (id, newName) => {
    set((state) => ({
      list: state?.list?.map((item) => {
        if (item?.id === id) {
          item.name = newName;
        }
        return item;
      }),
    }));
  },

  increaseCounter: () => set((state) => ({ counter: state?.counter + 1 })),
  decreaseCounter: () => set((state) => ({ counter: state?.counter - 1 })),
}));

export default useCounterStore;
