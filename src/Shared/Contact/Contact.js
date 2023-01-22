import React from 'react';
// import appointment from '../../../assets/images/appointment.png'
// import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Contact = () => {
    return (
        <section style={{
            background: `url('https://img.freepik.com/free-vector/abstract-watercolor-pastel-background_87374-122.jpg?w=1060&t=st=1674304661~exp=1674305261~hmac=34513eef8a28ca1211d190f8c495a020e879901bdf3412137a3466e4cce2dee9')`,
            backgroundSize:'cover'
        }} className="p-6 my-20">
        <form novalidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow ng-untouched ng-pristine ng-valid">
            <h2 className="w-full text-blue-500 text-center text-3xl font-bold leading-tight">Contact us</h2>
            <h1 className='text-3xl text-slate text-center'>Stay Connected With Us</h1>
            <div>
                <label for="name" className="block mb-1 ml-1">Name</label>
                <input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400" />
            </div>
            <div>
                <label for="email" className="block mb-1 ml-1">Email</label>
                <input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400" />
            </div>
            <div>
                <label for="message" className="block mb-1 ml-1">Message</label>
                <textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 "></textarea>
            </div>
            <div className='text-center'>
                <button>Submit</button>
            </div>
        </form>
    </section>
    );
};

export default Contact;