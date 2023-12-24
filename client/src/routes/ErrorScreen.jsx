import React from 'react'
import { useRouteError } from "react-router-dom";
const ErrorScreen = () => {
    const error=useRouteError()
  return (
    <div>ErrorScreen</div>
  )
}

export default ErrorScreen