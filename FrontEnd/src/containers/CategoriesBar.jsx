import React from 'react'
import CategoryButton from '../components/CategoryButton.jsx'
import artsAndCrafts from '../images/icons/arts-and-crafts.png'
import books from '../images/icons/books.png'
import camping from '../images/icons/camping.png'
import electronics from '../images/icons/electronics.png'
import games from '../images/icons/games.png'
import gardening from '../images/icons/gardening.png'
import spaces from '../images/icons/spaces.png'
import sports from '../images/icons/sports.png'
import tools from '../images/icons/tools.png'
import arrow from '../images/icons/arrow.png'



const CategoriesBar = () => {
  return (
    <div id="categories-bar">
      <CategoryButton image={artsAndCrafts} title="Arts"/>
      <CategoryButton image={books} title="Books"/>
      <CategoryButton image={camping} title="Camping"/>
      <CategoryButton image={electronics} title="Electronics"/>
      <CategoryButton image={games} title="Games"/>
      <CategoryButton image={gardening} title="Gardening"/>
      <CategoryButton image={spaces} title="Spaces"/>
      <CategoryButton image={sports} title="Sports"/>
      <CategoryButton image={tools} title="Tools"/>
      <CategoryButton image={arrow} title="" id="arrow"/>
    </div>
  )
}

export default CategoriesBar