export class Productos {

    public IDPRODUCTO: number;
    public IDPROVEEDOR: number;
    public CODIGO: string;
    public NOMBRES: string;
    public DESCRIPCION: string;
    public PRECIOCOMPRA: string;
    public PRECIO: string;
    public STOCK: string;
    public PORTADA: string;
    public FILE: any;

    constructor(
        IDPRODUCTO: number,
        IDPROVEEDOR: number,
        CODIGO: string,
        NOMBRES: string,
        DESCRIPCION: string,
        PRECIOCOMPRA: string,
        PRECIO: string,
        STOCK: string,
        PORTADA: string,
        FILE: any
    ){
        this.IDPRODUCTO = IDPRODUCTO;
        this.IDPROVEEDOR = IDPROVEEDOR;
        this.CODIGO = CODIGO;
        this.NOMBRES = NOMBRES;
        this.DESCRIPCION = DESCRIPCION;
        this.PRECIOCOMPRA = PRECIOCOMPRA;
        this.PRECIO = PRECIO;
        this.STOCK = STOCK;
        this.PORTADA = PORTADA;
        this.FILE = FILE;
    }
}