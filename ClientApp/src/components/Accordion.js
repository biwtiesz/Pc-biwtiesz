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

  return <></>
}

export default Accordion
