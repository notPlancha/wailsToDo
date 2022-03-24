package main

import (
	"context"
	"encoding/json"
	"io/ioutil"
)

// App application struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called at application startup
func (b *App) startup(ctx context.Context) {
	// Perform your setup here
	b.ctx = ctx
}

// domReady is called after the front-end dom has been loaded
func (b *App) domReady(ctx context.Context) {
	// Add your action here
}

// shutdown is called at application termination
func (b *App) shutdown(ctx context.Context) {
	// Perform your teardown here
}

func (b *App) GetTasks(path string) ([]Category, string) {
	dat, err := ioutil.ReadFile(path)
	if err != nil {
		return nil, err.Error()
	}
	var CategoriesList []Category
	err = json.Unmarshal(dat, &CategoriesList)
	if err != nil {
		return nil, err.Error()
	}
	return CategoriesList, ""
}

func (b *App) WriteTasks(path string, currentCategories []Category) string {
	dat, err := json.Marshal(currentCategories)
	if err != nil {
		return err.Error()
	}
	err = ioutil.WriteFile(path, dat, 0644)
	if err != nil {
		return err.Error()
	}
	return ""
}
