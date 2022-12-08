import React, { useState, useEffect } from 'react';
import useDebounce from './UseDebounce';
const SearchBar = ({ data }) => {


    const [search, setSearch] = useState('');
    const [filteredTitle, setFilteredTitle] = useState([]);

    // DeBounce Function
    useDebounce(() => {
        setFilteredTitle(
            data.filter((d) => d.title.includes(search))
        );
    }, [data, search], 1000
    );

    const handleSearch = (e) => setSearch(e.target.value);



    return (
        <div className='mb-16'>
            <form>

                <div className='max-w-md mx-auto mb-8'>
                    <div className="relative flex items-center w-full h-12 rounded-lg shadow-md  drop-shadow-[0_0_10px_rgba(0,0,0,0.1)]   focus-within:shadow-lg bg-white overflow-hidden ">

                        <div className="grid place-items-center h-full w-12 text-gray-300">

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 11C5 7.691 7.691 5 11 5C14.309 5 17 7.691 17 11C17 14.309 14.309 17 11 17C7.691 17 5 14.309 5 11ZM20.707 19.293L17.312 15.897C18.365 14.543 19 12.846 19 11C19 6.589 15.411 3 11 3C6.589 3 3 6.589 3 11C3 15.411 6.589 19 11 19C12.846 19 14.543 18.365 15.897 17.312L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293Z" fill="#7B7B7B" />
                                <mask id="mask0_2147_271" maskUnits="userSpaceOnUse" x="3" y="3" width="19" height="18">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 11C5 7.691 7.691 5 11 5C14.309 5 17 7.691 17 11C17 14.309 14.309 17 11 17C7.691 17 5 14.309 5 11ZM20.707 19.293L17.312 15.897C18.365 14.543 19 12.846 19 11C19 6.589 15.411 3 11 3C6.589 3 3 6.589 3 11C3 15.411 6.589 19 11 19C12.846 19 14.543 18.365 15.897 17.312L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_2147_271)">
                                    <rect width="24" height="24" fill="#7B7B7B" />
                                </g>
                            </svg>

                        </div>

                        <input

                            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                            type="text"
                            id="search"
                            value={search || ''}
                            onChange={handleSearch}
                            placeholder="جستجو کنید ..." />



                    </div>

                    {
                        search !== "" ?

                            <div className="mt-3 px-5 relative items-center w-full h-32 rounded-lg shadow-md  drop-shadow-[0_0_10px_rgba(0,0,0,0.1)] overflow-hidden">

                                {filteredTitle.map((f) => (
                                    <p className='text-black my-4 cursor-pointer font-medium' key={f.id}>{f.title}</p>
                                ))
                                }
                            </div>

                            :
                            ''
                    }

                    <div>
                        {

                        }


                    </div>
                </div>




            </form>
        </div>
    );
};

export default SearchBar;
