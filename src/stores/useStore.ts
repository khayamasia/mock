import { create } from "zustand";

interface CounterState {
  count: number;
  increase: () => void;
  reset: () => void;
  decrease: () => void;
}

export const useCounter = create<CounterState>((set) => ({
  count: 0,
  increase: () =>
    set((state) => {
      if (state.count < 10) {
        return { count: state.count + 1 };
      }
      return state;
    }),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
