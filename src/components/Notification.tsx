'use client'

import { useState } from "react"

interface NotificationType {
    msg : string,
    type : 'err' | 'succes' | 'info'
    showNotification : boolean

}

export default function Notification ({msg, type , showNotification} : NotificationType) {

    return (
        <div>
            {
                showNotification && (
                    <div className="bg-blue-600 w-80 rounded-md py-1">
                        {msg} 
                    </div>
                )
            } 
        </div>
    )
}