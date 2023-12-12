
import './App.css';

import Brand from './components/brand';

import EditableTable from './components/table'
import Footer from './components/footer'
import Download from './components/download'



function App() {
  
  
  return (
  <div className="App">
      <header className="App-header">
        <Brand title="brand"></Brand>
        
        
      </header>
      <body className='App-body'>
        <div>
      
      <EditableTable title="tab"></EditableTable>
      <Download></Download>
      </div>

      </body>
      <footer>
      
       <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
