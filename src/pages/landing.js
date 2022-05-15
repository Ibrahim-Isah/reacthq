import React from 'react';
import Companies from '../components/Companies';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Pathway from '../components/Pathway';
import Skills from '../components/Skills';
import Testimonial from '../components/Testimonial';
import Hero from '../components/Hero';
const Landing = () => {
	return (
		<div className='container-xl mx-auto mt-8 font-[Montserrat]'>
			<div className='mx-auto md:mx-10'>
				<Header />
				<Hero />
				<Companies />
			</div>
			<Skills />
			<Testimonial />
			<Pathway />
			<Footer />
		</div>
	);
};

export default Landing;
