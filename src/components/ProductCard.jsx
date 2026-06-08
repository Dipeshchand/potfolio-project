function ProductCard({ product, addToCart }) {

  return (

    <div style={{
      width:"220px",
      border:"1px solid #ccc",
      padding:"15px",
      borderRadius:"10px",
      textAlign:"center"
    }}>

      <img
        src={product.image}
        alt={product.name}
        width="100%"
      />

      <h2>{product.name}</h2>

      <p>₹ {product.price}</p>

      <button
        onClick={() => addToCart(product)}
      >
        Add To Cart
      </button>

    </div>

  )

}

export default ProductCard;