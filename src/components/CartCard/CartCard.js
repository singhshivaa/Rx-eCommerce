import React from "react";
import "./CartCard.css";

function CartCard({
  id,
  img,
  company,
  title,
  color,
  prevPrice,
  newPrice,
  handleDelteFromCart,
  hadleQty,
  qty,
  handleWishList,
}) {
  return (
    <>
      <tr>
        <td>
          <figure class="itemside">
            <div class="aside">
              <img
                src={img}
                height="150px"
                className="img-sm cart-product-img"
              />
            </div>
            <figcaption class="info">
              <a href="#" class="title text-dark">
                {title}
              </a>
              <p class="text-muted small">
                Size: XL, Color: {color}, <br /> Brand:{company}
              </p>
            </figcaption>
          </figure>
        </td>
        <td>
          <select
            class="form-control"
            value={qty}
            onChange={(evt) => hadleQty(evt, newPrice)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>

          {/* <input class="form-control" ="1" onChange={hadleQty} /> */}
        </td>
        <td>
          <div class="price-wrap">
            <var class="price">Only₹ {newPrice}....</var>

            <small class="text-muted">
              <del>{prevPrice}</del>
            </small>
          </div>
        </td>
        <td class="text-right">
          <button
            data-original-title="Save to Wishlist"
            title=""
            class="btn btn-light mr-2"
            data-toggle="tooltip"
            onClick={() =>
              handleWishList({
                id,
                img,
                company,
                title,
                color,
                prevPrice,
                newPrice,
              })
            }
          >
            <i style={{ color: "#3985DB" }} class="fa fa-heart"></i>
          </button>
          <button
            style={{ color: "#ef233c", backgroundColor: "#fcd3d8" }}
            class="btn btn-light"
            onClick={() => handleDelteFromCart(id)}
          >
            Remove
          </button>
        </td>
      </tr>
    </>
  );
}

export default CartCard;
