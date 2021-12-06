const Card = ({ imgUrl, name, bio }) => {
  return (
    <div>
      <img src={imgUrl}/>
      <h3>{name}</h3>
      <p>{bio}</p>
    </div>
  )
}

export default Card
