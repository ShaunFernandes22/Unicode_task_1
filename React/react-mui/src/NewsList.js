import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import Paginate from './Paginate';

const NewsList = () => {
    const [articles, setArticles] = useState([])

useEffect(() => {
    const getArticles = async () =>{
        const response = await axios.get('https://newsapi.org/v2/top-headlines?category=sports&apiKey=2019b5f94ee849b780ed0c111a4bf615')
        console.log(response)
        setArticles(response.data.articles)
    }
    getArticles()
},[])

console.log(articles)

  const [currentPage, setCurrentPage]  = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(8)
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = articles.slice(firstPostIndex, lastPostIndex)

    return (
        <>
         
      <div className="container m-2 ">
        <div className="row m-2">
          {
            currentPosts.map((value) => {
              return (
                <div className='col'>
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={value.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.description}</p>
                      <a href="#" className="btn btn-primary">Source</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div> 
      <Paginate 
        totalPosts = {articles.length}
        postsPerPage = {postsPerPage}
        setCurrentPage = {setCurrentPage}
        />
        {/* <App articles ={articles.url}/> */}
      </>
    )
};
 

export default NewsList