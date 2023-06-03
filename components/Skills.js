import Heading from "./Heading"
const Skills = () => {
    return (
        <section className="container mx-auto py-10 px-4">
            <Heading title='Skills' />
            <p className="text-gray-600 mt-10 mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, tempore. Magnam voluptate iste inventore! Mollitia minima nesciunt aspernatur quas, magnam molestias praesentium minus nihil cum rem! Aliquam dignissimos natus cum.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <p>React.JS</p>
                    <div className="relative bg-gray-400 h-[4px] mt-2">
                        <div className="bg-[#ff4D41] absolute h-[4px] w-[90%]"></div>
                    </div>
                </div>
                <div>
                    <p>Next.JS</p>
                    <div className="relative bg-gray-400 h-[4px] mt-2">
                        <div className="bg-[#ff4D41] absolute h-[4px] w-[70%]"></div>
                    </div>
                </div>
                <div>
                    <p>Javascript</p>
                    <div className="relative bg-gray-400 h-[4px] mt-2">
                        <div className="bg-[#ff4D41] absolute h-[4px] w-[90%]"></div>
                    </div>
                </div>
                <div>
                    <p>Redux-Toolkit</p>
                    <div className="relative bg-gray-400 h-[4px] mt-2">
                        <div className="bg-[#ff4D41] absolute h-[4px] w-[80%]"></div>
                    </div>
                </div>
                <div>
                    <p>Rest API</p>
                    <div className="relative bg-gray-400 h-[4px] mt-2">
                        <div className="bg-[#ff4D41] absolute h-[4px] w-[90%]"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
