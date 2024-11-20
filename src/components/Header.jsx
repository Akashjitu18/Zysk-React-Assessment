import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const productsRef = useRef(null);
    const resourcesRef = useRef(null);
    const profileRef = useRef(null);

    const toggleProducts = () => {
        setIsProductsOpen(!isProductsOpen);
        setIsResourcesOpen(false);
    };

    const toggleResources = () => {
        setIsResourcesOpen(!isResourcesOpen);
        setIsProductsOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                productsRef.current &&
                !productsRef.current.contains(event.target)
            ) {
                setIsProductsOpen(false);
            }
            if (
                resourcesRef.current &&
                !resourcesRef.current.contains(event.target)
            ) {
                setIsResourcesOpen(false);
            }
            if (
                profileRef.current &&
                !profileRef.current.contains(event.target)
            ) {
                setIsProfileDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="h-20">
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src="images\Logo wrap.png" alt="logo" />
                    </a>


                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex-wrap items-center text-base justify-center font-semibold hidden md:flex">
                        <a className="mx-5 hover:text-gray-900 cursor-pointer">Home</a>
                        <div
                            className="relative flex items-center gap-1 cursor-pointer"
                            onClick={toggleProducts}
                            ref={productsRef}
                        >
                            <a className="ml-5 hover:text-gray-900">Products</a>
                            {isProductsOpen ? (
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5 12.5L10 7.5L15 12.5"
                                        stroke="#475467"
                                        strokeWidth="1.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5 7.5L10 12.5L15 7.5"
                                        stroke="#475467"
                                        strokeWidth="1.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            )}

                            {isProductsOpen && (
                                <div className="absolute top-7 mt-2 bg-white shadow-lg rounded-lg w-[500px] flex">


                                    <div className="w-2/3 p-4 pl-6">
                                        <ul className="space-y-4 text-gray-700 text-sm">
                                            <li className="flex items-start">
                                                <svg
                                                    className="w-8 h-8 mr-4 text-[#7F56D9]"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 5v14m7-7H5"
                                                    />
                                                </svg>
                                                <div>
                                                    <h4 className="font-semibold text-lg">Blog</h4>
                                                    <p className="text-xs text-gray-500">The latest industry news, updates, and info.</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <svg
                                                    className="w-8 h-8 mr-4 text-[#7F56D9]"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M19 12l-7 7-7-7"
                                                    />
                                                </svg>
                                                <div>
                                                    <h4 className="font-semibold text-lg">Customer stories</h4>
                                                    <p className="text-xs text-gray-500">Learn how our customers are making big changes.</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <svg
                                                    className="w-8 h-8 mr-4 text-[#7F56D9]"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M3 6h18M3 12h18M3 18h18"
                                                    />
                                                </svg>
                                                <div>
                                                    <h4 className="font-semibold text-lg">Video tutorials</h4>
                                                    <p className="text-xs text-gray-500">Get up and running on new features and techniques.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>


                                    <div className="w-9/12 p-4 bg-gray-100">
                                        <img
                                            src="images\Image (1).png"
                                            alt="Product Image"
                                            className="w-full h-36 object-cover rounded-lg"
                                        />
                                        <div className="mt-4  font-bold">
                                            <p>We've just released an update!</p>
                                            <p className="text-xs text-gray-500">Check out the all-new dashboard view. Pages now load faster.</p>
                                        </div>
                                    </div>
                                </div>
                            )}



                        </div>
                        <div
                            className="relative flex items-center gap-1 cursor-pointer"
                            onClick={toggleResources}
                            ref={resourcesRef}
                        >
                            <a className="ml-5 hover:text-gray-900">Resources</a>
                            {isResourcesOpen ? (
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5 12.5L10 7.5L15 12.5"
                                        stroke="#475467"
                                        strokeWidth="1.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5 7.5L10 12.5L15 7.5"
                                        stroke="#475467"
                                        strokeWidth="1.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            )}

                            {isResourcesOpen && (
                                <div className="absolute top-7 mt-2 bg-white shadow-lg rounded-lg w-[500px] flex">


                                    <div className="w-2/3 p-4 pl-6">
                                        <ul className="space-y-4 text-gray-700 text-sm">
                                            <li className="flex items-start">
                                                <svg
                                                    className="w-8 h-8 mr-4 text-[#7F56D9]"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 5v14m7-7H5"
                                                    />
                                                </svg>
                                                <div>
                                                    <h4 className="font-semibold text-lg">Blog</h4>
                                                    <p className="text-xs text-gray-500">The latest industry news, updates, and info.</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <svg
                                                    className="w-8 h-8 mr-4 text-[#7F56D9]"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M19 12l-7 7-7-7"
                                                    />
                                                </svg>
                                                <div>
                                                    <h4 className="font-semibold text-lg">Customer stories</h4>
                                                    <p className="text-xs text-gray-500">Learn how our customers are making big changes.</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <svg
                                                    className="w-8 h-8 mr-4 text-[#7F56D9]"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M3 6h18M3 12h18M3 18h18"
                                                    />
                                                </svg>
                                                <div>
                                                    <h4 className="font-semibold text-lg">Video tutorials</h4>
                                                    <p className="text-xs text-gray-500">Get up and running on new features and techniques.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>


                                    <div className="w-9/12 p-4 bg-gray-100">
                                        <img
                                            src="images\Image (1).png"
                                            alt="Product Image"
                                            className="w-full h-36 object-cover rounded-lg"
                                        />
                                        <div className="mt-4  font-bold">
                                            <p>We've just released an update!</p>
                                            <p className="text-xs text-gray-500">Check out the all-new dashboard view. Pages now load faster.</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <a className="mx-5 hover:text-gray-900 cursor-pointer">Pricing</a>
                    </nav>


                    <div className="relative">
                        <img
                            className="cursor-pointer hidden md:block"
                            src="images\Avatar.png"
                            alt="profile"
                            onClick={toggleProfileDropdown}
                        />
                        {isProfileDropdownOpen && (
                            <div
                                ref={profileRef}
                                className="absolute right-0 mt-2 w-56 bg-white shadow-md rounded-lg font-medium text-gray-700"
                            >
                                <div className="flex items-center p-4 border-b">
                                    <img
                                        src="images\Avatar.png"
                                        alt="Profile"
                                        className="w-8 h-8 rounded-full mr-4"
                                    />
                                    <div>
                                        <p className="font-semibold">John Doe</p>
                                        <p className="text-xs text-gray-500">johndoe@example.com</p>
                                    </div>
                                </div>
                                <div className="p-2 border-b">
                                    <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
                                    <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
                                    <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Placeholder</a>
                                    <hr />
                                    <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Changelog</a>
                                    <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Keyboard shortcuts</a>
                                    <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Billing</a>
                                    <hr />
                                    <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Team</a>
                                    <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Support</a>
                                    <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">API</a>

                                </div>
                                <div className="p-2">
                                    <button
                                        className="w-full text-red-500 font-semibold text-left px-4 py-2"
                                        onClick={() => alert('Logged out!')}
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>


                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-gray-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>


                {isMenuOpen && (
                    <div className="md:hidden bg-white rounded-lg relative font-semibold text-black">
                        <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</a>
                        <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Products</a>
                        <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Resources</a>
                        <a className="block px-4 pt-2 pb-4 text-gray-700 hover:bg-gray-100">Pricing</a>

                        <hr />

                        <div className="grid grid-cols-2 gap-4 px-4 py-2 mt-4 relative font-semibold text-slate-600">
                            <div>About us</div>
                            <div>Support</div>
                            <div>Press</div>
                            <div>Contact</div>
                            <div>Careers</div>
                            <div>Sitemap</div>
                            <div>Legal</div>
                            <div>Cookie settings</div>
                        </div>


                        <div className="px-4 py-2 my-6 relative">
                            <button className="w-full text-white font-bold bg-[#7F56D9] hover:bg-[#6d47c0] py-2 rounded-lg mb-2">
                                Sign Up
                            </button>
                            <button className="w-full border font-bold hover:bg-gray-300 py-2 rounded-lg">
                                Log in
                            </button>
                        </div>
                    </div>
                )}


            </header>
            <hr />
        </nav>
    );
};

export default Header;
