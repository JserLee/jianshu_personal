import React,{Fragment} from 'react';

import { GlobalStyled } from "./style.js"
import Header from "./common/header"
function App() {
  return (
    <Fragment>      
      <GlobalStyled />
      <Header />
      <div className="dell">
          hello world 
      </div>
    
    </Fragment>
  );
}

export default App;
