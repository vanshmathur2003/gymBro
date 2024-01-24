// Footer.jsx
import githublogo from '../assets/github-mark.png'
const Footer = () => {
    return (
        <footer className="bg-black text-white text-center py-4 mt-20 sm:mb-0 ">
            <span>
                < a href="https://github.com/vanshmathur2003" className='rounded-md flex justify-center'>
                <img src={githublogo} className='h-5 w-5' />
                <span className='text-white ml-1'>vanshmathur2003</span>
                </a>
            </span>
        </footer>
    );
};

export default Footer;
