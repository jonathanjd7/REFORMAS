import { Link } from 'react-router-dom'
import {
  HomeIcon,
  WrenchScrewdriverIcon,
  PaintBrushIcon,
  BuildingOfficeIcon,
  SwatchIcon,
  CubeIcon,
  WrenchIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Reformas Integrales',
    description: 'Transformación completa de espacios con un diseño moderno y funcional.',
    icon: HomeIcon,
    features: [
      'Diseño y planificación personalizada',
      'Gestión de permisos y documentación',
      'Coordinación de todos los oficios',
      'Supervisión constante de la obra',
      'Entrega llave en mano',
    ],
  },
  {
    name: 'Mantenimiento',
    description: 'Servicios de mantenimiento preventivo y correctivo para tu hogar o negocio.',
    icon: WrenchScrewdriverIcon,
    features: [
      'Mantenimiento preventivo',
      'Reparaciones urgentes',
      'Revisión de instalaciones',
      'Sustitución de elementos',
      'Servicio de emergencia 24/7',
    ],
  },
  {
    name: 'Pintura y Decoración',
    description: 'Dale un nuevo aspecto a tus espacios con nuestros servicios de pintura y decoración.',
    icon: PaintBrushIcon,
    features: [
      'Pintura interior y exterior',
      'Decoración de paredes',
      'Papel pintado',
      'Tratamiento de superficies',
      'Asesoramiento en colores',
    ],
  },
  {
    name: 'Obras y Construcción',
    description: 'Construimos y remodelamos espacios con los más altos estándares de calidad.',
    icon: BuildingOfficeIcon,
    features: [
      'Construcción de viviendas',
      'Ampliaciones',
      'Estructuras',
      'Cimentaciones',
      'Certificados de habitabilidad',
    ],
  },
  {
    name: 'Diseño de Interiores',
    description: 'Creamos espacios únicos y funcionales que se adaptan a tu estilo de vida.',
    icon: SwatchIcon,
    features: [
      'Diseño personalizado',
      'Asesoramiento en materiales',
      'Iluminación',
      'Mobiliario a medida',
      'Decoración completa',
    ],
  },
  {
    name: 'Reformas de Baños',
    description: 'Transformamos tu baño en un espacio moderno y funcional.',
    icon: CubeIcon,
    features: [
      'Diseño de baños',
      'Instalación de sanitarios',
      'Plomería',
      'Azulejos y revestimientos',
      'Accesorios y complementos',
    ],
  },
  {
    name: 'Reformas de Cocinas',
    description: 'Creamos cocinas modernas y funcionales adaptadas a tus necesidades.',
    icon: WrenchIcon,
    features: [
      'Diseño de cocinas',
      'Instalación de electrodomésticos',
      'Mobiliario a medida',
      'Encimeras y revestimientos',
      'Iluminación especializada',
    ],
  },
  {
    name: 'Rehabilitación',
    description: 'Recuperamos y modernizamos edificios manteniendo su esencia.',
    icon: SparklesIcon,
    features: [
      'Rehabilitación de fachadas',
      'Restauración de elementos',
      'Modernización de instalaciones',
      'Mejora de eficiencia energética',
      'Adaptación a normativas',
    ],
  },
]

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">Nuestros Servicios</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Todo lo que necesitas para tu proyecto
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Ofrecemos una amplia gama de servicios profesionales para satisfacer todas tus necesidades
            de reforma, construcción y mantenimiento.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <service.icon className="h-5 w-5 flex-none text-primary-600 dark:text-primary-400" aria-hidden="true" />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{service.description}</p>
                  <ul role="list" className="mt-8 space-y-3 text-sm text-gray-600 dark:text-gray-300">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <svg
                          className="h-6 w-5 flex-none text-primary-600 dark:text-primary-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-16 flex justify-center">
          <Link
            to="/contacto"
            className="btn btn-primary"
          >
            Solicitar Presupuesto
          </Link>
        </div>
      </div>
    </div>
  )
} 