import { useState } from 'react'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900">
      <div className="mx-auto max-w-xl lg:max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Contacta con nosotros</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Envíanos un mensaje o utiliza nuestra información de contacto para solicitar un presupuesto gratuito.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2 lg:items-start">
          <div className="lg:row-end-1 lg:col-span-2">
            <form
              action="https://formspree.io/f/mwpbpzjn"  // <--- Pon aquí tu endpoint Formspree
              method="POST"
              className="bg-white shadow-sm ring-1 ring-gray-900/5 p-6 rounded-lg dark:bg-gray-800 dark:ring-gray-100/10"
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget
                const data = new FormData(form)

                fetch(form.action, {
                  method: form.method,
                  body: data,
                  headers: {
                    'Accept': 'application/json',
                  },
                }).then(response => {
                  if (response.ok) {
                    setStatus('success')
                    form.reset()
                  } else {
                    setStatus('error')
                  }
                }).catch(() => {
                  setStatus('error')
                })
              }}
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                    Nombre
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 dark:bg-gray-700 dark:text-white dark:ring-gray-600 dark:focus:ring-primary-400"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                    Correo electrónico
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 dark:bg-gray-700 dark:text-white dark:ring-gray-600 dark:focus:ring-primary-400"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                    Teléfono
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 dark:bg-gray-700 dark:text-white dark:ring-gray-600 dark:focus:ring-primary-400"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                    Servicio de interés
                  </label>
                  <div className="mt-2.5">
                    <select
                      name="service"
                      id="service"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 dark:bg-gray-700 dark:text-white dark:ring-gray-600 dark:focus:ring-primary-400"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="Reformas Integrales">Reformas Integrales</option>
                      <option value="Mantenimiento">Mantenimiento</option>
                      <option value="Pintura y Decoración">Pintura y Decoración</option>
                      <option value="Obras y Construcción">Obras y Construcción</option>
                      <option value="Diseño de Interiores">Diseño de Interiores</option>
                      <option value="Reformas de Baños">Reformas de Baños</option>
                      <option value="Reformas de Cocinas">Reformas de Cocinas</option>
                      <option value="Rehabilitación">Rehabilitación</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                    Mensaje
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 dark:bg-gray-700 dark:text-white dark:ring-gray-600 dark:focus:ring-primary-400"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Enviar mensaje
                </button>
              </div>

              {status === 'success' && (
                <p className="mt-4 text-green-600">¡Gracias por contactarnos! Hemos recibido tu mensaje.</p>
              )}
              {status === 'error' && (
                <p className="mt-4 text-red-600">Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.</p>
              )}
            </form>
          </div>

          <div className="lg:mt-6 lg:row-end-none lg:col-span-1 flex flex-col space-y-8">
            <div className="flex items-center gap-x-4 text-base leading-7 text-gray-600 dark:text-gray-300">
              <EnvelopeIcon className="h-6 w-5 flex-none text-primary-600 dark:text-primary-400" aria-hidden="true" />
              <a href="mailto:geofrancis73@hotmail.com">
                geofrancis73@hotmail.com
              </a>
            </div>

            <div className="flex items-center gap-x-4 text-base leading-7 text-gray-600 dark:text-gray-300">
              <PhoneIcon className="h-6 w-5 flex-none text-primary-600 dark:text-primary-400" aria-hidden="true" />
              <a href="tel:+34 650 915 701">+34 650 915 701</a>
            </div>

  <div className="flex items-center gap-x-4 text-base leading-7 text-gray-600 dark:text-gray-300">
  <MapPinIcon className="h-6 w-6 flex-none text-primary-600 dark:text-primary-400" aria-hidden="true" />
  <a
    href="https://www.google.com/maps/search/?api=1&query=Calle+Empleo+Juvenil+3+1D+28041+Madrid"
    target="_blank"
    rel="noopener noreferrer"
    title="Ver en mapa"
    className="hover:underline"
  >
    Calle Empleo Juvenil nº3, 1ºD, 28041 Madrid
  </a>
</div>

          </div>
        </div>
      </div>
    </div>
  )
}
