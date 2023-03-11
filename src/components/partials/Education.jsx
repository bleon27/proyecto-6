function Education({certificados}) {
    return (
        <>
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
              <h1 className='fw-bold'>CERTIFICADOS</h1>
              <div className='mt-5'>
                {
                  certificados && certificados.map((i) => {
                    return (
                      <>
                        <div className='content-tf d-flex justify-content-between'>
                          <h2>{i.estudio}</h2>
                          <div className='text-orange fecha'>{i.fecha}</div>
                        </div>
                        <p className='fs-4 text-dark-secundary mb-5'>{i.title}</p>
                      </>
                    )
                  })
                }
              </div>
            </div>
          </section>
        </>
    );
}

export default Education;
