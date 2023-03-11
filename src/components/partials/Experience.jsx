import { BiCheck } from "react-icons/bi";

function App() {
    return (
        <>
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
        </>
    );
}

export default App;
