import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import CompletePage from './pages/CompletePage';
import ErrorPage from './pages/ErrorPage';
import NotFoundPage from './pages/NotFoundPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/order'} element={<OrderPage />} />
        <Route path={'/complete'} element={<CompletePage />} />
        <Route path={'/error'} element={<ErrorPage />} />
        <Route path={'/*'} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
