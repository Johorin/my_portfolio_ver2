import Image from "next/image";
import logoImage from "../../public/my_portfolio_logo.jpg";

export default function Header() {
  return (
    <header className="flex h-[64px] bg-white">
        <h1 className="logo text-3xl">
            <Image src={logoImage} alt="logo" className="w-[64px] h-[100%]" />
        </h1>
        <nav>
            <ul className="nav-list font-bold flex items-center gap-[30px] ml-auto">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Works</a>
                </li>
                <li>
                    <a href="">Articles</a>
                </li>
                <li>
                    <a href="">Tweets</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        </nav>
    </header>
  );
}