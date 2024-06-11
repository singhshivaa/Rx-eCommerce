import React, { useEffect, useState } from "react";
import "./AllProducts.css";
import { Card, Col, Container, Pagination, Row } from "react-bootstrap";
import ProductCard from "../../components/ProductCard/ProductCard";
import FilteredCards from "../../components/FilteredCards/FilteredCards";
import database from "../../Database/Database";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";
import { Bounce, ToastContainer, toast } from "react-toastify";

//issues fix before deoployment
// 1 : price filter not working properly
//this issue resolved after 7 days

function AllProducts() {
  let [data, setDataBase] = useState([]);
  let [category, setCategory] = useState("");
  let [price, setPrice] = useState("");
  let [color, setColor] = useState("");
  let [inputSearch, setInputSearch] = useState("");

  // multi handle Search for category,color,price,copmany
  const handleSearch = () => {
    let filteredData = database.filter(
      (curElm) =>
        curElm.category.toLowerCase().includes(inputSearch.toLowerCase()) ||
        curElm.company.toLowerCase().includes(inputSearch.toLowerCase()) ||
        curElm.color.toLowerCase().includes(inputSearch.toLowerCase()) ||
        curElm.newPrice.toLowerCase().includes(inputSearch.toLowerCase())
    );
    setDataBase(filteredData);
  };

  useEffect(() => {
    handleSearch();
  }, [inputSearch]);

  // search for category
  const handleCategory = () => {
    let filteredData = database.filter((curElm) =>
      curElm.category.includes(category)
    );
    setDataBase(filteredData);
  };

  useEffect(() => {
    handleCategory();
  }, [category]);

  // search for price
  const handlePrice = () => {
    let filteredData = database.filter((curElm) =>
      curElm.newPrice.includes(price)
    );
    setDataBase(filteredData);
  };

  useEffect(() => {
    handlePrice();
  }, [price]);

  // search for colors
  const handleColors = () => {
    let filteredData = database.filter((curElm) =>
      curElm.color.includes(color)
    );
    setDataBase(filteredData);
  };

  useEffect(() => {
    handleColors();
  }, [color]);

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    notify(product);
  };

  const notify = (product) =>
    toast(`${product.title} Added To Cart`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        {/* left side bar with category section  */}
        <Col xs={4} lg={2} className="filter-section">
          <div className="category-section">
            <h4>Category</h4>
            <div className="my-flx">
              <input
                type="radio"
                value=""
                onChange={(evt) => setCategory(evt.target.value)}
                name="select1"
                id="all"
              />
              <label for="all">All</label>
            </div>
            <div className="my-flx">
              <input
                type="radio"
                value="sneakers"
                onChange={(evt) => setCategory(evt.target.value)}
                name="select1"
                id="Sneakers"
              />
              <label for="Sneakers">Sneakers</label>
            </div>
            <div className="my-flx">
              <input
                type="radio"
                value="sports"
                onChange={(evt) => setCategory(evt.target.value)}
                name="select1"
                id="sports"
              />
              <label for="sports">Sports</label>
            </div>
            <div className="my-flx">
              <input
                type="radio"
                value="formals"
                name="select1"
                onChange={(evt) => setCategory(evt.target.value)}
                id="formals"
              />
              <label for="formals">Formals</label>
            </div>
            <div className="my-flx">
              <input
                id="Heels"
                value="heels"
                type="radio"
                name="select1"
                onChange={(evt) => setCategory(evt.target.value)}
              />
              <label for="Heels">Heels</label>
            </div>
          </div>
          <div className="price-section">
            <h4>Price</h4>
            <div className="my-flx">
              <input
                type="radio"
                name="select2"
                value=""
                onChange={(evt) => setPrice(evt.target.value)}
              />
              <span>All</span>
            </div>
            <div className="my-flx">
              <input
                type="radio"
                name="select2"
                value="500"
                onChange={(evt) => setPrice(evt.target.value)}
              />
              <span>300-500</span>
            </div>
            <div className="my-flx">
              <input
                type="radio"
                name="select2"
                value="800"
                onChange={(evt) => setPrice(evt.target.value)}
              />
              <span>500-800</span>
            </div>
            <div className="my-flx">
              <input
                type="radio"
                name="select2"
                value="1000"
                onChange={(evt) => setPrice(evt.target.value)}
              />
              <span>800-1200</span>
            </div>
            <div className="my-flx">
              <input
                type="radio"
                name="select2"
                value="1200"
                onChange={(evt) => setPrice(evt.target.value)}
              />
              <span>1200-3000</span>
            </div>
          </div>
          <div className="colors-section">
            <h4>Colors</h4>
            <div className="my-flx">
              <input
                type="radio"
                name="select3"
                value=""
                onChange={(evt) => setColor(evt.target.value)}
              />
              <span>All</span>
            </div>
            <div className="my-flx">
              <input
                type="radio"
                name="select3"
                value="black"
                onChange={(evt) => setColor(evt.target.value)}
              />
              <span>Black</span>
            </div>
            <div className="my-flx">
              <input
                type="radio"
                name="select3"
                value="blue"
                onChange={(evt) => setColor(evt.target.value)}
              />
              <span>Blue</span>
            </div>
            <div className="my-flx">
              <input
                type="radio"
                name="select3"
                value="red"
                onChange={(evt) => setColor(evt.target.value)}
              />
              <span>Red</span>
            </div>
            <div className="my-flx">
              <input
                type="radio"
                name="select3"
                value="gray"
                onChange={(evt) => setColor(evt.target.value)}
              />
              <span>Gray</span>
            </div>
          </div>
        </Col>
        {/* right main section with cards  */}
        <Col xs={8} lg={10} className="card-section">
          <div className="search-section">
            <input
              className="input-search"
              placeholder="Search Here for Category  Brand  Color  Price"
              onChange={(evt) => setInputSearch(evt.target.value)}
            />
          </div>
          <Row style={{ rowGap: "10px" }}>
            {inputSearch || category || price || color
              ? data.map((curElm) => (
                  <FilteredCards
                    id={curElm.id}
                    img={curElm.img}
                    company={curElm.company}
                    title={curElm.title}
                    prevPrice={curElm.prevPrice}
                    newPrice={curElm.newPrice}
                    addtoCart={handleAddToCart}
                  />
                ))
              : database.map((curElm) => (
                  <FilteredCards
                    id={curElm.id}
                    img={curElm.img}
                    company={curElm.company}
                    title={curElm.title}
                    prevPrice={curElm.prevPrice}
                    newPrice={curElm.newPrice}
                    color={curElm.color}
                    addtoCart={handleAddToCart}
                  />
                ))}
          </Row>
          <Pagination className="mt-2 justify-content-end">
            <Pagination.First />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Last />
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
}

export default AllProducts;
