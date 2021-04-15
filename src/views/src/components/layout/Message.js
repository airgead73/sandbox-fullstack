import React, { useContext } from 'react';
import { MessageContext } from './../../contexts';
import { useAuth0 } from '@auth0/auth0-react';

const Error = () => {
  return (
    <section className="message message--error">
      <p className="message__text">error message</p>
    </section>
  )

}

const Success = () => {
  return (
    <section className="message message--success">
      <p className="message__text">success message</p>
    </section>  )

}

const Loading = ({message}) => {
  const loadingMessage = message || 'loading...'
  return (
    <section className="message message--loading">
      <p className="message__text">{loadingMessage}</p>
    </section>  )

}

const Message = () => {
  const { message, messageStatus } = useContext(MessageContext);
  const { isLoading } = useAuth0();

  const success = messageStatus === 'success';
  const error = messageStatus === 'error';
  const loading = messageStatus === 'loading' || isLoading;
  return ( 

    <React.Fragment>
      { success && <Success/> }
      { error && <Error/> }
      { loading && <Loading message={message}/> }
    </React.Fragment>
      
   );
}
 
export default Message;