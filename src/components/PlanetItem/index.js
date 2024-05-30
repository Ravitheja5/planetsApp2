import './index.css'

const PlaetItem = props => {
  const {planetDetails} = props
  const {id, name, imageUrl, description} = planetDetails

  return (
    <div className="container">
      <h1 className="heading">PLANETS</h1>
      <div className="image-container">
        <img src={imageUrl} alt={name} className="image" />
      </div>
      <h3 className="head">{name}</h3>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlaetItem
