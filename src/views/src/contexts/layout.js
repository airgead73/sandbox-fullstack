import React from 'react';

const LayoutContext = React.createContext();
const { Provider } = LayoutContext;

const LayoutProvider = ({children}) => {
  const [layout, setLayout] = React.useState('main');
  const changeLayout = (newLayout) => {
    console.log('new layout', newLayout)
    setLayout(newLayout);
  }

  
  
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