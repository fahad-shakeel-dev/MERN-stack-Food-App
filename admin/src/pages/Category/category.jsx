// import React, { useEffect, useState, useContext } from "react";
// import "./Categories.css";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { StoreContext } from "../../context/StoreContext";
// import { useNavigate } from "react-router-dom";

// const Categories = () => {
//   const navigate = useNavigate();
//   const { url, token, admin } = useContext(StoreContext);
//   const [categories, setCategories] = useState([]);
//   const [categoryMetadata, setCategoryMetadata] = useState([]);
//   const [newCategory, setNewCategory] = useState("");

//   const fetchCategories = async () => {
//     try {
//       console.log("Fetching categories with URL:", `${url}/api/food/categories`);
//       const response = await axios.get(`${url}/api/food/categories`, {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true,
//       });
//       console.log("Categories response:", response.data);
//       if (response.data.success) {
//         setCategories(response.data.data);
//         console.log("Categories fetched:", response.data.data);
//       } else {
//         toast.error(response.data.message || "Error fetching categories", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "error-toast",
//           style: { background: "#ff4d4d", color: "#fff" },
//         });
//       }
//     } catch (error) {
//       console.error("Fetch categories error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error fetching categories", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//     }
//   };

//   const fetchCategoryMetadata = async () => {
//     try {
//       console.log("Fetching category metadata with URL:", `${url}/api/category/list`);
//       const response = await axios.get(`${url}/api/category/list`, {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true,
//       });
//       console.log("Category metadata response:", response.data);
//       if (response.data.success) {
//         setCategoryMetadata(response.data.data);
//         console.log("Category metadata fetched:", response.data.data);
//       } else {
//         toast.error(response.data.message || "Error fetching category metadata", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "error-toast",
//           style: { background: "#ff4d4d", color: "#fff" },
//         });
//       }
//     } catch (error) {
//       console.error("Fetch category metadata error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error fetching category metadata", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//     }
//   };

//   const addCategory = async (e) => {
//     e.preventDefault();
//     try {
//       console.log("Adding category:", newCategory);
//       const response = await axios.post(
//         `${url}/api/category/add`,
//         { category: newCategory },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         }
//       );
//       console.log("Add category response:", response.data);
//       if (response.data.success) {
//         await fetchCategories();
//         await fetchCategoryMetadata();
//         setNewCategory("");
//         toast.success("Category added", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "success-toast",
//           style: { background: "#39e079", color: "#fff" },
//         });
//       } else {
//         toast.error(response.data.message || "Error adding category", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "error-toast",
//           style: { background: "#ff4d4d", color: "#fff" },
//         });
//       }
//     } catch (error) {
//       console.error("Add category error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error adding category", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//     }
//   };

//   const togglePopularCategory = async (category, currentStatus) => {
//     try {
//       console.log(`Toggling isPopular for category: ${category}, current status: ${currentStatus}`);
//       const response = await axios.post(
//         `${url}/api/category/toggle-popular`,
//         { category, isPopular: !currentStatus },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         }
//       );
//       console.log("Toggle popular category response:", response.data);
//       if (response.data.success) {
//         await fetchCategoryMetadata();
//         toast.success(`Category ${!currentStatus ? "marked as popular" : "unmarked as popular"}`, {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "success-toast",
//           style: { background: "#39e079", color: "#fff" },
//         });
//       } else {
//         toast.error(response.data.message || "Error toggling popular status", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "error-toast",
//           style: { background: "#ff4d4d", color: "#fff" },
//         });
//       }
//     } catch (error) {
//       console.error("Toggle popular category error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error toggling popular status", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//     }
//   };

//   useEffect(() => {
//     if (!admin || !token) {
//       console.log("No admin or token, redirecting to /");
//       toast.error("Please Login First", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//       navigate("/");
//     } else {
//       fetchCategories();
//       fetchCategoryMetadata();
//     }
//   }, [admin, token, navigate]);

//   return (
//     <div className="categories add flex-col">
//       <h2>Manage Categories</h2>
//       <form onSubmit={addCategory} className="category-form">
//         <input
//           type="text"
//           value={newCategory}
//           onChange={(e) => setNewCategory(e.target.value)}
//           placeholder="Enter new category"
//           required
//         />
//         <button type="submit">Add Category</button>
//       </form>
//       <div className="category-table">
//         <div className="category-table-format title">
//           <b>Category</b>
//           <b>Popular</b>
//         </div>
//         {categories.length === 0 ? (
//           <p>No categories found</p>
//         ) : (
//           categories.map((category, index) => {
//             const metadata = categoryMetadata.find((meta) => meta.category === category) || { isPopular: false };
//             return (
//               <div key={index} className="category-table-format">
//                 <p>{category}</p>
//                 <p
//                   onClick={() => togglePopularCategory(category, metadata.isPopular)}
//                   className="cursor"
//                 >
//                   {metadata.isPopular ? "🔥 Popular" : "❄ Not Popular"}
//                 </p>
//               </div>
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// };

// export default Categories;







// import React, { useEffect, useState, useContext } from "react";
// import "./Categories.css";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { StoreContext } from "../../context/StoreContext";
// import { useNavigate } from "react-router-dom";

// const Categories = () => {
//   const navigate = useNavigate();
//   const { url, token, admin } = useContext(StoreContext);
//   const [categories, setCategories] = useState([]);
//   const [categoryMetadata, setCategoryMetadata] = useState([]);
//   const [newCategory, setNewCategory] = useState("");
//   const [editCategory, setEditCategory] = useState({ category: "", newName: "" });

//   const fetchCategories = async () => {
//     try {
//       console.log("Fetching category metadata with URL:", `${url}/api/category/list`);
//       const response = await axios.get(`${url}/api/category/list`, {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true,
//       });
//       console.log("Category metadata response:", response.data);
//       if (response.data.success) {
//         const categories = response.data.data.map((meta) => meta.category);
//         setCategories(categories);
//         setCategoryMetadata(response.data.data);
//         console.log("Categories fetched:", categories);
//       } else {
//         toast.error(response.data.message || "Error fetching categories", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "error-toast",
//           style: { background: "#ff4d4d", color: "#fff" },
//         });
//       }
//     } catch (error) {
//       console.error("Fetch categories error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error fetching categories", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//     }
//   };

//   const addCategory = async (e) => {
//     e.preventDefault();
//     try {
//       console.log("Adding category:", newCategory);
//       const response = await axios.post(
//         `${url}/api/category/add`,
//         { category: newCategory },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         }
//       );
//       console.log("Add category response:", response.data);
//       if (response.data.success) {
//         await fetchCategories();
//         setNewCategory("");
//         toast.success("Category added", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "success-toast",
//           style: { background: "#39e079", color: "#fff" },
//         });
//       } else {
//         toast.error(response.data.message || "Error adding category", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "error-toast",
//           style: { background: "#ff4d4d", color: "#fff" },
//         });
//       }
//     } catch (error) {
//       console.error("Add category error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error adding category", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//     }
//   };

//   const updateCategory = async (oldCategory) => {
//     try {
//       console.log(`Updating category: ${oldCategory} to ${editCategory.newName}`);
//       const response = await axios.put(
//         `${url}/api/category/update`,
//         { oldCategory, newCategory: editCategory.newName },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         }
//       );
//       console.log("Update category response:", response.data);
//       if (response.data.success) {
//         await fetchCategories();
//         setEditCategory({ category: "", newName: "" });
//         toast.success("Category updated", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "success-toast",
//           style: { background: "#39e079", color: "#fff" },
//         });
//       } else {
//         toast.error(response.data.message || "Error updating category", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "error-toast",
//           style: { background: "#ff4d4d", color: "#fff" },
//         });
//       }
//     } catch (error) {
//       console.error("Update category error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error updating category", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//     }
//   };

//   const deleteCategory = async (category) => {
//     try {
//       console.log("Deleting category:", category);
//       const response = await axios.delete(
//         `${url}/api/category/delete`,
//         {
//           data: { category },
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         }
//       );
//       console.log("Delete category response:", response.data);
//       if (response.data.success) {
//         await fetchCategories();
//         toast.success("Category deleted", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "success-toast",
//           style: { background: "#39e079", color: "#fff" },
//         });
//       } else {
//         toast.error(response.data.message || "Error deleting category", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "error-toast",
//           style: { background: "#ff4d4d", color: "#fff" },
//         });
//       }
//     } catch (error) {
//       console.error("Delete category error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error deleting category", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//     }
//   };

//   const togglePopularCategory = async (category, currentStatus) => {
//     try {
//       console.log(`Toggling isPopular for category: ${category}, current status: ${currentStatus}`);
//       const response = await axios.post(
//         `${url}/api/category/toggle-popular`,
//         { category, isPopular: !currentStatus },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         }
//       );
//       console.log("Toggle popular category response:", response.data);
//       if (response.data.success) {
//         await fetchCategories();
//         toast.success(`Category ${!currentStatus ? "marked as popular" : "unmarked as popular"}`, {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "success-toast",
//           style: { background: "#39e079", color: "#fff" },
//         });
//       } else {
//         toast.error(response.data.message || "Error toggling popular status", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "error-toast",
//           style: { background: "#ff4d4d", color: "#fff" },
//         });
//       }
//     } catch (error) {
//       console.error("Toggle popular category error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error toggling popular status", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//     }
//   };

//   useEffect(() => {
//     if (!admin || !token) {
//       console.log("No admin or token, redirecting to /");
//       toast.error("Please Login First", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//       navigate("/");
//     } else {
//       fetchCategories();
//     }
//   }, [admin, token, navigate]);

//   return (
//     <div className="categories add flex-col">
//       <h2>Manage Categories</h2>
//       <form onSubmit={addCategory} className="category-form">
//         <input
//           type="text"
//           value={newCategory}
//           onChange={(e) => setNewCategory(e.target.value)}
//           placeholder="Enter new category"
//           required
//         />
//         <button type="submit">Add Category</button>
//       </form>
//       <div className="category-table">
//         <div className="category-table-format title">
//           <b>Category</b>
//           <b>Popular</b>
//           <b>Actions</b>
//         </div>
//         {categories.length === 0 ? (
//           <p>No categories found</p>
//         ) : (
//           categories.map((category, index) => {
//             const metadata = categoryMetadata.find((meta) => meta.category === category) || { isPopular: false };
//             const isEditing = editCategory.category === category;
//             return (
//               <div key={index} className="category-table-format">
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     value={editCategory.newName}
//                     onChange={(e) =>
//                       setEditCategory({ ...editCategory, newName: e.target.value })
//                     }
//                     placeholder="New category name"
//                   />
//                 ) : (
//                   <p>{category}</p>
//                 )}
//                 <p
//                   onClick={() => togglePopularCategory(category, metadata.isPopular)}
//                   className="cursor"
//                 >
//                   {metadata.isPopular ? "🔥 Popular" : "❄ Not Popular"}
//                 </p>
//                 <div className="actions">
//                   {isEditing ? (
//                     <>
//                       <button
//                         onClick={() => updateCategory(category)}
//                         disabled={!editCategory.newName}
//                       >
//                         Save
//                       </button>
//                       <button
//                         onClick={() => setEditCategory({ category: "", newName: "" })}
//                       >
//                         Cancel
//                       </button>
//                     </>
//                   ) : (
//                     <>
//                       <button
//                         onClick={() =>
//                           setEditCategory({ category, newName: category })
//                         }
//                       >
//                         Edit
//                       </button>
//                       <button onClick={() => deleteCategory(category)}>
//                         Delete
//                       </button>
//                     </>
//                   )}
//                 </div>
//               </div>
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// };

// export default Categories;















import { useEffect, useState, useContext } from "react"
import "./Categories.css"
import axios from "axios"
import { toast } from "react-toastify"
import { StoreContext } from "../../context/StoreContext"
import { useNavigate } from "react-router-dom"

const Categories = () => {
  const navigate = useNavigate()
  const { url, token, admin } = useContext(StoreContext)
  const [categories, setCategories] = useState([])
  const [categoryMetadata, setCategoryMetadata] = useState([])
  const [newCategory, setNewCategory] = useState("")
  const [editCategory, setEditCategory] = useState({ category: "", newName: "" })

  const fetchCategories = async () => {
    try {
      console.log("Fetching category metadata with URL:", `${url}/api/category/list`)
      const response = await axios.get(`${url}/api/category/list`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      })
      console.log("Category metadata response:", response.data)
      if (response.data.success) {
        const categories = response.data.data.map((meta) => meta.category)
        setCategories(categories)
        setCategoryMetadata(response.data.data)
        console.log("Categories fetched:", categories)
      } else {
        toast.error(response.data.message || "Error fetching categories", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "error-toast",
          style: { background: "#ff4d4d", color: "#fff" },
        })
      }
    } catch (error) {
      console.error("Fetch categories error:", error.response?.data || error.message)
      toast.error(error.response?.data?.message || "Error fetching categories", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "error-toast",
        style: { background: "#ff4d4d", color: "#fff" },
      })
    }
  }

  const addCategory = async (e) => {
    e.preventDefault()
    try {
      console.log("Adding category:", newCategory)
      const response = await axios.post(
        `${url}/api/category/add`,
        { category: newCategory },
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        },
      )
      console.log("Add category response:", response.data)
      if (response.data.success) {
        await fetchCategories()
        setNewCategory("")
        toast.success("Category added", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "success-toast",
          style: { background: "#39e079", color: "#fff" },
        })
      } else {
        toast.error(response.data.message || "Error adding category", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "error-toast",
          style: { background: "#ff4d4d", color: "#fff" },
        })
      }
    } catch (error) {
      console.error("Add category error:", error.response?.data || error.message)
      toast.error(error.response?.data?.message || "Error adding category", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "error-toast",
        style: { background: "#ff4d4d", color: "#fff" },
      })
    }
  }

  const updateCategory = async (oldCategory) => {
    try {
      console.log(`Updating category: ${oldCategory} to ${editCategory.newName}`)
      const response = await axios.put(
        `${url}/api/category/update`,
        { oldCategory, newCategory: editCategory.newName },
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        },
      )
      console.log("Update category response:", response.data)
      if (response.data.success) {
        await fetchCategories()
        setEditCategory({ category: "", newName: "" })
        toast.success("Category updated", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "success-toast",
          style: { background: "#39e079", color: "#fff" },
        })
      } else {
        toast.error(response.data.message || "Error updating category", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "error-toast",
          style: { background: "#ff4d4d", color: "#fff" },
        })
      }
    } catch (error) {
      console.error("Update category error:", error.response?.data || error.message)
      toast.error(error.response?.data?.message || "Error updating category", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "error-toast",
        style: { background: "#ff4d4d", color: "#fff" },
      })
    }
  }

  const deleteCategory = async (category) => {
    try {
      console.log("Deleting category:", category)
      const response = await axios.delete(`${url}/api/category/delete`, {
        data: { category },
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      })
      console.log("Delete category response:", response.data)
      if (response.data.success) {
        await fetchCategories()
        toast.success("Category deleted", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "success-toast",
          style: { background: "#39e079", color: "#fff" },
        })
      } else {
        toast.error(response.data.message || "Error deleting category", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "error-toast",
          style: { background: "#ff4d4d", color: "#fff" },
        })
      }
    } catch (error) {
      console.error("Delete category error:", error.response?.data || error.message)
      toast.error(error.response?.data?.message || "Error deleting category", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "error-toast",
        style: { background: "#ff4d4d", color: "#fff" },
      })
    }
  }

  const togglePopularCategory = async (category, currentStatus) => {
    try {
      console.log(`Toggling isPopular for category: ${category}, current status: ${currentStatus}`)
      const response = await axios.post(
        `${url}/api/category/toggle-popular`,
        { category, isPopular: !currentStatus },
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        },
      )
      console.log("Toggle popular category response:", response.data)
      if (response.data.success) {
        await fetchCategories()
        toast.success(`Category ${!currentStatus ? "marked as popular" : "unmarked as popular"}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "success-toast",
          style: { background: "#39e079", color: "#fff" },
        })
      } else {
        toast.error(response.data.message || "Error toggling popular status", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "error-toast",
          style: { background: "#ff4d4d", color: "#fff" },
        })
      }
    } catch (error) {
      console.error("Toggle popular category error:", error.response?.data || error.message)
      toast.error(error.response?.data?.message || "Error toggling popular status", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "error-toast",
        style: { background: "#ff4d4d", color: "#fff" },
      })
    }
  }

  useEffect(() => {
    if (!admin || !token) {
      console.log("No admin or token, redirecting to /")
      toast.error("Please Login First", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "error-toast",
        style: { background: "#ff4d4d", color: "#fff" },
      })
      navigate("/")
    } else {
      fetchCategories()
    }
  }, [admin, token, navigate])

  return (
    <div className="categories">
      <div className="categories-header">
        <h1>Categories</h1>
        <p>Manage your food categories and their popularity status</p>
      </div>

      <div className="categories-container">
        <div className="category-form-section">
          <h3>Add New Category</h3>
          <form onSubmit={addCategory} className="category-form">
            <div className="form-group">
              <label>Category Name</label>
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="Enter new category"
                required
              />
            </div>
            <button type="submit">Add Category</button>
          </form>
        </div>

        <div className="categories-table-section">
          <div className="categories-table-header">
            <h3>All Categories</h3>
          </div>

          <div className="category-table">
            <div className="category-table-header">
              <div>Category</div>
              <div>Popular Status</div>
              <div>Actions</div>
            </div>

            {categories.length === 0 ? (
              <div className="no-categories">No categories found</div>
            ) : (
              categories.map((category, index) => {
                const metadata = categoryMetadata.find((meta) => meta.category === category) || {
                  isPopular: false,
                }
                const isEditing = editCategory.category === category

                return (
                  <div key={index} className="category-table-row">
                    <div className="category-name">
                      {isEditing ? (
                        <input
                          type="text"
                          value={editCategory.newName}
                          onChange={(e) => setEditCategory({ ...editCategory, newName: e.target.value })}
                          placeholder="New category name"
                        />
                      ) : (
                        <p>{category}</p>
                      )}
                    </div>

                    <div
                      onClick={() => togglePopularCategory(category, metadata.isPopular)}
                      className={`popular-status ${metadata.isPopular ? "popular" : "not-popular"}`}
                    >
                      {metadata.isPopular ? "🔥 Popular" : "❄ Not Popular"}
                    </div>

                    <div className="category-actions">
                      {isEditing ? (
                        <>
                          <button
                            onClick={() => updateCategory(category)}
                            disabled={!editCategory.newName}
                            className="action-btn save"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setEditCategory({ category: "", newName: "" })}
                            className="action-btn cancel"
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => setEditCategory({ category, newName: category })}
                            className="action-btn edit"
                          >
                            Edit
                          </button>
                          <button onClick={() => deleteCategory(category)} className="action-btn delete">
                            Delete
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
