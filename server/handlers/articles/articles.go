package articles

import (
	"../../models"
	"github.com/gin-gonic/gin"
	"gopkg.in/mgo.v2"
	//"net/http"
)

func New(c *gin.Context) {
	//article := models.Article{}

	//c.HTML(http.StatusOK, "articles/form", gin.H{})
}

// 创建
func Create(c *gin.Context) {
	db := c.MustGet("db").(*mgo.Database)

	article := models.Article{}
	err := c.Bind(&article)
	if err != nil {
		c.Error(err)
		return
	}

	err = db.C("articles").Insert(article)
}

func Edit(c *gin.Context) {

}

func List(c *gin.Context) {

}

func Update(c *gin.Context) {

}

func Delete(c *gin.Context) {

}
