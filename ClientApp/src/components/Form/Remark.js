import {Field} from 'formik'

const Remark = ({label, name, value: checked}) => {
  return (
    <Field
      as="textarea"
      rows={6}
      name={name}
      id={name}
      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
    />
  )
}

export {Remark}
