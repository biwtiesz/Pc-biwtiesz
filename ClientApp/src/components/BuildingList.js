import {PlusIcon} from '@heroicons/react/solid'

const BuildingList = ({buildings, onAdd}) => {
  return (
    <>
      <div className="flex flex-col space-y-2 items-center md:flex-row md:space-x-2 md:space-y-0">
        <div
          key={''}
          className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 hover:ring-2  hover:ring-indigo-500"
          onClick={onAdd}
        >
          <div className="flex-1 min-w-0">
            <div className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="mb-2 text-md font-medium text-gray-900">{'3/48'}</p>
              <p className="text-sm text-gray-500 truncate">
                {'บ้านเดียว 1 ชั้น'}
              </p>
              <p className="text-sm text-gray-500 truncate">
                {'ผลการก่อสร้าง 100%'}
              </p>
            </div>
          </div>
        </div>
        <div
          key={''}
          className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 hover:ring-2  hover:ring-indigo-500"
          onClick={onAdd}
        >
          <div className="flex-1 min-w-0">
            <div className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="mb-2 text-md font-medium text-gray-900">{'3/48'}</p>
              <p className="text-sm text-gray-500 truncate">
                {'บ้านเดียว 3 ชั้น'}
              </p>
              <p className="text-sm text-gray-500 truncate">
                {'ผลการก่อสร้าง 100%'}
              </p>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="inline-flex items-center px-3 py-3 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 capitalize"
          onClick={onAdd}
        >
          <PlusIcon className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </>
  )
}

export default BuildingList
