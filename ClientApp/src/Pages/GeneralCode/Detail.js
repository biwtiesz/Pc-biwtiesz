import {useEffect, useState} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import Login from '../Login'
import {Formik, Form, Field} from 'formik'
import {Input, Remark, Dropdown} from '../../components/Form'
import axios from 'axios'
import {Switch} from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Detail = () => {
  const {id} = useParams()
  const [detail, setDetail] = useState([id ? null : {}])
  const [language, setLanguage] = useState('th')
  const [group, setGroup] = useState('')
  const [description, setDescription] = useState('')
  const [localDescription, setlocalDescription] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)
  const [enabled, setEnabled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`api/generalcode/search?id=${id}`)
      .then(resp => setDetail(resp.data))
      .catch()
  }, [id])

  console.log(detail)

  const handleLanguageOnChange = event => {
    setLanguage(event.currentTarget.value)
  }

  if (!detail.generalCodeDetail) return <div>Loading...</div>

  return (
    <div>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="flex justify-between items-center">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              General Code Detail
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">General Code</p>
          </div>
          <div className="px-4 py-5 sm:px-6">
            {/* <select
              id="language"
              name="language"
              autoComplete="language"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md w-[85px]"
              onChange={handleLanguageOnChange}
            >
              <option value="th">TH</option>
              <option value="en">EN</option>
            </select> */}
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={classNames(
                enabled ? 'bg-indigo-600' : 'bg-gray-200',
                'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
              )}
            >
              <span className="sr-only">Use setting</span>
              <span
                className={classNames(
                  enabled ? 'translate-x-5' : 'translate-x-0',
                  'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                )}
              >
                <span
                  className={classNames(
                    enabled
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
                    enabled
                      ? 'opacity-100 ease-in duration-200'
                      : 'opacity-0 ease-out duration-100',
                    'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
                  )}
                  aria-hidden="true"
                >
                  <svg
                    className="h-3 w-3 text-indigo-600"
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
        <Formik
          initialValues={{...detail}}
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
            <div className="bg-red-300 shadow overflow-hidden sm:rounded-lg">
              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Group</dt>
                    <Input
                      id="group"
                      name="group"
                      type="text"
                      className="bg-gray-900"
                      disabled={isDisabled}
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
                        disabled={isDisabled}
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
                        disabled={isDisabled}
                      />
                    </div>
                  </div>
                </dl>
              </div>
            </div>
            {/* <div className="flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6">
              <div className="flex justify-end space-x-3">
                <Link
                  to="/GeneralCode"
                  className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  {id ? 'Save' : 'Create'}
                </button>
              </div>
            </div> */}
          </Form>
        </Formik>

        <div className="border-t border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col">
              <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle">
                  <div className="shadow-sm ring-1 ring-black ring-opacity-5">
                    <table
                      className="min-w-full border-separate"
                      style={{borderSpacing: 0}}
                    >
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                          >
                            Group
                          </th>
                          <th
                            scope="col"
                            className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                          >
                            Code
                          </th>
                          <th
                            scope="col"
                            className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                          >
                            Code Description
                          </th>
                          <th
                            scope="col"
                            className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pr-4 pl-3 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                          >
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {detail.generalCodeDetail
                          .filter(
                            p =>
                              p.language.toLowerCase() ===
                              language.toLowerCase(),
                          )
                          .map((details, detailsIdx) => (
                            <tr key={details.id}>
                              <td
                                className={classNames(
                                  detailsIdx !== details.length - 1
                                    ? 'border-b border-gray-200'
                                    : '',
                                  'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8',
                                )}
                              >
                                {details.group}
                              </td>
                              <td
                                className={classNames(
                                  detailsIdx !== details.length - 1
                                    ? 'border-b border-gray-200'
                                    : '',
                                  'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell',
                                )}
                              >
                                {details.code}
                              </td>
                              <td
                                className={classNames(
                                  detailsIdx !== details.length - 1
                                    ? 'border-b border-gray-200'
                                    : '',
                                  'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell',
                                )}
                              >
                                {details.description}
                              </td>
                              <td
                                className={classNames(
                                  detailsIdx !== details.length - 1
                                    ? 'border-b border-gray-200'
                                    : '',
                                  'relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8',
                                )}
                              >
                                <Link
                                  to={`/GeneralCode/${details.group}/`}
                                  className="text-indigo-600 hover:text-indigo-900"
                                >
                                  Edit
                                  <span className="sr-only">
                                    , {details.group}
                                  </span>
                                </Link>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6">
        <div className="flex justify-end space-x-3">
          <Link
            to="/GeneralCode"
            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Detail
