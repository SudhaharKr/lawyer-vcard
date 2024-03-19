import { IoMdContact } from "react-icons/io";
import { RiShareBoxFill } from 'react-icons/ri'

const CreateCard = () => {
  return (
    <div>
        <div className="px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-y-4 py-8 md:py-14 justify-center items-center">
          <h2 className="text-3xl font-bold text-blue-950">
            Create Your VCard
          </h2>
          <div className="w-full md:max-w-[400px]">
            <button className="m-3 md:m-6 flex justify-center items-center gap-4 text-base md:text-xl border-2 md:border-4 py-4 md:py-6 px-4 md:px-6 border-blue-200 rounded-lg">
              https://vcards.infyom.com/marlonbrasil
              <RiShareBoxFill />
            </button>
            <button className="flex justify-center items-center text-base md:text-xl gap-3 bg-blue-950 py-3 px-8 rounded-lg text-white font-semibold">
              Add to Contacts <IoMdContact />
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default CreateCard
