import { useSelector } from 'react-redux';
import { BcgImages, Form, Header, List } from './components';

function App() {
  return (
    <div className="App">
      <BcgImages />
      <Header />
      <Form />
      <List />
    </div>
  );
}

export default App;
