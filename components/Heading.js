
const Heading = ({ title }) => {
    return (
        <div className="text-[#232940] text-[32px] font-medium flex flex-items-center gap-4 py-16">
            {title}
            <div className="bg-[#ff4D41] h-[2px] w-[50px] translate-y-7"></div>
        </div>
    )
}

export default Heading
