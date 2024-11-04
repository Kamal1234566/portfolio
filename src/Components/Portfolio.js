import React from 'react';
import java from './java.png';
import mongo from './mongodb.jpg';
import express from './express.png';
import react from './reactjs.png';
import node from './node.png';

const Portfolio = () => {
    const cartItems = [
        { id: 1, logo: mongo, name: "MongoDB" },
        { id: 2, logo: express, name: "Express" },
        { id: 3, logo: java, name: "Java" },
        { id: 4, logo: react, name: "ReactJs" },
        { id: 5, logo: node, name: "NodeJs" }
    ];

    return (
        <div name="Portfolio"className="max-w-screen-2xl container mx-auto px-6 md:px-16 py-12">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Portfolio</h1>
            <p className="text-center text-lg text-gray-600 mb-10">Featured Projects</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {cartItems.map(({ id, logo, name }) => (
                    <div
                        key={id}
                        className="flex flex-col items-center p-5 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="w-32 h-32 rounded-full overflow-hidden shadow-md mb-4">
                            <img src={logo} className="w-full h-full object-cover" alt={name} />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
                        <p className="text-sm text-gray-500 text-center mt-2 mb-4">
                            "Lorem ipsum" is placeholder text commonly used in design and publishing to visualize layout without distracting from the design elements.
                        </p>
                        <div className="flex space-x-3 mt-4">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200">
                                Video
                            </button>
                            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200">
                                Source Code
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
