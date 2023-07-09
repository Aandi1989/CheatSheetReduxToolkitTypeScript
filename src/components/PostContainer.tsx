import React, { useEffect, useState } from 'react';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';
import { IPost } from '../models/IPost';

const PostContainer = () => {
    const [limit, setLimit] = useState(100)
    const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit)
    const [createPost, {}] = postAPI.useCreatePostMutation()

    useEffect(() => {
    },[])

    const handlerCreate = async () => {
        const title = prompt()
        await createPost({title, body:title} as IPost) 
    }

    return (
        <div>
            <div className='post__list'>
                <button onClick={handlerCreate}>Add new post</button>
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>Произошла ошибка при загрузке</h1>}
                {posts && posts.map(post =>
                    <PostItem key={post.id} post={post} />
                )}
            </div>
        </div>
    );
};

export default PostContainer