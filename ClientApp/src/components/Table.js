import {Link} from 'react-router-dom'
import {
  ChevronRightIcon,
  DotsVerticalIcon,
  SearchIcon,
  SelectorIcon,
} from '@heroicons/react/solid'
import Accordion from '../components/Accordion'
import {useState} from 'react'

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
  ]

  return (
    <>
      <div className="flex justify-center items-center">
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
