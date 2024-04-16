import { create } from "zustand";

const useInspClickedStore = create((set) => ({
  clicked: false,
  setClicked: (isClicked: boolean) => set({ clicked: isClicked }),
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading: isLoading }),
  isError: false,
  setIsError: (isError: boolean) => set({ isError: isError }),
  data: [],
  setData: (data: any) => set({ data: data }),
}));

export default useInspClickedStore;
