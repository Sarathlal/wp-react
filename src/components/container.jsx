import {useState, useEffect} from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';

import PostList from './list';

function Container(){
    const [posts, setPosts] = useState([])
    const [total_pages, setTotPages] = useState(0)

    const post_api = import.meta.env.VITE_WP_URL + 'wp-json/wp/v2/posts/'

    const fetchPosts = (page = 0) => {
        let url_params = {"page": page + 1}
        axios({
            method: "get",
            baseURL: post_api,
            url: "?" + new URLSearchParams(url_params).toString(),
          })
            .then(function (response) {
                setPosts(response.data)
                setTotPages(response?.headers?.["x-wp-totalpages"])
            })
            .catch(function (error) {
              // handle error
              console.log(error);
        });
    }

    useEffect(() => {
        fetchPosts();
    },[])

    const handlePageClick = (event) => {
        fetchPosts(event.selected);
    }    

    return(
        <>
        <PostList posts={posts} />
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageCount={total_pages}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
        />
        </>
    )
}

export default Container