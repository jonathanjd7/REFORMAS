import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface Project {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  details: string[];
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Reforma Integral de Vivienda',
    description: 'Transformación completa de una vivienda antigua en un espacio moderno y funcional.',
    imageUrl:
      'https://cdn-cieji.nitrocdn.com/GiUuNOFfAKEJxJGJurBLdVIazCnBXqfZ/assets/images/optimized/rev-1b752d0/cubicup.com/wp-content/uploads/2024/02/reforma_integral_madrid_retiro.webp',
    details: [
      'Redistribución de espacios',
      'Instalaciones eléctrica y de fontanería nuevas',
      'Cambio de suelos y revestimientos',
      'Instalación de ventanas de alta eficiencia',
      'Diseño de iluminación',
    ],
  },
  {
    id: 2,
    name: 'Reforma de Local Comercial',
    description: 'Adecuación de un local para una nueva actividad comercial, optimizando el espacio y la imagen corporativa.',
    imageUrl:
      'https://images.unsplash.com/photo-1605106702734-205df17f5077?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    details: [
      'Diseño de interiorismo comercial',
      'Instalaciones adaptadas a normativa',
      'Mobiliario a medida',
      'Rotulación y elementos visuales',
      'Iluminación comercial especializada',
    ],
  },
  {
    id: 3,
    name: 'Reforma de Cocina',
    description: 'Modernización y optimización de una cocina, creando un espacio práctico y estético.',
    imageUrl:
      'https://images.unsplash.com/photo-1613256076522-f44115a72fe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    details: [
      'Diseño de cocina a medida',
      'Cambio de mobiliario y encimeras',
      'Instalación de electrodomésticos integrados',
      'Renovación de revestimientos',
      'Mejora de iluminación y ventilación',
    ],
  },
  {
    id: 4,
    name: 'Reforma de Baño',
    description: 'Transformación de un baño antiguo en un espacio funcional y con diseño contemporáneo.',
    imageUrl:
      'https://images.unsplash.com/photo-1601073728486-870f293b820a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    details: [
      'Rediseño de distribución',
      'Instalación de sanitarios y grifería modernos',
      'Cambio de azulejos y suelos',
      'Creación de duchas a ras de suelo',
      'Optimización del espacio de almacenamiento',
    ],
  },
  {
    id: 5,
    name: 'Ampliación de Vivienda',
    description: 'Aumento de la superficie habitable de una casa, añadiendo nuevas estancias o ampliando las existentes.',
    imageUrl:
      'https://images.unsplash.com/photo-1448375240586-882fc251780f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    details: [
      'Estudio de viabilidad y proyecto',
      'Cimentación y estructura',
      'Cerramientos y cubiertas',
      'Acabados interiores y exteriores',
      'Integración con la estructura existente',
    ],
  },
  {
    id: 6,
    name: 'Rehabilitación de Edificio',
    description: 'Restauración y mejora de edificios antiguos, conservando su valor histórico y adaptándolos a las necesidades actuales.',
    imageUrl:
      'https://images.unsplash.com/photo-1522071820081-009f0129c7c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    details: [
      'Inspección y diagnóstico',
      'Refuerzo estructural',
      'Rehabilitación de fachadas y cubiertas',
      'Modernización de instalaciones comunes',
      'Respeto por los elementos arquitectónicos originales',
    ],
  },
]

export default function Projects() {
  const [open, setOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedProject(null)
  }

  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">Nuestros Proyectos</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Descubre nuestros trabajos realizados
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Te presentamos una selección de nuestros proyectos de reforma y construcción, mostrando la calidad y el detalle de nuestro trabajo.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} className="flex flex-col" onClick={() => handleProjectClick(project)}>
                <div className="relative aspect-[3/2] w-full rounded-2xl overflow-hidden bg-gray-100 lg:aspect-auto lg:h-80">
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <h3>{project.name}</h3>
                </div>
                <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog className="relative z-50" open={open} onClose={handleClose}>
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <DialogPanel className="relative w-full max-w-lg transform text-left text-base transition md:my-8">
              <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 dark:bg-gray-800">
                <button
                  type="button"
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8 dark:text-gray-300 dark:hover:text-gray-100"
                  onClick={handleClose}
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                  <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                    <img
                      src={selectedProject?.imageUrl}
                      alt={selectedProject?.name}
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="sm:col-span-8 lg:col-span-7">
                    <h2 className="text-2xl font-bold text-gray-900 sm:pr-12 dark:text-white">
                      {selectedProject?.name}
                    </h2>

                    <section aria-labelledby="information-heading" className="mt-3">
                      <h3 id="information-heading" className="sr-only">
                        Project information
                      </h3>

                      <p className="text-lg text-gray-900 dark:text-gray-200">{selectedProject?.description}</p>

                      <div className="mt-6">
                        <h4 className="text-base font-medium text-gray-900 dark:text-white">Detalles del proyecto:</h4>
                        <ul role="list" className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                          {selectedProject?.details.map((detail) => (
                            <li key={detail} className="flex items-center">
                              <svg className="h-5 w-5 flex-none text-primary-600 dark:text-primary-400 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                              </svg>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
} 