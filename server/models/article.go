package models

import "gopkg.in/mgo.v2/bson"

type Article struct {
	Id        bson.ObjectId
	Title     string
	Body      string
	CreateOn  int64
	UpdatedOn int64
}
