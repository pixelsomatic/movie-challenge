const baseUrl = 'https://challenge-fleye.herokuapp.com/'

export const omdbapi = 'https://www.omdbapi.com/?i=tt3896198&apikey=434e709d&s='

export const db = {
  saveSearch: baseUrl + 'movies',
  movies: baseUrl + 'movies?name=',
  favorites: baseUrl + 'favorites'
}