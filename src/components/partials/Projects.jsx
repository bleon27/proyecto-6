import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import LogoLink from '../partials/LogoLink';

function About({ proyectos }) {
    const [show, setShow] = useState(false);
    const [imgModal, setImgModal] = useState('');
    const [titleModal, setTitleModal] = useState('');
    const [descriptionModal, setDescriptionModal] = useState('');
    const [urlGitModal, setUrlGitModal] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    console.log(proyectos[index1]['urlGit'])
                    break;
                }
            }
        }
    }

    return (
        <>
            <section id='projects' className='py-5 px-5 m-vh-100 d-flex align-items-center'>
                <div className='w-100'>
                    <h1 className='fw-bold'>PROYECTOS</h1>
                    <div className='mt-5'>
                        <p className='fs-4 text-dark-secundary mb-5'></p>
                        <Row className='photos'>
                            {
                                proyectos && proyectos.map((i) => {
                                    return (
                                        <Col key={i.id} xl={4} lg={6} md={6} sm={12} xs={12} className='px-3 py-3'>
                                            <div className='container-img-projects position-relative thumbnails' data-id={i.id} onClick={(e) => viewModal(e)}>
                                                <Image className='img-border-dark rounded' src={i.image} fluid />
                                                <div className="black rounded"></div>
                                                <div className="title text-center">{i.title}</div>
                                            </div>
                                        </Col>
                                    );
                                })
                            }
                        </Row>
                    </div>
                </div>
            </section>
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

export default About;
