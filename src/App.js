import './reset.scss'
import './App.css';
import Main from './main/main.jsx'
import Progress from './main/progress/progress.jsx'
import Register from './main/register/register.jsx';


function App() {
  return (
    <>
      <Main>
        <Register/>
        <Progress/>
      </Main>
    </>
  );
}

export default App;
