import { Item } from '../types'

export interface State {
  getItem: (name: string, count: number, coins: number) => null | undefined
  showItems: () => void
  showCash: () => void
  showState: () => void
  addItems: (items: Item[]) => void
  withdrawCash: () => void
}
