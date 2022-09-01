import {useEffect, useState, Fragment} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import Login from '../Login'
import {Formik, Form, Field} from 'formik'
import {Input, Remark, Dropdown} from '../../components/Form'
import axios from 'axios'
import {PaperClipIcon} from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Detail = () => {
  const {group} = useParams()
  const navigate = useNavigate()
  const [detail, setDetail] = useState([group ? null : {}])
  const [language, setLanguage] = useState('th')
  const [edit, setEdit] = useState('read')
  useEffect(() => {
    axios
      .get(`api/generalcode/getGeneralCode?group=${group}`)
      .then(resp => setDetail(resp.data))
      .catch()
  }, [group])

  const handleLanguageOnChange = event => {
    setLanguage(event.currentTarget.value)
  }
  const setEdits = event => {
    event.preventDefault()
    if (edit == 'read') {
      setEdit('edit')
    } else {
      setEdit('read')
    }
  }
  const handleOnDelete = id => {
    axios.delete(`api/generalcode/deletedetail/${id}`).then(resp => {
      navigate('/')
      setTimeout(() => {
        navigate(`/GeneralCode/Detail/${group}`)
      }, 1)
    })
  }

  if (!detail.generalCodeDetail) return <div>Loading...</div>

  return (
    <div>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg px-5 py-5">
        <Formik
          initialValues={{...detail}}
          onSubmit={values => {
            const request = axios.patch(`api/generalcode/${detail.id}`, {
              ...values,
            })
            request
              .then(resp => {
                navigate('/generalcode')
              })
              .catch()
          }}
          validateOnBlur={false}
          validateOnChange={false}
        >
          <Form>
            <div className="flex justify-between items-center">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  General Code Detail
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  General Code
                </p>
              </div>
              <div className="flex justify-center items-center">
                <div className="flex-shrink-0 px-4 py-5 sm:px-6">
                  <div className="flex justify-end space-x-3">
                    {edit == 'edit' ? (
                      <button
                        onClick={setEdits}
                        className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Cancel
                      </button>
                    ) : (
                      ''
                    )}
                    {edit == 'edit' ? (
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={setEdits}
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Edit
                      </button>
                    )}
                  </div>
                </div>
                <div className="px-4 py-5 sm:px-6">
                  <select
                    id="language"
                    name="language"
                    autoComplete="language"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block sm:text-sm border-gray-300 rounded-md w-full"
                    onChange={handleLanguageOnChange}
                  >
                    <option value="th">TH</option>
                    <option value="en">EN</option>
                  </select>
                </div>
              </div>
            </div>
            {edit == 'edit' ? (
              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Group</dt>
                    <Input
                      id="group"
                      name="group"
                      type="text"
                      className="bg-gray-900"
                    />
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
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
            ) : (
              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Group</dt>
                    <div className="text-sm text-gray-900 col-span-2 mb-8">
                      {detail.description}
                    </div>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Description
                    </dt>
                    <div className="text-sm text-gray-900 col-span-2 mb-[115px]">
                      {detail.description}
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Local Description
                    </dt>
                    <div className="text-sm text-gray-900 col-span-2 mb-[115px]">
                      {detail.localDescription}
                    </div>
                  </div>
                </dl>
              </div>
            )}
          </Form>
        </Formik>
        <div className="flex justify-end px-4 py-5 sm:px-6">
          <Link
            to={`/GeneralCode/Create/detail/${group}`}
            className="inline-flex rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
          >
            Add General Code Detail
          </Link>
        </div>
        <div className="border-t border-gray-200 rounded-md">
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
                            className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                          >
                            Active
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
                                  'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell',
                                )}
                              >
                                {details.active ? '1' : '0'}
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
                                  to={`/GeneralCode/Edit/${details.id}`}
                                  className="text-blue-600 hover:text-blue-900"
                                >
                                  Edit
                                  <span className="sr-only">
                                    , {details.group}
                                  </span>
                                </Link>
                                <span className="mx-3 align-text-bottom">
                                  |
                                </span>
                                <button
                                  className=" text-red-600 hover:text-red-900"
                                  onClick={() => handleOnDelete(details.id)}
                                >
                                  Delete
                                  <span className="sr-only">
                                    , {details.description}
                                  </span>
                                </button>
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
            to="/GeneralCode/"
            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Detail
