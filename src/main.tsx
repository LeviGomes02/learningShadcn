import ReactDOM from 'react-dom/client';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import './index.css';

import { Sidebar } from './components/sidebar/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Sidebar>
        <App />
      </Sidebar>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
