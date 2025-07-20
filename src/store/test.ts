import { create } from 'zustand';

interface PageDataState {
    testTitle: string;
    toggleNewTestTitle: (newTitle: string) => void;
}

export const usePageDataStore = create<PageDataState>((set) => ({
    testTitle: 'test zustand',
    toggleNewTestTitle: (newTitle: string) => set(() => ({ testTitle: newTitle })),
}));