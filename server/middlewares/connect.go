package middlewares

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"gopkg.in/mgo.v2"
	"os"
)

func Connect() gin.HandlerFunc {
	uri := os.Getenv("MONGODB_URL")

	if uri == "" {
		uri = "mongodb://localhost:27017/admin"
	}

	mInfo, err := mgo.ParseURL(uri)
	session, err := mgo.Dial(uri)
	if err != nil {
		fmt.Printf("Can't connect to mongo, go error %v\n", err)
		os.Exit(1)
	}

	session.SetSafe(&mgo.Safe{})

	return func(c *gin.Context) {
		s := session.Clone()
		defer s.Close()
		c.Set("db", s.DB(mInfo.Database))
		c.Next()
	}
}
