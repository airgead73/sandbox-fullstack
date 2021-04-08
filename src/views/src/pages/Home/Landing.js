import { PromiseProvider } from 'mongoose';
import React from 'react';
import { BtnSubmit, FormTest, InputTest } from '../../components/forms';
import { useLayout } from './../../layout';

const Landing = () => {
  
useLayout('landing');
  
  return (  
    <React.Fragment>
      <h2 className="main__title">home page</h2>
      <FormTest title="test">
        <InputTest title="test"/>
        <BtnSubmit title="test"/>
      </FormTest>
    </React.Fragment>
   );
}
 
export default Landing;