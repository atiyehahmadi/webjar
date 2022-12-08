// import { BlogPostCard, Categories, SearchBar } from '../../components'

import { Header, Breadcrumps, BlogPostCard, Categories, SearchBar } from '../components';


export default function Home({ allposts }) {
  return (
    <div>
      <Header />
      <div>
        <div className="mx-auto  ">

          <Breadcrumps />

          <h2 className="text-black font-extrabold text-center text-4xl mb-16"> وبلاگ </h2>
          <SearchBar data={allposts} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 ">

            <div className='col-span-1 lg:col-span-4'>
              <div className='relative '>
                <Categories />
              </div>
            </div>

            <div className='col-span-1 lg:col-span-8'>
              <BlogPostCard posts={allposts} />
            </div>



          </div>
        </div>

      </div>
    </div>

  )
}


export async function getStaticProps() {
  const res = await fetch(`https://challenge.webjar.ir/posts`)
  const allposts = await res.json()
  if (!allposts) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }


  return {
    props: { allposts },
  }
}