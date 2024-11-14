import Link from "next/link";

export default function Menu() {
    return (
        <nav>
            <ul>
                <li> <Link href="/">Home</Link> </li>
                <li> <Link href="/informa">Energias</Link> </li>
                <li> <Link href="/equipe">Equipe</Link> </li>
                <li> <Link href="/suporte">Suporte</Link> </li>
                <li> <Link href="/auth">Login</Link> </li>
            </ul>
        </nav>
    );
}