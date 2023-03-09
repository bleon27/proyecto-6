import React, { useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

function App({ urls }) {

    return (
        <>
            {
                urls && urls.map((i, index) => {
                    if (i.urlGit != null) {
                        return (
                            <a className='link-dark url_redirect' key={index} href={i.urlGit} target='_blank'>
                                <FaGithub className='git-modal' />
                            </a>
                        )
                    }
                    if (i.urlDemo != null) {
                        return (
                            <a className='link-dark url_redirect' key={index} href={i.urlDemo} target='_blank'>
                                DEMO
                            </a>
                        )
                    }
                })
            }
        </>
    );
}

export default App;
