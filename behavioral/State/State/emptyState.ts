import { Context } from '../Context/Context.interface'
import { State } from './State.interface'
import { Item } from '../types'
import { FullState } from './fullState'

export class EmptyState implements State {
  context: Context

  constructor (context: Context) {
    this.context = context
  }

  getItem (name: string, count: number, coins: number) {
    console.log('No items in stock')
    return undefined
  }

  showItems () {
    console.log('No items in stock')
  }

  showCash () {
    console.log(`| Cash: ${this.context.cash} $`)
  }

  showState () {
    console.log('| STATE: EMPTY')
  }

  addItems (items: Item[]) {
    this.context.items = items
    this.context.setState(new FullState(this.context))
  }

  withdrawCash () {
    this.context.cash = 0
  }
}
