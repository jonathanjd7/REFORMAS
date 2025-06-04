import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    id: 1,
    name: 'Reforma Integral de Vivienda',
    description: 'Transformación completa de una vivienda de 120m² en el centro de la ciudad.',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80',
    details: [
      'Diseño y planificación completa',
      'Reforma de cocina y baños',
      'Instalación de suelos de parquet',
      'Pintura y decoración',
      'Iluminación LED',
      'Mobiliario a medida',
    ],
  },
  {
    id: 2,
    name: 'Reforma de Local Comercial',
    description: 'Adaptación de local para tienda de ropa con diseño moderno y minimalista.',
    imageUrl: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80',
    details: [
      'Diseño de escaparate',
      'Instalación de mostradores',
      'Iluminación comercial',
      'Sistema de almacenaje',
      'Pintura y decoración',
      'Suelos técnicos',
    ],
  },
  {
    id: 3,
    name: 'Reforma de Cocina',
    description: 'Renovación completa de cocina con diseño moderno y funcional.',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80',
    details: [
      'Mobiliario a medida',
      'Encimera de cuarzo',
      'Electrodomésticos integrados',
      'Iluminación LED',
      'Suelo de porcelánico',
      'Pintura y decoración',
    ],
  },
  {
    id: 4,
    name: 'Reforma de Baño',
    description: 'Transformación de baño con diseño contemporáneo y elementos de lujo.',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80',
    details: [
      'Sanitarios de diseño',
      'Ducha de obra',
      'Azulejos de porcelánico',
      'Mobiliario a medida',
      'Iluminación LED',
      'Accesorios de lujo',
    ],
  },
  {
    id: 5,
    name: 'Ampliación de Vivienda',
    description: 'Ampliación de vivienda unifamiliar con diseño integrado.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80',
    details: [
      'Diseño arquitectónico',
      'Estructura y cimentación',
      'Instalaciones completas',
      'Acabados de calidad',
      'Integración con existente',
      'Certificado de habitabilidad',
    ],
  },
  {
    id: 6,
    name: 'Rehabilitación de Edificio',
    description: 'Rehabilitación completa de edificio histórico manteniendo su esencia.',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80',
    details: [
      'Restauración de fachada',
      'Rehabilitación estructural',
      'Modernización de instalaciones',
      'Conservación de elementos',
      'Mejora de eficiencia energética',
      'Adaptación a normativas',
    ],
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Nuestros Proyectos</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Transformamos espacios en realidad
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Descubre algunos de nuestros proyectos más destacados. Cada uno de ellos representa
            nuestro compromiso con la calidad y la satisfacción del cliente.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col items-start cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative w-full">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">
                    {project.name}
                  </h3>
                </div>
                <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Dialog
        as="div"
        className="relative z-50"
        open={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
              {selectedProject && (
                <>
                  <div className="absolute right-0 top-0 pr-4 pt-4">
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500"
                      onClick={() => setSelectedProject(null)}
                    >
                      <span className="sr-only">Cerrar</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div>
                    <div className="mt-3 sm:mt-5">
                      <Dialog.Title as="h3" className="text-2xl font-semibold leading-6 text-gray-900">
                        {selectedProject.name}
                      </Dialog.Title>
                      <div className="mt-4">
                        <img
                          src={selectedProject.imageUrl}
                          alt={selectedProject.name}
                          className="w-full rounded-lg object-cover"
                        />
                      </div>
                      <div className="mt-4">
                        <p className="text-base text-gray-600">{selectedProject.description}</p>
                      </div>
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold text-gray-900">Detalles del Proyecto</h4>
                        <ul className="mt-4 space-y-3">
                          {selectedProject.details.map((detail) => (
                            <li key={detail} className="flex items-start">
                              <svg
                                className="h-6 w-5 flex-none text-primary-600"
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
                              <span className="ml-3 text-base text-gray-600">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </div>
  )
} 