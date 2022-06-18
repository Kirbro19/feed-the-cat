import { CardList } from './components/cardList';
import data from './data/data.json'

function App() {
  const info = data.info;
  console.log('data', data)

  return (
    <div className="app">
      <CardList info={info}/>
    </div>
  );
}

export default App;
