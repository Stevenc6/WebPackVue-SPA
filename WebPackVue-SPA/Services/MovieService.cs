using WebPackVue_SPA.Models;

namespace WebPackVue_SPA.Services
{
    public class MovieService
    {
        private static List<Movie> _movieContext = new List<Movie>()
        {
            new Movie()
            {
                Id = 1,
                Title = "Jurrasic Park",
                Director = "Steven Spielberg",
                Year = 1993,
                Studio = "Universal Pictures"
            },
            new Movie()
            {
                Id = 2,
                Title = "Alien",
                Director = "Ridley Scott",
                Year = 1979,
                Studio = "20th Century Fox"
            },
            new Movie()
            {
                Id = 3,
                Title = "Titanic",
                Director = "James Cameron",
                Year = 1997,
                Studio = "Paramount Pictures"
            }
        };

        public IEnumerable<Movie> GetMovies()
        {
            return _movieContext;
        }

        public int InsertMovie(Movie model)
        {
            int id = _movieContext.Last().Id + 1;

            model.Id = id;
            _movieContext.Add(model);
            return id;
        }
    }
}
