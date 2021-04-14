import React, { useContext } from 'react';
import { MessageContext } from './../../contexts';
import { useAuth0 } from '@auth0/auth0-react';

const Error = () => {
  return (
    <p className="message message--error">error message</p>
  )

}

const Success = () => {
  return (
    <p className="message message--success">success message</p>
  )

}

const Loading = () => {
  return (
    <p className="message message--loading">loading message</p>
  )

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