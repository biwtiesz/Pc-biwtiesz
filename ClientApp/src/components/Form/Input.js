import {Field} from 'formik'
import {ExclamationCircleIcon} from '@heroicons/react/solid'

const Input = ({label, name, error, touched}) => {
  return (
    <>
      <div className="mt-1 relative">
        <label
          htmlFor={name}
          className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
        >
          {label}
        </label>
        <div>
          <Field
            type="text"
            name={name}
            id={name}
            className={
              error
                ? 'p-3 shadow-sm ring-1 ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm  rounded-md'
                : 'p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
            }
          />

          {error && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <ExclamationCircleIcon
                className="h-5 w-5 text-red-500"
                aria-hidden="true"
              />
            </div>
          )}
        </div>
      </div>
      <span className="text-red-600 text-sm">{error}</span>
    </>
  )
}

export {Input}
