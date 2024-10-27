import { create } from 'zustand'

interface BuyerState {
	customer_name: string
	customer_email: string
	setName: (name: string) => void
	setEmail: (email: string) => void
}

export const useBuyerStore = create<BuyerState>((set) => ({
	customer_name: '',
	customer_email: '',
	setName: (name) => set({ customer_name: name }),
	setEmail: (email) => set({ customer_email: email }),
}))
