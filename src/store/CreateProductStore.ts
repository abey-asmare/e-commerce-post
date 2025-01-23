import { create } from "zustand";


export type createProductStoreType = {
  title: string;
  description: string;
  file: string;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setFile: (file: string) => void;
};
export const useCreateProductStore = create<createProductStoreType>((set) => ({
  title: "",
  description: "",
  file: "",
  setTitle: (title: string) => set(() => ({ title })),
  setDescription: (description: string) => set(() => ({ description })),
  setFile: (file: string) => set(() => ({ file })),
}));
