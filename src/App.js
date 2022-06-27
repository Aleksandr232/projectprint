import React,{Component} from 'react';
import Printer, { print } from 'react-pdf-print';
import 'bootstrap/dist/css/bootstrap.min.css';



const ids = ['1']

class App extends Component{
  render() {
    return (
      <div className>
        <Printer>
            <div id={ids[0]} style={{ width:'210mm', height: '297mm' }}>
                Hello World!
            </div>
        </Printer>
        
          <button
          className='btn btn-info ms-2'
          onClick={() => print(ids)} value='Stampa'
          >Печать</button>
      </div>
    )
  }
}

export default App