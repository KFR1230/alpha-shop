import './reset.scss'
import './App.scss'
import './App.css';
import Main from './main/main.jsx'
import Progress from './main/progress/progress.jsx'
import Register from './main/register/register.jsx';
import Cart from './main/cart/cart.jsx'
function App() {
  return (
    <>
      <Main>
        <div className='leftContent'>
          <Register/>
          <Progress/>
        </div>
        <div className='rightContent'>
          <Cart/>
        </div>
      </Main>
    </>
  );
}

export default App;
