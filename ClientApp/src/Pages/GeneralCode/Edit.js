import {useEffect, useState, Fragment, useSyncExternalStore} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import Login from '../Login'
import {Formik, Form, Field} from 'formik'
import {Input, Remark, Dropdown} from '../../components/Form'
import axios from 'axios'
import {PaperClipIcon} from '@heroicons/react/solid'
import {Switch} from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Edit = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [editDetail, setEditDetail] = useState(id ? null : {})
  const [edit, setEdit] = useState('read')
  //   const [editDetail.active, setActiveToggle] = useState(
  //     editDetail ? editDetail.active : 1,
  //   )

  useEffect(() => {
    axios
      .get(`api/generalcode/getGeneralCodeDetail?id=${id}`)
      .then(resp => setEditDetail(resp.data))
      .catch()
  }, [id])

  const setEdits = event => {
    event.preventDefault()
    if (edit == 'read') {
      setEdit('edit')
    } else {
      setEdit('read')
    }
  }
  if (!editDetail) return <div>Loading...</div>
  console.log('render')
  return (
    <div>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg px-5 py-5">
        <Formik
          initialValues={{...editDetail}}
          onSubmit={values => {
            console.log(values)
            const request = editDetail.id
              ? axios.patch(`api/generalcode/editdetail/${editDetail.id}`, {
                  ...values,
                })
              : axios.post('api/generalcode/create', {...values})
            request
              .then(resp => navigate(`/GeneralCode/Detail/${editDetail.group}`))
              .catch()
          }}
          validateOnBlur={false}
          validateOnChange={false}
        >
          {({values, setFieldValue}) => (
            <Form>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center gap-10 px-4 py-5 sm:px-6">
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Edit General Code Detail
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      General Code Detail
                    </p>
                  </div>
                  <div>
                    <Switch
                      checked={values.active}
                      onChange={() => setFieldValue('active', !values.active)}
                      className={classNames(
                        values.active ? 'bg-orange-600' : 'bg-gray-200',
                        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500',
                      )}
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        className={classNames(
                          values.active ? 'translate-x-5' : 'translate-x-0',
                          'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                        )}
                      >
                        <span
                          className={classNames(
                            values.active
                              ? 'opacity-0 ease-out duration-100'
                              : 'opacity-100 ease-in duration-200',
                            'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
                          )}
                          aria-hidden="true"
                        >
                          <svg
                            className="h-3 w-3 text-gray-400"
                            fill="none"
                            viewBox="0 0 12 12"
                          >
                            <path
                              d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span
                          className={classNames(
                            values.active
                              ? 'opacity-100 ease-in duration-200'
                              : 'opacity-0 ease-out duration-100',
                            'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
                          )}
                          aria-hidden="true"
                        >
                          <svg
                            className="h-3 w-3 text-orange-600"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                          >
                            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                          </svg>
                        </span>
                      </span>
                    </Switch>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="flex-shrink-0 px-4 py-5 sm:px-6">
                    <div className="flex justify-end space-x-3">
                      {edit == 'edit' ? (
                        <button
                          onClick={setEdits}
                          className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                        >
                          Cancel
                        </button>
                      ) : (
                        ''
                      )}
                      {edit == 'edit' ? (
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={setEdits}
                          className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {edit == 'edit' ? (
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Group
                      </dt>
                      <Input
                        id="group"
                        name="group"
                        type="text"
                        className="bg-gray-900"
                      />
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Code
                      </dt>
                      <div className="col-span-1">
                        <Input
                          id="code"
                          name="code"
                          type="text"
                          className="bg-gray-900"
                        />
                      </div>
                    </div>
                    <div className="bg-gray-50  px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
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
                    <div className="bg-gray-50  px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Order
                      </dt>
                      <div className="col-span-1">
                        <Input
                          id="order"
                          name="order"
                          type="number"
                          className="bg-gray-900"
                        />
                      </div>
                    </div>
                    <div className="bg-gray-50  px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Active
                      </dt>
                      <div className="col-span-2">
                        {editDetail.active ? '1' : '0'}
                      </div>
                    </div>
                  </dl>
                </div>
              ) : (
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Group
                      </dt>
                      <div className="text-sm text-gray-900 col-span-2 mb-8">
                        {editDetail.group}
                      </div>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Code
                      </dt>
                      <div className="text-sm text-gray-900 col-span-2">
                        {editDetail.code}
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Description
                      </dt>
                      <div className="text-sm text-gray-900 col-span-2 mb-[115px]">
                        {editDetail.description}
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Order
                      </dt>
                      <div className="text-sm text-gray-900 col-span-2">
                        {editDetail.order}
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Active
                      </dt>
                      <div className="text-sm text-gray-900 col-span-2">
                        {editDetail.active ? '1' : '0'}
                      </div>
                    </div>
                  </dl>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
      <div className="flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6">
        <div className="flex justify-end space-x-3">
          <Link
            to={`/GeneralCode/Detail/${editDetail.group}`}
            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Edit
