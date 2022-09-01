import {useEffect, useState} from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom'
import {Formik, Form, Field} from 'formik'
import {Input, Remark, Dropdown} from '../../components/Form'
import axios from 'axios'
import {Switch} from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Create = () => {
  const {code, group} = useParams()
  const navigate = useNavigate()
  if (code == 'code') {
    return (
      <Formik
        initialValues={{group: '', description: '', localDescription: ''}}
        onSubmit={values => {
          console.log(values)
          const request = axios.post('api/generalcode/create/code', {...values})
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
              <p className="mt-1 max-w-2xl text-sm text-gray-500">Parameter</p>
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
                className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Create
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    )
  } else if (code == 'detail')
    return (
      <Formik
        initialValues={{
          group: group,
          code: '',
          description: '',
          order: '',
          language: 'TH',
          active: true,
        }}
        onSubmit={values => {
          const request = axios.post('api/generalcode/create/detail', {
            ...values,
          })
          request.then(resp => navigate(`/GeneralCode/Detail/${group}`)).catch()
        }}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({values, setFieldValue}) => (
          <Form>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="flex justify-start items-center gap-10">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    General Code
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
                      values.active ? 'bg-blue-600' : 'bg-gray-200',
                      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
                    )}
                  >
                    <span className="sr-only">Active</span>
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
                          className="h-3 w-3 text-blue-600"
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

              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-gray-50  px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Language
                    </dt>
                    <div className="col-span-1">
                      <Dropdown
                        id="language"
                        name="language"
                        as="select"
                        items={[
                          {value: 'th', text: 'TH'},
                          {value: 'en', text: 'EN'},
                        ]}
                        className="w-[100px]"
                      />
                    </div>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Group</dt>
                    <Input
                      id="group"
                      name="group"
                      type="text"
                      className="bg-gray-900"
                    />
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Code</dt>
                    <div className="col-span-1">
                      <Input
                        id="code"
                        name="code"
                        type="text"
                        className="bg-gray-900"
                      />
                    </div>
                  </div>
                  <div className="bg-white  px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
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
                    <dt className="text-sm font-medium text-gray-500">Order</dt>
                    <div className="col-span-1">
                      <Input
                        id="order"
                        name="order"
                        type="number"
                        className="bg-gray-900"
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
                  className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Create
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    )
}

export default Create
