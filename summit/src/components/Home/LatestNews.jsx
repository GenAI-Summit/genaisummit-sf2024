import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LaxDiv from '../Shared/LaxDiv';
import { newsData } from './newsData';

const LatestNews = () => {

    return (
        <section className="blog-area ptb-120 bg-image">
            <div className="container">
                <div className="section-title">
                    <span>Info Update!</span>
                    <h2>Our Latest News</h2>
                    <LaxDiv text="Blog" dataPreset="driftRight" />
                </div>
                <div className="row">
                    {newsData.map((item, index) => (
                        <div className="col-lg-12 col-md-12" key={index}>
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <img src={item.image} alt="blog" />
                                    <div className="post-tag">
                                        <Link to="/single-blog">{item.tag}</Link>
                                    </div>
                                </div>
                                <div className="blog-post-content">
                                    <span className="date">{item.date}</span>
                                    <h3><Link to="/single-blog">{item.title}</Link></h3>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default LatestNews;
