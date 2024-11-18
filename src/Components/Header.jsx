// // Header.js
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faUser , faCaretDown } from '@fortawesome/free-solid-svg-icons';

// const Header = () => {
//     return (
//         <nav className="flex items-center justify-between p-4">
//             <div className="flex items-center space-x-4">
//                 <div className="text-2xl font-bold">VYB <span className="text-sm">STORE</span></div>
//                 <div className="relative">
//                     <input 
//                         type="text" 
//                         placeholder="Search Creator/Product" 
//                         className="pl-10 pr-4 py-2 rounded-full bg-white text-black"
//                     />
//                     <FontAwesomeIcon 
//                         icon={faSearch} 
//                         className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" 
//                     />
//                 </div>
//             </div>
//             <div className="flex items-center space-x-8">
//                 <a href="#" className="hover:underline">Fav Creators</a>
//                 <a href="#" className="hover:underline">Merchandise</a>
//                 <a href="#" className="hover:underline">Brand</a>
//                 <a href="#" className="hover:underline">Digital</a>
//                 <div className="relative">
//                     <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black">
//                         <FontAwesomeIcon icon={faUser } />
//                     </button>
//                     <FontAwesomeIcon 
//                         icon={faCaretDown} 
//                         className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black" 
//                     />
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Header;


// // Header.js
// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faUser , faCaretDown } from '@fortawesome/free-solid-svg-icons';

// const Header = () => {
//     const [dropdownOpen, setDropdownOpen] = useState(false);

//     const toggleDropdown = () => {
//         setDropdownOpen(!dropdownOpen);
//     };

//     return (
//         <nav className="flex items-center justify-between p-4">
//             <div className="flex items-center space-x-4">
//                 <div className="text-2xl font-bold">VYB <span className="text-sm">STORE</span></div>
//                 <div className="relative">
//                     <input 
//                         type="text" 
//                         placeholder="Search Creator/Product" 
//                         className="pl-10 pr-4 py-2 rounded-full bg-white text-black"
//                     />
//                     <FontAwesomeIcon 
//                         icon={faSearch} 
//                         className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" 
//                     />
//                 </div>
//             </div>
//             <div className="flex items-center space-x-8">
//                 <a href="#" className="hover:underline">Fav Creators</a>
//                 <a href="#" className="hover:underline">Merchandise</a>
//                 <a href="#" className="hover:underline">Brand</a>
//                 <a href="#" className="hover:underline">Digital</a>
//                 <div className="relative">
//                     <button 
//                         onClick={toggleDropdown} 
//                         className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black"
//                     >
//                         <FontAwesomeIcon icon={faUser } />
//                     </button>
//                     <FontAwesomeIcon 
//                         icon={faCaretDown} 
//                         className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black" 
//                     />
//                     {dropdownOpen && (
//                         <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
//                             <a href="#" className="block px-4 py-2 hover:bg-gray-200">Profile</a>
//                             <a href="#" className="block px-4 py-2 hover:bg-gray-200">Dashboard</a>
//                             <a href="#" className="block px-4 py-2 hover:bg-gray-200">My Store</a>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Header;


// // Header.js
// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faUser , faCaretDown } from '@fortawesome/free-solid-svg-icons';

// const Header = () => {
//     const [dropdownOpen, setDropdownOpen] = useState(false);

//     const toggleDropdown = () => {
//         setDropdownOpen(!dropdownOpen);
//     };

//     return (
//         <nav className="flex items-center justify-between p-4">
//             <div className="flex items-center space-x-4">
//                 <div className="text-2xl font-bold">VYB <span className="text-sm">STORE</span></div>
//                 <div className="relative">
//                     <input 
//                         type="text" 
//                         placeholder="Search Creator/Product" 
//                         className="pl-10 pr-4 py-2 rounded-full bg-white text-black"
//                     />
//                     <FontAwesomeIcon 
//                         icon={faSearch} 
//                         className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" 
//                     />
//                 </div>
//             </div>
//             <div className="flex items-center space-x-8">
//                 <a href="#" className="hover:underline">Fav Creators</a>
//                 <a href="#" className="hover:underline">Merchandise</a>
//                 <a href="#" className="hover:underline">Brand</a>
//                 <a href="#" className="hover:underline">Digital</a>
//                 <div className="relative">
//                     <button 
//                         onClick={toggleDropdown} 
//                         className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black"
//                     >
//                         <FontAwesomeIcon icon={faUser } />
//                     </button>
//                     <FontAwesomeIcon 
//                         icon={faCaretDown} 
//                         className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black" 
//                     />
//                     {dropdownOpen && (
//                         <div className="absolute right-0 mt-2 w-48 bg-black text-white rounded shadow-lg">
//                             <a href="#" className="block px-4 py-2 hover:bg-gray-700">Profile</a>
//                             <a href="#" className="block px-4 py-2 hover:bg-gray-700">Dashboard</a>
//                             <a href="#" className="block px-4 py-2 hover:bg-gray-700">My Store</a>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Header;




// // Header.js
// import React, { useState, useRef, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faUser , faCaretDown } from '@fortawesome/free-solid-svg-icons';

// const Header = () => {
//     const [dropdownOpen, setDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     const toggleDropdown = () => {
//         setDropdownOpen(!dropdownOpen);
//     };

//     // Close dropdown when clicking outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setDropdownOpen(false);
//             }
//         };

//         // Bind the event listener
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             // Clean up the event listener
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [dropdownRef]);

//     return (
//         <nav className="flex items-center justify-between p-4">
//             <div className="flex items-center space-x-4">
//                 <div className="text-2xl font-bold">VYB <span className="text-sm">STORE</span></div>
//                 <div className="relative">
//                     <input 
//                         type="text" 
//                         placeholder="Search Creator/Product" 
//                         className="pl-10 pr-4 py-2 rounded-full bg-white text-black"
//                     />
//                     <FontAwesomeIcon 
//                         icon={faSearch} 
//                         className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" 
//                     />
//                 </div>
//             </div>
//             <div className="flex items-center space-x-8">
//                 <a href="#" className="hover:underline">Fav Creators</a>
//                 <a href="#" className="hover:underline">Merchandise</a>
//                 <a href="#" className="hover:underline">Brand</a>
//                 <a href="#" className="hover:underline">Digital</a>
//                 <div className="relative" ref={dropdownRef}>
//                     <button 
//                         onClick={toggleDropdown} 
//                         className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black"
//                     >
//                         <FontAwesomeIcon icon={faUser } />
//                     </button>
//                     <FontAwesomeIcon 
//                         icon={faCaretDown} 
//                         className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black" 
//                     />
//                     {dropdownOpen && (
//                         <div className="absolute right-0 mt-2 w-48 bg-black text-white rounded shadow-lg">
//                             <a href="#" className="block px-4 py-2 hover:bg-gray-700">Profile</a>
//                             <a href="#" className="block px-4 py-2 hover:bg-gray-700">Dashboard</a>
//                             <a href="#" className="block px-4 py-2 hover:bg-gray-700">My Store</a>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Header;
// Header.js

// Header.js
// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faUser, faCaretDown, faTimes, faMapMarkerAlt, faHeadset, faInfoCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

// const Header = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <nav className="p-4 flex items-center justify-between bg-black text-white">
//             <div className="flex items-center space-x-4">
//                 <div className="text-2xl font-bold">VYB <span className="text-sm">STORE</span></div>
//                 <div className="relative hidden md:block">
//                     <input 
//                         type="text" 
//                         placeholder="Search Creator/Product" 
//                         className="pl-10 pr-4 py-2 rounded-full bg-white text-black"
//                     />
//                     <FontAwesomeIcon 
//                         icon={faSearch} 
//                         className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" 
//                     />
//                 </div>
//             </div>
//             <div className="flex items-center space-x-4 md:space-x-8">
//                 <div className="hidden md:flex space-x-4">
//                     <a href="#" className="hover:underline">Fav Creators</a>
//                     <a href="#" className="hover:underline">Merchandise</a>
//                     <a href="#" className="hover:underline">Brand</a>
//                     <a href="#" className="hover:underline">Digital</a>
//                 </div>
//                 <button 
//                     className="md:hidden p-2" 
//                     onClick={toggleMenu}
//                 >
//                     <FontAwesomeIcon icon={faUser} />
//                 </button>
//             </div>
//             {/* Mobile Menu */}
//             {isMenuOpen && (
//                 <div className="absolute top-0 left-0 w-full h-screen bg-gray-900 p-4">
//                     <div className="flex justify-end">
//                         <button onClick={toggleMenu}>
//                             <FontAwesomeIcon icon={faTimes} className="text-white" />
//                         </button>
//                     </div>
//                     <div className="flex flex-col items-center mt-4">
//                         <img 
//                             src="https://storage.googleapis.com/a1aa/image/0cxzBjGeVXyXbSw8dKqU5VdzFVeVUcOQCZawD4B9MZ2TiMyTA.jpg" 
//                             alt="Profile picture of a person"
//                             className="w-16 h-16 rounded-full"
//                         />
//                         <a href="#" className="text-green-400 text-sm mt-2">Change Profile Picture</a>
//                         <h2 className="text-lg font-semibold mt-2">Abhishek Saini</h2>
//                         <p className="text-gray-400">@Abhisheksaini</p>
//                     </div>
//                     <div className="mt-6">
//                         <ul>
//                             <li className="flex items-center py-2">
//                                 <FontAwesomeIcon icon={faUser} className="text-gray-400 w-6" />
//                                 <span className="ml-2">Profile</span>
//                             </li>
//                             <li className="flex items-center py-2">
//                                 <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-400 w-6" />
//                                 <span className="ml-2">Address</span>
//                             </li>
//                             <li className="flex items-center py-2">
//                                 <FontAwesomeIcon icon={faHeadset} className="text-gray-400 w-6" />
//                                 <span className="ml-2">Contact Us</span>
//                             </li>
//                             <li className="flex items-center py-2">
//                                 <FontAwesomeIcon icon={faInfoCircle} className="text-gray-400 w-6" />
//                                 <span className="ml-2">About Us</span>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="mt-6">
//                         <ul>
//                             <li className="flex items-center py-2">
//                                 <FontAwesomeIcon icon={faSignOutAlt} className="text-red-500 w-6" />
//                                 <span className="ml-2 text-red-500">Logout</span>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Header;



// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faUser, faCaretDown, faTimes, faMapMarkerAlt, faHeadset, faInfoCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

// const Header = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <nav className="p-4 flex items-center justify-between bg-black text-white">
//             {/* Logo and Search Bar */}
//             <div className="flex items-center space-x-4">
//                 <div className="text-2xl font-bold">VYB <span className="text-sm">STORE</span></div>
//                 <div className="relative hidden md:block">
//                     <input 
//                         type="text" 
//                         placeholder="Search Creator/Product" 
//                         className="pl-10 pr-4 py-2 rounded-full bg-white text-black"
//                     />
//                     <FontAwesomeIcon 
//                         icon={faSearch} 
//                         className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" 
//                     />
//                 </div>
//             </div>

//             {/* Desktop Navigation Links */}
//             <div className="hidden md:flex items-center space-x-8">
//                 <a href="#" className="hover:underline">Fav Creators</a>
//                 <a href="#" className="hover:underline">Merchandise</a>
//                 <a href="#" className="hover:underline">Brand</a>
//                 <a href="#" className="hover:underline">Digital</a>
//                 <button className="flex items-center space-x-1 bg-transparent">
//                     <FontAwesomeIcon icon={faUser} className="text-white" />
//                     <FontAwesomeIcon icon={faCaretDown} className="text-white" />
//                 </button>
//             </div>

//             {/* Mobile Menu Button */}
//             <button 
//                 className="md:hidden p-2" 
//                 onClick={toggleMenu}
//             >
//                 <FontAwesomeIcon icon={faUser} />
//             </button>

//             {/* Mobile Menu */}
//             {isMenuOpen && (
//                 <div className="absolute top-0 left-0 w-full h-screen bg-gray-900 p-4 z-50">
//                     <div className="flex justify-end">
//                         <button onClick={toggleMenu}>
//                             <FontAwesomeIcon icon={faTimes} className="text-white" />
//                         </button>
//                     </div>
//                     <div className="flex flex-col items-center mt-4">
//                         <img 
//                             src="https://storage.googleapis.com/a1aa/image/0cxzBjGeVXyXbSw8dKqU5VdzFVeVUcOQCZawD4B9MZ2TiMyTA.jpg" 
//                             alt="Profile picture of a person"
//                             className="w-16 h-16 rounded-full"
//                         />
//                         <a href="#" className="text-green-400 text-sm mt-2">Change Profile Picture</a>
//                         <h2 className="text-lg font-semibold mt-2">Abhishek Saini</h2>
//                         <p className="text-gray-400">@Abhisheksaini</p>
//                     </div>
//                     <div className="mt-6">
//                         <ul>
//                             <li className="flex items-center py-2">
//                                 <FontAwesomeIcon icon={faUser} className="text-gray-400 w-6" />
//                                 <span className="ml-2">Profile</span>
//                             </li>
//                             <li className="flex items-center py-2">
//                                 <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-400 w-6" />
//                                 <span className="ml-2">Address</span>
//                             </li>
//                             <li className="flex items-center py-2">
//                                 <FontAwesomeIcon icon={faHeadset} className="text-gray-400 w-6" />
//                                 <span className="ml-2">Contact Us</span>
//                             </li>
//                             <li className="flex items-center py-2">
//                                 <FontAwesomeIcon icon={faInfoCircle} className="text-gray-400 w-6" />
//                                 <span className="ml-2">About Us</span>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="mt-6">
//                         <ul>
//                             <li className="flex items-center py-2">
//                                 <FontAwesomeIcon icon={faSignOutAlt} className="text-red-500 w-6" />
//                                 <span className="ml-2 text-red-500">Logout</span>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Header;



import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faCaretDown, faTimes, faMapMarkerAlt, faHeadset, faInfoCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="p-4 flex items-center justify-between bg-black text-white">
            {/* Logo and Search Bar */}
            <div className="flex items-center space-x-4">
                <div className="text-2xl font-bold">VYB <span className="text-sm">STORE</span></div>
                <div className="relative hidden md:block">
                    <input 
                        type="text" 
                        placeholder="Search Creator/Product" 
                        className="pl-10 pr-4 py-2 rounded-full bg-white text-black"
                    />
                    <FontAwesomeIcon 
                        icon={faSearch} 
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" 
                    />
                </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
                <a href="#" className="hover:underline">Fav Creators</a>
                <a href="#" className="hover:underline">Merchandise</a>
                <a href="#" className="hover:underline">Brand</a>
                <a href="#" className="hover:underline">Digital</a>
                <div className="relative">
                    <button className="flex items-center space-x-1 bg-transparent" onClick={toggleDropdown}>
                        <FontAwesomeIcon icon={faUser} className="text-white" />
                        <FontAwesomeIcon icon={faCaretDown} className="text-white" />
                    </button>
                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-lg py-2">
                            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Profile</a>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Dashboard</a>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-700">My Store</a>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
                className="md:hidden p-2" 
                onClick={toggleMenu}
            >
                <FontAwesomeIcon icon={faUser} />
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full h-screen bg-gray-900 p-4 z-50">
                    <div className="flex justify-end">
                        <button onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faTimes} className="text-white" />
                        </button>
                    </div>
                    <div className="flex flex-col items-center mt-4">
                        <img 
                            src="https://storage.googleapis.com/a1aa/image/0cxzBjGeVXyXbSw8dKqU5VdzFVeVUcOQCZawD4B9MZ2TiMyTA.jpg" 
                            alt="Profile picture of a person"
                            className="w-16 h-16 rounded-full"
                        />
                        <a href="#" className="text-green-400 text-sm mt-2">Change Profile Picture</a>
                        <h2 className="text-lg font-semibold mt-2">Abhishek Saini</h2>
                        <p className="text-gray-400">@Abhisheksaini</p>
                    </div>
                    <div className="mt-6">
                        <ul>
                            <li className="flex items-center py-2">
                                <FontAwesomeIcon icon={faUser} className="text-gray-400 w-6" />
                                <span className="ml-2">Profile</span>
                            </li>
                            <li className="flex items-center py-2">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-400 w-6" />
                                <span className="ml-2">Address</span>
                            </li>
                            <li className="flex items-center py-2">
                                <FontAwesomeIcon icon={faHeadset} className="text-gray-400 w-6" />
                                <span className="ml-2">Contact Us</span>
                            </li>
                            <li className="flex items-center py-2">
                                <FontAwesomeIcon icon={faInfoCircle} className="text-gray-400 w-6" />
                                <span className="ml-2">About Us</span>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-6">
                        <ul>
                            <li className="flex items-center py-2">
                                <FontAwesomeIcon icon={faSignOutAlt} className="text-red-500 w-6" />
                                <span className="ml-2 text-red-500">Logout</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
