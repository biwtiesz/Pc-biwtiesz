import {useEffect, useState} from 'react'
import {Link, useNavigate, Outlet} from 'react-router-dom'
import axios from 'axios'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const GeneralCode = () => {
  const [generalCode, setGeneralCode] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get('/api/generalcode')
      .then(resp => setGeneralCode(resp.data))
      .catch()
  }, [])

  const handleOnDelete = id => {
    axios.delete(`api/generalcode/${id}`).then(resp => {
      navigate('/')
      setTimeout(() => {
        navigate('/generalcode')
      }, 1)
    })
  }

  return (
    <div>
      <div className="bg-red shadow overflow-hidden sm:rounded-lg px-5 py-5">
        <div className="flex justify-between items-center">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              General Code
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Parameter</p>
          </div>
          <div className="px-4 py-5 sm:px-6">
            <Link
              to="/GeneralCode/Create/code"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
            >
              Add General Code
            </Link>
          </div>
        </div>
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
                          Description
                        </th>
                        <th
                          scope="col"
                          className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                        >
                          LocalDescription
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
                      {generalCode.map((generalCode, generalCodeIdx) => (
                        <tr key={GeneralCode.id}>
                          <td
                            className={classNames(
                              generalCodeIdx !== GeneralCode.length - 1
                                ? 'border-b border-gray-200'
                                : '',
                              'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8',
                            )}
                          >
                            {generalCode.group}
                          </td>
                          <td
                            className={classNames(
                              generalCodeIdx !== generalCode.length - 1
                                ? 'border-b border-gray-200'
                                : '',
                              'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell',
                            )}
                          >
                            {generalCode.description}
                          </td>

                          <td
                            className={classNames(
                              generalCodeIdx !== generalCode.length - 1
                                ? 'border-b border-gray-200'
                                : '',
                              'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell',
                            )}
                          >
                            {generalCode.localDescription}
                          </td>

                          <td
                            className={classNames(
                              generalCodeIdx !== generalCode.length - 1
                                ? 'border-b border-gray-200'
                                : '',
                              'relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8',
                            )}
                          >
                            <Link
                              to={`/GeneralCode/Detail/${generalCode.group}`}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              View
                              <span className="sr-only">
                                , {generalCode.code}
                              </span>
                            </Link>
                            <span className="mx-3 align-text-bottom">|</span>
                            {/* <Link
                              to={`/GeneralCode/${generalCode.id}`}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              Edit
                              <span className="sr-only">
                                , {generalCode.code}
                              </span>
                            </Link>
                            <span className="mx-3 align-text-bottom">|</span> */}
                            <button
                              className=" text-red-600 hover:text-red-900"
                              onClick={() => handleOnDelete(generalCode.id)}
                            >
                              Delete
                              <span className="sr-only">
                                , {generalCode.description}
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
      <div className="flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6">
        <div className="flex justify-end space-x-3">
          <Link
            to="/Parameter"
            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GeneralCode
