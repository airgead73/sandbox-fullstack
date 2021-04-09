import React from 'react';

const LayoutContext = React.createContext();
const { Provider } = LayoutContext;

const LayoutProvider = ({children}) => {
  const [layout, setLayout] = React.useState('main');
  const changeLayout = (newLayout) => {
    setLayout(newLayout);
  }

  console.log('layout context');
  
  return (
    <Provider
      value={{
        currentLayout: layout,
        changeLayout
      }}
    >
      {children}
    </Provider>
  )
}

export { LayoutContext, LayoutProvider }