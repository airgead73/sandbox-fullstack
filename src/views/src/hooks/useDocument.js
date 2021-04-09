import { useEffect } from 'react';

const useDocument = (newView) => {

  useEffect(() => {
    document.body.setAttribute('class', `${newView}`);
  });

}

export { useDocument }