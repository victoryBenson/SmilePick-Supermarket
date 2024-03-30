import React from 'react'
import { Navbar } from './Pages/Navbar'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { Home } from './Pages/Home'
import { BottomMenu } from './Components/BottomMenu'
import {Footer} from './Components/Footer'
import { SignIn } from './Components/SignIn'
import { SignUp } from './Components/SignUp'
import { ConditionRoute } from './Components/ConditionRoute'
import { AdminDashboard } from './Components/AdminDashboard'
import { ProtectedRoute } from './Components/ProtectedRoute'
import { ProductDetail } from './Pages/ProductDetail'
import { PromoDisplay } from './Components/PromoDisplay'
import {Shop} from './Pages/Shop'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Account } from './Components/Account'
import { SavedItems } from './Components/SavedItems'
import { AccountInfo } from './Components/AccountInfo'
import { Orders } from './Components/Orders'
import { MyCart } from './Components/MyCart'
import { Tooltip } from 'react-tooltip'
import { Fragrance } from './Pages/Fragrance'
import { HomeDeco } from './Pages/HomeDeco'
import { Laptops} from './Pages/Laptops'
import { Skincare } from './Pages/Skincare'
import { SmartPhones } from './Pages/SmartPhones'
import { Supermarket } from './Pages/Supermarket'
import { AllCategories } from './Pages/AllCategories'
import { AllCartItems } from './Pages/AllCartItems'
import { Payment } from './Components/Payment'
import { SearchCategory } from './Pages/SearchCategory'

const App = () => {
  return (
    <div>
      <Router>
        <ConditionRoute>
          <PromoDisplay/>
          <Navbar/>
        </ConditionRoute>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/shop' element={<Shop/>} />
          <Route path='/account' element={<Account/>}/>
          <Route path='/productdetail/:id' element={<ProductDetail/>}/>
          <Route path='/admindashboard' element={<ProtectedRoute><AdminDashboard/></ProtectedRoute>}/>
          <Route path='account' element={<Account/>}>
            <Route path='order' element={<Orders/>}/>
            <Route path='saved_items' element={<SavedItems/>} />
            <Route path='acct_info' element={<AccountInfo/>}/>
          </Route>
          <Route path='categories' element={<AllCategories/>}>
            <Route path='fragrance' element={<Fragrance/>}/>
            <Route path='home_deco' element={<HomeDeco/>}/>
            <Route path='laptops' element={<Laptops/>}/>
            <Route path='skincare' element={<Skincare/>}/>
            <Route path='smart_phone' element={<SmartPhones/>}/>
            <Route path='super_market' element={<Supermarket/>}/>
            <Route path='search_cat' element={<SearchCategory/>}/>
          </Route>
          <Route path='mycart' element={<MyCart/>}>
            <Route path='cartpage' element={<AllCartItems/>}/>
          </Route>
          <Route path='payment' element={<Payment/>}/>
        </Routes>
        <ConditionRoute>
          <BottomMenu/>
          <Footer/>
        </ConditionRoute>
      </Router>
      <ToastContainer autoClose={1000}/>
      <Tooltip id="my-tooltip" place='top' />
    </div>
  )
}

export default App
