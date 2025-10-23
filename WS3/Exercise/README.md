An app that process information from OMDB API and renders it on the browser

To run locally type npm start on the console inside WS3/Exercise folder. The app will open on port 5000, open it on the browser.
It will look the following:

<img width="450" height="470" alt="image" src="https://github.com/user-attachments/assets/0a14e38d-12a9-4e5a-886f-bbfa5f3dca03" />

You can change the search term on movies.js: SEARCH = "star wars"; or what details you want from a movie here:  

<tr>
      <td>${movie.Title} (${movie.Year})</td>
      <td>${movie.imdbID}</td>
      <td><img src="${movie.Poster}" width="100" alt="poster"/></td>
    </tr>`;
