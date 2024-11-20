import React from 'react';

const Category = ({ title, links }) => {
    return (
        <div className="lg:w-1/6 md:w-1/6 sm:w-1/3 w-1/2 px-4 mb-10 md:mb-0">
            <h2 className="title-font font-medium text-gray-500 tracking-widest text-sm mb-3">{title}</h2>
            <nav className="list-none">
                {links.map((link, index) => (
                    <li key={index}>
                        <a className="text-slate-900">{link}</a>
                    </li>
                ))}
            </nav>
        </div>
    );
};

const Footer = () => {
    const categories = [
        {
            title: 'PRODUCT',
            links: ['Overview',
                'Features',
                'Solutions',
                'Tutorials',
                'Pricing',
                'Releases'],
        },
        {
            title: 'COMPANY',
            links: ['About us',
                'Careers',
                'Press',
                'News',
                'Media kit',
                'Contact'],
        },
        {
            title: 'RESOURCES',
            links: ['Blog',
                'Newsletter',
                'Events',
                'Help centre',
                'Tutorials',
                'Support'],
        },
        {
            title: 'USE CASE',
            links: ['Startups',
                'Enterprise',
                'Government',
                'SaaS centre',
                'Marketplaces',
                'Ecommerce'],
        },
        {
            title: 'SOCIAL',
            links: ['Twitter',
                'LinkedIn',
                'Facebook',
                'GitHub',
                'AngelList',
                'Dribbble'],
        },
        {
            title: 'LEGAL',
            links: ['Terms',
                'Privacy',
                'Cookies',
                'Licenses',
                'Settings',
                'Contact'],
        },
    ];

    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap text-left -mb-10 -mx-4">
                    {categories.map((category, index) => (
                        <Category key={index} title={category.title} links={category.links} />
                    ))}
                </div>
            </div>

            <hr />

            <div className="sm:flex sm:justify-between sm:items-center m-5">
                <img src="images\Logo wrap.png" alt="logo" />
                <span className="text-sm text-gray-500">
                    © 2077 Untitled UI. All rights reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;





