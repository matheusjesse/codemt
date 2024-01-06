import Link from "next/link";
import { HeaderContainer } from "./style";

export default function Header ()
{
    return(
        <HeaderContainer>
            <div className="logo">
                <h1>#codeMT</h1>
            </div>
            <nav>
                <ul>
                    <li><Link href="/">Início</Link></li>
                </ul>
            </nav>
        </HeaderContainer>
    )
}