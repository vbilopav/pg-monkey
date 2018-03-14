using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace web
{
    public class Program
    {
        public static void Main(string[] args) => BuildWebHost(args).Run();

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();
    }
}

//https://stackoverflow.com/questions/37935524/how-to-use-npm-with-asp-net-core
//https://stackoverflow.com/questions/44375558/embedded-stylesheet-in-external-assembly-for-asp-net-core-1-1
//https://codeopinion.com/asp-net-core-csproj-embedded-resources/