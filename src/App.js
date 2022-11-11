import './App.css';
import {Canvas} from "./Temp/canvas";
import {Provider} from 'react-redux'
import {store} from './store'
import {tempStore} from './Temp/store'

function TempApp(){
    return (
        <Provider store={tempStore}>
            <Canvas/>
        </Provider>
    )
}

function App() {
  return (
      <Provider store={store}>
          {/**/}
      </Provider>
  );
}

export default TempApp;
