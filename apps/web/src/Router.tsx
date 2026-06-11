import { createBrowserRouter, Navigate } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage/LoginPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: (
      <div className="min-h-screen bg-codeconnect-bg flex items-center justify-center p-4">
        <div className="bg-codeconnect-card p-8 rounded-2xl shadow-xl text-center max-w-md">
          <h1 className="text-2xl font-bold text-white mb-4">Página de Cadastro</h1>
          <p className="text-slate-400 mb-6">Esta funcionalidade estará disponível em breve.</p>
          <a
            href="/login"
            className="text-codeconnect-green hover:underline font-semibold"
          >
            Voltar para o Login
          </a>
        </div>
      </div>
    ),
  },
])
