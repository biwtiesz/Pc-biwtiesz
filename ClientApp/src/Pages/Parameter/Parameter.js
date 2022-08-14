import {useEffect, useState} from 'react'
import {Link, useNavigate, Outlet} from 'react-router-dom'
import axios from 'axios'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Parameter = () => {
  const [parameters, setParameters] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get('/api/parameter')
      .then(resp => setParameters(resp.data))
      .catch()
  }, [])

  const handleOnDelete = id => {
    axios.delete(`api/parameter/${id}`).then(resp => {
      navigate('/')
      setTimeout(() => {
        navigate('/Parameter')
      }, 1)
    })
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Parameters</h1>
          <p className="mt-2 text-sm text-gray-700"></p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Link
            to="/Parameter/Create"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Add parameter
          </Link>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
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
                      Description
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
                  {parameters.map((parameter, parameterIdx) => (
                    <tr key={parameter.id}>
                      <td
                        className={classNames(
                          parameterIdx !== parameters.length - 1
                            ? 'border-b border-gray-200'
                            : '',
                          'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8',
                        )}
                      >
                        {parameter.group}
                      </td>
                      <td
                        className={classNames(
                          parameterIdx !== parameters.length - 1
                            ? 'border-b border-gray-200'
                            : '',
                          'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell',
                        )}
                      >
                        {parameter.code}
                      </td>
                      <td
                        className={classNames(
                          parameterIdx !== parameters.length - 1
                            ? 'border-b border-gray-200'
                            : '',
                          'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell',
                        )}
                      >
                        {parameter.description}
                      </td>

                      <td
                        className={classNames(
                          parameterIdx !== parameters.length - 1
                            ? 'border-b border-gray-200'
                            : '',
                          'relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8',
                        )}
                      >
                        <Link
                          to={`/Parameter/${parameter.id}`}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                          <span className="sr-only">, {parameter.code}</span>
                        </Link>
                        <span className="mx-3 align-text-bottom">|</span>
                        <button
                          className=" text-red-600 hover:text-red-900"
                          onClick={() => handleOnDelete(parameter.id)}
                        >
                          Delete
                          <span className="sr-only">, {parameter.code}</span>
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
  )
}

export default Parameter
