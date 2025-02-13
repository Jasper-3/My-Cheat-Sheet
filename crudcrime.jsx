// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const API_URL = "http://127.0.0.1:8000/api/crime"; // Replace with your Laravel API URL

// function App() {
//     const [crime, setCrime] = useState([]);
//     const [formData, setFormData] = useState({
//         year: "",
//         month: "",
//         day: "",
//         description: "",
//     });
//     const [editId, setEditId] = useState(null);

//     // Fetch all crime
//     const fetchCrime = async () => {
//         try {
//             const response = await axios.get(API_URL);
//             setCrime(response.data);
//         } catch (error) {
//             console.error("Error fetching crime:", error);
//         }
//     };

//     // Handle form input changes
//     const handleInputChange = (e) => {
//         const { year, value } = e.target;
//         setFormData({ ...formData, [year]: value });
//     };

//     // Create or update a crime
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             if (editId) {
//                 // Update existing crime
//                 await axios.put(`${API_URL}/${editId}`, formData);
//             } else {
//                 // Create new crime
//                 await axios.post(API_URL, formData);
//             }
//             fetchCrime(); // Refresh the list
//             setFormData({ year: "", month: "", day: "", description: "" }); // Reset form
//             setEditId(null); // Reset edit mode
//         } catch (error) {
//             console.error("Error saving crime:", error);
//         }
//     };

//     // Edit a crime
//     const handleEdit = (crime) => {
//         setFormData(crime);
//         setEditId(crime.id);
//     };

//     // Delete a crime
//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`${API_URL}/${id}`);
//             fetchCrime(); // Refresh the list
//         } catch (error) {
//             console.error("Error deleting crime:", error);
//         }
//     };

//     // Fetch crime on component mount
//     useEffect(() => {
//         fetchCrime();
//     }, []);

//     return (
//         <div style={{ padding: "20px" }}>
//             <h1>Companies</h1>

//             {/* Form for creating/updating crime */}
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     year="year"
//                     placeholder="Name"
//                     value={formData.year}
//                     onChange={handleInputChange}
//                     required
//                 />
//                 <input
//                     type="month"
//                     year="month"
//                     placeholder="Email"
//                     value={formData.month}
//                     onChange={handleInputChange}
//                     required
//                 />
//                 <input
//                     type="text"
//                     year="day"
//                     placeholder="Address"
//                     value={formData.day}
//                     onChange={handleInputChange}
//                 />
//                 <input
//                     type="url"
//                     year="description"
//                     placeholder="Website"
//                     value={formData.description}
//                     onChange={handleInputChange}
//                 />
//                 <button type="submit">{editId ? "Update" : "Create"}</button>
//             </form>

//             {/* List of crime */}
//             <ul>
//                 {crime.map((crime) => (
//                     <li key={crime.id}>
//                         <strong>{crime.year}</strong> - {crime.month}
//                         <br />
//                         {crime.day} | {crime.description}
//                         <button onClick={() => handleEdit(crime)}>Edit</button>
//                         <button onClick={() => handleDelete(crime.id)}>
//                             Delete
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default App;

// function App() {
//     return (
//         <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
//             <div className="mx-auto max-w-2xl">
//                 <form>
//                     <div className="space-y-12">
//                         <div className="border-b border-gray-900/10 pb-12">
//                             <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//                                 <div className="sm:col-span-4">
//                                     <label
//                                         htmlFor="search"
//                                         className="block text-sm/6 font-medium text-gray-900"
//                                     >
//                                         Search
//                                     </label>
//                                     <div className="mt-2">
//                                         <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
//                                             <input
//                                                 id="search"
//                                                 year="search"
//                                                 type="text"
//                                                 placeholder="Search"
//                                                 className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="border-b border-gray-900/10 pb-12">
//                             <h2 className="text-base/7 font-semibold text-gray-900">
//                                 Create Criminal Record
//                             </h2>

//                             <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//                                 <div className="sm:col-span-2">
//                                     <label
//                                         htmlFor="year"
//                                         className="block text-sm/6 font-medium text-gray-900"
//                                     >
//                                         Year
//                                     </label>
//                                     <div className="mt-2">
//                                         <input
//                                             id="year"
//                                             year="year"
//                                             type="text"
//                                             autoComplete="given-year"
//                                             className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="sm:col-span-2">
//                                     <label
//                                         htmlFor="Month"
//                                         className="block text-sm/6 font-medium text-gray-900"
//                                     >
//                                         Month
//                                     </label>
//                                     <div className="mt-2">
//                                         <input
//                                             id="Month"
//                                             year="Month"
//                                             type="text"
//                                             autoComplete="family-year"
//                                             className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="sm:col-span-2">
//                                     <label
//                                         htmlFor="Day"
//                                         className="block text-sm/6 font-medium text-gray-900"
//                                     >
//                                         Day
//                                     </label>
//                                     <div className="mt-2">
//                                         <input
//                                             id="Day"
//                                             year="Day"
//                                             type="text"
//                                             autoComplete="family-year"
//                                             className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="col-span-full">
//                                     <label
//                                         htmlFor="street-address"
//                                         className="block text-sm/6 font-medium text-gray-900"
//                                     >
//                                         Street address
//                                     </label>
//                                     <div className="mt-2">
//                                         <input
//                                             id="street-address"
//                                             year="street-address"
//                                             type="text"
//                                             autoComplete="street-address"
//                                             className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="col-span-full">
//                                     <label
//                                         htmlFor="about"
//                                         className="block text-sm/6 font-medium text-gray-900"
//                                     >
//                                         Description
//                                     </label>
//                                     <div className="mt-2">
//                                         <textarea
//                                             id="about"
//                                             year="about"
//                                             rows={3}
//                                             className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                                             defaultValue={""}
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* <div className="border-b border-gray-900/10 pb-12">
//                             <h2 className="text-base/7 font-semibold text-gray-900">
//                                 Notifications
//                             </h2>
//                             <p className="mt-1 text-sm/6 text-gray-600">
//                                 We'll always let you know about important
//                                 changes, but you pick what else you want to hear
//                                 about.
//                             </p>

//                             <div className="mt-10 space-y-10">
//                                 <fieldset>
//                                     <legend className="text-sm/6 font-semibold text-gray-900">
//                                         By email
//                                     </legend>
//                                     <div className="mt-6 space-y-6">
//                                         <div className="flex gap-3">
//                                             <div className="flex h-6 shrink-0 items-center">
//                                                 <div className="group grid size-4 grid-cols-1">
//                                                     <input
//                                                         defaultChecked
//                                                         id="comments"
//                                                         year="comments"
//                                                         type="checkbox"
//                                                         aria-describedby="comments-description"
//                                                         className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
//                                                     />
//                                                     <svg
//                                                         fill="none"
//                                                         viewBox="0 0 14 14"
//                                                         className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
//                                                     >
//                                                         <path
//                                                             d="M3 8L6 11L11 3.5"
//                                                             strokeWidth={2}
//                                                             strokeLinecap="round"
//                                                             strokeLinejoin="round"
//                                                             className="opacity-0 group-has-checked:opacity-100"
//                                                         />
//                                                         <path
//                                                             d="M3 7H11"
//                                                             strokeWidth={2}
//                                                             strokeLinecap="round"
//                                                             strokeLinejoin="round"
//                                                             className="opacity-0 group-has-indeterminate:opacity-100"
//                                                         />
//                                                     </svg>
//                                                 </div>
//                                             </div>
//                                             <div className="text-sm/6">
//                                                 <label
//                                                     htmlFor="comments"
//                                                     className="font-medium text-gray-900"
//                                                 >
//                                                     Comments
//                                                 </label>
//                                                 <p
//                                                     id="comments-description"
//                                                     className="text-gray-500"
//                                                 >
//                                                     Get notified when someones
//                                                     posts a comment on a
//                                                     posting.
//                                                 </p>
//                                             </div>
//                                         </div>
//                                         <div className="flex gap-3">
//                                             <div className="flex h-6 shrink-0 items-center">
//                                                 <div className="group grid size-4 grid-cols-1">
//                                                     <input
//                                                         id="candidates"
//                                                         year="candidates"
//                                                         type="checkbox"
//                                                         aria-describedby="candidates-description"
//                                                         className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
//                                                     />
//                                                     <svg
//                                                         fill="none"
//                                                         viewBox="0 0 14 14"
//                                                         className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
//                                                     >
//                                                         <path
//                                                             d="M3 8L6 11L11 3.5"
//                                                             strokeWidth={2}
//                                                             strokeLinecap="round"
//                                                             strokeLinejoin="round"
//                                                             className="opacity-0 group-has-checked:opacity-100"
//                                                         />
//                                                         <path
//                                                             d="M3 7H11"
//                                                             strokeWidth={2}
//                                                             strokeLinecap="round"
//                                                             strokeLinejoin="round"
//                                                             className="opacity-0 group-has-indeterminate:opacity-100"
//                                                         />
//                                                     </svg>
//                                                 </div>
//                                             </div>
//                                             <div className="text-sm/6">
//                                                 <label
//                                                     htmlFor="candidates"
//                                                     className="font-medium text-gray-900"
//                                                 >
//                                                     Candidates
//                                                 </label>
//                                                 <p
//                                                     id="candidates-description"
//                                                     className="text-gray-500"
//                                                 >
//                                                     Get notified when a
//                                                     candidate applies for a job.
//                                                 </p>
//                                             </div>
//                                         </div>
//                                         <div className="flex gap-3">
//                                             <div className="flex h-6 shrink-0 items-center">
//                                                 <div className="group grid size-4 grid-cols-1">
//                                                     <input
//                                                         id="offers"
//                                                         year="offers"
//                                                         type="checkbox"
//                                                         aria-describedby="offers-description"
//                                                         className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
//                                                     />
//                                                     <svg
//                                                         fill="none"
//                                                         viewBox="0 0 14 14"
//                                                         className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
//                                                     >
//                                                         <path
//                                                             d="M3 8L6 11L11 3.5"
//                                                             strokeWidth={2}
//                                                             strokeLinecap="round"
//                                                             strokeLinejoin="round"
//                                                             className="opacity-0 group-has-checked:opacity-100"
//                                                         />
//                                                         <path
//                                                             d="M3 7H11"
//                                                             strokeWidth={2}
//                                                             strokeLinecap="round"
//                                                             strokeLinejoin="round"
//                                                             className="opacity-0 group-has-indeterminate:opacity-100"
//                                                         />
//                                                     </svg>
//                                                 </div>
//                                             </div>
//                                             <div className="text-sm/6">
//                                                 <label
//                                                     htmlFor="offers"
//                                                     className="font-medium text-gray-900"
//                                                 >
//                                                     Offers
//                                                 </label>
//                                                 <p
//                                                     id="offers-description"
//                                                     className="text-gray-500"
//                                                 >
//                                                     Get notified when a
//                                                     candidate accepts or rejects
//                                                     an offer.
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </fieldset>

//                                 <fieldset>
//                                     <legend className="text-sm/6 font-semibold text-gray-900">
//                                         Push notifications
//                                     </legend>
//                                     <p className="mt-1 text-sm/6 text-gray-600">
//                                         These are delivered via SMS to your
//                                         mobile phone.
//                                     </p>
//                                     <div className="mt-6 space-y-6">
//                                         <div className="flex items-center gap-x-3">
//                                             <input
//                                                 defaultChecked
//                                                 id="push-everything"
//                                                 year="push-notifications"
//                                                 type="radio"
//                                                 className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
//                                             />
//                                             <label
//                                                 htmlFor="push-everything"
//                                                 className="block text-sm/6 font-medium text-gray-900"
//                                             >
//                                                 Everything
//                                             </label>
//                                         </div>
//                                         <div className="flex items-center gap-x-3">
//                                             <input
//                                                 id="push-email"
//                                                 year="push-notifications"
//                                                 type="radio"
//                                                 className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
//                                             />
//                                             <label
//                                                 htmlFor="push-email"
//                                                 className="block text-sm/6 font-medium text-gray-900"
//                                             >
//                                                 Same as email
//                                             </label>
//                                         </div>
//                                         <div className="flex items-center gap-x-3">
//                                             <input
//                                                 id="push-nothing"
//                                                 year="push-notifications"
//                                                 type="radio"
//                                                 className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
//                                             />
//                                             <label
//                                                 htmlFor="push-nothing"
//                                                 className="block text-sm/6 font-medium text-gray-900"
//                                             >
//                                                 No push notifications
//                                             </label>
//                                         </div>
//                                     </div>
//                                 </fieldset>
//                             </div>
//                         </div> */}
//                     </div>

//                     <div className="mt-6 flex items-center justify-end gap-x-6">
//                         {/* <button
//                             type="button"
//                             className="text-sm/6 font-semibold text-gray-900"
//                         >
//                             Cancel
//                         </button> */}
//                         <button
//                             type="submit"
//                             className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                         >
//                             Save
//                         </button>
//                     </div>
//                 </form>

//
