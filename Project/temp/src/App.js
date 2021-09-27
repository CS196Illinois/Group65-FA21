import logo from './logo.svg';
import './App.css';
import Parent from './components/parent';

function App() {
  const major = 'CS + MUSIC'
  return (
    <>
      <Parent name='quinn' age={18} major={major}/>
    </>
  );
}


export default App;