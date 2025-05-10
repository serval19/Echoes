import React from 'react'
import { toast } from 'react-toastify'

export const successmsg=(msg)=>{
    toast.success(msg,{
        position: 'top-left'
    })
}
export const errormsg=(msg)=>{
    toast.error(msg,{
        position: 'top-left'
    })
}