import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./main.css"
import post1 from '../assets/post1.jpg'
import post2 from '../assets/post2.jpg'
import post3 from '../assets/post3.jpg'
import post4 from '../assets/post4.jpg'
import Post from '../post/post'

// axios.defaults.baseURL = 'https://ieee-petstagram.herokuapp.com';
axios.defaults.baseURL = 'http://localhost:5000';

const Main = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const handleFetchPosts = async () => {
            try {
                const response = await axios.get('/api/post');
                if(response.status === 200) {
                    response.data.data.posts.forEach((post) => {post.img = post1});
                    setPosts(response.data.data.posts);
                    return;
                }
            } catch (error) {
                alert('Unable to fetch posts')
            }
         }
         if(!posts.length) handleFetchPosts();
    }, [])


    // const posts = [
    //     {
    //         title: `Laboris exercitation aute in tempor
    //         irure occaecat sint nisi sint do qui ullamco excepteur. Eiusmod
    //         occaecat ut ad aute dolor. Esse amet ullamco amet consequat. Ad qui
    //         pariatur tempor dolor sunt. Do sint excepteur aliquip labore eu eu
    //         nostrud dolor laborum ut duis aute adipisicing esse. Occaecat dolor
    //         excepteur ullamco veniam aute proident. Eu ut pariatur minim aliqua
    //         mollit consectetur.`,
    //         img: post1,
    //         createdBy: {
    //             username: 'sam.the.ferret',
    //             _id: 'useridhere'
    //         },
    //         createdAt: '5 days ago',
    //     },
    //     {
    //         title: `Laboris exercitation aute in tempor
    //         irure occaecat sint nisi sint do qui ullamco excepteur. Eiusmod
    //         occaecat ut ad aute dolor. Esse amet ullamco amet consequat. Ad qui
    //         pariatur tempor dolor sunt. Do sint excepteur aliquip labore eu eu
    //         nostrud dolor laborum ut duis aute adipisicing esse. Occaecat dolor
    //         excepteur ullamco veniam aute proident. Eu ut pariatur minim aliqua
    //         mollit consectetur.`,
    //         img: post2,
    //         createdBy: {
    //             username: 'sam.the.ferret',
    //             _id: 'useridhere',
    //         },
    //         createdAt: '5 days ago',
    //     },
    //     {
    //         title: `Laboris exercitation aute in tempor
    //         irure occaecat sint nisi sint do qui ullamco excepteur. Eiusmod
    //         occaecat ut ad aute dolor. Esse amet ullamco amet consequat. Ad qui
    //         pariatur tempor dolor sunt. Do sint excepteur aliquip labore eu eu
    //         nostrud dolor laborum ut duis aute adipisicing esse. Occaecat dolor
    //         excepteur ullamco veniam aute proident. Eu ut pariatur minim aliqua
    //         mollit consectetur.`,
    //         img: post3,
    //         createdBy: {
    //             username: 'sam.the.ferret',
    //             _id: 'useridhere'
    //         },
    //         createdAt: '5 days ago',
    //     },
    //     {
    //         title: `Laboris exercitation aute in tempor
    //         irure occaecat sint nisi sint do qui ullamco excepteur. Eiusmod
    //         occaecat ut ad aute dolor. Esse amet ullamco amet consequat. Ad qui
    //         pariatur tempor dolor sunt. Do sint excepteur aliquip labore eu eu
    //         nostrud dolor laborum ut duis aute adipisicing esse. Occaecat dolor
    //         excepteur ullamco veniam aute proident. Eu ut pariatur minim aliqua
    //         mollit consectetur.`,
    //         img: post4,
    //         createdBy: {
    //             username: 'sam.the.ferret',
    //             _id: 'useridhere'
    //         },
    //         createdAt: '5 days ago',
    //     },
    // ];

    return (
        <div className="news-feed-wrapper">
            <main className="news-feed">
                {
                    posts.map((post) => (
                        <Post {...post} key={post._id} />
                    ))
                }
            </main>
        </div>
    )
}

export default Main
