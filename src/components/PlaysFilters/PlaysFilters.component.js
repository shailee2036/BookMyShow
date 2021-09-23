import { Disclosure } from '@headlessui/react'
import {BiChevronDown, BiChevronUp} from "react-icons/bi";
const PlaysFilter = (props) => {
  return (
    <Disclosure className="">
    {({ open }) => (
      <>
      <Disclosure.Button className="py-2 flex gap-3 bg-gray-300 max-w-xl  w-2/3 p-20">
      {open ? <BiChevronUp /> : <BiChevronDown />}

       <span className={open ? "text-red-600" : "text-gray-700"}>
       <div className="max-w-md lg:block">
        {props.title}
        </div>
       </span>

      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500 bg-gray-300 px-2 py-4 max-w-md">
        <div className="flex item-center gap-3 flex-wrap ">
         {props.tags.map((tag) => (
           <>
            <div className="border-2 border-gray-200 p-2 bg-white">
            <span className="text-red-600 msx-w-md">{tag}</span>
            </div>
           </>
         ))

         }
        </div>
      </Disclosure.Panel>
      </>
    )}
    </Disclosure>
  );
};

export default PlaysFilter;
