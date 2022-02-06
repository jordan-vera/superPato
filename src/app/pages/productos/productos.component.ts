import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { NgxImageCompressService } from "ngx-image-compress";
import { Productos } from 'src/app/models/Productos';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Global } from 'src/app/services/Global';
import { ProductoService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public imagenEstadoAdd: boolean = false;
  public imagenCargadaAdd: any = null;
  public producto: Productos = new Productos(0, 0, '', '', '', '', '', '', '', null);
  public productos: Productos[];
  public urlImage: string = Global.urlImage;

  constructor(
    private imageCompress: NgxImageCompressService,
    private _productoService: ProductoService,
    private alertify: AlertifyService
  ) { }

  ngOnInit(): void {
    this.getProductos();
  }

  delete(IDPRODUCTO, PORTADA): void {
    this._productoService.delete(IDPRODUCTO, PORTADA).subscribe(
      response => {
        this.alertify.success("Registro eliminado correctamente!!");
        this.getProductos();
      }, error => {
        console.log(error);
      }
    )
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

  guardar(): void {
    if(this.producto.FILE == null) {
      this.alertify.success("Es necesario agregar una imagen!!");
    } else {
      if(this.producto.CODIGO == '') {
        this.alertify.success("Es necesario agregar una imagen!!");
      } else {
        this._productoService.create(this.producto).subscribe(
          response => {
            this.alertify.success("Registro guardado correctamente!!");
            this.getProductos();
            this.limpiarCampos();
          }, error => {
            console.log(error);
          }
        )
      }
    }
  }

  limpiarCampos(): void {
    var dirtyFormID = 'formproducto';
    var resetForm = <HTMLFormElement>document.getElementById(dirtyFormID);
    resetForm.reset();
    this.imagenEstadoAdd = false;
    this.imagenCargadaAdd = null;
    this.producto.FILE = null;
  }

  cargarImagenAdd() {
    this.imageCompress.uploadFile().then(({ image, orientation }) => {
      this.imagenEstadoAdd = true;
      var head = image.split(',')[0];
      var subHead = head.split('/')[1];
      var extension = subHead.split(';')[0];
      this.producto.PORTADA = UUID.UUID() + '.' + extension;
      if (this.imageCompress.byteCount(image) > 1000000) {
        this.producto.FILE = image.split(',')[1];
        this.imagenCargadaAdd = image;
      } else {
        this.imageCompress.compressFile(image, orientation, 50, 50).then(
          result => {
            this.producto.FILE = result.split(',')[1];
            this.imagenCargadaAdd = result;
          }
        );
      }
    })
  }

}
