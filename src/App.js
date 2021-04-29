import './App.css';
import {useState} from 'react';
import ItemsList from './ItemsList'

function App() {
  var [search, setSearch] = useState("")
  var [results, setResults] = useState([])

  var options =[
    'Electrodomesticos','Instrumentos musicales', 'Moda', 'Deportes,'
  ]
  function getOptions (e) {
    if(e.target.value == 0){
      setSearch(e.target.value)
      setResults([])
      return
    }

    setSearch(e.target.value)

    var resultados=options.filter(function (option){
        return option.includes(e.target.value)

    })
    setResults(resultados)
  }



  return (
    <>
    <div className="App-header"></div>

    <div className="App-nav">


    <div>
      {
        results.map((options, i)=>{
          return <div key={i}>{options}</div>
        })

      }

    </div>
   </div>
    <ItemsList />  
    
  </>
  );
}

export default App;
