import Link from "next/link";

export default function Footer() {

    return (
        <footer className="flex justify-center border-t dark:border-t-white border-t-black">
            <div className="max-w-7xl w-full px-24 md:px-10 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="flex flex-col  justify-center gap-4 py-8">
                <h2 className="font-extrabold">
                Dalo   
                </h2>
                <Link href={'/about'} className='  block px-2 transition-all  hover:backdrop-blur-2xl' >
                    Om oss
                </Link>
                <Link href={'/new'} className='  block px-2 transition-all  hover:backdrop-blur-2xl' >
                    Ny Student
                </Link>
                <Link href={'/songbook'} className='  block px-2 transition-all  hover:backdrop-blur-2xl' >
                    Sånger
                    </Link>
                    <Link href={'/contact'} className='  block px-2 transition-all  hover:backdrop-blur-2xl' >
                        Kontakt
                    </Link>
                </div>
                <div className="flex flex-col  justify-center gap-4 py-8">
                <h2 className="font-extrabold">
                Socials
                </h2>
                    <Link href={'#'} className='  block px-2 transition-all  hover:backdrop-blur-2xl' >
                        Github
                    </Link>
                    <Link href={'#'} className='  block px-2 transition-all  hover:backdrop-blur-2xl' >
                        Instagram
                    </Link>
                    <Link href={'#'} className='  block px-2 transition-all  hover:backdrop-blur-2xl' >
                        Facebook
                    </Link>
                    <Link href={'#'} className='  block px-2 transition-all  hover:backdrop-blur-2xl' >
                        Discord
                    </Link>
                </div>
                </div>
            </div>
        </footer>

    );
}