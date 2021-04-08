import React from 'react';
import { serverStem } from './../config';

const FormContext = React.createContext();
const { Provider } = FormContext;

const FormProvider = ({children}) => {
  const [formStatus, setFormStatus] = React.useState('initial');
  const changeFormStatus = (newStatus) => {
    setFormStatus(newStatus);
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