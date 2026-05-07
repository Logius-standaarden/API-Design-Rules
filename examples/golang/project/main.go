package main

import (
    "net/http"

    "github.com/gin-gonic/gin"
    cors "github.com/rs/cors/wrapper/gin"

    "github.com/loopfz/gadgeto/tonic"

    "github.com/wI2L/fizz"
    "github.com/wI2L/fizz/openapi"
)

var db = make(map[string]string)

func setupRouter() *gin.Engine {
    r := gin.Default()
    r.Use(func(c *gin.Context) {
        c.Header("API-Version", "1.0.0")
        c.Next()
    })
    f := fizz.NewFromEngine(r)

    infos := &openapi.Info{
        Title: "Example API",
        Description: "Voorbeeldproject",
        Version: "1.0.0",
        Contact: &openapi.Contact{
            Name: "API Team",
            URL: "https://example.com/support",
            Email: "support@example.com",
        },
    }

    f.Generator().SetServers([]*openapi.Server{
        {
           Description: "Production",
           URL:         "https://api.example.com/v1",
        },
     })

    f.GET("/v1/openapi.json", []fizz.OperationOption{
        fizz.WithoutSecurity(),
    }, cors.Default(), f.OpenAPI(infos, "json"))

    foo := f.Group("/", "root", "Description of root group")

    foo.GET("/ping", []fizz.OperationOption{
        fizz.Description("MyOperationID"),
        fizz.Header("API-Version", "Version of this API", nil),
    }, tonic.Handler(func(c *gin.Context) error {
        c.String(http.StatusOK, "pong")

        return nil
    }, 200))

    return r
}

func main() {
    r := setupRouter()
    r.Run(":8080")
}
