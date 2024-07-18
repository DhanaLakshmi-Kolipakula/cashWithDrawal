// Write your code here
// Write your code here
import Component from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onchangeValue = value => {
    this.setState(p => ({amount: p.amount - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="bg-container">
        <div className="box-container">
          <div className="head-box">
            <p className="s-profile">S</p>
            <h1 className="heading">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="para">Your Balance</p>
            <h1 className="money">{amount}</h1>
          </div>
          <div className="balance-container">
            <p className="para">Balance</p>
          </div>
          <p>With Draw</p>
          <p className="para">Choose Sum in Rupees</p>
          <ul className="money-container">
            {denominationsList.map(e => (
              <DenominationItem
                money={e}
                key={e.id}
                onchangeValue={this.onchangeValue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
