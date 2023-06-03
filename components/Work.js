import Heading from "./Heading"
import Image from "next/image"
const Work = () => {
    return (
        <section className="container mx-auto py-10 px-4">
            <Heading title='Creative Work' />

            <div className="grid grid-cols-3 gap-4">
                <div className="row-span-2 relative group">
                    <Image src='/images/c2.jpg' width={400} height={400} alt="c1" />
                    <div className="bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">
                        Project Title
                    </div>
                </div>
                <div className="relative group">
                    <Image src='/images/c1.jpg' width={400} height={400} alt="c1" />
                    <div className="bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">
                        Project Title
                    </div>
                </div>
                <div className="relative group">
                    <Image src='/images/c3.jpg' width={400} height={400} alt="c1" />
                    <div className="bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">
                        Project Title
                    </div>
                </div>
                <div className="relative group">
                    <Image src='/images/c4.jpg' width={400} height={400} alt="c1" />
                    <div className="bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">
                        Project Title
                    </div>
                </div>
                <div className="relative group">
                    <Image src='/images/c5.jpg' width={400} height={400} alt="c1" />
                    <div className="bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">
                        Project Title
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Work
