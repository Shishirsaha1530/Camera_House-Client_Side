import { Route, Switch } from 'react-router-dom';
import Home from './components/allPages/Home/Home';
import Header from './components/allPages/NavBar/Header';
import About from './components/allPages/About/About';
import Review from './components/allPages/Review/Review';
import FrequentAsk from './components/allPages/FAQ/FrequentAsk';
import ContactUs from './components/allPages/Contact/ContactUs';
import Footer from './components/allPages/Footer/Footer';
import ExploreCamera from './components/allPages/Product/ExploreCamera/ExploreCamera';
import ErrorPage from './components/allPages/ErrorPage/ErrorPage';
import Login from './components/allPages/Login/Login/Login';
import Registration from './components/allPages/Login/Registration/Registration';
import AuthProvider from './components/context/AuthProvider';
import PrivateRoute from './components/allPages/Login/PrivateRoute/PrivateRoute';
import AddCamera from './components/allPages/AdminDashboard/AddCamera/AddCamera';
import PurchasePage from './components/allPages/PurchasePage/PurchasePage';
import MyOrder from './components/allPages/UserDashboard/MyOrders/MyOrder';
import Payment from './components/allPages/UserDashboard/Payment/Payment';
import ReviewForm from './components/allPages/UserDashboard/Reviews/ReviewForm';
import Dashboard from './components/allPages/Dashboard/Dashboard';
import ManageOrder from './components/allPages/AdminDashboard/ManageOrder/ManageOrder';
import ManageProduct from './components/allPages/AdminDashboard/ManageProduct/ManageProduct';
import MakeAdmin from './components/allPages/AdminDashboard/MakeAdmin/MakeAdmin';
import AdminRoute from './components/allPages/Login/AdminRoute/AdminRoute';
import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import DashBoardMessage from './components/allPages/Dashboard/DashBoardMessage';
function App() {
   const [loader, setLoader] = useState(false);

    useEffect(()=>{
    setLoader(true);
    setTimeout(()=>{
      setLoader(false)
    }, 3000)
  },[])

      useEffect(() => {
        AOS.init({
            duration: 1200,
             once:true
          })
          
    })

  return (
    
    <div>
    {
      loader? 
      <div className="d-flex justify-content-center align-items-center mt-5 pt-5">
        <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>:
      <AuthProvider>
      <Header> </Header>
      <Switch> 
          <Route exact  path='/'> <Home> </Home>  </Route>
          <Route exact  path='/home'> <Home> </Home>  </Route>
          <Route exact  path='/about'> <About> </About>  </Route>
          <Route exact  path='/explore'> <ExploreCamera> </ExploreCamera>  </Route>
          <Route exact  path='/review'> <Review> </Review>  </Route>
          <Route exact  path='/frequentask'> <FrequentAsk> </FrequentAsk>  </Route>
          <PrivateRoute exact  path='/contact'> <ContactUs> </ContactUs>   </PrivateRoute>  
          <PrivateRoute exact path='/booking/:id'> <PurchasePage> </PurchasePage>  </PrivateRoute>  
          <PrivateRoute exact path='/myOrders'> <MyOrder> </MyOrder>   </PrivateRoute>  
          <PrivateRoute exact path='/payment'> <Payment> </Payment>   </PrivateRoute>  
          <PrivateRoute exact path='/userReview'> <ReviewForm> </ReviewForm>  </PrivateRoute>  
          <PrivateRoute  path='/dashboard'> <Dashboard> </Dashboard>  </PrivateRoute>  
          <PrivateRoute  path='/message'> <DashBoardMessage> </DashBoardMessage>  </PrivateRoute>  
          <Route exact  path='/login'> <Login> </Login>   </Route>  
          <AdminRoute exact  path='/manageOrders'> <ManageOrder> </ManageOrder>  </AdminRoute>  
          <AdminRoute exact  path='/addCamera'> <AddCamera> </AddCamera>   </AdminRoute>  
          <AdminRoute exact  path='/manageProduct'> <ManageProduct> </ManageProduct>  
          </AdminRoute>  
          <AdminRoute exact  path='/makeAdmin'> <MakeAdmin> </MakeAdmin> </AdminRoute>  
          <Route exact  path='/registration'> <Registration> </Registration>   </Route>  
          <Route exact  path='/*'> <ErrorPage> </ErrorPage>  </Route>  
      </Switch>
      <Footer> </Footer>
      </AuthProvider>
      }
    </div>
  );
}

export default App;
