// Write your code here
// Write your code here
import './index.css'

const DenominationItem = props => {
  const {money, onchangeValue} = props
  const {value} = money

  const onchangeValues = () => {
    onchangeValue(value)
  }

  return (
    <li>
      <button type="button" className="button-style" onClick={onchangeValues}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
