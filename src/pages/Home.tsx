import { Link } from 'react-router-dom'
import { HomeIcon, WrenchScrewdriverIcon, PaintBrushIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Reformas Integrales',
    description: 'Transformamos completamente tu espacio con un diseño moderno y funcional.',
    icon: HomeIcon,
  },
  {
    name: 'Mantenimiento',
    description: 'Servicios de mantenimiento preventivo y correctivo para tu hogar o negocio.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Pintura y Decoración',
    description: 'Dale un nuevo aspecto a tus espacios con nuestros servicios de pintura y decoración.',
    icon: PaintBrushIcon,
  },
  {
    name: 'Obras y Construcción',
    description: 'Construimos y remodelamos espacios con los más altos estándares de calidad.',
    icon: BuildingOfficeIcon,
  },
]

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20 dark:from-primary-900/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
              Transformamos tus espacios en realidad
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Somos expertos en reformas y construcción, comprometidos con la calidad y la satisfacción de nuestros clientes.
              Con más de 10 años de experiencia, hacemos realidad tus proyectos.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/contacto"
                className="btn btn-primary"
              >
                Solicitar Presupuesto
              </Link>
              <Link to="/servicios" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
                Ver Servicios <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">Nuestros Servicios</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Todo lo que necesitas para tu proyecto
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Ofrecemos una amplia gama de servicios para satisfacer todas tus necesidades de reforma y construcción.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <feature.icon className="h-5 w-5 flex-none text-primary-600 dark:text-primary-400" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <Link to="/servicios" className="text-sm font-semibold leading-6 text-primary-600 dark:text-primary-400">
                      Saber más <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* CTA section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
          <div
            className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-primary-600 to-primary-400"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            ¿Listo para transformar tu espacio?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            Contáctanos hoy mismo para una consulta gratuita y descubre cómo podemos ayudarte a hacer realidad tu proyecto.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/contacto"
              className="btn btn-primary"
            >
              Contactar Ahora
            </Link>
            <Link to="/proyectos" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
              Ver Proyectos <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 