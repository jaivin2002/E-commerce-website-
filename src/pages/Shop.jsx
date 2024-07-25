import React, { useState, useEffect } from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet'
import { Container, Row, Col } from 'reactstrap'
import '../styles/shop.css'
import ProductList from '../components/UI/ProductList';
import vrbox from '../products/vrbox'
const Shop = () => {

  
  useEffect(()=> {
    window.scrollTo(0,0)
  }, [])

  const [productsData, setProductsData] = useState(vrbox);
  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === 'trending') {
      const filteredProducts = vrbox.filter(
        (item) => item.category === 'trending'
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === 'best_sales') {
      const filteredProducts = vrbox.filter(
        (item) => item.category === 'best_sales'
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === 'new_arrivals') {
      const filteredProducts = vrbox.filter(
        (item) => item.category === 'new__arrive'
      );
      setProductsData(filteredProducts);
    }

  }

  const handleSearch = e => {
    const searchTerm = e.target.value

    const searchedProducts = vrbox.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

    setProductsData(searchedProducts)
  }


  // useEffect(() => {
  //   const filteredtrendingProducts = vrbox.filter((item) =>
  //     item.category === "trending"
  //   );
  //   setTrendingdata(filteredtrendingProducts);
  // }, []);

  return (
    <Helmet title='Shop'>

      <CommonSection title='Products' />

      <section>
        <Container>
          <Row>
            <Col lg='3' md='3'>
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter Products</option>
                  <option value="trending">Trending</option>
                  <option value="best_sales">Best Sales</option>
                  <option value="new_arrivals">New Arrivals</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='3'>
              <div className="filter__widget">
                <select>
                  <option>Sort By</option>
                  <option value='ascending'>Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="search__box">
                <input type="text" placeholder='Search items.....' onChange={handleSearch} />
                <span>
                  <i class='ri-search-line'></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>


      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className='text-center fs-4'>No Products are found!</h1>
            )
              : (
                <ProductList data={productsData} />
              )}


          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop
