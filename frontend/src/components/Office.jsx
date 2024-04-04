
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function Office(){
    return (
<div className="max-w-lg mx-auto p-6 rounded-lg">
  <h1 className="text-xl font-semibold mb-4">Head Office:</h1>
  <div className="flex items-center mb-2">
    <FaPhoneAlt className="text-primary-txt mr-2"/>
    <p className="text-gray-700 font-semibold">09466665692</p>
  </div>
  <div className="flex items-center mb-2">
    <MdEmail className="text-primary-txt mr-2"/>
    <p className="text-gray-700 font-semibold">ggcbookstore@gmail.com</p>
  </div>
  <div className="flex items-center">
    <FaLocationDot className="text-primary-txt mr-2"/>
    <p className="text-gray-700 font-semibold">2068 Boulevard Henri-Bourassa Est</p>
  </div>
</div>
    )
}

export default Office;