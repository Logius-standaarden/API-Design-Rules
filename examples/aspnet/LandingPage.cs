using Microsoft.AspNetCore.Mvc;

namespace LandingPage.Controllers;

[ApiController]
[Route("/")]
public class LandingPageController : ControllerBase
{
    [Tags("LandingPagina")]
    [EndpointDescription("Landing pagina")]
    [HttpGet(Name = "GetLandingPagina")]
    public String Get()
    {
        return "Landing pagina";
    }
}