import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import axios from "axios";
import img from "../images/cloth.png";
import img2 from "../images/cloth2.png";
import img3 from "../images/cloth3.png";
Link
const Products = ({ productcard, searchQuery }) => {


  const myStyle = {
    width: "19rem",
    
  };
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [sortedProducts, setSortedProducts] = useState([]);

  

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
 
  

  // fetch data from Api using Axios

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const filterProducts = productcard.filter((product) => {
    const productTitle = product.title ? product.title.toLowerCase() : ""; 
    const search = searchQuery ? searchQuery.toLowerCase() : ""; 

   
  return (
    (selectedCategory === "all" || product.category === selectedCategory) &&
    productTitle.includes(search)
  );
});
  // Sorting function A To Z and Z to A
  useEffect(() => {
    let sorted = [...filterProducts];

    if (sortOrder === "asc") {
      sorted = sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "desc") {
      sorted = sorted.reverse((a, b) => b.title.localeCompare(a.title));
    }

    setSortedProducts([...sorted]);
  }, [sortOrder, filterProducts]);

 
  // sorting function Price high to low and low to high

  useEffect(() => {
    if (sortOrder === "asc ") {

      setSortedProducts([...filterProducts].sort((a, b) => a.price - b.price));
    } else if (sortOrder === "desc ") {
      setSortedProducts([...filterProducts].sort((a, b) => b.price - a.price));
    } else {
      setSortedProducts([...filterProducts]);
    }
  }, [sortOrder, filterProducts]);

  const handleSort = (order) => {
    setSortOrder(order);
  };
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

 


  return (
    <>
      <div class=" row p-4 p-md-5 mb-5 rounded text-body-emphasis bg-body-secondary rounded-4 mt-5 mx-5">
        <div class="col-lg-8 px-0">
          <h1 class="display-4 fst-italic mainheading fw-bold">our Products</h1>
          <p class="lead my-3">
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what’s most interesting in this post’s
            contents.
          </p>
          <p class="lead mb-0">
            <a href="#" class="text-body-emphasis btn btn-info fw-bold">
              Shop Now
            </a>
          </p>
        </div>
        <div class="col-md-4">
          {/* <img
            src={img}
            class="rounded float-end "
            alt="..."
            width={200}
            height={250}
          /> */}
          <div id="carouselExampleAutoplaying" class="carousel slide mx-5" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img} width={200}
            height={250}/>
    </div>
    <div class="carousel-item">
      <img src={img2} width={200}
            height={250}/>
    </div>
    <div class="carousel-item">
      <img src={img3} width={200}
            height={250}/>
    </div>
  </div>

</div>
        </div>
      </div>
      <div class="row  ">
        {/* filter products */}
        <div class="col-md-2 mx-5 mt-5 filter-products  ">
          <h5 class="fw-bold ">Featured Products</h5>
          
          <div class="form-check">
  <input  onClick={() => handleSort("asc ")} class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label  class="form-check-label" for="flexCheckChecked">
  A To Z
  </label>
</div>
          <div class="form-check">
  <input onClick={() => handleSort(" desc ")} class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label  class="form-check-label" for="flexCheckChecked">
     Z To A
  </label>
</div>
<hr />
<h5 class=" ">Rate</h5>
<div class="form-check">
  <input onClick={() => handleSort("asc ")} class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label  class="form-check-label" for="flexCheckChecked">
   Low To High
  </label>
</div>
<div class="form-check">
  <input onClick={() => handleSort("desc ")} class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label  class="form-check-label" for="flexCheckChecked">
   High To Low
  </label>
</div>
<hr />
<h5 class=" ">Category</h5>

          <select
            className="form-select"
            onChange={handleCategoryChange}
            value={selectedCategory}
          >
            <option value="all">All</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="jewelery">Jewelry</option>
            <option value="electronics">Electronics</option>
          </select>

        </div>

        <div class="col d-flex flex-row flex-wrap  ">
          <div class='m-auto'>

          <h1 class=" featured-title  mainheading  "> Featured Collection</h1>
          <h5 class="  f-h ">
          🔥 Hurry, Limited Time Offer! Get the Trendy Widget X1 at $19.99 - 50% OFF! 🔥
          </h5>
          </div>
       
          {/* map data and show products  */}

          {sortedProducts.map((product) => (
           <Link to={`/product-details/${product.id}`} style={{ textDecoration: "none" }}> <div
              class="card custom-card mb-4 mx-2   "
              style={myStyle}
              key={product.id}
            >
              <img
                src={product.image}
                class="card-img-top p-2"
                alt={product.title}
              />
              <div class="card-body">
                <h5 class="card-title   ">{product.title.slice(0,100 )}</h5>
                <p class="card-text">
                  {product.description.slice(0, 100)}.....
                </p>
                <a href="#" class="btn btn-warning  first:">
                  ${product.price}
                </a>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
      {/* news letter */}
      <div class="container-news-letter  m-4">
        <div class="container-news">
          <h1> Subscribe to Our Newsletter</h1>
          <p>Stay up to date with the latest news and updates.</p>

          <form>
            <div class="form-group col-md-4">
              <label for="email">Email address:</label>
              <input
                type="email"
                class="form-control mt-3"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            <button type="submit" class="btn btn-primary mt-3  ">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {/* Footer  */}

      <Footer />
    </>
  );
};

export default Products;
