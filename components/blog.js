export default function Blog({blogs}){


    return(
        <section className="blog">
        <div className="container">
            <h3 className="title">blog</h3>

            <ul className='posts'>
                {blogs.map(blog =>(
                    <li className="post" key={blog._id}>
                    <div className="post-img-router">
                        <div className="post-img" style={{backgroundImage: `url(/api/blogs/images/${blog._id})`}}>

                        </div>
                    </div>

                    <div className="post-content">
                        <div className="post-divider">
                            <h5>{blog.title}</h5>
                            <div> <a href={`/blogs/${blog._id}`}>more</a>
                            </div>
                        </div>

                    </div>
                </li>
                ))}
                
                
            </ul>
        </div>
    </section>
    )
}