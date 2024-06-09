import { uniqueId } from "lodash";
import { create } from "zustand";

export type ToasterType = "warn" | "info" | "confirm";

export type Toaster = {
  id: string;
  mainMessage: string;
  subMessage?: string;
  toasterType: ToasterType;
};

type ToasterStore = {
  toasters: Toaster[];
  addToaster: (toaster: Omit<Toaster, "id">) => void;
  removeToaster: (id: string) => void;
};

const useToasterStore = create<ToasterStore>((set) => ({
  toasters: [],
  addToaster: ({ toasterType, mainMessage, subMessage }) =>
    set((state) => ({
      toasters: [
        ...state.toasters,
        {
          id: uniqueId(),
          mainMessage: mainMessage,
          toasterType: toasterType,
          subMessage: subMessage || undefined,
        },
      ],
    })),
  removeToaster: (id) =>
    set((state) => {
      const toasterExists = state.toasters.some((toaster) => toaster.id === id);
      if (!toasterExists) {
        return state;
      }
      return {
        toasters: state.toasters.filter((toaster) => toaster.id !== id),
      };
    }),
}));

export default useToasterStore;
