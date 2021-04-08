import { useEffect, useContext } from 'react';
import { LayoutContext } from './../contexts';

const useLayout = (newLayout) => {
  const layout = useContext(LayoutContext);
  const { changeLayout } = layout;

  useEffect(() => {
    changeLayout(newLayout);
  },[newLayout]);

}

export { useLayout }