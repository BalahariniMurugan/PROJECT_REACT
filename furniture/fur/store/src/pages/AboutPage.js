import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
         
          <p>
          Welcome to <b>EasyHome Interiors</b>, 
            where we blend passion and craftsmanship to redefine your living spaces. S
            ince 2015, our journey has been driven by the vision to curate a collection 
            that transcends trends, offering timeless furniture and home decor. Rooted in 
            the values of transparency and integrity, we strive to create more than just a shopping experience. 
            Each piece is chosen with care, reflecting our commitment to superior quality and design. At <b>EasyHome Interiors</b>, 
            we invite you to explore a diverse range that caters to various styles, transforming houses into personalized havens. 
            Thank you for joining us on this exciting journey of elevating the way you experience home.
          </p>
        </article>
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage