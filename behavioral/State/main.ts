import { VendingMachine } from './Context/VendingMachine'

const vm = new VendingMachine(
  [
    {
      id: 0,
      name: 'coke',
      count: 100,
      price: 7
    },
    {
      id: 1,
      name: 'bread',
      count: 10,
      price: 5
    }
  ],
  100
)

console.log('Before purchase')
vm.state.showState()
vm.state.showCash()
vm.state.showItems()

vm.state.getItem('coke', 100, 7000)
vm.state.getItem('bread', 10, 50)

console.log('After purchase')
vm.state.showState()
vm.state.showCash()
vm.state.showItems()

console.log('Added items')
vm.state.addItems([{ id: 0, name: 'Butter', price: 5, count: 70 }])

console.log('After addition of item')
vm.state.showState()
vm.state.showItems()
