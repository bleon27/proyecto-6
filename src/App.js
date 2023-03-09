import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Logo from './img/CodLen-removebg-preview.png';
import p1 from './img/proyectos/proyecto 1.jpg';
import p2 from './img/proyectos/proyecto 2.jpg';
import p3 from './img/proyectos/proyecto 3.jpg';
import p4 from './img/proyectos/proyecto 4.jpg';
import p5 from './img/proyectos/proyecto 5.jpg';
import p6 from './img/proyectos/proyecto 6.jpg';
import { BiCheck } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaHtml5, FaCss3Alt, FaJava, FaReact, FaPhp, FaLaravel, FaBootstrap } from "react-icons/fa";
import { SiJavascript, SiCsharp, SiCplusplus, SiPostgresql, SiMongodb, SiExpress } from "react-icons/si";
import { RiVuejsFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LogoLink from './components/partials/LogoLink';

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function App() {
  const [show, setShow] = useState(false);
  const [imgModal, setImgModal] = useState('');
  const [titleModal, setTitleModal] = useState('');
  const [descriptionModal, setDescriptionModal] = useState('');
  const [urlGitModal, setUrlGitModal] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  var viewModal = (e) => {
    handleShow()

    var id = e.target.parentElement.dataset['id'];
    for (const index1 in proyectos) {
      for (const index2 in proyectos[index1]) {
        if (proyectos[index1]['id'] == id) {
          setTitleModal(proyectos[index1]['title']);
          setDescriptionModal(proyectos[index1]['description']);
          setImgModal(proyectos[index1]['image']);
          setUrlGitModal([{
            'urlGit': proyectos[index1]['urlGit'],
          }, { 'urlDemo': proyectos[index1]['urlDemo'], }]);
          break;
        }
      }
    }
  }


  return (
    <>
      <div className='content position-absolute'>
        <div className='vh-100 float-start content-person align-items-center fixed-top'>
          <Nav defaultActiveKey="#about" className="flex-column w-100 fw-bold">
            <Nav.Link href="#about" className='justify-content-center d-flex text-orange w-100'>
              <div className='rounded-circle content-photo'>
                <Image src={Logo} className="rounded-circle" />
              </div>
            </Nav.Link>
            <Nav.Link href="#about" className='text-center text-white-p w-100'>SOBRE MI</Nav.Link>
            <Nav.Link href="#experience" className='text-center text-white-p w-100'>EXPERIENCIA</Nav.Link>
            <Nav.Link href="#education" className='text-center text-white-p w-100'>EDUCACIÓN</Nav.Link>
            <Nav.Link href="#skills" className='text-center text-white-p w-100'>HABILIDADES</Nav.Link>
            <Nav.Link href="#interests" className='text-center text-white-p w-100'>INTERES</Nav.Link>
            <Nav.Link href="#projects" className='text-center text-white-p w-100'>PROYECTOS</Nav.Link>
            <Nav.Link href="#awards" className='text-center text-white-p w-100'>PREMIOS</Nav.Link>
          </Nav>
        </div>
        <div className='m-vh-100 float-end content-information'>
          <section id='about' className='py-5 px-5 m-vh-100 d-flex align-items-center'>
            <div>
              <div className='name fw-bold text-dark-p'>Bryan <span className='text-orange'>Leon</span></div>
              <p className='fs-4 text-dark-secundary mb-5'>ECUADOR, SANTO DOMINGO DE LOS TSACHILAS <span className='text-orange'>bleon27leon@gmail.com</span></p>
              <p className='fs-4 mb-5'>
                Motivado a seguir capacitándome
                en mi crecimiento profesional, así
                mismo, perfeccionando cada una
                de mis conocimientos para el
                ámbito laboral. Por último, creo
                firmemente en mi facultad para
                proyectar y producir ideas e
                innovaciones, en todo lo que
                respecta a proyectos de
                aplicaciones web y de escritorio.
              </p>
              <div className='d-flex content-social-media'>
                <div className='rounded-circle bg-blue d-flex justify-content-center align-items-center py-3 px-3 me-5'>
                  <FaFacebookF className='fs-1 text-white' />
                </div>
                <div className='rounded-circle bg-blue d-flex justify-content-center align-items-center py-3 px-3 me-5'>
                  <FaLinkedinIn className='fs-1 text-white' />
                </div>
                <div className='rounded-circle bg-blue d-flex justify-content-center align-items-center py-3 px-3 me-5'>
                  <FaGithub className='fs-1 text-white' />
                </div>
              </div>
            </div>
          </section>
          <hr className="m-0" />
          <section id='experience' className='py-5 px-5 m-vh-100 d-flex align-items-center'>
            <div className='w-100'>
              <h1 className='fw-bold'>EXPERIENCIA</h1>
              <div className='mt-5'>
                <div className='content-tf d-flex justify-content-between'>
                  <h2 className='mw-800'>SIELMEC Automatización y control industrial - Departamento Técnico. (Pasantía Laboral)</h2>
                  <div className='text-orange fecha'>MARZO 2009 - MAYO 2010</div>
                </div>
                <ul className='mw-800 list-unstyled'>
                  <li><BiCheck className='listas-p' /> Atención al cliente.</li>
                  <li><BiCheck className='listas-p' /> Asistente de armado de tableros de control para bombas y motores.</li>
                  <li><BiCheck className='listas-p' /> Diseño de pista y ensamblado de araña robot.</li>
                  <li><BiCheck className='listas-p' /> Instalación de luminaria.</li>
                </ul>
              </div>
              <div className='mt-5'>
                <div className='content-tf d-flex justify-content-between'>
                  <h2 className='mw-800'>SUPRELEC - Departamento Técnico. (Pasantía Laboral)</h2>
                  <div className='text-orange fecha'>JUNIO 2010 - NOVIEMBRE 2010</div>
                </div>
                <ul className='mw-800 list-unstyled'>
                  <li><BiCheck className='listas-p' /> Encargado de la presencia en Internet de la empresa:
                    actualización del sitio web y de las cuentas de redes
                    sociales corporativas.</li>
                </ul>
              </div>
              <div className='mt-5'>
                <div className='content-tf d-flex justify-content-between'>
                  <h2 className='mw-800'>Corporación Nacional de Electricidad (CNEL EP) - Departamento Técnico. (Pasantía Laboral)</h2>
                  <div className='text-orange fecha'>OCTUBRE 2017 - FEBRERO 2018</div>
                </div>
                <ul className='mw-800 list-unstyled'>
                  <li><BiCheck className='listas-p' /> Mantenimiento técnico a equipos informáticos.</li>
                  <li><BiCheck className='listas-p' /> Instalación de software.</li>
                  <li><BiCheck className='listas-p' /> Desarrollo de aplicación de escritorio para registro de documentos.</li>
                  <li><BiCheck className='listas-p' /> Configuración de impresoras ip.</li>
                </ul>
              </div>
              <div className='mt-5'>
                <div className='content-tf d-flex justify-content-between'>
                  <h2 className='mw-800'>Agencia de Comunicación Digital GS360</h2>
                  <div className='text-orange fecha'>DICIEMBRE 2020 - DICIEMBRE 2021</div>
                </div>
                <ul className='mw-800 list-unstyled'>
                  <li><BiCheck className='listas-p' /> Desarrollo de sitios web</li>
                  <li><BiCheck className='listas-p' /> Mantenimiento de sitios web</li>
                  <li><BiCheck className='listas-p' /> Actualización de información de sitios web</li>
                </ul>
              </div>
            </div>
          </section>
          <hr className="m-0" />
          <section id='education' className='py-5 px-5 m-vh-100 d-flex align-items-center'>
            <div className='w-100'>
              <h1 className='fw-bold'>EDUCACIÓN</h1>
              <div className='mt-5'>
                <div className='content-tf d-flex justify-content-between'>
                  <h2>Pontificia Universidad Católica del Ecuador sede Santo Domingo</h2>
                  <div className='text-orange fecha'>SEPTIEMBRE DEL 2019</div>
                </div>
                <p className='fs-4 text-dark-secundary mb-5'>INGENIERO DE SISTEMAS Y COMPUTACION</p>
              </div>
            </div>
          </section>
          <hr className="m-0" />
          <section id='skills' className='py-5 px-5 m-vh-100 d-flex align-items-center'>
            <div className='w-100'>
              <h1 className='fw-bold'>HABILIDADES</h1>
              <div className='mt-5'>
                <h2>Lenguajes de programacion</h2>
                <ul className='list-unstyled'>
                  <li><FaJava className='fs-4 mb-2 text-dark-p' /> Java</li>
                  <li><SiJavascript className='fs-4 mb-2 text-dark-p' /> Javascript</li>
                  <li><FaPhp className='fs-4 mb-2 text-dark-p' /> PHP</li>
                  <li><SiCsharp className='fs-4 mb-2 text-dark-p' /> C sharp</li>
                  <li><SiCplusplus className='fs-4 mb-2 text-dark-p' /> C++</li>
                </ul>
                <h2>Base de datos</h2>
                <ul className='list-unstyled'>
                  <li><GrMysql className='fs-4 mb-2 text-dark-p' /> MySQL</li>
                  <li><SiPostgresql className='fs-4 mb-2 text-dark-p' /> PostgreSQL</li>
                  <li><SiMongodb className='fs-4 mb-2 text-dark-p' /> MongoDB</li>
                </ul>
                <h2>Frameworks</h2>
                <ul className='list-unstyled'>
                  <li><FaLaravel className='fs-4 mb-2 text-dark-p' /> Laravel</li>
                  <li><RiVuejsFill className='fs-4 mb-2 text-dark-p' /> Vuejs</li>
                  <li><FaBootstrap className='fs-4 mb-2 text-dark-p' /> Bootstrap</li>
                  <li><FaReact className='fs-4 mb-2 text-dark-p' /> React</li>
                  <li><SiExpress className='fs-4 mb-2 text-dark-p' /> Express</li>
                </ul>
                <ul>
                  <li>Resolución de problemas técnicos</li>
                  <li>Liderazgo de proyectos</li>
                </ul>
              </div>
            </div>
          </section>
          <hr className="m-0" />
          <section id='interests' className='py-5 px-5 m-vh-100 d-flex align-items-center'>
            <div>
              <div className='name fw-bold text-dark-p'>Bryan <span className='text-orange'>Leon</span></div>
              <p className='fs-4 text-dark-secundary mb-5'>3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 · <span className='text-orange'>nombre@email.com</span></p>
              <p className='fs-5 mb-5'>
                Tengo experiencia en el aprovechamiento de marcos ágiles para proporcionar una sinopsis sólida para resúmenes de alto nivel. Los enfoques iterativos de la estrategia corporativa fomentan el pensamiento colaborativo para promover la propuesta de valor general.
              </p>
            </div>
          </section>
          <hr className="m-0" />
          <section id='projects' className='py-5 px-5 m-vh-100 d-flex align-items-center'>
            <div className='w-100'>
              <h1 className='fw-bold'>PROYECTOS</h1>
              <div className='mt-5'>
                <p className='fs-4 text-dark-secundary mb-5'></p>
                <Row className='photos'>
                  {
                    proyectos && proyectos.map((i) => {
                      return (
                        <Col key={i.id} xl={4} lg={4} md={5} sm={12} xs={12} className='px-3 py-3'>
                          <div className='container-img-projects position-relative thumbnails' data-id={i.id} onClick={(e) => viewModal(e)}>
                            <Image className='img-border-dark rounded' src={i.image} fluid />
                            <div className="black rounded"></div>
                            <div className="title">{i.title}</div>
                          </div>
                        </Col>
                      );
                    })
                  }
                </Row>
              </div>
            </div>
          </section>
          <hr className="m-0" />
          <section id='awards' className='py-5 px-5 m-vh-100 d-flex align-items-center'>
            <div>
              <div className='name fw-bold text-dark-p'>Bryan <span className='text-orange'>Leon</span></div>
              <p className='fs-4 text-dark-secundary mb-5'>3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 · <span className='text-orange'>nombre@email.com</span></p>
              <p className='fs-5 mb-5'>
                Tengo experiencia en el aprovechamiento de marcos ágiles para proporcionar una sinopsis sólida para resúmenes de alto nivel. Los enfoques iterativos de la estrategia corporativa fomentan el pensamiento colaborativo para promover la propuesta de valor general.
              </p>
            </div>
          </section>
          <hr className="m-0" />
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>{titleModal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image className='img-border-dark rounded' src={imgModal} fluid />
          {descriptionModal}
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center' id='modal_footer'>
          <LogoLink urls={urlGitModal} />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
