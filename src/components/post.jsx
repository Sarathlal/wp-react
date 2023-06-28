function Post({post}){
    return(
        <>
            <div class='post'>
                <h2><a href='{post.slug}'>{post.title.rendered}</a></h2>
                {post.excerpt.rendered}
            </div>
        </>
    )
}

export default Post