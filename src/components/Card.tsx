import Image from "next/image";
import Link from "next/link";

import '../styles/Card.css'



export default function cards(
    //variables desde fuera de la funcion
    { link , alt, width, height, titulo, descripcion} : { link: string ,alt: string ,width: number ,height: number, titulo: string ,descripcion: string },
) {
    //declaracion variables si es necasario
    return (
        <div id='carta'>
            <Image
                src={link}
                alt={alt}
                width={width}
                height={height}
            ></Image>
            <div>
                <h2>{titulo}</h2>
            </div>
            <div>
                <p>{descripcion}</p>
            </div>
        </div>
    );
}