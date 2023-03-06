import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Logo from './img/CodLen-removebg-preview.png';
import p6 from './img/proyecto 6.jpg';
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {
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
                <ul className='mw-800'>
                  <li>Atención al cliente.</li>
                  <li>Asistente de armado de tableros de control para bombas y motores.</li>
                  <li>Diseño de pista y ensamblado de araña robot.</li>
                  <li>Instalación de luminaria.</li>
                </ul>
              </div>
              <div className='mt-5'>
                <div className='content-tf d-flex justify-content-between'>
                  <h2 className='mw-800'>SUPRELEC - Departamento Técnico. (Pasantía Laboral)</h2>
                  <div className='text-orange fecha'>JUNIO 2010 - NOVIEMBRE 2010</div>
                </div>
                <ul className='mw-800'>
                  <li>Encargado de la presencia en Internet de la empresa:
                    actualización del sitio web y de las cuentas de redes
                    sociales corporativas.</li>
                </ul>
              </div>
              <div className='mt-5'>
                <div className='content-tf d-flex justify-content-between'>
                  <h2 className='mw-800'>Corporación Nacional de Electricidad (CNEL EP) - Departamento Técnico. (Pasantía Laboral)</h2>
                  <div className='text-orange fecha'>OCTUBRE 2017 - FEBRERO 2018</div>
                </div>
                <ul className='mw-800'>
                  <li>Mantenimiento técnico a equipos informáticos.</li>
                  <li>Instalación de software.</li>
                  <li>Desarrollo de aplicación de escritorio para registro de documentos.</li>
                  <li>Configuración de impresoras ip.</li>
                </ul>
              </div>
              <div className='mt-5'>
                <div className='content-tf d-flex justify-content-between'>
                  <h2 className='mw-800'>Agencia de Comunicación Digital GS360</h2>
                  <div className='text-orange fecha'>DICIEMBRE 2020 - DICIEMBRE 2021</div>
                </div>
                <ul className='mw-800'>
                  <li>Desarrollo de sitios web</li>
                  <li>Mantenimiento de sitios web</li>
                  <li>Actualización de información de sitios web</li>
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
                <p className='fs-4 text-dark-secundary mb-5'>Java, Javascript, PHP, C#, C++.</p>
                <div className='d-flex justify-content-between'>
                  <h2>Base de datos</h2>
                </div>
                <p className='fs-4 text-dark-secundary mb-5'>MySQL, PostgreSQL, MongoDB</p>
                <div className='d-flex justify-content-between'>
                  <h2>Frameworks</h2>
                </div>
                <p className='fs-4 text-dark-secundary mb-5'>Laravel, Vuejs, Bootstrap, React, express</p>
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
                <Row>
                  <Col xl={4} lg={4} md={5} sm={12} xs={12} className='px-3 py-3'>
                    <div className='container-img-projects position-relative'>
                      <Image src={p6} fluid />
                      <div class="overlay"></div>
                    </div>
                  </Col>
                  <Col xl={4} lg={4} md={5} sm={12} xs={12} className='px-3 py-3'>
                    <div className='container-img-projects position-relative'>
                      <Image src={p6} fluid />
                      <div class="overlay"></div>
                    </div>
                  </Col>
                  <Col xl={4} lg={4} md={5} sm={12} xs={12} className='px-3 py-3'>
                    <div className='container-img-projects position-relative'>
                      <Image src={p6} fluid />
                      <div class="overlay"></div>
                    </div>
                  </Col>
                  <Col xl={4} lg={4} md={5} sm={12} xs={12} className='px-3 py-3'>
                    <div className='container-img-projects position-relative'>
                      <Image src={p6} fluid />
                      <div class="overlay"></div>
                    </div>
                  </Col>
                  <Col xl={4} lg={4} md={5} sm={12} xs={12} className='px-3 py-3'>
                    <div className='container-img-projects position-relative'>
                      <Image src={p6} fluid />
                      <div class="overlay"></div>
                    </div>
                  </Col>
                  <Col xl={4} lg={4} md={5} sm={12} xs={12} className='px-3 py-3'>
                    <div className='container-img-projects position-relative'>
                      <Image src={p6} fluid />
                      <div class="overlay"></div>
                    </div>
                  </Col>
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
    </>
  );
}

export default App;
