import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import CompletePage from './pages/CompletePage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/order'} element={<OrderPage />} />
        <Route path={'/complete'} element={<CompletePage />} />
        <Route path={'/error'} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
