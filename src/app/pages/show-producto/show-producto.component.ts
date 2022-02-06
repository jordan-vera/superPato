import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Productos } from 'src/app/models/Productos';
import { Global } from 'src/app/services/Global';
import { ProductoService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-show-producto',
  templateUrl: './show-producto.component.html',
  styleUrls: ['./show-producto.component.css']
})
export class ShowProductoComponent implements OnInit {

  public idproducto: number = 0;
  public productoOne: Productos = new Productos(0, 0, '', '', '', '', '', '', '', null);
  public urlImage: string = Global.urlImage;

  constructor(
    private _route: ActivatedRoute,
    private _productoService: ProductoService
  ) {
    this._route.params.subscribe((params: Params) => {
      this.idproducto = params.idproducto;
      this.getOne();
    });
  }

  ngOnInit(): void {
  }

  getOne(): void {
    this._productoService.getone(this.idproducto).subscribe(
      response => {
        this.productoOne = response.response;
      }, error => {
        console.log(error);
      }
    )
  }

}
