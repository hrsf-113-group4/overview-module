import React from 'react';

const Photos = (props) => {
  return (
    <div>
    <div className="box2">
    <div className="photos" id="photos">{props.images.length} Photos</div>
    </div>
    <div className="wrapper">
  <div className="one" onClick={(e) => {props.handleModal(e)}}><img  id="0" className="image" src={props.images[0].imageUrl}/></div>
  <div className="two" onClick={(e) => {props.handleModal(e)}}><img  id="1" className="image" src={props.images[1].imageUrl}/></div>
  <div className="three" onClick={(e) => {props.handleModal(e)}}><img id="2"className="image" src={props.images[2].imageUrl}/></div>
  <div className="wrapper2">
    <div className="four" onClick={(e) => {props.handleModal(e)}}><img id="3"className="image" src={props.images[3].imageUrl}/></div>
    <div className="five" onClick={(e) => {props.handleModal(e)}}><img id="4"className="image" src={props.images[4].imageUrl}/></div>
    <div className="six" onClick={(e) => {props.handleModal(e)}}><img id="5" className="image" src={props.images[5].imageUrl}/></div>
    <div className="seven" onClick={(e) => {props.handleModal(e)}}><img id="6" className="image" src={props.images[6].imageUrl}/></div>
    <div className="eight" onClick={(e) => {props.handleModal(e)}}><img id="7" className="image" src={props.images[7].imageUrl}/></div>
    <div className="nine"><img id="8" className="image" src={props.images[8].imageUrl}/></div>
    <div className="seeMore" onClick={(e) => {props.handleModal(e)}} id="8">+ {props.images.length - 9} More</div>
  </div>
</div>
</div>
  )
}

export default Photos;