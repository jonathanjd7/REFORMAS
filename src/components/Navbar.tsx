import { Link } from 'react-router-dom'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useTheme } from '../contexts/ThemeContext'
import logo from '/Users/CursosTardes/Desktop/REFORMAS/public/REFORMAS.png' // Asegúrate de que esta ruta sea correcta

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Contacto', href: '/contacto' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="bg-white shadow-sm dark:bg-gray-800 dark:shadow-lg">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex flex-wrap items-center justify-center h-30 gap-x-6 gap-y-2 text-center">
          
          {/* Logo con imagen + texto */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <Link to="/" className="flex items-center p-1.5">
              <img
                src={logo}
                alt="Logo"
                className="h-8 w-8 object-contain"
              />
              <span className="ml-2 text-lg font-bold text-primary-600 dark:text-primary-400">
                REFORMAS F D Y.
              </span>
            </Link>
          </div>

          {/* Navegación + botón de tema */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400"
              >
                {item.name}
              </Link>
            ))}

            {/* Botón modo claro/oscuro */}
            <button
              type="button"
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              {theme === 'light' ? (
                <MoonIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <SunIcon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
