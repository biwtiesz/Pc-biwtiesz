import {Link} from 'react-router-dom'
import {
  ChevronRightIcon,
  DotsVerticalIcon,
  SearchIcon,
  SelectorIcon,
} from '@heroicons/react/solid'
import {PaperClipIcon} from '@heroicons/react/solid'
import {Transition} from '@headlessui/react'

const Accordion = ({data, index, setIndex}) => {
  const {ApplID, ApplNo, AANo, Customer, DateAssign, AppraisalValue} = data
  const handleSetIndex = ApplID => {
    setIndex(index === ApplID ? false : ApplID)
  }
  return (
    <>
      <div
        className={`shadow overflow-hidden sm:rounded-lg mx-5 my-5 ring-1 hover:bg-[#fffdf6] hover:ring-[#ffb342] ${
          index === ApplID
            ? 'ring-[#ffb342] bg-[#fffdf6]'
            : 'ring-[#e9e9e9] bg-white'
        } `}
      >
        <div
          onClick={() => handleSetIndex(ApplID)}
          className="grid justify-start md:grid-cols-6 gap-1 md:gap-5 px-4 py-5 md:justify-items-center sm:px-6 cursor-pointer items-center "
        >
          <div className="font-medium text-gray-600">{ApplID}</div>
          <div className="font-medium text-gray-600">
            {ApplNo}
            <div className="font-medium text-gray-400">{AANo}</div>
          </div>
          <div className="font-medium text-[#e7b24d]">{Customer}</div>
          <div className="font-medium text-gray-600">{DateAssign}</div>
          <div className="font-medium text-gray-600">{AppraisalValue}</div>
        </div>
        <div
          className="border-gray-200 transition-all duration-300 overflow-hidden"
          style={{
            maxHeight: index === ApplID ? '300px' : '0px',
          }}
        >
          <div className="border-[#e9e9e9] border-b-2 ml-5 mr-5"></div>
          <dl className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2 p-6">
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
      </div>
    </>
  )
}

export default Accordion
