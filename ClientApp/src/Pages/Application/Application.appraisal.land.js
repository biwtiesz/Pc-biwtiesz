import React, {Fragment, useState} from 'react'
import {Formik, Form, Field} from 'formik'
import {Dialog, Transition} from '@headlessui/react'
import {XIcon} from '@heroicons/react/outline'
import {
  LinkIcon,
  PlusSmIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/solid'
import {Input, Dropdown, Checkbox, Remark} from '../../components/Form/index'
import {longdo, map, LongdoMap} from '../../components/LongdoMap'

import BuildingList from '../../components/BuildingList'
import * as Yup from 'yup'

const mapKey = 'dcd9597c9f6a7af0f46d4ec798a9ef2a'

function initMap() {
  map.Layers.setBase(longdo.Layers.GRAY)
}

const CheckboxWithDescription = ({label, name, value: checked}) => (
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
      <Field
        as="textarea"
        rows={4}
        name={`${name}Note`}
        id={`${name}Note`}
        className="mt-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        defaultValue={''}
      />
    )}
  </>
)

const ApplicationAppraisal = () => {
  const [open, setOpen] = useState(false)
  const landAppraisalTemplate = [
    {
      label: 'รายการสำรวจที่ดิน',
      row: 8,
      child: [
        {
          label: 'จังหวัด',
          name: 'province',
          required: true,
          col: 1,
          items: [{value: null}],
          render: Dropdown,
        },
        {
          name: 'provinceOther',
          col: 3,
          required: true,
          render: Input,
        },
        {
          label: 'อำเภอ',
          name: 'district',
          col: 1,
          items: [{value: null}],
          render: Dropdown,
        },
        {
          name: 'dictrictOther',
          col: 3,
          render: Input,
        },
        {
          label: 'ตำบล',
          name: 'subDistrict',
          col: 1,
          items: [{value: null}],
          render: Dropdown,
        },
        {
          name: 'subDistrictOther',
          col: 3,
          render: Input,
        },
        {
          label: 'เลขที่โฉนด',
          name: 'deedNo',
          col: 1,
          render: Input,
        },
        {
          label: 'เลขที่ดิน',
          name: 'landNo',
          col: 1,
          render: Input,
        },
        {
          label: 'ระวาง',
          name: 'rawang',
          col: 2,
          render: Input,
        },
        {
          label: 'ระวางรูปถ่ายทางอากาศชื่อ',
          name: 'airpic',
          col: 2,
          render: Input,
        },
        {
          label: 'หมายเลข',
          name: 'number',
          col: 1,
          render: Input,
        },
        {
          label: 'แผ่นที่',
          name: 'page',
          col: 1,
          render: Input,
        },
        {
          label: 'ทะเบียนเลขที่',

          name: 'nono',
          col: 2,
          render: Input,
        },
        {
          label: 'เล่มที่',

          name: 'book',
          col: 2,
          render: Input,
        },
        {
          label: 'หน้าที่',

          name: 'pageno',
          col: 2,
          render: Input,
        },
        {
          label: 'หน้าสำรวจ',

          name: 'survaeypage',
          col: 2,
          render: Input,
        },
        {
          label: 'เนื้อที่ดิน(ตารางวา)',
          name: 'area',
          col: 2,
          render: Input,
        },
      ],
    },
    {
      label: 'ตำแหน่งที่ดิน',
      row: 3,
      child: [
        {
          label: 'ตำแหน่งที่ดิน',
          name: 'position',
          col: 2,
          items: [
            {value: null},
            {text: 'ถูกต้อง', value: '01'},
            {text: 'ไม่ถูกต้อง', value: '02'},
          ],
          render: Dropdown,
        },
        {
          label: 'ตรวจจาก',
          name: 'checkFrom',
          col: 2,
          items: [
            {value: null},
            {text: 'แปลงคง', value: 'plang'},
            {text: 'ระวาง', value: 'rawang'},
            {text: 'อื่นๆ', value: 'other'},
          ],
          render: Dropdown,
        },
        {
          label: 'ตั้งอยู่บนถนน',
          name: 'road',
          col: 4,
          required: true,
          render: Input,
        },
        {
          label: 'แยกเข้าซอย',
          name: 'soi',
          col: 3,
          render: Input,
        },
        {
          label: 'ระยะทาง(เมตร)',
          name: 'distance',
          col: 1,
          render: Input,
        },
      ],
    },
    {
      label: 'สภาพที่ดิน',
      child: [
        {
          label: 'สภาพที่ดิน',
          name: 'land',
          col: 1,
          items: [
            {value: null},
            {value: 'yes', text: 'ถมแล้ว'},
            {value: 'no', text: 'ยังไม่ถม'},
          ],
          render: Dropdown,
        },
        {
          label: 'ระดับดิน(ซม.)',
          name: 'landcm',
          col: 2,
          render: Input,
        },
      ],
    },
    {
      label: 'ตำแหน่งพิกัด',
      child: [
        {
          label: 'ละติจูด',
          name: 'lat',
          col: 2,
          render: Input,
        },
        {
          label: 'ลองติจูด',
          name: 'long',
          col: 2,
          render: Input,
        },
      ],
    },
    {
      label: 'สิ่งปลูกสร้าง',
      child: [
        {
          name: 'deedNo',
          col: 4,
          render: BuildingList,
          onAdd: () => {
            setOpen(true)
          },
        },
      ],
    },
    {
      label: 'กู้ประเภทอื่นๆ',
      child: [
        {
          name: 'deedNo',
          col: 2,
          render: Input,
        },
      ],
    },
    {
      label: 'เนื้อที่บ่อน้ำ(ตารางวา)',
      child: [
        {
          name: 'deedNo',
          col: 2,
          render: Input,
        },
      ],
    },
    {
      label: 'ความลึกโดยประมาณ(เมตร)',
      child: [
        {
          name: 'deedNo',
          col: 2,
          render: Input,
        },
      ],
    },
    {
      label: 'ถนนผ่านหน้าที่ดิน',
      row: 3,
      child: [
        {
          label: 'ถนนผ่านหน้าที่ดิน',
          name: 'deedNo',
          col: 2,
          render: Dropdown,
        },
        {
          label: 'ผิวจราจร(เมตร)',
          name: 'deedNo',
          col: 2,
          render: Input,
        },
        {
          label: 'เขตทาง(เมตร)',
          name: 'deedNo',
          col: 2,
          render: Input,
        },
        {
          label: 'ทางเข้า-ออก',
          name: 'deedNo',
          col: 2,
          render: Input,
        },
        {
          label: 'รถยนต์เข้า-ออก',
          name: 'deedNo',
          col: 2,
          items: [
            {value: null},
            {value: 'yes', text: 'ได้'},
            {value: 'no', text: 'ไม่ได้'},
            {value: 'renovate', text: 'ต้องปรับปรุงสภาพทางเข้า-ออก'},
          ],
          showRemarkIf: 'renovate',
          render: Dropdown,
        },
      ],
    },
    {
      label: 'ลักษณะผิวจราจร',
      child: [
        {
          name: 'deedNo',
          col: 2,
          render: Dropdown,
        },
      ],
    },
    {
      label: 'ประเมินราคา',
      child: [
        {
          name: 'deedNo',
          col: 2,
          items: [
            {value: null},
            {value: 'no', text: 'ไม่ประเมินราคา'},
            {value: 'yes', text: 'ประเมินราคา'},
          ],
          showRemarkIf: 'no',
          render: Dropdown,
        },
      ],
    },
    {
      label: 'ลักษณะที่ดิน',
      child: [
        {
          name: 'deedNo',
          col: 2,
          items: [
            {value: null},
            {value: 'new', text: 'จัดสรรโครงการใหม่'},
            {value: 'old', text: 'จัดสรรโครงการเก่า'},
            {value: 'no', text: 'ไม่ใช่จัดสรร'},
          ],
          render: Dropdown,
        },
      ],
    },
    {
      label: 'สาธารณูปโภค',
      row: 5,
      child: [
        {
          label: 'ไฟฟ้าถนน',
          name: 'electricRoad',
          col: 4,
          render: Checkbox,
        },
        {
          label: 'ไฟฟ้าถาวร',
          name: 'electric',
          col: 4,
          render: Checkbox,
        },
        {
          label: 'ท่อระบายน้ำ/บ่อพัก',
          name: 'pipe',
          col: 4,
          render: Checkbox,
        },
        {
          label: 'น้ำประปา/น้ำบาดาล',
          name: 'water',
          col: 4,
          render: Checkbox,
        },
        {
          label: 'อื่นๆ',
          name: 'conditionOther',
          col: 4,
          render: CheckboxWithDescription,
        },
      ],
    },
    {
      label: 'ข้อจำกัด',
      row: 7,
      child: [
        {
          label: 'อยู่ในระวางเวนคืน',
          name: 'exprop',
          col: 1,
          render: Checkbox,
        },
        {
          label: 'อยู่ในแนวเวนคืน ',
          name: 'inline',
          col: 1,
          render: Checkbox,
        },
        {
          label: 'ตาม พรฏ/พรบ',
          name: 'expropRemark',
          col: 2,
          render: Input,
        },
        {
          label:
            'ถูกรุกล้ำ / ใช้เพื่อบุคคลอื่น / ตัดเนื้อที่ประเมินเนื่องจากสาเหตุอื่น',
          name: 'inline',
          col: 2,
          render: Checkbox,
        },
        {
          label: 'เนื้อที่ (ตารางวา)',
          name: 'inlinenote',
          col: 1,
          render: Input,
        },
        {
          label:
            'จุดสิ้นสุดสาธารณูปโภคไฟฟ้าอยู่ห่างหลักประกันไปตามแนวถนน / ซอย',
          name: 'farelec',
          col: 2,
          render: Checkbox,
        },
        {
          label: 'ระยะทางประมาณ (เมตร)',
          name: 'farelecnote',
          col: 1,
          render: Input,
        },
        {
          label:
            'รูปร่างลักษณะที่ดินหลักประกันไม่สามารถนำรถยนต์เข้าไปในที่ดินได้',
          name: 'nocaraccess',
          col: 2,
          render: Checkbox,
        },
        {
          label: 'อยู่ในเขตป่าไม้ / เขต สปก. / เขตอุทยานฯ',
          name: 'inforrest',
          col: 3,
          render: Checkbox,
        },
        {
          label: 'หมายเหตุ',
          name: 'conditionRemark',
          col: 4,
          render: Remark,
        },
      ],
    },
    {
      label: 'การรอนสิทธิ์อื่นๆ',
      row: 4,
      child: [
        {
          label: 'อยู่ในแนวสายไฟฟ้าแรงสูง',
          name: 'inlineelec',
          col: 4,
          render: Checkbox,
        },
        {
          label: 'แนวรถไฟฟ้าใต้ดิน',
          name: 'subway',
          col: 4,
          render: Checkbox,
        },
        {
          label: 'อื่นๆ',
          name: 'other',
          col: 3,
          render: CheckboxWithDescription,
        },
        {
          name: 'other',
          col: 4,
          render: Remark,
        },
      ],
    },
    {
      label: 'สโมสร',
      child: [
        {
          name: 'deedNo',
          col: 1,
          render: Dropdown,
        },
      ],
    },
    {
      label: 'ระบบรักษาความปลอดภัย',
      child: [
        {
          name: 'deedNo',
          col: 1,
          render: Dropdown,
        },
      ],
    },
    {
      label: 'สนามกีฬากลางแจ้ง',
      child: [
        {
          name: 'deedNo',
          col: 1,
          render: Dropdown,
        },
      ],
    },
    {
      label: 'ระบบคีย์การ์ด',
      child: [
        {
          name: 'deedNo',
          col: 1,
          render: Dropdown,
        },
      ],
    },
    {
      label: 'โรงเรียนอนุบาล',
      child: [
        {
          name: 'deedNo',
          col: 1,
          render: Dropdown,
        },
      ],
    },
    {
      label: 'ระบบการทิ้งและกำจัดขยะ',
      child: [
        {
          name: 'deedNo',
          col: 1,
          render: Dropdown,
        },
      ],
    },
    {
      label: 'การพัฒนาในพื้นที่',
      child: [
        {
          name: 'deedNo',
          col: 1,
          render: Dropdown,
        },
      ],
    },
    {
      label: 'ข้อกำหนดผังเมือง',
      child: [
        {
          name: 'deedNo',
          col: 1,
          render: Dropdown,
        },
      ],
    },
    {
      label: 'ลักษณะทางกายภาพ/รูปแปลง',
      child: [
        {
          name: 'deedNo',
          col: 1,
          render: Dropdown,
        },
      ],
    },
    {
      label: 'ตำแหน่งที่ตั้ง',
      child: [
        {
          name: 'deedNo',
          col: 1,
          render: Dropdown,
        },
      ],
    },
    {
      label: 'ชื่อเสียงโครงการ (ผู้ประกอบการ)',
      child: [
        {
          name: 'deedNo',
          col: 1,
          render: Dropdown,
        },
      ],
    },
    {
      label: 'สภาพแวดล้อม',
      row: 5,
      child: [
        {
          label: 'ที่ดินรกร้าง ว่างเปล่า ห่างไกลชุมชน',
          name: 'far',
          col: 2,
          render: Checkbox,
        },
        {
          label: 'ย่านเกษตรกรรม',
          name: 'farm',
          col: 2,
          render: Checkbox,
        },
        {
          label: 'ย่านที่อยู่อาศัยประปราย ชนบท',
          name: 'hometown',
          col: 2,
          render: Checkbox,
        },
        {
          label: 'ย่านที่อยู่อาศัยสลับพานิชยกรรม',
          name: 'far',
          col: 2,
          render: Checkbox,
        },
        {
          label: 'ย่านที่อยู่อาศัยหนาแน่นน้อย',
          name: 'far',
          col: 2,
          render: Checkbox,
        },
        {
          label: 'ย่านที่อยู่อาศัยหนาแน่นปานกลาง',
          name: 'far',
          col: 2,
          render: Checkbox,
        },
        {
          label: 'ย่านที่อยู่อาศัยหนาแน่นมาก',
          name: 'far',
          col: 2,
          render: Checkbox,
        },
        {
          label: 'ย่านธุรกิจการค้าใจกลางเมือง',
          name: 'far',
          col: 2,
          render: Checkbox,
        },
        {
          label: 'ย่านพานิชยกรรม',
          name: 'far',
          col: 2,
          render: Checkbox,
        },
        {
          label: 'ย่านอุตสาหกรรม',
          name: 'far',
          col: 2,
          render: Checkbox,
        },
      ],
    },
    {
      label: 'มลภาวะ',
      row: 5,
      child: [
        {
          label: 'โรงฆ่าสัตว์',
          name: 'far',
          col: 2,
          render: Checkbox,
        },
        {
          label: 'โรงงาน',
          name: 'farm',
          col: 2,
          render: Checkbox,
        },
        {
          label: 'ไฟฟ้าแรงสูง',
          name: 'hometown',
          col: 2,
          render: Checkbox,
        },
        {
          label: 'ที่ทิ้งของเสีย',
          name: 'far',
          col: 2,
          render: Checkbox,
        },
        {
          label: 'บ่อขยะ',
          name: 'far',
          col: 2,
          render: Checkbox,
        },
        {
          label: 'บ่อน้ำ',
          name: 'far',
          col: 2,
          render: Checkbox,
        },
        {
          label: 'บ่อบำบัด',
          name: 'far',
          col: 4,
          render: Checkbox,
        },
        {
          label: 'อื่นๆ',
          name: 'far',
          col: 4,
          render: CheckboxWithDescription,
        },
      ],
    },
    {
      label: 'สภาพคล่อง',
      row: 5,
      child: [
        {
          label: 'ไม่มีการซื้อขายเปลี่ยนมือ',
          name: 'far',
          col: 4,
          render: Checkbox,
        },
        {
          label: 'ไม่ระบุ',
          name: 'far',
          col: 4,
          render: Checkbox,
        },
        {
          label: 'มีการซื้อขายเปลี่ยนมือปริมาณน้อย',
          name: 'far',
          col: 4,
          render: Checkbox,
        },
        {
          label: 'มีการซื้อขายเปลี่ยนมือปริมาณปานกลาง',
          name: 'far',
          col: 4,
          render: Checkbox,
        },
        {
          label: 'มีการซื้อขายเปลี่ยนมือปริมาณมาก',
          name: 'far',
          col: 4,
          render: Checkbox,
        },
      ],
    },
    {
      label: 'ทิศที่ตั้งหลักประกัน',
      child: [
        {
          name: 'direction',
          col: 2,
          render: Dropdown,
        },
      ],
    },
    {
      label: 'หมายเหตุ',
      child: [
        {
          name: 'remark',
          col: 4,
          render: Remark,
        },
      ],
    },
  ]
  var RequiredSchema = Yup.object().shape(
    landAppraisalTemplate.reduce((current, f) => {
      const child = {}

      f.child
        .filter(x => x.required)
        .forEach(r => {
          child[r.name] = Yup.string().required(`${r.name} is required.`)
        })

      return {...current, ...child}
    }, {}),
  )
  const buildingAppraisalTemplate = [
    {
      label: 'ข้อมูลหลักประกัน',
      row: 2,
      child: [
        {
          label: 'บ้านเลขที่',
          name: 'houseNo',
          col: 2,
          render: Input,
        },
      ],
    },
    {
      label: 'ตำแหน่งก่อสร้าง',
      child: [
        {
          label: 'ตำแหน่งก่อสร้าง',
          name: 'enclose',
          col: 2,
          items: [
            {value: null},
            {value: 'yes', text: 'รุกล้ำ'},
            {value: 'no', text: 'ไม่รุกล้ำ'},
          ],
          render: Dropdown,
        },
        {
          label: 'ส่วน/ขนาดที่รุกล้ำ(ตารางเมตร)',
          name: 'encloseArea',
          col: 2,
          render: Input,
        },
      ],
    },
    {
      label: 'สภาพการก่อสร้าง',
      row: 2,
      child: [
        {
          label: 'ก่อสร้างแล้วเสร็จ(อาคารเดิม)',
          name: 'oribuilding',
          col: 2,
          render: Checkbox,
        },
        {
          label: '%',
          name: 'oribuildingProgress',
          col: 1,
          render: Input,
        },
        {
          label: 'ก่อสร้างแล้วเสร็จ(ปลูกสร้าง/ต่อเติม)',
          name: 'newbuilding',
          col: 2,
          render: Checkbox,
        },
        {
          label: '%',
          name: 'newbuildingProgress',
          col: 1,
          render: Input,
        },
      ],
    },
    {
      label: 'การใช้อยู่อาศัย',
      row: 2,
      child: [
        {
          label: 'อยู่อาศัย',
          name: 'live',
          render: Dropdown,
        },
        {
          label: 'เนื่องจาก',
          name: 'liveRemark',
          col: 3,
          render: Input,
        },
        {
          label: 'ก่อสร้างมาแล้ว (ปี)',
          name: 'year',
          render: Input,
        },
        {
          label: '(เดือน)',
          name: 'year',
          render: Input,
        },
      ],
    },
    {
      label: 'ประเภทอาคาร',
      child: [
        {
          name: 'buildingType',
          col: 2,
          items: [
            {value: ''},
            {value: 'building', text: 'ตึก'},
            {value: 'combo', text: 'ตึกครึ่งไม้'},
            {value: 'wood', text: 'ไม้'},
            {value: 'ceramic', text: 'กระเบื้องแผ่นเรียบ'},
            {value: 'other', text: 'อื่นๆ'},
          ],
          render: Dropdown,
        },
      ],
    },
    {
      label: 'ลักษณะอาคาร',
      child: [
        {
          name: 'buildingCategory',
          render: Dropdown,
        },
      ],
    },
    {
      label: 'รูปแบบอาคาร',
      child: [
        {
          name: 'category',
          render: Dropdown,
        },
      ],
    },
    {
      label: 'จำนวนชั้น',
      child: [
        {
          name: 'floor',
          render: Input,
        },
      ],
    },
    {
      label: 'หลังคา',
      child: [
        {
          name: 'roof',
          render: Input,
        },
      ],
    },
    {
      label: 'ฝ้าเพดาน',
      child: [
        {
          name: 'cieling',
          render: Input,
        },
      ],
    },
    {
      label: 'ผนัง',
      child: [
        {
          name: 'wall',
          render: Input,
        },
      ],
    },
    {
      label: 'การทาสี',
      child: [
        {
          name: 'paint',
          render: Input,
        },
      ],
    },
    {
      label: 'พื้น/ผิว',
      child: [
        {
          name: 'skin',
          render: Input,
        },
      ],
    },
    {
      label: 'รั้ว',
      child: [
        {
          name: 'fence',
          render: Input,
        },
      ],
    },
    {
      label: 'ประเภทการก่อสร้าง',
      child: [
        {
          name: 'constructionType',
          render: Input,
        },
      ],
    },
    {
      label: 'การใช้ประโยชน์ของอาคาร',
      child: [
        {
          name: 'purpose',
          render: Input,
        },
      ],
    },
    {
      label: 'เนื้อที่อาคาร',
      child: [
        {
          label: 'เนื้อที่อาคาร(ตารางเมตร)',
          name: 'area',
          col: 2,
          render: Input,
        },
        {
          label: 'เนื้อที่ประกันอัคคีภัย(ตารางเมตร)',
          name: 'area',
          col: 2,
          render: Input,
        },
      ],
    },
    {
      label: 'หมายเหตุ',
      child: [
        {
          name: 'remark',
          col: 4,
          render: Remark,
        },
      ],
    },
  ]
  return (
    <>
      <div className="h-[300px] rounded-lg overflow-hidden 2xl:flex-1 2xl:max-h-96 2xl:max-w-md 2xl:order-2">
        <LongdoMap id="longdo-map" mapKey={mapKey} callback={initMap} />
      </div>
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
                      แบบสำรวจและประเมินราคาที่ดิน-อาคาร
                    </h3>
                  </div>
                </div>
              </div>
              {landAppraisalTemplate.map((f, i) => {
                return (
                  <div className="sm:grid sm:grid-cols-6 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      style={
                        f.row && {
                          gridRowStart: 1,
                          gridRowEnd: f.row + 1,
                          alignSelf: 'start',
                        }
                      }
                      className="block col-span-2 text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 self-start"
                    >
                      {f.label}
                    </label>
                    {f.child.map(c => {
                      return (
                        <div
                          className="mt-2"
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
                    Back
                  </button>
                  <button
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Next
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <Transition show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
          {/* Backdrop */}
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* <div className="fixed inset-0" /> */}

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <div className="pointer-events-auto w-screen max-w-5xl">
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
                        <Form className="space-y-8 divide-y divide-gray-200 flex h-full flex-col overflow-y-scroll bg-white shadow-xl p-10">
                          <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                            <div className="flex items-start justify-between space-x-3">
                              <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                  แบบสำรวจและประเมินราคาอาคาร
                                </h3>
                              </div>
                              <div className="flex h-7 items-center">
                                <button
                                  type="button"
                                  className="text-gray-400 hover:text-gray-500"
                                  onClick={() => setOpen(false)}
                                >
                                  <span className="sr-only">Close panel</span>
                                  <XIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                          {buildingAppraisalTemplate.map((f, i) => {
                            return (
                              <div className="sm:grid sm:grid-cols-6 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                  style={
                                    f.row && {
                                      gridRowStart: 1,
                                      gridRowEnd: f.row + 1,
                                      alignSelf: 'start',
                                    }
                                  }
                                  className="block col-span-2 text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 self-start"
                                >
                                  {f.label}
                                </label>
                                {f.child.map(c => {
                                  return (
                                    <div
                                      className="mt-2"
                                      style={{
                                        gridColumn: `span ${c.col} / span ${c.col}`,
                                      }}
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
                                onClick={() => setOpen(false)}
                              >
                                Back
                              </button>
                              <button
                                type="submit"
                                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                Next
                              </button>
                            </div>
                          </div>
                        </Form>
                      )}
                    </Formik>
                    {/* <form className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">

                      <div className="flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6">
                        <div className="flex justify-end space-x-3">
                          <button
                            type="button"
                            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={() => setOpen(false)}
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Create
                          </button>
                        </div>
                      </div>
                    </form> */}
                  </div>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default ApplicationAppraisal
