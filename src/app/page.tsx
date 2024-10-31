import Cabecera from '../components/Cabecera';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import React from 'react';
import Card from '../components/Card';
import '../styles/page.css'; 

export default function Home() {
  return (
    <body>  
      <Cabecera/>
      <Navbar/>
      <div>
        <h2>Lenguajes que domino : </h2>
      </div>
      <div id="cards">
        <Card
          link="/Images/sql.png"
          alt=" imageSql"
          width={300}
          height={200}
          titulo="SQL"
          descripcion=" SQL (Structured Query Language) es un lenguaje de programación utilizado para gestionar y manipular bases de datos relacionales. Sirve para realizar operaciones como consultar, insertar, actualizar y eliminar datos de manera eficiente y estructurada. ."
        />
        <Card
          link="/Images/css.png"
          alt=" imagecss"
          width={300}
          height={200}
          titulo="CSS"
          descripcion=" CSS (Cascading Style Sheets) es un lenguaje de estilo utilizado para describir la presentación y el diseño de un documento HTML. Sirve para controlar aspectos como colores, fuentes, espaciado y disposición de los elementos en una página web, permitiendo así separar el contenido de su presentación. ."
        />
        <Card
          link="/Images/html.png"
          alt=" imagehtml"
          width={300}
          height={200}
          titulo="HTML"
          descripcion=" HTML (HyperText Markup Language) es el lenguaje de marcado estándar utilizado para crear y estructurar contenido en la web. Sirve para definir elementos como encabezados, párrafos, enlaces, imágenes y otros componentes, formando la base de cualquier página web. ."
        />
        <Card
          link="/Images/java.png"
          alt=" imagejava"
          width={300}
          height={200}
          titulo="JAVA"
          descripcion=" Java es un lenguaje de programación de propósito general, orientado a objetos y ampliamente utilizado para desarrollar aplicaciones de software, desde aplicaciones móviles hasta sistemas empresariales. Su característica principal es la portabilidad, ya que el código Java se puede ejecutar en cualquier dispositivo que tenga una máquina virtual Java (JVM). ."
        />
        <Card
          link="/Images/mongodb.png"
          alt=" imagemongodb"
          width={300}
          height={200}
          titulo="MONGODB"
          descripcion=" MongoDB es una base de datos NoSQL orientada a documentos que utiliza un formato de datos similar a JSON (JavaScript Object Notation) para almacenar información. A diferencia de las bases de datos relacionales, MongoDB permite una mayor flexibilidad en la estructura de los datos, lo que facilita el manejo de grandes volúmenes de información y la escalabilidad horizontal. Es ampliamente utilizado en aplicaciones web y móviles por su capacidad para manejar datos no estructurados y su facilidad de integración con lenguajes de programación modernos. ."
        />
        <Card
          link="/Images/next.png"
          alt=" imagenext"
          width={300}
          height={200}
          titulo="NEXT"
          descripcion=" Next.js es un framework de React que permite construir aplicaciones web con renderizado del lado del servidor y generación de sitios estáticos, optimizando el rendimiento y el SEO. Ofrece enrutamiento basado en archivos y soporte para API Routes, facilitando el desarrollo de aplicaciones modernas. ."
        />
        <Card
          link="/Images/react.png"
          alt=" imagereact"
          width={300}
          height={200}
          titulo="REACT"
          descripcion=" React es una biblioteca de JavaScript para construir interfaces de usuario, desarrollada por Facebook. Permite crear componentes reutilizables y gestionar el estado de manera eficiente, facilitando el desarrollo de aplicaciones web interactivas y dinámicas. ."
        />
      </div>
      <Footer/> 
    </body>
  );
}