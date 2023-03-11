import Navbar from './elements/navbar';
import About from './partials/About';
import Experience from './partials/Experience';
import Education from './partials/Education';
import Skills from './partials/Skills';
import Projects from './partials/Projects';

import p1 from '../img/proyectos/proyecto 1.jpg';
import p2 from '../img/proyectos/proyecto 2.jpg';
import p3 from '../img/proyectos/proyecto 3.jpg';
import p4 from '../img/proyectos/proyecto 4.jpg';
import p5 from '../img/proyectos/proyecto 5.jpg';

function Home() {

    const certificados = [
        {
            estudio: 'IC3 DIGITAL LITERACY',
            title: 'Certificado en TIC\'s',
            fecha: '2013',
        },
        {
            estudio: 'Pontificia Universidad Católica del Ecuador sede Santo Domingo',
            title: 'Certificado en SINAPUCE',
            fecha: '2014',
        },
        {
            estudio: 'Pontificia Universidad Católica del Ecuador sede Santo Domingo',
            title: 'Certificado en HTML',
            fecha: '2017',
        },
        {
            estudio: 'Solo Learn',
            title: 'Certificado en HTML',
            fecha: '17 de Febrero del 2017',
        },
        {
            estudio: 'CISCO',
            title: 'Networking Technician',
            fecha: '2018',
        },
        {
            estudio: 'Solo Learn',
            title: 'Certificado en CSS',
            fecha: '8 de Octubre del 2018',
        },
        {
            estudio: 'Solo Learn',
            title: 'Certificado en PHP',
            fecha: '11 de Octubre del 2018',
        },
        {
            estudio: 'Solo Learn',
            title: 'Certificado en JavaScript',
            fecha: '29 de Julio del 2019',
        },
        {
            estudio: 'Capacítate para el empleo',
            title: 'Certificado en Técnico en instalación y reparaciòn de equipo de cómputo',
            fecha: '2019',
        },
        {
            estudio: 'Solo Learn',
            title: 'Certificado en jQuery',
            fecha: '07 de Septiembre del 2019',
        },
        {
            estudio: 'Solo Learn',
            title: 'Certificado en Java',
            fecha: '15 de Junio del 2020',
        }
    ]

    const proyectos = [
      {
        'id': 1,
        'title': 'Landing de Venta',
        'description': 'Plantilla para landing page para venta de comida',
        'image': p2,
        'urlGit': 'https://github.com/bleon27/proyecto-1',
        'urlDemo': 'https://landing.codlen.com/'
      }, {
        'id': 2,
        'title': 'Aplicación CRUD',
        'description': 'Crud con diseño sencillo usando el local storage con javascript',
        'image': p1,
        'urlGit': 'https://github.com/bleon27/proyecto2-crud-javascrip',
        'urlDemo': 'https://localstorage.codlen.com/'
      }, {
        'id': 3,
        'title': 'Dashboard App',
        'description': 'Consumo de api agregando con campos de búsqueda para filtrado de datos y graficas con chratjs',
        'image': p3,
        'urlGit': 'https://github.com/bleon27/rick-and-morty',
        'urlDemo': 'https://rickandmorty.codlen.com/'
      }, {
        'id': 4,
        'title': 'Restaurant App',
        'description': 'Plantilla de sitio web de venta de comida con carrito de compras e inserción y consumo de datos usando firebase, react, nodejs y express',
        'image': p4,
        'urlGit': 'https://github.com/bleon27/proyecto-4-v2',
        'urlDemo': 'https://restaurante.codlen.com/'
      }, {
        'id': 5,
        'title': 'E Commerce App',
        'description': 'E-commerce de equipos de música con login, carrito de compras y perfil de usuarios con inserción y consumo de datos usando mongodb, express, react y nodejs',
        'image': p5,
      }
    ]

    return (
        <>
            <div className='content position-absolute'>
                <div className='vh-100 float-start content-person align-items-center fixed-top'>
                    <Navbar />
                </div>
                <div className='m-vh-100 float-end content-information'>
                    <About />
                    <hr className="m-0" />
                    <Experience />
                    <hr className="m-0" />
                    <Education certificados={certificados} />
                    <hr className="m-0" />
                    <Skills />
                    <hr className="m-0" />
                    <Projects proyectos={proyectos}/>
                    <hr className="m-0" />
                </div>
            </div>

        </>
    );
}

export default Home;
