package main

type Category struct {
	CategoryName string `json:"Category"`
	Tasks        []struct {
		Name   string `json:"Name"`
		Done   bool   `json:"Done"`
		Hidden bool   `json:"Hidden"`
	} `json:"Tasks"`
}
