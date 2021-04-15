import React, { useState } from 'react';

const MessageContext = React.createContext();
const { Provider } = MessageContext;

// message status types: inactive, success, error, loading

const MessageProvider = ({children}) => {
  const [message, setMessage] = useState('');
  const [messageStatus, setMessageStatus] = useState('initial');

  const handleMessage = ({ message, status}) => {
    setMessage(message);
    setMessageStatus(status);
  }

  return (
    <Provider
      value={{
        message,
        messageStatus,
        handleMessage        
      }}
    >
      {children}
    </Provider>
  )

}

export { MessageContext, MessageProvider }