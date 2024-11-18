import React from 'react'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';


 function Notification() {
    let showNotification=()=>{
        NotificationManager.info("Hello! welcome to my profile. How can i help you?",1000);
        NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
        NotificationManager.success('Success message', 'Title here');
        NotificationManager.error('Error message', 'Click me!');
       
    }
  return (
    <div>
        <button onClick={showNotification}>Hello!</button>
        <NotificationContainer/>
        <h1>Ram</h1>

    </div>
  )
}
export default Notification;
