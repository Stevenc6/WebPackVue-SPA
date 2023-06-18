using Microsoft.AspNetCore.Mvc;
using WebPackVue_SPA.Models;
using WebPackVue_SPA.Services;

namespace WebPackVue_SPA.Controllers
{
    [Route("api/[controller]")]
    public class MovieController : Controller
    {
        private MovieService _movieService;


        public MovieController()
        {
            _movieService = new MovieService();
        }

        [HttpGet]
        [Route("index")]
        public IActionResult Index()
        {
            var movies = _movieService.GetMovies();
            return Ok(movies);
        }


        [HttpPost]
        [Route("create")]
        public IActionResult Create(Movie movie)
        {
            var insertedMovie = _movieService.InsertMovie(movie);
            return Ok(insertedMovie);
        }
    }
}
