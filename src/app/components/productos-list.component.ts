import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component({

    selector: 'productos-list',
    templateUrl:'../views/productos-list.html',
    providers:[ProductoService]

	})


export class ProductosListComponent{

    public titulo: string;
    public productos: Producto[];

    constructor(
          private _route: ActivatedRoute,
          private _router: Router,
          private _productoService:ProductoService
    	){
        this.titulo ='Listado de productos';

    }

    ngOnInit(){
    	console.log('Porductos-list cargado');
      this.getProducto();
        
    }

    getProducto(){

      this._productoService.getProductos().subscribe(

            result => {

              if(result.code!=200){
                console.log(result.code);
              }else{
                console.log(result);
                this.productos = result.message;
              }
            },
            error => {

                console.log(<any>error);

            });


    }


    onDeleteProducto(id){
      this._productoService.deleteProducto(id).subscribe(

            response=>{
                
                 if(response.code == 200){
                    this.getProducto();

                 }else{

                  console.log("Error al borrar el producto");
                 }

              },
              error =>{

                console.log(<any>error);

              }

        );
    }

}