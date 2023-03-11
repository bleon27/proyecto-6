import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaJava, FaReact, FaPhp, FaLaravel, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiCsharp, SiCplusplus, SiPostgresql, SiMongodb, SiExpress } from "react-icons/si";
import { RiVuejsFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";

function About() {
    return (
        <>
            <section id='skills' className='py-5 px-5 m-vh-100 d-flex align-items-center'>
                <div className='w-100'>
                    <h1 className='fw-bold'>HABILIDADES</h1>
                    <div className='mt-5'>
                        <Row>
                            <Col xl={4} lg={4} md={5} sm={12} xs={12} className='px-3 py-3'>
                                <h2>Lenguajes de programacion</h2>
                                <ul className='list-unstyled'>
                                    <li><FaJava className='fs-4 mb-2 text-dark-p' /> Java</li>
                                    <li><SiJavascript className='fs-4 mb-2 text-dark-p' /> Javascript</li>
                                    <li><FaPhp className='fs-4 mb-2 text-dark-p' /> PHP</li>
                                    <li><SiCsharp className='fs-4 mb-2 text-dark-p' /> C sharp</li>
                                    <li><SiCplusplus className='fs-4 mb-2 text-dark-p' /> C++</li>
                                </ul>
                            </Col>
                            <Col xl={4} lg={4} md={5} sm={12} xs={12} className='px-3 py-3'>
                                <h2>Base de datos</h2>
                                <ul className='list-unstyled'>
                                    <li><GrMysql className='fs-4 mb-2 text-dark-p' /> MySQL</li>
                                    <li><SiPostgresql className='fs-4 mb-2 text-dark-p' /> PostgreSQL</li>
                                    <li><SiMongodb className='fs-4 mb-2 text-dark-p' /> MongoDB</li>
                                </ul>
                            </Col>
                            <Col xl={4} lg={4} md={5} sm={12} xs={12} className='px-3 py-3'>
                                <h2>Frameworks</h2>
                                <ul className='list-unstyled'>
                                    <li><FaLaravel className='fs-4 mb-2 text-dark-p' /> Laravel</li>
                                    <li><RiVuejsFill className='fs-4 mb-2 text-dark-p' /> Vuejs</li>
                                    <li><FaBootstrap className='fs-4 mb-2 text-dark-p' /> Bootstrap</li>
                                    <li><FaReact className='fs-4 mb-2 text-dark-p' /> React</li>
                                    <li><SiExpress className='fs-4 mb-2 text-dark-p' /> Express</li>
                                </ul>
                            </Col>
                            <Col xl={4} lg={4} md={5} sm={12} xs={12} className='px-3 py-3'>
                                <h2>Entorno en tiempo de ejecución</h2>
                                <ul className='list-unstyled'>
                                    <li><FaNodeJs className='fs-4 mb-2 text-dark-p' /> Node.js</li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
