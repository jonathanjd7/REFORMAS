import { Link } from 'react-router-dom'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useTheme } from '../contexts/ThemeContext'
import logo from '/REFORMAS.png' // Asegúrate de que esta ruta sea correcta

const navigation = [
  { name: 'Inicio', href: '/REFORMAS' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Contacto', href: '/contacto' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="bg-white shadow-sm dark:bg-gray-800 dark:shadow-lg relative pb-10 sm:pb-1 md:pb-1 lg:pb-1">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex flex-wrap items-center justify-center h-20 lg:h-24 gap-x-8 gap-y-1 text-center">
          
          {/* Logo con imagen + texto */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <Link to="/REFORMAS" className="flex items-center p-1.5">
              <img
                src={logo}
                alt="Logo"
                className="h-10 w-10 lg:h-12 lg:w-12 object-contain"
              />
              <span className="ml-2 text-xl lg:text-2xl font-bold text-primary-600 dark:text-primary-400">
                REFORMAS F D Y.
              </span>
            </Link>
          </div>

          {/* Navegación + botón de tema */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-lg lg:text-xl font-semibold leading-6 text-gray-900 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
       {/* Botón modo claro/oscuro */}
       <button
        type="button"
        className="fixed top-4 right-4 p-2 rounded-md text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white z-50"
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
      >
        {theme === 'light' ? (
          <MoonIcon className="h-7 w-7 lg:h-8 lg:w-8" aria-hidden="true" />
        ) : (
          <SunIcon className="h-7 w-7 lg:h-8 lg:w-8" aria-hidden="true" />
        )}
      </button>
    </header>
  )
}
