import React from 'react'
import { BsTruck, BsCreditCard, BsPerson } from 'react-icons/bs'
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
    icon: <BsTruck />,
    title: 'Shipping',
    text:
      'Fast delivery available over 50 + regions',
  },
  {
    id: 2,
    icon: <BsCreditCard />,
    title: 'Safe payment',
    text:
      'Secure transaction as it has various payment gateway and 100% money back guarnteed.',
  },
  {
    id: 3,
    icon: <BsPerson />,
    title: 'Customer Support',
    text:
      'Contact support 24 / 7. Monday to Friday : 9:00 AM to 10:00 PM.',
  },
]

export const products_url = `https://course-api.com/react-store-products`

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
