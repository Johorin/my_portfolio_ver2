'use client'

const Header = () => {
    return (
        <header className="
            fixed
            top-0
            left-0
            w-full
            h-[64px]
            bg-[#FFD000]
            flex
            items-center
            px-4
        ">
            <h1 className="
                text-5xl
                font-mono
                float-left
            ">
                LOGO/
            </h1>
            <nav className="ml-auto">
                <ul className="
                    flex
                    justify-end
                    mr-10
                ">
                    <li className="mx-2">
                        <a href="">TOP</a>
                    </li>
                    <li className="mx-2">
                        <a href="">TESTLIST</a>
                    </li>
                    <li className="mx-2">
                        <a href="">SKILLS</a>
                    </li>
                    <li className="mx-2">
                        <a href="">CONTACT</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header