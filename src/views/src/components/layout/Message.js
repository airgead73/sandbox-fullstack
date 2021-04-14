import React, { useContext } from 'react';
import { MessageContext } from './../../contexts';

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
  const isSuccess = messageStatus === 'success';
  const isError = messageStatus === 'error';
  const isLoading = messageStatus === 'loading';
  return ( 
    
    <React.Fragment>
      { isSuccess && <Success/> }
      { isError && <Error/> }
      { isLoading && <Loading/> }
    </React.Fragment>
      
   );
}
 
export default Message;