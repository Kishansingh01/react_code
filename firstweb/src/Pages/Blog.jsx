import React from 'react'
import Header from '../Common/Header'
import '../Common/Header.css'
import {blogs} from '../Data/BlogsData'
import {Link} from 'react-router-dom'
export default function Blog() {
    let allBlogs=blogs.map((v,i)=>{// V mein data i  mein index.
        return(
            <div className="blogItems" key={i}>
                <h3>{v.title}</h3>
            
                <p>
                    {v.body}
                   
                </p>
                <button><Link to={`/blog/${v.id}`}>Read More</Link></button>
              
            </div>
        )
    })
  return (
    <>
         <Header/>
        <h1>Blog Page</h1>
     <div className="container">
        {allBlogs}
     </div>
     </>
  )
}
