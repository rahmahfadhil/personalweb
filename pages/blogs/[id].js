import Head from "next/head";
import dbConnect from "../../utils/db-connect"
import BlogModel from "../../models/blog"


export default function Blog(props) {
    const blog = JSON.parse(props.blog);
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />

                <meta name="viewport" content="width=device-width, initial-scale=1.0 shrink-to-fit=no" />
                <link rel="stylesheet" href="../css/post.css" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,700;1,300;1,700&family=Roboto:ital,wght@0,100;0,300;0,700;1,100&display=swap"
                    rel="stylesheet" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />



                <title>{blog.title} </title>



            </Head>

            <main className="post">
                <div className="post-bg-warpper">
                    <div className='post-bg' style={{background:`url(/api/blogs/images/${blog._id})`}}>


                    </div>
                </div>


                <div className='post-content'>
                    <h3 className="title">{blog.title}</h3>
                    <div className='blog-par' dangerouslySetInnerHTML={{ __html: blog.content }}></div>

                </div>
            </main>

        </>

    )
}



export async function getStaticProps(context) {
    const id = context.params.id
    await dbConnect();
    const blog = JSON.stringify(
        await BlogModel.findById(id).exec(),
    );
    return {
        props: {
            blog: blog,
        }
    }
}


export async function getStaticPaths() {
    await dbConnect();
    const blogs = await BlogModel.find({}, { _id: 1 })
    const paths = blogs.map((item) => {
        return {
            params: { id: item._id.toString() }
        };
    });
    return {
        paths: paths,
        fallback: "blocking",
    }
}