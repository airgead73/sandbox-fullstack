import React, { useEffect, useContext } from 'react';
import { LayoutContext } from './../contexts';

const useLayout = (newLayout) => {

  const { changeLayout } = useContext(LayoutContext);

  useEffect(() => {
    changeLayout(newLayout)
  });

}

export { useLayout }