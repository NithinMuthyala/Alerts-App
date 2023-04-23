import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotification = () => (
  <div className="main-container">
    <h1>Alert Notifications</h1>
    <Notification>
      <div className="app-cont">
        <AiFillCheckCircle className="icon1" />
        <div className="text-container">
          <h1 className="text1">Success</h1>
          <p>You can access all the files in the folder</p>
        </div>
      </div>
    </Notification>

    <Notification>
      <div className="app-cont">
        <RiErrorWarningFill className="icon2" />
        <div className="text-container">
          <h1 className="text1 text2">Error</h1>
          <p>Sorry, you are not authorized to have access to delete the file</p>
        </div>
      </div>
    </Notification>
    <Notification>
      <div className="app-cont">
        <MdWarning className="icon3" />
        <div className="text-container">
          <h1 className="text1 text3">Warning</h1>
          <p>Viewers of this file can see comments and suggestions</p>
        </div>
      </div>
    </Notification>
    <Notification>
      <div className="app-cont">
        <MdInfo className="icon4" />
        <div className="text-container">
          <h1 className="text1 text4">Info</h1>
          <p>Anyone on the internet can view these files</p>
        </div>
      </div>
    </Notification>
  </div>
)

export default AlertNotification
