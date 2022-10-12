import create from 'zustand';

const useStore = create((set, get) => ({
    user: null,
    login: (aUser) => set((state) => ({ user: aUser })),
    logout: () => set({ user: null }),
    loggedIn: () => { return get().user != null }
}));

export default useStore;
