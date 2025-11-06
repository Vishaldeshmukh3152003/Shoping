import React, { useContext, useState, useEffect } from 'react';
import '../style/BuyProduct.css';
import UserNavbar from './UserNavbar';
import { Link } from 'react-router-dom';
function BuyProduct(props) {

    const { obj, SetObj } = props;

    const { buy, setBuy } = props;
    const [total, setTotal] = useState(0);
    const [flag, setFlag] = useState(false);
    let amount = buy.reduce((acc, index) => {
        return Number(index.price) + acc;
    }, 0)



    function bill() {
        setFlag(!flag);
    }

    useEffect(() => {
        setTotal(buy.length);
    }, [buy]);

    return (
        <div>
            <div className="buyNav">
                <UserNavbar />
            </div>

            {/* <h1>Hello, this is BuyProduct:</h1> */}
            <div className='bill'>
                <div className='billcontent'>
                    <div>
                        {buy.map((index) => [
                            <div className='totalbillprice'>
                                <p className='image'><img className='payimg' src={index.ImageURL} alt="" /></p>
                                <b className='totalname'>{index.name}</b>
                                <p className='totalbrand'>{index.Brand}</p>
                                <p className='totalprice'>₹{index.price}</p>
                            </div>
                        ])}
                    </div>
                    <button onClick={bill} className=' billbtn btn btn-success'>confirm</button>
                </div>
                <div style={{ display: flag ? '' : "none" }} className='actualbill'>


                    <div>
                        <h3>🧾 Bill Details</h3>
                        <p  className="buyp"><b>💳 Name:</b> {obj.Uname}</p>
                        <p  className="buyp"><b>📧 Email:</b> {obj.email}</p>
                        <p  className="buyp"><b>📞 Phone:</b> {obj.phone}</p>
                        <p  className="buyp"><b>🛒 Total Items:</b> {buy.length}</p>
                        <p  className="buyp"><b>💰 Total Bill:</b> ₹{amount}</p>
                      <Link  to='/UserLandingPage' id='buybtn' className='btn btn-primary'>Add More</Link>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default BuyProduct;