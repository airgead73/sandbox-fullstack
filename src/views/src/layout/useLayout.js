import { useEffect, useContext } from 'react';
import { LayoutContext } from '.';

const useLayout = (newLayout) => {
  const layout = useContext(LayoutContext);
  const { changeLayout } = layout;

  useEffect(() => {
    changeLayout(newLayout);
  },[newLayout]);

}

export { useLayout }