import React, { Fragment} from "react";
import "./Home.css";
import MetaData from "../layout/MetaData";
// import {useSelector , useDispatch} from "react-redux"
// import { useEffect } from "react";
import Loader from "../layout/Loader/Loader";
// import { useAlert } from "react-alert";
// import {getProduct} from "../../actions/productAction.js"



const Home = () => {
//   const alert = useAlert();
//   const dispatch = useDispatch();
//   const { loading, error} = useSelector((state) => state.products);

  
//   useEffect(()=>{
//     if(error){
//       return alert.error(error);
//     }
//     dispatch(getProduct());
//   },[dispatch,alert,error])
const loading =false
  return (
    <Fragment>
    {loading ? (
      <Loader />
    ) : (
      <Fragment>
        <MetaData title="Coaching Center" />

        <div className="banner">
          <a href="/admission">
            <button>
              Admission Enquiry
            </button>
          </a>
        </div>
      </Fragment>
    )}
  </Fragment>
  );
};

export default Home;
