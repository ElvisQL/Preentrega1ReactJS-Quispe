import carrito from "../assets/carrito.png"


export default function CartWidget() {
    return <div className="cartwidget">
        <img src={carrito} alt="carro" />
        <span>0</span>
    </div>
}