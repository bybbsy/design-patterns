import { Context } from '../Context/Context.interface'
import { State } from './State.interface'
import { Item } from '../types'
import { EmptyState } from './emptyState'

export class FullState implements State {
  context: Context

  constructor (context: Context) {
    this.context = context
  }

  getItem (name: string, count: number, coins: number) {
    const idx = this.context.items.findIndex(
      item => item.name === name && count > 0
    )
    const item = this.context.items[idx]

    if (!item) {
      console.log('No such item!')
      return null
    }

    if (item.count < count) {
      console.log('Not enought items!')
      return null
    }

    if (item.price * count > coins) {
      console.log('Not enough money provided')
      return null
    }

    item.count = item.count - count
    this.context.cash += coins

    if (item.count === 0) {
      this.context.items = this.context.items.filter(i => item.id !== i.id)
    }

    if (!this.context.items.length) {
      this.context.setState(new EmptyState(this.context))
    }
  }

  showItems () {
    console.table(this.context.items, ['id', 'name', 'count', 'price'])
  }

  showCash () {
    console.log(`| Cash: ${this.context.cash} $`)
  }

  showState () {
    console.log('| STATE: FULL')
  }

  addItems (items: Item[]) {
    console.log('Cannot add items in this state!')
  }

  withdrawCash () {
    console.log('Withdrawing is not available')
  }
}
