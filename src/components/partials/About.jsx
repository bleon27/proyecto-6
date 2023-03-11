import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

function About() {
    return (
        <>
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
        </>
    );
}

export default About;
