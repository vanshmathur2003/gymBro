/* eslint-disable react/no-unescaped-entities */
import img from '../assets/PngItem_1730661.png'
const Header = () => {
    return (
        <div className=' flex flex-col items-center sm:flex sm:flex-row'>
            <div className= ' '>
                <img src={img} alt="" />
            </div>
            <div className=' font-extrabold text-black  mt-10 lg:mt-20 ' >
                <h1 className='text-4xl lg:text-6xl lg:ml-10'>Get Johnny Bravo's Favourite Exercises  </h1>
            </div>
        </div>
    )
}

export default Header