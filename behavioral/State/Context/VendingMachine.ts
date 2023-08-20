import { State } from '../State/State.interface'
import { FullState } from '../State/fullState'
import { Item } from '../types'
import { Context } from './Context.interface'

export class VendingMachine implements Context {
  state: State
  items: Item[]
  cash: number

  constructor (items: Item[], cash: number) {
    this.items = items
    this.cash = cash

    this.state = new FullState(this)
  }

  setState (state: State) {
    this.state = state
  }
}
