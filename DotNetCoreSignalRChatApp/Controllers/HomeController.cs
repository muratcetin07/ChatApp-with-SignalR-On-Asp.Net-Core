using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DotNetCoreSignalRChatApp.Models;

namespace DotNetCoreSignalRChatApp.Controllers
{
    public class HomeController : Controller
    {

        public IActionResult Index()
        {
            var model = new HomeViewModel()
            {
                Messages = new List<Message>()
            };

            return View(model);
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
