import WeatherContainer from '../containers/WeatherPage/index'
import Cities from '../containers/CitiesPage/index'
import { CITIES_PATH, WEATHER_PATH } from './paths'

const WEATHER = {
    component: WeatherContainer,
    path: WEATHER_PATH,
    exact: false
}
const CITIES = {
    component: Cities,
    path: CITIES_PATH,
    exact: true
}

export default [WEATHER, CITIES]