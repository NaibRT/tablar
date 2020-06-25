import React from 'react';
import Bootstrap from 'bootstrap'
import Main from './pages/main'
import ProfilContextProvider from './contexts/profile.context'

function App() {
  return (
    <div className="App">
    <ProfilContextProvider>
     <Main/>
    </ProfilContextProvider>
    </div>
  );
}

export default App;
