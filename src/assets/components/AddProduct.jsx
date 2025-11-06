import React from 'react'
import '../style/Addproduct.css'
import { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
function AddProduct() {
    const [data, setData] = useState({
        name: "",
        price: "",
        Category: "",
        Brand: "",
        Description: "",
        ImageURL: "",
        Stock: "",
        Rating: ""
    })

    function handle(e) {
        const { name, value } = e.target;
        setData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    function addpro(e) {
        e.preventDefault();
        axios.post("http://localhost:1001/product", data)
            .then((res) => {
                toast.success("added succesfull")
                setData({
                    name: "",
                    price: "",
                    Category: "",
                    Brand: "",
                    Description: "",
                    ImageURL: "",
                    Stock: "",
                    Rating: ""
                });
            })
            .catch((err) => {
                toast.error("Invalid")
            })
    }



    const product = [
        "Electronics",
        "Home Appliances",
        "Furniture",
        "Clothing & Apparel",
        "Footwear",
        "Beauty & Personal Care",
        "Groceries & Food Items",
        "Books & Stationery",
        "Toys & Games",
        "Sports & Fitness Equipment",
        "Office Supplies",
        "Automotive Accessories",
        "Pet Supplies",
        "Medical & Health Products",
        "Gardening Tools & Plants",
        "Software & Apps",
        "Smart Home Devices",
        "Travel Accessories",
        "Musical Instruments",
        "Art & Craft Supplies"
    ]



    return (
        <div className='Admin'>
            <h1 className='AdPheading'>Add Your Product</h1>
            <form onSubmit={addpro} action="" className='proForm'>
                <div className="f">
                    <label  className='form-label' htmlFor="">Name</label>
                    <input className='form-control' onChange={handle} value={data.name} type="text" name="name" id="" required />
                </div>
                <div className="f">
                    <label  className='form-label' htmlFor="">Category</label>
                    <select className='form-select' name="Category" value={data.Category}  onChange={handle} id="">
                        {product.map((item) => {
                            return (
                                 <option>{item}</option>
                                 )
                        })}

                    </select>
                </div>
                <div className="f">
                    <label  className='form-label' htmlFor="">Brand</label>
                    <input className='form-control' onChange={handle} value={data.Brand} type="text" name="Brand" id="" required />
                </div>
                <div className="f">
                    <label  className='form-label' htmlFor="">Price</label>
                    <input className='form-control' onChange={handle} value={data.price} type="number" name="price" id="" required />
                </div>
                <div className="f">
                    <label  className='form-label' htmlFor="">Description</label>
                    <input className='form-control' onChange={handle} value={data.Description} type="text" name="Description" id="" required />
                </div>
                <div className="f">
                    <label className='form-label' htmlFor="">Image-URL</label>
                    <input className='form-control' onChange={handle} value={data.ImageURL} type="url" name="ImageURL" id="" required />
                </div>
                <div className="f">
                    <label  className='form-label' htmlFor="">Stock</label>
                    <input className='form-control' onChange={handle} value={data.Stock} type="text" name="Stock" id="" required />
                </div>
                <div className="f">
                    <label  className='form-label' htmlFor="">Rating</label>
                    <input className='form-control' onChange={handle} value={data.Rating} type="number" name="Rating" id="" required />
                </div>
                <button className='btn btn-success'>Add Product</button>
            </form>
        </div>
    )
}

export default AddProduct
