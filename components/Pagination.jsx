import _ from "lodash";

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
    const pageCount = items / pageSize;
    if (Math.ceil(pageCount) === 1) return null;
    const pages = _.range(1, pageCount + 1);

    return (
        <>
            <nav className="isolate inline-flex -space-x-px my-5" aria-label="Pagination">
                <ul className="pagination inline-flex items-center ">
                    <a href="#" className="mx-3 h-[50px] w-[50px] relative inline-flex items-center rounded-2xl shadow-lg  shadow-green-50 drop-shadow-[0_0_10px_rgba(0,200,83,0.1)] text-center  bg-white  px-4 py-3 sm:text-base text-sm font-medium focus:z-20">
                        <span className="sr-only">Previous</span>
                        <img className="ml-3 w-4 h-4" src="/arrow-right.svg" alt="" />
                    </a>
                   
                    {pages.map((page) => (
                        <a
                        
                            key={page}
                            onClick={() => onPageChange(page)}

                            className={
                                page === currentPage ?
                                    "bg-greenwb text-white flex items-center justify-center  rounded-2xl my-4 relative z-10 border border-greenwb sm:text-base text-sm font-bold  focus:z-20  mx-1 h-[50px] w-[50px] text-center" :
                                    "text-greenwb  bg-white flex items-center justify-center h-[50px] w-[50px] text-center mx-1  rounded-2xl my-4 relative z-10 border border-greenwb text-greenw sm:text-base text-sm font-bold  focus:z-20 "
                            }
                        >
                            {page}

                        </a>
                    ))}
                    <a href="#" className="mx-3 h-[50px] w-[50px] relative inline-flex items-center rounded-2xl drop-shadow-[0_0_10px_rgba(0,200,83,0.1)] text-center    bg-white  px-4 py-3 sm:text-base text-sm font-medium text-blackfocus:z-20">
                        <span className="sr-only">Next</span>

                        <img className="ml-3 w-4 h-4" src="/arrow-left.svg" alt="" />

                    
                    </a>
                </ul>
            </nav>
        </>
    );
};

export default Pagination;