import React from 'react'
import './testimonials.css'
import Avatar1 from '../../assets/avatar1.jpg'
import Avatar2 from '../../assets/avatar2.jpg'
import Avatar3 from '../../assets/avatar3.jpg'
import Avatar4 from '../../assets/avatar4.jpg'
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: Avatar1,
        name: 'Ernest Achiever',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit Quaerat error rerum sit, aliquam voluptates fuga possimus ut rem maiores,ipsa adipisci iusto deserunt.'
    },
    {
        avatar: Avatar2,
        name: 'Ernest Achiever',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit Quaerat error rerum sit, aliquam voluptates fuga possimus ut rem maiores,ipsa adipisci iusto deserunt.'
    },
    {
        avatar: Avatar3,
        name: 'Ernest Achiever',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit Quaerat error rerum sit, aliquam voluptates fuga possimus ut rem maiores,ipsa adipisci iusto deserunt.'
    },
    {
        avatar: Avatar4,
        name: 'Ernest Achiever',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit Quaerat error rerum sit, aliquam voluptates fuga possimus ut rem maiores,ipsa adipisci iusto deserunt.'
    }
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review From clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonial'>
                                <div className="client__avatar">
                                    <img src={avatar} alt={name} />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials;