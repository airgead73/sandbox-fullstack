import React from 'react';

const MessageContext = React.createContext();
const { Provider } = FormContext;

// message types: success, error, loading

const MessageProvider = ({children}) => {
  const [messageState, setMessageState] = useState({
    active: false,
    type: 'initial',
    text: null
  });

  const changeMessageState = ({active, type, text}) => {
    setMessageState({
      active,
      type,
      text
    });
  }

  return (
    <Provider
      value={{
        messageState,
        changeMessageState 
      }}
    >
      {children}
    </Provider>
  )

}

export { MessageContext, MessageProvider }