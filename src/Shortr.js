
import React, { useState } from 'react'
import './App.css';
const baseUrl = "https://api.shrtco.de/v2/shorten?url="
const longUrl = "example.org/very/long/link.html"

const Shortr = () => {
  
  const fetchShortUrl = async (longUrl) => {
    const response = await fetch(baseUrl + longUrl)
    if (!response.ok) {
        throw new Error('Oops! Something went wrong. Please try after sometime.')
      }

      const data = await response.json()
      console.log("YESS")
      return(
        <h1>YES</h1>
        )
      }
      // <h1>{items.result.full_short_link}</h1>
      
      fetchShortUrl(longUrl)
      .then(data => {
        yolo = <h1>{data.result.full_short_link}</h1>  
      })
      .catch(err => {
      })
      return(
        <p className="lead">
      {yolo}
      </p>
      )
    
  }

  export default Shortr;