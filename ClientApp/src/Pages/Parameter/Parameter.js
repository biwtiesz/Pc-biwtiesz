import {useEffect, useState} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'

import parameterjson from '../../assets/Json/Parameter.json'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// const Parameter = () => {
//     const {group} = useParams()
//     const [parameters, setParameters] = useState([])
//     const [language, setLanguage] = useState("th")
//     const navigate = useNavigate()
//     useEffect(() => {
//         axios
//             .get(`api/parameter/search?group=${group}`)
//             .then(resp => setParameters(resp.data))
//             .catch()
//     }, [])

//     const handleLanguageOnChange = (event) => {

//         setLanguage(event.currentTarget.value)
//     }

const Parameter = () => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg px-5 py-5">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Parameter
        </h3>
      </div>
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
                          Name
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
                      {parameterjson.map((parameterjson, parameterjsonIdx) => (
                        <tr key={parameterjsonIdx}>
                          <td
                            className={classNames(
                              parameterjsonIdx !== parameterjson.length - 1
                                ? 'border-b border-gray-200'
                                : '',
                              'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8',
                            )}
                          >
                            {parameterjson.name}
                          </td>
                          <td
                            className={classNames(
                              parameterjsonIdx !== parameterjson.length - 1
                                ? 'border-b border-gray-200'
                                : '',
                              'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell',
                            )}
                          >
                            {parameterjson.description}
                          </td>
                          <td
                            className={classNames(
                              parameterjsonIdx !== parameterjson.length - 1
                                ? 'border-b border-gray-200'
                                : '',
                              'relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8',
                            )}
                          >
                            <Link
                              to={`/${parameterjson.name}/`}
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              View
                              <span className="sr-only">
                                , {parameterjson.name}
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
  )
}

export default Parameter
