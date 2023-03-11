import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Logo from '../../img/CodLen-removebg-preview.png';

function Navbar() {
    var modes = '';
    var mode_btn = '';
    var modes_height = 200;
    var ctrl = true;
    window.addEventListener("resize", function () {
        var root = document.querySelector("#root > div");
        modes = document.querySelector("#modes_menu");
        if (root.clientWidth > 1024) {
            modes.style.height = `auto`;
            modes.style.opacity = 1;
        } else {
            modes.style.height = 0;
            modes.style.opacity = 0;
        }
    });
    const toggle = () => {
        var root = document.querySelector("#root > div");
        /*
        console.log(window.screen.width)
        */
        if (root.clientWidth <= 1024) {
            if (ctrl) {
                modes = document.querySelector("#modes_menu");
                mode_btn = document.querySelector("#modes-btn");
                //modes_height = modes.clientHeight;
                modes.style.height = 0;
                ctrl = false;
            }

            var modes_position = modes.style.opacity;

            if (modes_position != 1) {
                modes.style.height = `${modes_height}px`;
                modes.style.opacity = 1;
            } else {
                modes.style.height = 0;
                modes.style.opacity = 0;
            }
        }
    }

    return (
        <>
            <Nav defaultActiveKey="#about" className="flex-column w-100 fw-bold">
                <Nav.Link onClick={(e) => toggle({ e })} className='justify-content-center d-flex text-orange w-100'>
                    <div className='rounded-circle content-photo'>
                        <div className='circulo'></div>
                        <Image id="modes-btn" src={Logo} className="rounded-circle" />
                    </div>
                </Nav.Link>
                <div id='modes_menu'>
                    <Nav.Link href="#about" className='text-center text-white-p w-100'>SOBRE MI</Nav.Link>
                    <Nav.Link href="#experience" className='text-center text-white-p w-100'>EXPERIENCIA</Nav.Link>
                    <Nav.Link href="#education" className='text-center text-white-p w-100'>EDUCACIÓN</Nav.Link>
                    <Nav.Link href="#skills" className='text-center text-white-p w-100'>HABILIDADES</Nav.Link>
                    {/*<Nav.Link href="#interests" className='text-center text-white-p w-100'>INTERES</Nav.Link>*/}
                    <Nav.Link href="#projects" className='text-center text-white-p w-100'>PROYECTOS</Nav.Link>
                    {/*<Nav.Link href="#awards" className='text-center text-white-p w-100'>PREMIOS</Nav.Link>*/}
                </div>
            </Nav>
        </>
    );
}

export default Navbar;
