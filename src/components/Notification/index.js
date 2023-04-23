import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  console.log(props)
  return (
    <div className="flex-container">
      {children}
      <GrFormClose className="cross" />
    </div>
  )
}

export default Notification
