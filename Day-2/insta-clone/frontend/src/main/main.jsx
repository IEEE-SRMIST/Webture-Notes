import React from 'react'
import "./main.css"
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'
import post1 from '../assets/post1.jpg'
import post2 from '../assets/post2.jpg'
import post3 from '../assets/post3.jpg'
import post4 from '../assets/post4.jpg'
import Like from '../assets/like'
import Comment from '../assets/comment'
import Share from '../assets/share'
import Save from '../assets/save'
import Smile from '../assets/smile'
import Bars from '../assets/bars'

const Main = () => {


    return (
        <div class="news-feed-wrapper">
            <main class="news-feed">
                {/* Post 1  */}
                <article class="post">
                    <header>
                        <img src={pic1} alt='pic1' />
                        <strong>sam.the.ferret</strong>
                        <Bars />
                    </header>
                    <figure>
                        <img src={post1} alt="post1" />
                    </figure>
                    <div class="actions">
                        <Like />
                        <Comment />
                        <Share />
                        <Save />

                    </div>
                    <div class="likes"><strong>20 likes</strong></div>
                    <div class="description">
                        <strong>sam.the.ferret</strong> Laboris exercitation aute in tempor
                        irure occaecat sint nisi sint do qui ullamco excepteur. Eiusmod
                        occaecat ut ad aute dolor. Esse amet ullamco amet consequat. Ad qui
                        pariatur tempor dolor sunt. Do sint excepteur aliquip labore eu eu
                        nostrud dolor laborum ut duis aute adipisicing esse. Occaecat dolor
                        excepteur ullamco veniam aute proident. Eu ut pariatur minim aliqua
                        mollit consectetur.
                    </div>
                    <button>View all 10 comments</button>
                    <div class="time">5 hours ago</div>
                    <footer>
                        <Smile />
                        <input type="text" placeholder="Add a comment..." />
                        <button disabled>Post</button>
                    </footer>
                </article>

                {/* Post 2  */}
                <article class="post">
                    <header>
                        <img src={pic2} />
                        <strong>bestboi_lucas</strong>
                        <Bars />
                    </header>
                    <figure>
                        <img src={post2} alt="" />
                    </figure>
                    <div class="actions">
                        <Like />
                        <Comment />
                        <Share />
                        <Save />
                    </div>
                    <div class="likes"><strong>105 likes</strong></div>
                    <div class="description">
                        <strong>bestboi_lucas</strong> Duis duis ex irure ex quis aliqua id
                        eu magna. Incididunt adipisicing excepteur id cillum. Reprehenderit
                        fugiat sit nulla ad veniam sint ipsum eu enim est laboris quis.
                    </div>
                    <button>View all 62 comments</button>
                    <div class="time">2 days ago</div>
                    <footer>
                        <Smile />
                        <input type="text" placeholder="Add a comment..." />
                        <button disabled>Post</button>
                    </footer>
                </article>

                {/* Post 3  */}
                <article class="post">
                    <header>
                        <img src={pic3} />
                        <strong>killercanine</strong>
                        <Bars />
                    </header>
                    <figure>
                        <img src={post3} alt="" />
                    </figure>
                    <div class="actions">
                        <Like />
                        <Comment />
                        <Share />
                        <Save />
                    </div>
                    <div class="likes"><strong>42 likes</strong></div>
                    <div class="description">
                        <strong>killercanine</strong> Et cillum tempor cupidatat nulla
                        voluptate ex incididunt proident quis ad consequat. Culpa voluptate
                        ullamco aliquip do nostrud nostrud officia. Et ad fugiat quis
                        cupidatat. Pariatur qui cupidatat non cupidatat exercitation ad est.
                        Amet ea minim officia sint exercitation ex culpa deserunt nulla
                        incididunt reprehenderit labore. Incididunt mollit aute id quis ad
                        et minim. Velit mollit consequat est sint duis eu id sint pariatur.
                    </div>
                    <button>View all 4 comments</button>
                    <div class="time">1 day ago</div>
                    <footer>
                        <Smile />
                        <input type="text" placeholder="Add a comment..." />
                        <button disabled>Post</button>
                    </footer>
                </article>

                {/* Post 4  */}
                <article class="post">
                    <header>
                        <img src={pic4} />
                        <strong>ralphiiii</strong>
                        <Bars />
                    </header>
                    <figure>
                        <img src={post4} alt="" />
                    </figure>
                    <div class="actions">
                        <Like />
                        <Comment />
                        <Share />
                        <Save />
                    </div>
                    <div class="likes"><strong>260 likes</strong></div>
                    <div class="description">
                        <strong>ralphiiii</strong> Reprehenderit anim ex est anim. Pariatur
                        laborum laboris pariatur laborum quis adipisicing. Tempor eiusmod
                        consectetur consectetur laboris consequat ut excepteur sint sint
                        deserunt culpa. Lorem eiusmod Lorem amet irure est laborum labore
                        tempor tempor magna mollit proident. Est duis do qui duis amet nisi
                        quis sunt cillum qui aliquip.
                    </div>
                    <button>View all 87 comments</button>
                    <div class="time">An hour ago</div>
                    <footer>
                        <Smile />
                        <input type="text" placeholder="Add a comment..." />
                        <button disabled>Post</button>
                    </footer>
                </article>
            </main>
        </div>
    )
}

export default Main
