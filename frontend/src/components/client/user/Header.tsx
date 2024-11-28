'use client'

const Header = () => {
    return (
        <header className="
            h-20
            bg-yellow-300
            fixed
            w-full
        ">
            <h1 className="text-5xl font-mono float-left">北</h1>
            <ul className="flex justify-end mr-10">
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
        </header>
    )
}

export default Header