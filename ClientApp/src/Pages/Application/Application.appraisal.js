import React, {useState} from 'react'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import {ExclamationCircleIcon} from '@heroicons/react/solid'

const formInput = ({label, name, error, touched}) => (
  <>
    <div
      className={
        error
          ? 'relative border  rounded-md px-3 py-2 shadow-sm ring-1 ring-red-600 border-red-600'
          : 'relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600'
      }
    >
      <Field
        type="text"
        id={name}
        name={name}
        className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
      />
      {error && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <ExclamationCircleIcon
            className="h-5 w-5 text-red-500"
            aria-hidden="true"
          />
        </div>
      )}
    </div>
  </>
)

const formInputLabel = ({label, name, error, touched}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <div className="mt-1 relative">
      <Field
        type="text"
        name={name}
        id={name}
        className={
          error
            ? 'shadow-sm ring-1 ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm  rounded-md'
            : 'shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
        }
      />
      {error && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <ExclamationCircleIcon
            className="h-5 w-5 text-red-500"
            aria-hidden="true"
          />
        </div>
      )}
    </div>
  </div>
)

const formDropdown = ({label, name, items = []}) => (
  <Field
    id={name}
    name={name}
    as="select"
    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
    defaultValue="Canada"
  >
    {items.map(i =>
      i.value ? (
        <option value={i.value}>{i.text}</option>
      ) : (
        <option>Please select</option>
      ),
    )}
  </Field>
)

const formDropdownLabel = ({label, name, items = []}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <Field
      id={name}
      name={name}
      as="select"
      className="block mt-1 w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      defaultValue="Canada"
    >
      {items.map(i =>
        i.value ? (
          <option value={i.value}>{i.text}</option>
        ) : (
          <option>Please select</option>
        ),
      )}
    </Field>
  </div>
)

const formCheckbox = ({label, name}) => (
  <div className="relative flex items-start">
    <div className="flex items-center h-5">
      <Field
        id={name}
        aria-describedby={`${name}-description`}
        name={name}
        type="checkbox"
        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
      />
    </div>
    <div className="ml-3 text-sm">
      <label htmlFor={name} className="font-medium text-gray-700">
        {label}
      </label>
      {/* <p id="comments-description" className="text-gray-500">
        Get notified when someones posts a comment on a posting.
      </p> */}
    </div>
  </div>
)

const formCheckboxWithDescription = ({label, name, value: checked}) => (
  <>
    <div className="relative flex items-start">
      <div className="flex items-center h-5">
        <Field
          id={name}
          aria-describedby={`${name}-description`}
          name={name}
          type="checkbox"
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={name} className="font-medium text-gray-700">
          {label}
        </label>
        {/* <p id="comments-description" className="text-gray-500">
        Get notified when someones posts a comment on a posting.
      </p> */}
      </div>
    </div>
    {checked && (
      <textarea
        rows={4}
        name={`${name}Note`}
        id={`${name}Note`}
        className="mt-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        defaultValue={''}
      />
    )}
  </>
)

const fieldTemplate = [
  {
    label: 'จังหวัด',
    child: [
      {
        label: 'Province',
        name: 'province',
        col: 1,
        items: [{value: null}],
        render: formDropdown,
      },
      {
        label: 'Other',
        name: 'provinceOther',
        col: 2,
        required: true,
        render: formInput,
      },
    ],
  },
  {
    label: 'อำเภอ',
    child: [
      {
        label: 'District',
        name: 'district',
        col: 1,
        items: [{value: null}],
        render: formDropdown,
      },
      {
        label: 'Other',
        name: 'dictrictOther',
        col: 2,
        required: true,
        render: formInput,
      },
    ],
  },
  {
    label: 'ตำบล',
    child: [
      {
        label: 'Subdistrict',
        name: 'subDistrict',
        col: 1,
        items: [{value: null}],
        render: formDropdown,
      },
      {
        label: 'Other',
        name: 'subDistrictOther',
        col: 2,
        required: true,
        render: formInput,
      },
    ],
  },
  {
    label: 'เลขที่โฉนด',
    child: [
      {
        name: 'documentNo',
        col: 2,
        required: true,
        render: formInput,
      },
    ],
  },
  {
    label: 'ระวางรูปถ่ายทางอากาศชื่อ',
    child: [
      {
        name: 'aerialPhoto',
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: 'เลขที่ดิน',
    child: [
      {
        name: 'landNo',
        col: 2,
        required: true,
        render: formInput,
      },
    ],
  },
  {
    label: 'หมายเลข',
    child: [
      {
        name: 'aerialPhotoNumber',
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: 'แผ่นที่',
    child: [
      {
        name: 'aerialPhotoPageNumber',
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: 'ทะเบียนเลขที่',
    child: [
      {
        name: 'registerNumber',
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: 'เล่มที่',
    child: [
      {
        name: 'bookNo',
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: 'หน้าที่',
    child: [
      {
        name: 'pageNo',
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: 'หน้าสำรวจ',
    child: [
      {
        name: 'surveySurface',
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: 'ระวาง',
    child: [
      {
        name: 'liable',
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: 'เนื้อที่ดิน(ตารางวา)',
    child: [
      {
        name: 'landSizeSqM',
        col: 2,
        required: true,
        render: formInput,
      },
    ],
  },
  {
    label: 'ตำแหน่งที่ดิน',
    row: 3,
    child: [
      {
        label: 'ตำแหน่งที่ดิน',
        name: 'landPosition',
        col: 2,
        items: [
          {value: null},
          {text: 'ถูกต้อง', value: '01'},
          {text: 'ไม่ถูกต้อง', value: '02'},
        ],
        render: formDropdownLabel,
      },
      {
        label: 'ตรวจจาก',
        name: 'checkBy',
        col: 2,
        items: [
          {value: null},
          {text: 'แปลงคง', value: 'plang'},
          {text: 'ระวาง', value: 'rawang'},
          {text: 'อื่น', value: 'other'},
        ],
        render: formDropdownLabel,
      },
      {
        label: 'ตั้งอยู่บนถนน',
        name: 'street',
        col: 4,
        required: true,
        render: formInputLabel,
      },
      {
        label: 'แยกเข้าซอย',
        name: 'splitEntry',
        col: 3,
        render: formInputLabel,
      },
      {
        label: 'ระยะทาง(เมตร)',
        name: 'distance',
        col: 1,
        render: formInputLabel,
      },
    ],
  },
  {
    label: 'อื่นๆ',
    child: [
      {
        name: 'other',
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: 'สภาพที่ดิน',
    child: [
      {
        label: 'สภาพที่ดิน',
        name: 'landCondition',
        col: 1,
        render: formDropdownLabel,
      },
      {
        label: 'ระดับดิน(ซม.)',
        name: 'avgLandReclamation',
        col: 1,
        render: formInputLabel,
      },
    ],
  },
  {
    label: 'ตำแหน่งพิกัดละติจูด',
    child: [
      {
        name: 'positionLatitude',
        col: 2,
        required: true,
        render: formInput,
      },
    ],
  },
  {
    label: 'ตำแหน่งพิกัดลองติจูด',
    child: [
      {
        name: 'positionLongtitude',
        col: 2,
        required: true,
        render: formInput,
      },
    ],
  },
  {
    label: 'สิ่งปลูกสร้าง',
    name: 'withBuilding',
    col: 2,
    items: [
      {value: null},
      {text: 'ไม่มีสิ่งปลูกสร้าง', value: '02'},
      {text: 'มีสิ่งปลูกสร้าง', value: '01'},
    ],
    render: formDropdownLabel,
  },
  {
    label: 'กู้ประเภทอื่นๆ',
    name: 'otherLoan',
    col: 2,
    items: [
      {value: null},
      {text: 'ใช่', value: 'Y'},
      {text: 'ไม่ใช่', value: 'N'},
    ],
    render: formDropdownLabel,
  },
  {
    label: 'เนื้อที่บ่อน้ำ(ตารางวา)',
    child: [
      {
        name: 'pondAreaPct',
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: 'ความลึกโดยประมาณ(เมตร)',
    child: [
      {
        name: 'pondDepthEstimation',
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: 'ถนนผ่านหน้าที่ดิน',
    row: 3,
    child: [
      {
        label: 'ถนนผ่านหน้าที่ดิน',
        name: 'roadToLand',
        col: 2,
        items: [
          {value: null},
          {text: 'ทางเดินเท้า', value: '02'},
          {text: 'ทางรถยนต์', value: '01'},
        ],
        render: formDropdownLabel,
      },
      {
        label: 'ลักษณะผิวจราจร',
        name: 'roadSurface',
        col: 2,
        items: [
          {value: null},
          {text: 'คอนกรีตเสริมเหล็ก', value: '01'},
          {text: 'ลูกรัง/หินคลุก', value: '02'},
          {text: 'ดิน', value: '03'},
          {text: 'ลาดยาง', value: '04'},
        ],
        render: formDropdownLabel,
      },
      {
        label: 'ผิวจราจรกว้าง(เมตร)',
        name: 'RoadSurfaceWidth',
        col: 2,
        render: formInputLabel,
      },
      {
        label: 'เขตทาง(เมตร)',
        name: 'pedestrianWay',
        col: 2,
        render: formInputLabel,
      },
      {
        label: 'รถยนต์เข้า-ออก',
        name: 'carAccess',
        col: 2,
        items: [
          {value: null},
          {text: 'ได้', value: '01'},
          {text: 'ไม่ได้', value: '02'},
        ],
        render: formDropdownLabel,
      },
      {
        label: 'ทางเข้า-ออก',
        name: 'entranceExit',
        col: 2,
        items: [
          {value: null},
          {text: 'ไม่มีปัญหา', value: '01'},
          {text: 'มีปัญหา', value: '02'},
        ],
        render: formDropdownLabel,
      },
      {
        label: 'ต้องมีการปรับปรุงสภาพทาง',
        name: 'entranceExitCondition',
        col: 2,
        render: formInputLabel,
      },
    ],
  },
  {
    label: 'ประเมินราคา',
    child: [
      {
        name: 'appraised',
        col: 2,
        items: [
          {value: null},
          {text: 'ประเมินราคา', value: '01'},
          {text: 'ไม่ประเมินราคา', value: '02'},
        ],
        render: formDropdownLabel,
      },
    ],
  },
  {
    label: 'ลักษณะที่ดิน',
    child: [
      {
        name: 'allocation',
        col: 2,
        items: [
          {value: null},
          {text: 'จัดสรรโครงการใหม่', value: '01'},
          {text: 'จัดสรรโครงการเก่า', value: '02'},
          {text: 'ไม่จัดสรร', value: '03'},
        ],
        render: formDropdownLabel,
      },
    ],
  },
  {
    label: 'หมายเหตุไม่ประเมินราคาเนื่องจาก',
    child: [
      {
        name: 'appraisedNote',
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: 'เนื้อที่ถูกลุกล้ำ/ใช้เพื่อบุคคลอื่น(ตารางวา)',
    child: [
      {
        name: 'spaceEncroached',
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: 'สาธารณูปโภค',
    row: 5,
    child: [
      {
        label: 'ไฟฟ้าถนน',
        name: 'cbPublicUtility03',
        col: 4,
        render: formCheckbox,
      },
      {
        label: 'ไฟฟ้าถาวร',
        name: 'cbPublicUtility01',
        col: 4,
        render: formCheckbox,
      },
      {
        label: 'ท่อระบายน้ำ/บ่อพัก',
        name: 'cbPublicUtility04',
        col: 4,
        render: formCheckbox,
      },
      {
        label: 'น้ำประปา/น้ำบาดาล',
        name: 'cbPublicUtility02',
        col: 4,
        render: formCheckbox,
      },
      {
        label: 'อื่นๆ',
        name: 'otherUtility',
        col: 4,
        render: formCheckboxWithDescription,
      },
    ],
  },
  {
    label: 'สโมสร',
    child: [
      {
        name: 'club',
        col: 1,
        items: [
          {value: null},
          {text: 'มี', value: '1'},
          {text: 'ไม่มี', value: '2'},
        ],
        render: formDropdownLabel,
      },
    ],
  },
  {
    label: 'ระบบรักษาความปลอดภัย',
    child: [
      {
        name: 'securitySystem',
        col: 1,
        items: [
          {value: null},
          {text: 'มี', value: '1'},
          {text: 'ไม่มี', value: '2'},
        ],
        render: formDropdownLabel,
      },
    ],
  },
  {
    label: 'สนามกีฬากลางแจ้ง',
    child: [
      {
        name: 'stadium',
        col: 1,
        items: [
          {value: null},
          {text: 'มี', value: '1'},
          {text: 'ไม่มี', value: '2'},
        ],
        render: formDropdownLabel,
      },
    ],
  },
  {
    label: 'ระบบคีย์การ์ด',
    child: [
      {
        name: 'keyCardSystem',
        col: 1,
        items: [
          {value: null},
          {text: 'มี', value: '1'},
          {text: 'ไม่มี', value: '2'},
        ],
        render: formDropdownLabel,
      },
    ],
  },
  {
    label: 'โรงเรียนอนุบาล',
    child: [
      {
        name: 'kindergarten',
        col: 1,
        items: [
          {value: null},
          {text: 'มี', value: '1'},
          {text: 'ไม่มี', value: '2'},
        ],
        render: formDropdownLabel,
      },
    ],
  },
  {
    label: 'ระบบการทิ้งและกำจัดขยะ',
    child: [
      {
        name: 'wasteDisposalSystem',
        col: 1,
        items: [
          {value: null},
          {text: 'มี', value: '1'},
          {text: 'ไม่มี', value: '2'},
        ],
        render: formDropdownLabel,
      },
    ],
  },
  {
    label: 'การพัฒนาในพื้นที่',
    child: [
      {
        name: 'anyDevelopment',
        col: 1,
        items: [
          {value: null},
          {text: 'มีการพัฒนาประเภทพานิชยกรรมเป็นส่วนใหญ่', value: '01'},
          {
            text: 'มีการพัฒนาประเภทพานิชยกรรมสลับที่อยู่อาศัย หรืออุตสาหกรรมเป็นส่วนใหญ่',
            value: '02',
          },
          {text: 'มีการพัฒนาประเภทที่อยู่อาศัยเป็นส่วนใหญ่', value: '03'},
          {text: 'มีการพัฒนาประเภทเกษตรกรรมเป็นส่วนใหญ่', value: '04'},
          {
            text: 'ยังไม่มีการพัฒนา ส่วนใหญ่เป็นที่รกร้างว่างเปล่า',
            value: '05',
          },
        ],
        render: formDropdownLabel,
      },
    ],
  },
  {
    label: 'ข้อกำหนดผังเมือง',
    child: [
      {
        name: 'townPlanReq',
        col: 1,
        items: [
          {value: null},
          {text: 'ย่านพานิชยกรรม', value: '01'},
          {text: 'ย่านที่อยู่อาศัยหนาแน่นมาก', value: '02'},
          {text: 'ย่านที่อยู่อาศัยหนาแน่นปานกลาง', value: '03'},
          {text: 'ย่านที่อยู่อาศัยหนาแน่นน้อย', value: '04'},
          {text: 'อื่นๆ ที่ยาก/ มีข้อจำกัดต่อการพัฒนา', value: '05'},
        ],
        render: formDropdownLabel,
      },
    ],
  },
  {
    label: 'ลักษณะทางกายภาพ/รูปแปลง',
    child: [
      {
        name: 'physicalReputation',
        col: 1,
        items: [
          {value: null},
          {
            text: 'รูปร่างกับเนื้อที่ดินมีความเหมาะสมต่อการพัฒนาทำประโยชน์มาก',
            value: '01',
          },
          {
            text: 'รูปร่างกับเนื้อที่ดินมีความเหมาะสมต่อการพัฒนาทำประโยชน์ปานกลาง',
            value: '02',
          },
          {
            text: 'รูปร่างกับเนื้อที่ดินไม่มีความเหมาะสมต่อการพัฒนาทำประโยชน์',
            value: '03',
          },
        ],
        render: formDropdownLabel,
      },
    ],
  },
  {
    label: 'ตำแหน่งที่ตั้ง',
    child: [
      {
        name: 'location',
        col: 1,
        items: [
          {value: null},
          {text: 'ติดถนนสายหลัก', value: '01'},
          {text: 'ติดถนนสายรอง', value: '02'},
          {text: 'ติดถนนซอย ถนนเมนในโครงการ', value: '03'},
          {text: 'ติดซอยแยก ซอยตัน', value: '04'},
          {text: 'แหล่งมลพิษ ไม่เป็นที่นิยม', value: '05'},
        ],
        render: formDropdownLabel,
      },
    ],
  },
  {
    label: 'ชื่อเสียงโครงการ (ผู้ประกอบการ)',
    child: [
      {
        name: 'projReputation',
        col: 1,
        items: [
          {value: null},
          {text: 'เป็นที่รู้จักดีมาก', value: '01'},
          {text: 'เป็นที่รู้จักปานกลาง', value: '02'},
          {text: 'เป็นที่รู้จักน้อย', value: '03'},
          {text: 'ไม่มีเป็นที่รู้จัก', value: '04'},
          {text: 'ไม่ระบุ', value: '05'},
        ],
        render: formDropdownLabel,
      },
    ],
  },
  {
    label: 'สภาพแวดล้อม',
    row: 5,
    child: [
      {
        label: 'ที่ดินรกร้าง ว่างเปล่า ห่างไกลชุมชน',
        name: 'cbEnvironment05',
        col: 2,
        render: formCheckbox,
      },
      {
        label: 'ย่านเกษตรกรรม',
        name: 'cbEnvironment08',
        col: 2,
        render: formCheckbox,
      },
      {
        label: 'ย่านที่อยู่อาศัยประปราย ชนบท',
        name: 'cbEnvironment04',
        col: 2,
        render: formCheckbox,
      },
      {
        label: 'ย่านที่อยู่อาศัยสลับพานิชยกรรม',
        name: 'cbEnvironment10',
        col: 2,
        render: formCheckbox,
      },
      {
        label: 'ย่านที่อยู่อาศัยหนาแน่นน้อย',
        name: 'cbEnvironment03',
        col: 2,
        render: formCheckbox,
      },
      {
        label: 'ย่านที่อยู่อาศัยหนาแน่นปานกลาง',
        name: 'cbEnvironment02',
        col: 2,
        render: formCheckbox,
      },
      {
        label: 'ย่านที่อยู่อาศัยหนาแน่นมาก',
        name: 'cbEnvironment01',
        col: 2,
        render: formCheckbox,
      },
      {
        label: 'ย่านธุรกิจการค้าใจกลางเมือง',
        name: 'cbEnvironment09',
        col: 2,
        render: formCheckbox,
      },
      {
        label: 'ย่านพานิชยกรรม',
        name: 'cbEnvironment06',
        col: 2,
        render: formCheckbox,
      },
      {
        label: 'ย่านอุตสาหกรรม',
        name: 'cbEnvironment07',
        col: 2,
        render: formCheckbox,
      },
    ],
  },
  {
    label: 'มลภาวะ',
    row: 5,
    child: [
      {
        label: 'โรงฆ่าสัตว์',
        name: 'cbPollution06',
        col: 2,
        render: formCheckbox,
      },
      {
        label: 'โรงงาน',
        name: 'cbPollution07',
        col: 2,
        render: formCheckbox,
      },
      {
        label: 'ไฟฟ้าแรงสูง',
        name: 'cbPollution02',
        col: 2,
        render: formCheckbox,
      },
      {
        label: 'ที่ทิ้งของเสีย',
        name: 'cbPollution05',
        col: 2,
        render: formCheckbox,
      },
      {
        label: 'บ่อขยะ',
        name: 'cbPollution03',
        col: 2,
        render: formCheckbox,
      },
      {
        label: 'บ่อน้ำ',
        name: 'cbPollution01',
        col: 2,
        render: formCheckbox,
      },
      {
        label: 'บ่อบำบัด',
        name: 'cbPollution04',
        col: 4,
        render: formCheckbox,
      },
      {
        label: 'อื่นๆ',
        name: 'cbPollution08',
        col: 4,
        render: formCheckboxWithDescription,
      },
    ],
  },
  {
    label: 'สภาพคล่อง',
    row: 5,
    child: [
      {
        label: 'ไม่มีการซื้อขายเปลี่ยนมือ',
        name: 'cbLiquidity04',
        col: 4,
        render: formCheckbox,
      },
      {
        label: 'ไม่ระบุ',
        name: 'cbLiquidity05',
        col: 4,
        render: formCheckbox,
      },
      {
        label: 'มีการซื้อขายเปลี่ยนมือปริมาณน้อย',
        name: 'cbLiquidity03',
        col: 4,
        render: formCheckbox,
      },
      {
        label: 'มีการซื้อขายเปลี่ยนมือปริมาณปานกลาง',
        name: 'cbLiquidity02',
        col: 4,
        render: formCheckbox,
      },
      {
        label: 'มีการซื้อขายเปลี่ยนมือปริมาณมาก',
        name: 'cbLiquidity01',
        col: 4,
        render: formCheckbox,
      },
    ],
  },
  {
    label: 'ทิศที่ตั้งหลักประกัน',
    child: [
      {
        name: 'collatFaceDirection',
        col: 2,
        items: [
          {value: null},
          {text: 'ทิศเหนือ', value: '01'},
          {text: 'ทิศใต้', value: '02'},
          {text: 'ทิศตะวันออก', value: '03'},
          {text: 'ทิศตะวันตก', value: '04'},
          {text: 'ทิศตะวันออกเฉียงใต้', value: '05'},
          {text: 'ทิศตะวันตกเฉียงใต้', value: '06'},
          {text: 'ทิศตะวันออกเฉียงเหนือ', value: '07'},
          {text: 'ทิศตะวันตกเฉียงเหนือ', value: '08'},
        ],
        render: formDropdownLabel,
      },
    ],
  },
  {
    label: 'หมายเหตุ',
    child: [
      {
        name: 'remark',
        col: 2,
        render: formInput,
      },
    ],
  },
]
// อาคาร
const fieldTemplate2 = [
  {
    label: 'บ้านเลขที่',
    child: [
      {
        name: 'houseNo',
        col: 2,
        required: true,
        render: formInput,
      },
    ],
  },
  {
    label: 'ก่อสร้างบนโฉนดเลขที่',
    child: [
      {
        name: 'constDeedNo',
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: 'ตำแหน่งก่อสร้าง',
    name: 'constSite',
    col: 2,
    items: [
      {value: null},
      {text: 'ไม่รุกล้ำ', value: '01'},
      {text: 'รุกล้ำ', value: '02'},
    ],
    render: formDropdownLabel,
  },
  {
    label: 'ส่วน/ขนาดที่รุกล้ำ(ตารางเมตร)',
    child: [
      {
        name: 'sectionScaleEncr',
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: 'สภาพการก่อสร้าง',
    child: [
      {
        label: 'ก่อสร้างแล้วเสร็จ(อาคารเดิม)',
        name: 'constProgOriBuilding',
        col: 1,
        items: [{value: null}],
        render: formInput,
      },
      {
        label: 'ก่อสร้างแล้วเสร็จ(ปลูกสร้าง/ต่อเติม)',
        name: 'constProgExpand',
        col: 1,
        items: [{value: null}],
        render: formInput,
      },
    ],
  },
  {
    label: 'อายุอาคาร(ปี)',
    child: [
      {
        name: 'buildingYr',
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: 'วันที่ใบอนุญาตก่อสร้างหมดอายุ',
    child: [
      {
        name: 'constPermitDate',
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: 'ประเภทอาคาร',
    child: [
      {
        name: 'buildingType',
        col: 2,
        required: true,
        items: [
          {value: null},
          {text: 'ตึก', value: '01'},
          {text: 'ไม้', value: '02'},
          {text: 'ตึกครึ่งไม้', value: '03'},
        ],
        render: formDropdownLabel,
      },
    ],
  },
  {
    label: 'ลักษณะอาคาร',
    child: [
      {
        name: 'buildingModel',
        col: 2,
        required: true,
        items: [
          {value: null},
          {text: 'บ้านเดี่ยว', value: '01'},
          {text: 'บ้านแฝด', value: '02'},
          {text: 'ทาวน์เฮ้าส์', value: '03'},
          {text: 'อาคารพาณิชย์', value: '04'},
          {text: 'แฟลต', value: '05'},
          {text: 'ห้องชุด', value: '06'},
          {text: 'อาคารชุด', value: '07'},
          {text: 'บ้านทรงไทย', value: '08'},
          {text: 'อื่นๆ', value: '99'},
        ],
        render: formDropdownLabel,
      },
    ],
  },
  {
    label: 'รูปแบบอาคาร',
    child: [
      {
        name: 'buildingCond',
        col: 2,
        items: [
          {value: null},
          {text: 'ธรรมดา', value: '01'},
          {text: 'ดี', value: '02'},
          {text: 'ดีมาก', value: '03'},
        ],
        render: formDropdownLabel,
      },
    ],
  },
  {
    label: 'จำนวนชั้น',
    child: [
      {
        name: 'NoOfFloor',
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: 'การใช้อยู่อาศัย',
    child: [
      {
        name: 'isResidential',
        col: 2,
        items: [
          {value: null},
          {text: 'ได้', value: 'Y'},
          {text: 'ไม่ได้', value: 'N'},
        ],
        render: formDropdownLabel,
      },
    ],
  },
  {
    label: 'โครงหลังคา',
    child: [
      {
        name: 'roofFrame',
        col: 2,
        items: [
          {value: null},
          {text: 'คอนกรีตเสริมเหล็ก', value: '01'},
          {text: 'ไม้', value: '02'},
          {text: 'เหล็ก', value: '03'},
          {text: 'อื่นๆ', value: '04'},
          {text: 'ตรวจสอบไม่ได้', value: '05'},
        ],
        render: formDropdownLabel,
      },
    ],
  },
  {
    label: 'หลังคา',
    child: [
      {
        name: 'roof',
        col: 2,
        items: [
          {value: null},
          {text: 'คอนกรีตเสริมเหล็ก', value: '01'},
          {text: 'กระเบื้อง', value: '02'},
          {text: 'กระเบื้องลอน', value: '03'},
          {text: 'เมทัลชีท', value: '04'},
          {text: 'ไวนิล', value: '05'},
          {text: 'กระเบื้องดินเผา', value: '06'},
          {text: 'สังกะสี', value: '07'},
          {text: 'ตรวจสอบไม่ได้', value: '08'},
          {text: 'อื่นๆ', value: '09'},
        ],
        render: formDropdownLabel,
      },
    ],
  },
  {
    label: 'ผนัง',
    child: [
      {
        name: 'wall',
        col: 2,
        items: [
          {value: null},
          {text: 'ก่ออิฐ', value: '01'},
          {text: 'กระเบื้องแผ่นเรียบ', value: '02'},
          {text: 'ไม้', value: '03'},
          {text: 'ผนังสำเร็จรูป', value: '04'},
          {text: 'อื่น ๆ', value: '05'},
        ],
        render: formDropdownLabel,
      },
    ],
  },
  {
    label: 'การทาสี',
    child: [
      {
        name: 'painting',
        col: 2,
        items: [
          {value: null},
          {text: 'ทาสี', value: '01'},
          {text: 'ไม่ทาสี', value: '02'},
        ],
        render: formDropdownLabel,
      },
    ],
  },
  {
    label: 'พื้นชั้น 1',
    child: [
      {
        name: 'floor1',
        col: 2,
        items: [
          {value: null},
          {text: 'คอนกรีตเสริมเหล็ก', value: '01'},
          {text: 'ไม้', value: '02'},
          {text: 'สมาร์ทบอร์ด', value: '03'},
          {text: 'อื่นๆ', value: '04'},
        ],
        render: formDropdownLabel,
      },
    ],
  },
  {
    label: 'ผิวพื้นชั้น1',
    child: [
      {
        name: 'floor1Surface',
        col: 2,
        items: [
          {value: null},
          {text: 'กระเบื้อง', value: '01'},
          {text: 'กระเบื้องเซรามิค(เคลือบ)', value: '02'},
          {text: 'กระเบื้องดินเผา', value: '03'},
          {text: 'แกรนิตโต้', value: '04'},
          {text: 'กระเบื้องยาง', value: '05'},
          {text: 'ไม้ / ปาร์เก้', value: '06'},
          {text: 'หินอ่อน', value: '07'},
          {text: 'หินขัด', value: '08'},
          {text: 'พื้นปูนขัดมัน', value: '09'},
          {text: 'ลามิเนต', value: '10'},
          {text: 'อื่น ๆ', value: '11'},
        ],
        render: formDropdownLabel,
      },
    ],
  },
  {
    label: 'พื้นชั้น 2',
    child: [
      {
        name: 'floor2',
        col: 2,
        items: [
          {value: null},
          {text: 'คอนกรีตเสริมเหล็ก', value: '01'},
          {text: 'ไม้', value: '02'},
          {text: 'สมาร์ทบอร์ด', value: '03'},
          {text: 'อื่นๆ', value: '04'},
        ],
        render: formDropdownLabel,
      },
    ],
  },
  {
    label: 'ผิวพื้นชั้น2',
    child: [
      {
        name: 'floor2Surface',
        col: 2,
        items: [
          {value: null},
          {text: 'กระเบื้อง', value: '01'},
          {text: 'กระเบื้องเซรามิค(เคลือบ)', value: '02'},
          {text: 'กระเบื้องดินเผา', value: '03'},
          {text: 'แกรนิตโต้', value: '04'},
          {text: 'กระเบื้องยาง', value: '05'},
          {text: 'ไม้ / ปาร์เก้', value: '06'},
          {text: 'หินอ่อน', value: '07'},
          {text: 'หินขัด', value: '08'},
          {text: 'พื้นปูนขัดมัน', value: '09'},
          {text: 'ลามิเนต', value: '10'},
          {text: 'อื่น ๆ', value: '11'},
        ],
        render: formDropdownLabel,
      },
    ],
  },
  {
    label: 'หมายเหตุพื้นชั้นอื่นๆ',
    child: [
      {
        name: 'othFloor',
        col: 2,
        items: [
          {value: null},
          {text: 'คอนกรีตเสริมเหล็ก', value: '01'},
          {text: 'ไม้', value: '02'},
          {text: 'สมาร์ทบอร์ด', value: '03'},
          {text: 'อื่นๆ', value: '04'},
        ],
        render: formDropdownLabel,
      },
    ],
  },
  {
    label: 'หมายเหตุผิวพื้นชั้นอื่นๆ',
    child: [
      {
        name: 'othFloorSurface',
        col: 2,
        items: [
          {value: null},
          {text: 'กระเบื้อง', value: '01'},
          {text: 'กระเบื้องเซรามิค(เคลือบ)', value: '02'},
          {text: 'กระเบื้องดินเผา', value: '03'},
          {text: 'แกรนิตโต้', value: '04'},
          {text: 'กระเบื้องยาง', value: '05'},
          {text: 'ไม้ / ปาร์เก้', value: '06'},
          {text: 'หินอ่อน', value: '07'},
          {text: 'หินขัด', value: '08'},
          {text: 'พื้นปูนขัดมัน', value: '09'},
          {text: 'ลามิเนต', value: '10'},
          {text: 'อื่น ๆ', value: '11'},
        ],
        render: formDropdownLabel,
      },
    ],
  },
  {
    label: 'รั้ว',
    child: [
      {
        name: 'fence',
        col: 2,
        items: [
          {value: null},
          {text: 'ซีเมนต์บล็อค', value: '01'},
          {text: 'ไม้', value: '02'},
          {text: 'เหล็ก', value: '03'},
          {text: 'อิฐ', value: '04'},
          {text: 'สแตนเลส', value: '05'},
          {text: 'ไม่มีรั้ว', value: '06'},
          {text: 'ลวดตาข่าย', value: '07'},
          {text: 'ลวดหนาม', value: '08'},
          {text: 'อื่นๆ', value: '09'},
        ],
        render: formDropdownLabel,
      },
    ],
  },
  {
    label: 'ประเภทการก่อสร้าง',
    child: [
      {
        name: 'constType',
        col: 2,
        items: [
          {value: null},
          {text: 'ปลูกสร้างเอง', value: '01'},
          {text: 'บ้านจัดสรร', value: '02'},
          {text: 'อื่น ๆ', value: '03'},
        ],
        render: formDropdownLabel,
      },
    ],
  },
  {
    label: 'หมู่บ้าน',
    child: [
      {
        name: 'village',
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: 'การใช้ประโยชน์ของอาคาร',
    child: [
      {
        name: 'utilOfBuilding',
        col: 2,
        items: [
          {value: null},
          {text: 'ใช้เพื่ออยู่อาศัย', value: '01'},
          {text: 'พักอาศัยไม่น้อยกว่า 30%', value: '02'},
          {text: 'พักอาศัยน้อยกว่า 30%', value: '03'},
          {text: 'ใช้เพื่อการแบ่งเช่า', value: '04'},
          {text: 'ใช้เพื่อการอื่นๆ', value: '05'},
        ],
        render: formDropdownLabel,
      },
    ],
  },
  {
    label: 'เนื้อที่อาคาร(ตารางเมตร)',
    child: [
      {
        name: 'buildingArea',
        col: 2,
        required: true,
        render: formInput,
      },
    ],
  },
  {
    label: 'เนื้อที่ประกันอัคคีภัย(ตารางเมตร)',
    child: [
      {
        name: 'fireInsSpace',
        col: 2,
        required: true,
        render: formInput,
      },
    ],
  },
  {
    label: 'รายละเอียดอื่น ๆ',
    child: [
      {
        name: 'remark',
        col: 2,
        render: formInput,
      },
    ],
  },
]

var RequiredSchema = Yup.object().shape(
  fieldTemplate.reduce((current, f) => {
    const child = {}

    f.child
      .filter(x => x.required)
      .forEach(r => {
        child[r.name] = Yup.string().required('Required')
      })

    return {...current, ...child}
  }, {}),
)

const ApplicationAppraisal = () => {
  return (
    <div className="bg-white p-10">
      <Formik
        initialValues={{}}
        validationSchema={RequiredSchema}
        onSubmit={values => {
          console.log(values)
        }}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({values, errors, touched}) => (
          <Form className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
              <div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Profile
                  </h3>
                </div>
              </div>
            </div>
            {fieldTemplate.map((f, i) => {
              return (
                <div className="sm:grid sm:grid-cols-6 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    style={
                      f.row && {
                        gridRowStart: 1,
                        gridRowEnd: f.row + 1,
                        alignSelf: 'start',
                      }
                    }
                    className="block col-span-2 text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 self-center"
                  >
                    {f.label}
                  </label>
                  {f.child.map(c => {
                    return (
                      <div
                        style={{gridColumn: `span ${c.col} / span ${c.col}`}}
                      >
                        {c.render
                          ? c.render({
                              ...c,
                              value: values[c.name],
                              error: errors[c.name],
                              touched: touched[c.name],
                            })
                          : null}
                      </div>
                    )
                  })}
                </div>
              )
            })}
            <div className="pt-5">
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ApplicationAppraisal
