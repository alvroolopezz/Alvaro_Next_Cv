import React from 'react';
import './Sobremi.css'; 

import Cabecera from '@/src/components/Cabecera';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import Image from 'next/image';

export default function Sobremi() {
  return (
    <body>
      <Cabecera />
      <Navbar />
      <div className="container">
        <h1 className="titulo">Sobre mí</h1>
        <div className="img">
          <Image 
          src="/Images/yo.png" 
          alt="yo" 
          width={300} 
          height={300} 
        />
      </div>
        <hr />
        <div className="perfil">
          <h2>Álvaro López</h2>
          <p>Soy Álvaro, desarrollador web,vivo un pequeño pueblo en Ávila. Estudié en UTAD, donde consolidé mis conocimientos en programación y tecnología. Tengo un gran interés en el análisis y procesamiento de datos, y busco constantemente oportunidades en el ámbito del Big Data. Me motiva participar en proyectos innovadores que aprovechen grandes volúmenes de datos para generar insights y soluciones útiles.</p>
        </div>
        <div className="habilidades">
          <hr />
          <h3>Habilidades:</h3>
          <ul>
            <li>Trabajo en equipo</li>
            <li>Rápido aprendizaje</li>
            <li>Curiosidad</li>
          </ul>
        </div>
        <hr />
        <div className="contacto">
          <h3>Contacto</h3>
          <p>Email: alvaro.lopez3@live.u-tad.com</p>
          <p>alvarolopez6</p>
        </div>
      </div>
      <Footer />
      </body>
  );
}