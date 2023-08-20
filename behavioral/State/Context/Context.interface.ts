import { State } from '../State/State.interface'
import { Item } from '../types'

export abstract class Context {
  items: Item[]
  cash: number
  state: State
  setState: (state: State) => void
}
