import React,{Component} from 'react';
import Printer, { print } from 'react-pdf-print';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tables from './components/table';



const ids = ['1']

class App extends Component{
  render() {
    return (
      <div className='py-4 container'>
        <Printer>
            <div id={ids[0]} style={{ width:'210mm', height: '297mm'  }}>
                <Tables/>
            </div>
        </Printer>
        
          <div style={{position:'absolute', bottom:'300px'}}>
          <button
          className='btn btn-info ms-2'
          onClick={() => print(ids)} value='Stampa'
          >Печать</button>
          </div>
      </div>
    )
  }
}

export default App