
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Landingpage from './components/pages/Landingpage';
import Grocery from './components/innercomponent/singularcomponent/Grocery';
import Electronics from './components/innercomponent/singularcomponent/Electronics';
import Cart_Data from './components/pages/Cart_Data';
import Buy_product from './components/pages/Buy_product';
import Myorder from './components/pages/Myorder';
import Mydetail from './components/pages/Mydetail';

function App() {
  const UserDetail = [
    {
      name: "manoj4533@",
      password: "3845517288",
      age: 22,
      buyed_product: [{ name: "vegetable", count: 1, price: 30, paid_amount: 30, img: "https://tse2.mm.bing.net/th?id=OIP.1-k6YNph1IzitdJpyLHRlAHaE8&pid=Api&P=0&h=180" }],
      Add_cart_product: [{ name: "vegetable", count: 1, price: 30, img: "https://tse2.mm.bing.net/th?id=OIP.1-k6YNph1IzitdJpyLHRlAHaE8&pid=Api&P=0&h=180" }]
    }
  ]

  const productDetail = [{
    name: "vegetable",
    count: 20,
    price: 30,
    product_detail: "Free Daily products icons, logos, symbols in 50+ UI design styles. Download Static and animated Daily products vector icons and logos for free in PNG, SVG, GIF Filters",
    img: "https://tse2.mm.bing.net/th?id=OIP.1-k6YNph1IzitdJpyLHRlAHaE8&pid=Api&P=0&h=180"

  },
  {
    name: "paste",
    count: 5,
    price: 15,
    product_detail: "Free Daily products icons, logos, symbols in 50+ UI design styles. Download Static and animated Daily products vector icons and logos for free in PNG, SVG, GIF Filters",
    img: "https://up.yimg.com/ib/th?id=OIP.W8J29GyaI4WWP48BuIl5fgHaHa&pid=Api&rs=1&c=1&qlt=95&w=108&h=108"
  },
  {
    name: "Daily_product",
    count: 1,
    price: 15,
    product_detail: "Free Daily products icons, logos, symbols in 50+ UI design styles. Download Static and animated Daily products vector icons and logos for free in PNG, SVG, GIF Filters",
    img: "https://up.yimg.com/ib/th?id=OIP.qrFFujqlsXLR8B7Md86joAHaHa&pid=Api&rs=1&c=1&qlt=95&w=108&h=108"
  }
  ]

  window.localStorage.setItem("UserDetail", JSON.stringify(UserDetail));
  window.localStorage.setItem("productDetail", JSON.stringify(productDetail));



  return (
    <div className="App">
      

      
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} ></Route>
            <Route path='/signup' element={<Signup />} />
            <Route path='/landing' element={<Landingpage />} ></Route>
            <Route path='/grocery' element={<Grocery/>}/>
            <Route path='/cart_data' element={<Cart_Data/>}/>
            <Route path='/buy_product' element={<Buy_product/>}/>
            <Route path='/electronic' element={<Electronics/>}/>
            <Route path='myorder' element={<Myorder/>}/>
            <Route path='mydetail' element={<Mydetail/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
