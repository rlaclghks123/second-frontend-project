import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import CompletePage from './pages/CompletePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/order'} element={<OrderPage />} />
        <Route path={'/complete'} element={<CompletePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
