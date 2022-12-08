
import React, { useState, useEffect } from 'react';
import axios from "axios";


const Categories = ({ }) => {
    const [postsCategory, setPostsCategory] = useState([]);


    useEffect(() => {
        const getPostsCategory = async () => {
            const { data: res } = await axios.get(
                "https://challenge.webjar.ir/post-categories"
            );
            setPostsCategory(res);
        };
        getPostsCategory();
    }, []);


    return (
        <div className="mb-8">


            <div className="shadow-lg rounded-lg mb-[100px] px-2 pb-4" >
                <h3 className='font-extrabold text-xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl   mb-8 py-2 xl:py-4 lg:py-3 md:py-2 sm:py-2 '>
                    دسته بندی ها
                </h3>
                {postsCategory.map((category) => (
                    <div className='flex items-center justify-between mb-2 py-3' key={category.name}>

                        <span className='cursor-pointer block  text-md mr-2'>
                            {category.name}
                        </span>

                        {/*  */}
                        <div className="flex">
                            <input id="default-checkbox" type="checkbox" value="" className=" border-greenwb focus:ring-greenwb  focus:ring-2 checked:bg-greenwb bg-amber-200 hover:bg-amber-400 cursor-pointer w-6 h-6 border-3 border-rose-500 rounded-lg checked:bg-green-500" />
                            <label for="default-checkbox" className="ml-2 text-sm font-medium text-greenwb "></label>
                        </div>


                        {/*  */}



                    </div>

                ))}

            </div>




        </div >


    );
};

export default Categories;

