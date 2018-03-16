using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace web
{
    public class Program
    {
        public static void Main(string[] args) => BuildWebHost(args).Run();

        public static IWebHost BuildWebHost(string[] args)
        {
            var builder = WebHost.CreateDefaultBuilder(args).UseStartup<Startup>();
#if RELEASE
            builder.UseWebRoot("public");
#endif
            return builder.Build();
        }
    }
}