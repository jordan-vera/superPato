import { Component, OnInit, OnDestroy } from '@angular/core';
import { Productos } from 'src/app/models/Productos';
import { Global } from 'src/app/services/Global';
import { ProductoService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnDestroy {

  public productos: Productos[];
  public urlGlobal: string = Global.urlImage;

  constructor(
    private _productoService: ProductoService
  ) {}

  ngOnInit() {
    this.getProductos();
  }

  ngOnDestroy() {
  }

  getProductos(): void {
    this._productoService.getall().subscribe(
      response => {
        this.productos = response.response;
      }, error => {
        console.log(error);
      }
    )
  }

}
