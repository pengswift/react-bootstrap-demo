package main

import (
	"fmt"
	"github.com/gin-gonic/contrib/sessions"
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
	store := sessions.NewCookieStore([]byte("secret"))
	router.Use(sessions.Sessions("sessionid", store))
	router.LoadHTMLGlob("templates/*")

	router.GET("/ping", func(c *gin.Context) {
		session := sessions.Default(c)
		var count int
		v := session.Get("count")
		if v == nil {
			count = 0
		} else {
			count = v.(int)
			count += 1
		}

		session.Set("count", count)
		session.Save()

		c.JSON(200, gin.H{"count": count})

		//c.String(200, "pong")
	})

	router.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{
			"title": "Main website",
		})
	})

	router.POST("/signIn", func(c *gin.Context) {
		email := c.Query("email")
		pass := c.Query("pass")

		fmt.Println("email: %s", email)
		fmt.Println("pass: %s", pass)
	})

	port := Port
	if len(os.Getenv("PORT")) > 0 {
		port = os.Getenv("PORT")
	}
	router.Run(":" + port)
	router.Run(":3000")
}
