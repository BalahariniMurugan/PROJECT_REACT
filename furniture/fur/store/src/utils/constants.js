import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
    'Our mission is to enrich the lives of our customers by providing them with meticulously crafted furniture that seamlessly blends style, comfort, and functionality.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Our vision is to be the preferred destination for those seeking exceptional furniture that transcends trends and stands the test of time. We aspire to create an inspiring and customer-centric environment.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'Established in 2015,EasyHome Interiors has been a trusted name in the furniture industry. From our humble beginnings to becoming a prominent player in the market, our journey has been fueled by a passion for commitment to customer satisfaction.',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`