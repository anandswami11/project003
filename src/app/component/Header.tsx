import Link from 'next/link'
export default function Header(){
    return(
        <>
        <div className='link1'>
        <Link className='anand' href="/"> Anand</Link>
        <Link className='about' href="/about">About </Link>
        <Link className='contact' href="/contact">Contact </Link>
        <Link className='skill' href="/skills">Skills </Link>
        </div>
        </>
    )
}