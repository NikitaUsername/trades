import styles from './App.module.css';
import Header from '../Header';
import Trades from '../Trades';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Positions from '../Positions';

function App() {

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/trades" element={<Trades />} />
          <Route path='/positions' element={<Positions />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
