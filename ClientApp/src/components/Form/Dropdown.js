import {Field} from 'formik'

const Dropdown = ({
  label,
  name,
  value,
  error,
  items = [],
  showRemarkIf,
  className,
}) => {
  return (
    <>
      <div className="mt-1 relative">
        <label
          htmlFor={name}
          className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
        >
          {label}
        </label>
        <Field
          id={name}
          name={name}
          as="select"
          className={
            error
              ? 'p-3 shadow-sm ring-1 ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm  rounded-md'
              : 'p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md' +
                ' ' +
                className
          }
        >
          {items.map(i =>
            i.value != null ? (
              <option key={i.value} value={i.value}>
                {i.text}
              </option>
            ) : (
              <option key={i.value}>Please select</option>
            ),
          )}
        </Field>
        {value === 'other' && (
          <textarea
            rows={4}
            name={`${name}Note`}
            id={`${name}Note`}
            className="mt-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            defaultValue={''}
          />
        )}
        {showRemarkIf && value === showRemarkIf && (
          <textarea
            rows={4}
            name={`${name}Note`}
            id={`${name}Note`}
            className="mt-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            defaultValue={''}
          />
        )}
      </div>
      <span className="text-red-600 text-sm">{error}</span>
    </>
  )
}

export {Dropdown}
