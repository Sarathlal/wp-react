
import Post from './post';

function PostList({posts}){
    return(
        posts.map((post, index) => {
            return(
                <Post post={post}/>
            )
        })       
    )
}

export default PostList