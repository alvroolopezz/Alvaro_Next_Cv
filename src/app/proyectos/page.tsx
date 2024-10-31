import React from 'react';
import Cabecera from '@/src/components/Cabecera';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import Card from '@/src/components/Card';
import './proyectos.css'; 


export default function proyectos() {
  return (
    <body>  
      <Cabecera/>
      <Navbar/>
      <div> 
        <h2>Proyectos : </h2>
      </div>
      <div id="cards">
        <Card
          link="/Images/web1.png"
          alt=" imagehtmlweb"
          width={300}
          height={200}
          titulo="web simple"
          descripcion="Ofrece control total y un código ligero, ideal para personalizar el diseño y optimizar el rendimiento.."
        />
        <Card
          link="/Images/bootstrap.png"
          alt=" imagebootstrap"
          width={300}
          height={200}
          titulo="web con bootstrap"
          descripcion="Facilita el diseño rápido de interfaces responsivas con componentes predefinidos y una amplia comunidad de soporte."
        />
        <Card
          link="/Images/uikit.png"
          alt=" imageuikit"
          width={300}
          height={200}
          titulo="web con uikit"
          descripcion=" Framework modular y elegante que permite crear interfaces personalizables y dinámicas con componentes avanzados.."
        />
      </div>
      <Footer/> 
    </body>
  );
}