import create from "zustand";

const useCounterStore = create((set) => ({
  counter: 0,
  increaseCounter: () => set((state) => ({ counter: state?.counter + 1 })),
  decreaseCounter: () => set((state) => ({ counter: state?.counter - 1 })),
}));

export default useCounterStore;
