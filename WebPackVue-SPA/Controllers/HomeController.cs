using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using WebPackVue_SPA.Models;

namespace WebPackVue_SPA.Controllers
{
    public class HomeController : Controller
    {
 
        public IActionResult Index()
        {
            var html = System.IO.File.ReadAllText("./wwwroot/dist/index.html");
            return base.Content(html, "text/html");            
        }

 
    }
}