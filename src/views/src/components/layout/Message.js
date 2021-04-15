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

const Loading = () => {
  return (
    <section className="message message--loading">
      <p className="message__text">loading message</p>
    </section>  )

}

const Message = () => {
  const { messageStatus } = useContext(MessageContext);
  const { isLoading } = useAuth0();

  const success = messageStatus === 'success';
  const error = messageStatus === 'error';
  const loading = messageStatus === 'loading' || isLoading;
  return ( 

    <React.Fragment>
      { success && <Success/> }
      { error && <Error/> }
      { loading && <Loading/> }
    </React.Fragment>
      
   );
}
 
export default Message;