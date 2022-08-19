import {Link} from 'react-router-dom'
import {
  ChevronRightIcon,
  DotsVerticalIcon,
  SearchIcon,
  SelectorIcon,
} from '@heroicons/react/solid'
import Accordion from '../components/Accordion'
import {useState} from 'react'
import {FilterIcon} from '@heroicons/react/outline'

const Table = () => {
  const [index, setIndex] = useState(false)
  const works = [
    {
      ApplID: 1,
      ApplNo: 'AP65000001',
      Customer: 'Prajakpong Prajusup',
      DateAssign: '2022-08-19',
      AppraisalValue: '9,999,999',
    },
    {
      ApplID: 2,
      ApplNo: 'AP65000001',
      Customer: 'Prajakpong Prajusup',
      DateAssign: '2022-08-19',
      AppraisalValue: '9,999,999',
    },
    {
      ApplID: 3,
      ApplNo: 'AP65000001',
      Customer: 'Prajakpong Prajusup',
      DateAssign: '2022-08-19',
      AppraisalValue: '9,999,999',
    },
    {
      ApplID: 4,
      ApplNo: 'AP65000001',
      Customer: 'Prajakpong Prajusup',
      DateAssign: '2022-08-19',
      AppraisalValue: '9,999,999',
    },

    {
      ApplID: 5,
      ApplNo: 'AP65000001',
      Customer: 'Prajakpong Prajusup',
      DateAssign: '2022-08-19',
      AppraisalValue: '9,999,999',
    },
  ]

  return (
    <>
      <div className="m-8">
        <div className="flex justify-between ml-5 mr-5 mb-5">
          <div className="flex grow">
            <form className="w-full flex md:ml-0" action="#" method="GET">
              <label htmlFor="search-field" className="sr-only">
                Search
              </label>
              <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                <div className="absolute inset-y-0 left-1 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="search-field"
                  name="search-field"
                  className="focus:ring-orange-500 focus:border-orange-500 border-gray-300 rounded-md block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-600 font-semibold focus:placeholder-gray-400 sm:text-sm"
                  placeholder="Application No"
                  type="text"
                />
              </div>
            </form>
          </div>
          <div className="grow"></div>
          <div className="grow"></div>
          <div>
            <FilterIcon
              className=" h-8 w-8 font-medium text-gray-600"
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="flex justify-self-start gap-5 ml-5 mr-5 mb-5 items-center border-b-2 border-gray-600-500 h-10">
          <div className="font-medium text-gray-600">Workspace</div>
          <div className="font-medium text-gray-600">Pool</div>
        </div>
        <div className="flex justify-between sm:px-5 ml-8 mr-8 flex-col md:flex-row">
          <div className="font-medium text-gray-600">ลำดับแฟ้ม</div>
          <div className="font-medium text-gray-600">หมายเลขแฟ้ม</div>
          <div className="font-medium text-gray-600">ชื่อลูกค้า</div>
          <div className="font-medium text-gray-600">วันที่ร้องขอ</div>
          <div className="font-medium text-gray-600">ราคาประเมิน</div>
        </div>
        {works.map(work => {
          return (
            <Accordion
              data={work}
              index={index}
              setIndex={setIndex}
            ></Accordion>
          )
        })}
      </div>
    </>
  )
}

export default Table
