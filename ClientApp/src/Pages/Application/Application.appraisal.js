import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

const formInput = ({ label, name, error, touched }) => (
  <>
    <div
      className={
        error
          ? "relative border  rounded-md px-3 py-2 shadow-sm ring-1 ring-red-600 border-red-600"
          : "relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600"
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
);

const formInputLabel = ({ label, name, error, touched }) => (
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
            ? "shadow-sm ring-1 ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm  rounded-md"
            : "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
);

const formDropdown = ({ label, name, items = [] }) => (
  <Field
    id={name}
    name={name}
    as="select"
    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
    defaultValue="Canada"
  >
    {items.map((i) =>
      i.value ? (
        <option value={i.value}>{i.text}</option>
      ) : (
        <option>Please select</option>
      )
    )}
  </Field>
);

const formDropdownLabel = ({ label, name, items = [] }) => (
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
      {items.map((i) =>
        i.value ? (
          <option value={i.value}>{i.text}</option>
        ) : (
          <option>Please select</option>
        )
      )}
    </Field>
  </div>
);

const formCheckbox = ({ label, name }) => (
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
);

const formCheckboxWithDescription = ({ label, name, value: checked }) => (
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
        defaultValue={""}
      />
    )}
  </>
);

const fieldTemplate = [
  {
    label: "จังหวัด",
    child: [
      {
        label: "Province",
        name: "province",
        col: 1,
        items: [{ value: null }],
        render: formDropdown,
      },
      {
        label: "Other",
        name: "provinceOther",
        col: 2,
        required: true,
        render: formInput,
      },
    ],
  },
  {
    label: "อำเภอ",
    child: [
      {
        label: "District",
        name: "district",
        col: 1,
        items: [{ value: null }],
        render: formDropdown,
      },
      {
        label: "Other",
        name: "dictrictOther",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "ตำบล",
    child: [
      {
        label: "Subdistrict",
        name: "subDistrict",
        col: 1,
        items: [{ value: null }],
        render: formDropdown,
      },
      {
        label: "Other",
        name: "subDistrictOther",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "เลขที่โฉนด",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "เลขที่ดิน",
    child: [
      {
        name: "landNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "ระวางรูปถ่ายทางอากาศชื่อ",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "หมายเลข",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "แผ่นที่",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "ทะเบียนเลขที่",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "เล่มที่",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "หน้าที่",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "หน้าสำรวจ",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "ระวาง",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "เนื้อที่ดิน(ตารางวา)",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "ตำแหน่งที่ดิน",
    row: 3,
    child: [
      {
        label: "ตำแหน่งที่ดิน",
        name: "position",
        col: 2,
        items: [
          { value: null },
          { text: "ถูกต้อง", value: "01" },
          { text: "ไม่ถูกต้อง", value: "02" },
        ],
        render: formDropdownLabel,
      },
      {
        label: "ตรวจจาก",
        name: "checkFrom",
        col: 2,
        items: [
          { value: null },
          { text: "แปลงคง", value: "plang" },
          { text: "ระวาง", value: "rawang" },
          { text: "อื่น", value: "other" },
        ],
        render: formDropdownLabel,
      },
      {
        label: "ตั้งอยู่บนถนน",
        name: "road",
        col: 4,
        required: true,
        render: formInputLabel,
      },
      {
        label: "แยกเข้าซอย",
        name: "soi",
        col: 3,
        render: formInputLabel,
      },
      {
        label: "ระยะทาง(เมตร)",
        name: "distance",
        col: 1,
        render: formInputLabel,
      },
    ],
  },
  {
    label: "ตรวจจาก",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "อื่นๆ",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "ตั้งอยู่บนถนน",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "แยกเข้าซอย",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "ระยะทาง(เมตร)",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "สภาพที่ดิน",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "ระดับดิน(ซม.)",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "ตำแหน่งพิกัดละติจูด",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "ตำแหน่งพิกัดลองติจูด",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "สิ่งปลูกสร้าง",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "กู้ประเภทอื่นๆ",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "เนื้อที่บ่อน้ำ(ตารางวา)",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "ความลึกโดยประมาณ(เมตร)",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "ถนนผ่านหน้าที่ดิน",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "ลักษณะผิวจราจร",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "ผิวจราจรกว้าง(เมตร)",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "เขตทาง(เมตร)",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "รถยนต์เข้า-ออก",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "ทางเข้า-ออก",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "ต้องมีการปรับปรุงสภาพทาง",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "ประเมินราคา",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "ลักษณะที่ดิน",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "หมายเหตุไม่ประเมินราคาเนื่องจาก",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "เนื้อที่ถูกลุกล้ำ/ใช้เพื่อบุคคลอื่น(ตารางวา)",
    child: [
      {
        name: "deedNo",
        col: 2,
        render: formInput,
      },
    ],
  },
  {
    label: "สาธารณูปโภค",
    row: 5,
    child: [
      {
        label: "ไฟฟ้าถนน",
        name: "electricRoad",
        col: 4,
        render: formCheckbox,
      },
      {
        label: "ไฟฟ้าถาวร",
        name: "electric",
        col: 4,
        render: formCheckbox,
      },
      {
        label: "ท่อระบายน้ำ/บ่อพัก",
        name: "pipe",
        col: 4,
        render: formCheckbox,
      },
      {
        label: "น้ำประปา/น้ำบาดาล",
        name: "water",
        col: 4,
        render: formCheckbox,
      },
      {
        label: "อื่นๆ",
        name: "conditionOther",
        col: 4,
        render: formCheckboxWithDescription,
      },
    ],
  },
  {
    label: "สโมสร",
    child: [
      {
        name: "deedNo",
        col: 1,
        render: formDropdown,
      },
    ],
  },
  {
    label: "ระบบรักษาความปลอดภัย",
    child: [
      {
        name: "deedNo",
        col: 1,
        render: formDropdown,
      },
    ],
  },
  {
    label: "สนามกีฬากลางแจ้ง",
    child: [
      {
        name: "deedNo",
        col: 1,
        render: formDropdown,
      },
    ],
  },
  {
    label: "ระบบคีย์การ์ด",
    child: [
      {
        name: "deedNo",
        col: 1,
        render: formDropdown,
      },
    ],
  },
  {
    label: "โรงเรียนอนุบาล",
    child: [
      {
        name: "deedNo",
        col: 1,
        render: formDropdown,
      },
    ],
  },
  {
    label: "ระบบการทิ้งและกำจัดขยะ",
    child: [
      {
        name: "deedNo",
        col: 1,
        render: formDropdown,
      },
    ],
  },
  {
    label: "การพัฒนาในพื้นที่",
    child: [
      {
        name: "deedNo",
        col: 1,
        render: formDropdown,
      },
    ],
  },
  {
    label: "ข้อกำหนดผังเมือง",
    child: [
      {
        name: "deedNo",
        col: 1,
        render: formDropdown,
      },
    ],
  },
  {
    label: "ลักษณะทางกายภาพ/รูปแปลง",
    child: [
      {
        name: "deedNo",
        col: 1,
        render: formDropdown,
      },
    ],
  },
  {
    label: "ตำแหน่งที่ตั้ง",
    child: [
      {
        name: "deedNo",
        col: 1,
        render: formDropdown,
      },
    ],
  },
  {
    label: "ชื่อเสียงโครงการ (ผู้ประกอบการ)",
    child: [
      {
        name: "deedNo",
        col: 1,
        render: formDropdown,
      },
    ],
  },
  {
    label: "สภาพแวดล้อม",
    row: 5,
    child: [
      {
        label: "ที่ดินรกร้าง ว่างเปล่า ห่างไกลชุมชน",
        name: "far",
        col: 2,
        render: formCheckbox,
      },
      {
        label: "ย่านเกษตรกรรม",
        name: "farm",
        col: 2,
        render: formCheckbox,
      },
      {
        label: "ย่านที่อยู่อาศัยประปราย ชนบท",
        name: "hometown",
        col: 2,
        render: formCheckbox,
      },
      {
        label: "ย่านที่อยู่อาศัยสลับพานิชยกรรม",
        name: "far",
        col: 2,
        render: formCheckbox,
      },
      {
        label: "ย่านที่อยู่อาศัยหนาแน่นน้อย",
        name: "far",
        col: 2,
        render: formCheckbox,
      },
      {
        label: "ย่านที่อยู่อาศัยหนาแน่นปานกลาง",
        name: "far",
        col: 2,
        render: formCheckbox,
      },
      {
        label: "ย่านที่อยู่อาศัยหนาแน่นมาก",
        name: "far",
        col: 2,
        render: formCheckbox,
      },
      {
        label: "ย่านธุรกิจการค้าใจกลางเมือง",
        name: "far",
        col: 2,
        render: formCheckbox,
      },
      {
        label: "ย่านพานิชยกรรม",
        name: "far",
        col: 2,
        render: formCheckbox,
      },
      {
        label: "ย่านอุตสาหกรรม",
        name: "far",
        col: 2,
        render: formCheckbox,
      },
    ],
  },
  {
    label: "มลภาวะ",
    row: 5,
    child: [
      {
        label: "โรงฆ่าสัตว์",
        name: "far",
        col: 2,
        render: formCheckbox,
      },
      {
        label: "โรงงาน",
        name: "farm",
        col: 2,
        render: formCheckbox,
      },
      {
        label: "ไฟฟ้าแรงสูง",
        name: "hometown",
        col: 2,
        render: formCheckbox,
      },
      {
        label: "ที่ทิ้งของเสีย",
        name: "far",
        col: 2,
        render: formCheckbox,
      },
      {
        label: "บ่อขยะ",
        name: "far",
        col: 2,
        render: formCheckbox,
      },
      {
        label: "บ่อน้ำ",
        name: "far",
        col: 2,
        render: formCheckbox,
      },
      {
        label: "บ่อบำบัด",
        name: "far",
        col: 4,
        render: formCheckbox,
      },
      {
        label: "อื่นๆ",
        name: "far",
        col: 4,
        render: formCheckboxWithDescription,
      },
    ],
  },
  {
    label: "สภาพคล่อง",
    row: 5,
    child: [
      {
        label: "ไม่มีการซื้อขายเปลี่ยนมือ",
        name: "far",
        col: 4,
        render: formCheckbox,
      },
      {
        label: "ไม่ระบุ",
        name: "far",
        col: 4,
        render: formCheckbox,
      },
      {
        label: "มีการซื้อขายเปลี่ยนมือปริมาณน้อย",
        name: "far",
        col: 4,
        render: formCheckbox,
      },
      {
        label: "มีการซื้อขายเปลี่ยนมือปริมาณปานกลาง",
        name: "far",
        col: 4,
        render: formCheckbox,
      },
      {
        label: "มีการซื้อขายเปลี่ยนมือปริมาณมาก",
        name: "far",
        col: 4,
        render: formCheckbox,
      },
    ],
  },
  {
    label: "ทิศที่ตั้งหลักประกัน",
    child: [
      {
        name: "direction",
        col: 2,
        render: formDropdown,
      },
    ],
  },
  {
    label: "หมายเหตุ",
    child: [
      {
        name: "remark",
        col: 2,
        render: formInput,
      },
    ],
  },
];

var RequiredSchema = Yup.object().shape(
  fieldTemplate.reduce((current, f) => {
    const child = {};

    f.child
      .filter((x) => x.required)
      .forEach((r) => {
        child[r.name] = Yup.string().required("Required");
      });

    return { ...current, ...child };
  }, {})
);

const ApplicationAppraisal = () => {
  return (
    <div className="bg-white p-10">
      <Formik
        initialValues={{
          name: "ffff",
          email: "",
        }}
        validationSchema={RequiredSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
        validateOnBlur={false}
        validateOnChange={true}
      >
        {({ values, errors, touched }) => (
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
                        alignSelf: "start",
                      }
                    }
                    className="block col-span-2 text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 self-center"
                  >
                    {f.label}
                  </label>
                  {f.child.map((c) => {
                    return (
                      <div
                        style={{ gridColumn: `span ${c.col} / span ${c.col}` }}
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
                    );
                  })}
                </div>
              );
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
  );
};

export default ApplicationAppraisal;
