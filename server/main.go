package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"os"
)

const (
	Port = "8080"
)

func main() {
	StartGin()
}

func StartGin() {
	//gin.SetMode(gin.ReleaseMode)

	router := gin.Default()
	router.LoadHTMLGlob("templates/*")

	router.GET("/ping", func(c *gin.Context) {
		c.String(200, "pong")

	})

	router.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{
			"title": "Main website",
		})
	})

	port := Port
	if len(os.Getenv("PORT")) > 0 {
		port = os.Getenv("PORT")
	}
	router.Run(":" + port)
	router.Run(":3000")
}
