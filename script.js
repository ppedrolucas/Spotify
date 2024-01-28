function awp() {
  var year = document.getElementById("year")
  var data = new Date()
  var ano = data.getFullYear()

  year.innerHTML = ano
}

const searchImput = document.getElementById("search-input")
const resultsArtists = document.getElementById("result-artist")
const resultPlaylist = document.getElementById("result-playlists")

function requestApi(searchTerm) {
  const url = `http://localhost:2000/artists?name_like=${searchTerm}`
  fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result))
}

function displayResults(result) {
  resultPlaylist.classList.add("hidden")
  const artistName = document.getElementById("artist-name")
  const artistImage = document.getElementById("artist-img")

  result.forEach((element) => {
    artistName.innerText = element.name
    artistImage.src = element.urlImg
  })

  resultsArtists.classList.remove("hidden")
}

document.addEventListener("input", function () {
  const searchTerm = searchImput.value.toLowerCase()
  if (searchTerm === "") {
    resultPlaylist.classList.add("hidden")
    resultsArtists.classList.remove("hidden")
    return
  }
  requestApi(searchTerm)
})
