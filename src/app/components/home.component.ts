import { Component } from '@angular/core';


@Component({

      selector:'home',
      templateUrl:'../views/home.html'

	})

export class HomeComponent{

	public titulo: string;

	constructor(){
		this.titulo='Webapp de productos ';
	}

	ngOnInit(){
		console.log('se ha cargado el Component home');
	}
}