import React from 'react';

import styled from 'styled-components'

const WrapperFooter = styled.footer`
    font-size: .7rem;
    color: #b7b2b2;
`

function FooterSection() {

    return (
            <WrapperFooter className='p-5 d-flex align-items-center justify-content-center text-center'>
                Designed & Built by Yusif Sardarli
            </WrapperFooter>
    );
  }
  
  export default FooterSection;
  
