import {Link} from 'react-router-dom'
import {
  ChevronRightIcon,
  DotsVerticalIcon,
  SearchIcon,
  SelectorIcon,
} from '@heroicons/react/solid'
import {PaperClipIcon} from '@heroicons/react/solid'

const Accordion = ({data, index, setIndex}) => {
  const {ApplID, ApplNo, Customer, DateAssign, AppraisalValue} = data
  const handleSetIndex = ApplID => {
    setIndex(index === ApplID ? false : ApplID)
  }

  return (
    <>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg mx-5 my-5">
        <div
          onClick={() => handleSetIndex(ApplID)}
          className="flex justify-between px-4 py-5 sm:px-6 ml-5 mr-5 cursor-pointer flex-col md:flex-row"
        >
          <div className="font-medium text-gray-600">{ApplID}</div>
          <div className="font-medium text-gray-600">{ApplNo}</div>
          <div className="font-medium text-gray-600">{Customer}</div>
          <div className="font-medium text-gray-600">{DateAssign}</div>
          <div className="font-medium text-gray-600">{AppraisalValue}</div>
        </div>
        {index === ApplID && (
          <div className=" border-gray-200 px-4 py-5 sm:px-6 border-t-2 ml-5 mr-5">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">จังหวัด</dt>
                <dd className="mt-1 text-sm text-gray-900">กรุงเทพมหานครฯ</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  การจ่ายงานพิเศษ
                </dt>
                <dd className="mt-1 text-sm text-gray-900">-</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  สาขารับเรื่อง
                </dt>
                <dd className="mt-1 text-sm text-gray-900">พระราม 9</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Salary expectation
                </dt>
                <dd className="mt-1 text-sm text-gray-900">$120,000</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">หมายเหตุ</dt>
                <dd className="mt-1 text-sm text-gray-900">-</dd>
              </div>
            </dl>
          </div>
        )}
      </div>
    </>
  )
}

export default Accordion
