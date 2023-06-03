import { RiLightbulbFlashLine } from 'react-icons/ri'
const Card = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4D41] text-white">
                <RiLightbulbFlashLine className='text-[28px]' />
                <h2 className='font-medium text-[20px]'>Creative Designs</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, culpa. Ipsum ipsam fugiat id enim velit quasi rem earum fuga error modi molestias, perspiciatis eum aliquid. Veritatis soluta necessitatibus nesciunt.</p>
            </div>
            <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4D41] text-white">
                <RiLightbulbFlashLine className='text-[28px]' />
                <h2 className='font-medium text-[20px]'>Creative Designs</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, culpa. Ipsum ipsam fugiat id enim velit quasi rem earum fuga error modi molestias, perspiciatis eum aliquid. Veritatis soluta necessitatibus nesciunt.</p>
            </div>
            <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4D41] text-white">
                <RiLightbulbFlashLine className='text-[28px]' />
                <h2 className='font-medium text-[20px]'>Creative Designs</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, culpa. Ipsum ipsam fugiat id enim velit quasi rem earum fuga error modi molestias, perspiciatis eum aliquid. Veritatis soluta necessitatibus nesciunt.</p>
            </div>
        </div>
    )
}

export default Card
