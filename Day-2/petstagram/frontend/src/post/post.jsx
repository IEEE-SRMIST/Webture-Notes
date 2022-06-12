import React, {useState} from 'react';
import axios from 'axios';
import Bars from '../assets/bars';
import Like from '../assets/like';
import Comment from '../assets/comment';
import Share from '../assets/share';
import Save from '../assets/save';
import Smile from '../assets/smile';
import Delete from '../assets/delete';
import pic1 from '../assets/pic1.jpg';

import './post.css'

axios.defaults.baseURL = 'https://ieee-petstagram.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:5000';

const Post = ({ title, createdBy, createdAt, img, _id }) => {
    const [like, setLike] = useState(false);

    const handlePostDelete = async () => {
        console.log(`going to delete post with id ${_id}`)
        try {
            const response = axios.post('/api/post/delete', { postId: _id }, {
                headers: {
                    Authorization: localStorage.getItem("authToken") || '',
                }
            });
            if (response.status === 200) {
                alert('Post Deleted successfully');
                window.location.reload(true);
                return;
            }
        } catch (error) {
            console.log(error);
            alert('Unable to delete post')
        }
    }

    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

    return (
        <article className="post">
            <header>
                <img src={pic1} alt='user profile' />
                <strong>{createdBy?.username}</strong>
                {
                    createdBy?._id === user?._id ?
                        <span onClick={handlePostDelete}>
                            <Delete />
                        </span>
                        : <Bars />
                }
            </header>
            <figure>
                <img src={img} alt={title} />
            </figure>
            <div className="actions">
                <Like onPress={() => setLike(!like)} like={like}/>
                <Comment />
                <Share />
                <Save />
            </div>
            <div className="likes"><strong>20 likes</strong></div>
            <div className="description">
                <strong>{createdBy?.username}</strong>{title}
            </div>
            <button>View all 10 comments</button>
            <div className="time">{createdAt}</div>
            <footer>
                <Smile />
                <input type="text" placeholder="Add a comment..." />
                <button disabled>Post</button>
            </footer>
        </article>
    )
}

export default Post