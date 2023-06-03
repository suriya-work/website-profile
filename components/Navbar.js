import Link from "next/link";
import { FiDownload } from 'react-icons/fi';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
    return (
        <div className="bg-slate-500 fixed top-0 w-[100%]">
            <div className="container mx-auto flex justify-between item-center py-4 px-4">
                <div className="text-[24px] font-bold">Front-End </div>
                <div className="hidden md:flex gap-6">
                    <Link className="hover:text-[#ff4D41]" href='/'>Home</Link>
                    <Link className="hover:text-[#ff4D41]" href='/about'>About</Link>
                    <Link className="hover:text-[#ff4D41]" href='/portfolio'>Portfolio</Link>
                    <Link className="hover:text-[#ff4D41]" href='/blog'>Blog</Link>
                    <Link className="hover:text-[#ff4D41]" href='/contact'>Contact</Link>
                </div>
                <Link className="hidden md:flex border border:[#ff4D41] px-4 py-1 text-[#ff4D41] rounded-[5px] item-center gap-2 hover:bg-[#ff4D41] hover:text-white transition duration-200" href='#'>Download CV <FiDownload /></Link>
                <div className="md:hidden text-[24px]">
                    <FiMenu />
                </div>
            </div>
        </div>
    )
}

export default Navbar
