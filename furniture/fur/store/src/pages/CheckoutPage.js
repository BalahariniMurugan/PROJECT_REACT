import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'

const CheckoutPage = () => {
  return <main>
    <PageHero title='checkout'/>
    <Wrapper className='page'>
      <br/>
      <h4>Successfully purchased the product!!</h4>
    </Wrapper>
  </main>
}
const Wrapper = styled.div``
export default CheckoutPage