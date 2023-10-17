import React from 'react';

import styled from 'styled-components'

const WrapperFooter = styled.footer`
    font-size: .7rem;
    color: #b7b2b2;
    gap: 0rem;
`

function FooterSection() {

    return (
        <>
            <WrapperFooter className=' d-flex align-items-center justify-content-center text-center'>
                Designed & Built by Yusif Sardarli
            </WrapperFooter>
            <WrapperFooter className='pt-1 pb-5 d-flex align-items-center justify-content-center text-center'>
                <strong>All Rights Reserved.</strong>
            </WrapperFooter>
        </>
    );
  }
  
  export default FooterSection;
  
