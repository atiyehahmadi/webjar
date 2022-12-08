import React from 'react';
import moment from 'moment-jalaali';
moment.loadPersian({ usePersianDigits: true });
import axios from "axios";
import { useState, useEffect } from "react";
import { Pagination } from "../components";
import { paginate } from "./../src/utils/paginate";
import Image from 'next/image';
import sanitizeHtml from 'sanitize-html'

const BlogPostCard = ({ }) => {
    const [posts, setPosts] = useState([]);
    const pageSize = 10;
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        const getPosts = async () => {
            const { data: res } = await axios.get(
                "https://challenge.webjar.ir/posts"
            );
            setPosts(res);
        };
        getPosts();
    }, []);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };



    const paginatePosts = paginate(posts, currentPage, pageSize);

    function stripHtmlToText(html) {
        let tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        let res = tmp.textContent || tmp.innerText || '';
        res.replace(/[\u200B-\u200D\uFEFF\u200E\u200F]/g, '')
        res = res.trim();
        res = sanitizeHtml(res);
        return res


    }


    return (
        <div>

            {paginatePosts.map((post) => (

                <div className="shadow-lg rounded-lg md:mb-[100px] mb-8" key={post._id}>
                    <div className='md:flex block'>

                        <Image
                            width={300}
                            height={288}
                            src={post.introImageUrl?.path !== "" ? post.introImageUrl.host + post.introImageUrl.path : post.introImageUrl.host}
                            alt={post.title}
                            className=" ml-5 object-cover md:rounded-r-lg md:flex block w-full rounded-t-lg " />



                        <div className="block text-right lg:p-6 p-5 xl:pb-6 md:pb-5 sm:pb-5 mb-6" >

                            <h3 className="text-[18px] mb-4 font-extrabold">
                                {post.title}
                            </h3>

                            <p className="text-[16px] mb-10 font-extralight leading-8">

                                {stripHtmlToText(sanitizeHtml(post.body)).substring(0, 250) + "..."}

                            </p>

                            <div className="flex justify-between items-center flex-wrap  w-full">
                                <div className="flex items-center my-4">
                                    <img className="ml-3 w-4 h-4" src="/time.svg" alt="" />
                                    {moment(post.createdAt).format('dddd jD jMMMM jYYYY')}
                                </div>

                                <div className="flex items-center my-4">
                                    <img className="ml-3 w-4 h-4" src="/comment.svg" alt="" />
                                    {post.commentCount}
                                    نظر
                                </div>

                                <div className="flex items-center my-4">
                                    <img className="ml-3 w-4 h-4" src="/author.svg" alt="" />
                                    {post.author}
                                </div>

                                <button className="text-white bg-greenwb text-center rounded-2xl px-14 py-3 my-4">بیشتر</button>

                            </div>
                        </div>


                    </div>

                </div>
            ))}

            <Pagination
                items={posts.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />


        </div>

    )
}

export default BlogPostCard