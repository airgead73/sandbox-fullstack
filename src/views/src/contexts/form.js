import React from 'react';
import { serverStem } from './../config';

// status: initial, success, error

const FormContext = React.createContext();
const { Provider } = FormContext;

const FormProvider = ({children}) => {
  const [formStatus, setFormStatus] = React.useState('initial');
  const changeFormStatus = (newStatus) => {
    setFormStatus(newStatus);
    if(newStatus === 'success') {
      setFormStatus('initial');
    }
  }
  return (
    <Provider
      value={{
        formStatus: formStatus,
        changeFormStatus,
        serverStem
      }}
    >
      {children}
    </Provider>
  )
}

export { FormContext, FormProvider }