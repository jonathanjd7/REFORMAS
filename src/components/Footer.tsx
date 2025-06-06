import { Link } from 'react-router-dom'
import type { SVGProps } from 'react'

const navigation = {
  main: [
    { name: 'Inicio', href: '/REFORMAS' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Proyectos', href: '/proyectos' },
    { name: 'Contacto', href: '/contacto' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/',
      icon: (props: SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/jonathanjd/',
      icon: (props: SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7zm5.75-.88a1.13 1.13 0 1 1 0 2.26a1.13 1.13 0 0 1 0-2.26z" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      href: "https://wa.me/34650915701?text=Hola%2C%20quiero%20más%20información%20para%20hacer%20una%20reforma",
      icon: (props: SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 32 32" {...props}>
          <path d="M16.001 2.667c-7.364 0-13.334 5.97-13.334 13.333a13.27 13.27 0 0 0 1.833 6.756L2.667 29.334l6.792-1.792a13.297 13.297 0 0 0 6.542 1.725c7.364 0 13.333-5.97 13.333-13.333 0-7.364-5.969-13.267-13.333-13.267zm0 24.465c-2.208 0-4.313-.589-6.167-1.714l-.438-.255-4.042 1.062 1.083-3.979-.281-.459a11.246 11.246 0 0 1-1.688-5.958c0-6.229 5.072-11.301 11.334-11.301 6.229 0 11.3 5.072 11.3 11.301 0 6.229-5.072 11.303-11.3 11.303zm6.188-8.531c-.344-.172-2.042-1-2.354-1.115-.313-.115-.542-.172-.771.172-.229.344-.885 1.115-1.084 1.344-.198.229-.396.255-.74.083-.344-.172-1.448-.532-2.76-1.698-1.021-.911-1.714-2.031-1.917-2.375-.198-.344-.021-.531.146-.698.146-.146.344-.396.516-.589.167-.198.229-.344.344-.573.115-.229.057-.429-.021-.602-.083-.172-.771-1.865-1.063-2.552-.281-.677-.562-.573-.771-.583h-.656c-.229 0-.604.084-.917.429s-1.208 1.177-1.208 2.865 1.25 3.323 1.427 3.552c.172.229 2.458 3.75 5.948 5.25.832.359 1.479.573 1.979.729.833.265 1.594.229 2.198.14.677-.104 2.042-.833 2.333-1.635.292-.802.292-1.49.208-1.635-.084-.146-.313-.229-.656-.385z" />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <nav
          className="flex flex-wrap justify-center gap-x-10 gap-y-4"
          aria-label="Footer navigation"
        >
          {navigation.main.map((item) => (
            <div key={item.name}>
              {item.href.startsWith('http') ? (
                <a
                  href={item.href} 
                  className="text-base text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {item.name}
                </a>
                
              ) : (
                <Link
                  to={item.href}
                  className="text-base text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="mt-8 flex justify-center space-x-8">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-gray-400 hover:text-gray-600 dark:hover:text-green-400 transition-colors duration-300"
              aria-label={`Enlace a ${item.name}`}
              title={item.name}
            >
              <item.icon
                className="h-8 w-8 transform transition-transform duration-300 hover:scale-110"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-400 dark:text-gray-300 select-none">
          &copy; {year} Reformas F D Y. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
