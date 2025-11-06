import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { toast } from 'react-toastify';
// import '../style/SeeProduct.css'
import '../style/UpdatProduct.css'
function UpdateProduct() {
    let para = useParams();

    const [product, setProduct] = useState({
        name: "",
        price: "",
        Category: "",
        Brand: "",
        Description: "",
        ImageURL: "",
        Stock: "",
        Rating: ""
    })

    useEffect(() => {
        axios.get(`http://localhost:1000/product/${para.id}`)
            .then((res) => {
                console.log(res);
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);

            })
    }, [])

    function handle(e) {
        const { name, value } = e.target;
        setProduct((prev) => ({
            ...prev,
            [name]: value
        }))

    }
    const Product = [
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

    function updateitem(e) {
        e.preventDefault();
        axios.put(`http://localhost:1001/product/${para.id}`, product)
            .then((res) => {
                toast.success("updated successfully");
            })
            .catch((err) => {
                toast.error("failed")
            })
    }
    return (
        <div className='UpdatFrom'>
            <h1 className='upHeading'>Update Your product</h1>
            <form action="" className='proForm'>
                <div className="f">
                    <label className='form-label' htmlFor="">Name</label>
                    <input className='form-control' onChange={handle} value={product.name} type="text" name="name" />
                </div>
                <div className="f">
                    <label className='form-label' htmlFor="">Category</label>
                    <select className='form-select' name="Category" value={product.Category} onChange={handle} id="">
                        {Product.map((item) => {
                            return (
                                <option>{item}</option>
                            )
                        })}

                    </select>
                </div>
                <div className="f">
                    <label className='form-label' htmlFor="">Brand</label>
                    <input className='form-control' onChange={handle} value={product.Brand} type="text" name="Brand" />
                </div>
                <div className="f">
                    <label className='form-label' htmlFor="">Price</label>
                    <input className='form-control' onChange={handle} value={product.price} type="number" name="price" />
                </div>
                <div className="f">
                    <label className='form-label' htmlFor="">Description</label>
                    <input className='form-control' onChange={handle} value={product.Description} type="text" name="Description" />
                </div>
                <div className="f">
                    <label className='form-label' htmlFor="">Image-URL</label>
                    <input className='form-control' onChange={handle} value={product.ImageURL} type="url" name="ImageURL" />
                </div>
                <div className="f">
                    <label className='form-label' htmlFor="">Stock</label>
                    <input className='form-control' onChange={handle} value={product.Stock} type="text" name="Stock" />
                </div>
                <div className="f">
                    <label className='form-label' htmlFor="">Rating</label>
                    <input className='form-control' style={{ color: product.Rating >= 4 ? "green" : "red" }} onChange={handle} value={product.Rating} type="number" name="Rating" />
                </div>
                <button className='btn btn-success' onClick={updateitem} >Update Product</button>
            </form>
        </div>
    )
}

export default UpdateProduct
