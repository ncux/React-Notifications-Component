import React, { useContext } from 'react';
import { NotificationsContext } from "../../context/notifications/context";
import {Notification} from "./notification/notification";


export const Notifications = () => {

    const { loading, notifications } = useContext(NotificationsContext);

    return (
        <div className={`notifications`}>
            {
                notifications.map(n => (
                    <Notification key={n.id} { ...n } />
                ))
            }

        </div>
    );

};

