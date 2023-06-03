import { AiOutlineGift } from 'react-icons/ai';
import { FiBookOpen } from 'react-icons/fi';
import { BsGlobe2 } from 'react-icons/bs';
import { TbPacman } from 'react-icons/tb';
import { IoLocationOutline } from 'react-icons/io5';

const Main = () => {
    return (
        <div  className='flex flex-col gap-6'>
            <div className='flex gap-4 items-center font-medium'>
                <AiOutlineGift className='text-[#ff4D41] text-[22px]' />
                Birthday
            </div>
            <div className='flex gap-4 items-center font-medium'>
                <FiBookOpen className='text-[#ff4D41] text-[22px]' />
                Study

            </div>
            <div className='flex gap-4 items-center font-medium'>
                <BsGlobe2 className='text-[#ff4D41] text-[22px]' />
                Website

            </div>

            <div className='flex gap-4 items-center font-medium'>
                <TbPacman className='text-[#ff4D41] text-[22px]' />
                Interest
            </div>
            <div className='flex gap-4 items-center font-medium'>
                <IoLocationOutline className='text-[#ff4D41] text-[22px]' />
                Location

            </div>
        </div>
    )
}

export default Main
