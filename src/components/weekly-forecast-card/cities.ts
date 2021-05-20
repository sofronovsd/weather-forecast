export interface City {
  name: string
  latitude: number
  longitude: number
}

const cities: City[] = [
  { name: 'Samara', latitude: 53.195873, longitude: 50.100193 },
  {
    name: 'Tolyatti',
    latitude: 53.507836,
    longitude: 49.420393
  },
  {
    name: 'Saratov',
    latitude: 51.533557,
    longitude: 46.034257
  },
  {
    name: 'Kazan',
    latitude: 55.796127,
    longitude: 49.106405
  },
  {
    name: 'Krasnodar',
    latitude: 45.03547,
    longitude: 38.975313
  }
]

export default cities
