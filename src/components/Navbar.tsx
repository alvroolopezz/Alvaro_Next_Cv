import Link from "next/link";
import '../styles/Navbar.css';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link href="/" >Pagina de Inicio</Link></li>
                <li><Link href="/sobremi">Sobre mi</Link></li>
                <li><Link href="/proyectos">Proyectos</Link></li>
            </ul>
        </nav>
    );
}
