import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetSlider = props => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const {planetsList} = props
  return (
    <div className="slider-container" data-testid="planets">
      <Slider>
        {planetsList.map(eachObject => (
          <PlanetItem planetDetails={eachObject} key={eachObject.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetSlider
