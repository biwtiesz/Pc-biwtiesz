import {useEffect, useState} from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom'
import {Formik, Form, Field} from 'formik'
import {Input, Remark, Dropdown} from '../../components/Form'
import axios from 'axios'

const GeneralCodeCreate = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [generalcode, setGeneralcode] = useState(id ? null : {})
  const [group, setGroup] = useState('')
  const [description, setDescription] = useState('')
  const [localDescription, setlocalDescription] = useState('')
  useEffect(() => {
    axios
      .get(`api/generalcode/${id}`)
      .then(resp => {
        setGeneralcode(resp.data)
      })
      .catch()
  }, [id])
  if (!generalcode) return <div>Loading...</div>
  return (
    <Formik
      initialValues={{...generalcode}}
      onSubmit={values => {
        console.log(values)
        const request = id
          ? axios.patch(`api/generalcode/${id}`, {...values})
          : axios.post('api/generalcode/create', {...values})
        request.then(resp => navigate('/generalcode')).catch()
      }}
      validateOnBlur={false}
      validateOnChange={false}
    >
      <Form>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              General Code
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              General Code Detail
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Group</dt>
                <Input
                  id="group"
                  name="group"
                  type="text"
                  className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                />
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Description
                </dt>
                <div className="col-span-2">
                  <Remark
                    id="description"
                    name="description"
                    as="textarea"
                    className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                  />
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Local Description
                </dt>
                <div className="col-span-2">
                  <Remark
                    id="localDescription"
                    name="localDescription"
                    as="textarea"
                    className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                  />
                </div>
              </div>
            </dl>
          </div>
        </div>
        <div className="flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6">
          <div className="flex justify-end space-x-3">
            <Link
              to="/GeneralCode"
              className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              {id ? 'Save' : 'Create'}
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  )
}

export default GeneralCodeCreate
