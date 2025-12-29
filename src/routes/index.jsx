import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Premios from '../pages/Premios';
import Ganadores from '../pages/Ganadores';
import Beneficios from '../pages/Beneficios';
import ComoFunciona from '../pages/ComoFunciona';
import Suscripciones from '../pages/Suscripciones';
import Login from '../pages/Login';

export const router = createBrowserRouter([
  {
    element: <MainLayout><Home /></MainLayout>,
    path: '/',
  },
  {
    element: <MainLayout><Premios /></MainLayout>,
    path: '/premios',
  },
  {
    element: <MainLayout><Ganadores /></MainLayout>,
    path: '/ganadores',
  },
  {
    element: <MainLayout><Beneficios /></MainLayout>,
    path: '/beneficios',
  },
  {
    element: <MainLayout><ComoFunciona /></MainLayout>,
    path: '/como-funciona',
  },
  {
    element: <MainLayout><Suscripciones /></MainLayout>,
    path: '/suscripciones',
  },
  {
    element: <Login />,
    path: '/login',
  },
]);
