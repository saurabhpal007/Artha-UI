import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';


const BrandPage = () => {    
   return (

        <div>            
            <div className="dark:bg-gray-800 dark:text-gray-50 ">
	<div className="container grid grid-cols-12 mx-auto dark:bg-gray-900">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Netflix-new-icon.png/800px-Netflix-new-icon.png" alt="" className="object-cover object-center lg:p-10 lg:col-span-4 w-50 rounded-t-md h-50 " />
		<div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">

			
			<h1 className="text-7xl font-semibold">Netflix</h1>            
			<p className=" text-2xl flex-1 pt-2">Netflix places itself as a platform that has completely revolutionized the movie experience.</p>


            <div className="flex justify-start">
				<span className="px-2 py-1 lg:mt-10 text-xs rounded-full dark:bg-green-400 dark:text-gray-900">Brand Description</span>
			</div>
			<p className="flex-1 pt-2">Netflix places itself as a platform that has completely revolutionized the movie experience.</p>
            				
		</div>
	</div>

    <div className="flex flex-col justify-center p-3 mx-auto">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
    <div className="relative flex flex-col items-center lg:m-10 max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 dark:bg-gray-900 dark:text-gray-100">
	<button className="absolute top-2 right-2">		
	</button>	
	<h2 className="text-2xl font-semibold leading-tight tracking-wide">Greeter.io</h2>
	<p className="flex-1 text-center dark:text-gray-400">Greeter.io is an App to integrate any tesamony into your NFT assets</p>
	<button type="button" className="px-8 py-3 font-semibold rounded-full dark:bg-green-400 dark:text-gray-900">Add App</button>
</div>

<div className="relative flex flex-col items-center lg:m-10 max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 dark:bg-gray-900 dark:text-gray-100">
	<button className="absolute top-2 right-2">		
	</button>	
	<h2 className="text-2xl font-semibold leading-tight tracking-wide">Greeter.io</h2>
	<p className="flex-1 text-center dark:text-gray-400">Greeter.io is an App to integrate any tesamony into your NFT assets</p>
	<button type="button" className="px-8 py-3 font-semibold rounded-full dark:bg-green-400 dark:text-gray-900">Add App</button>
</div>

<div className="relative flex flex-col items-center lg:m-10 max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 dark:bg-gray-900 dark:text-gray-100">
	<button className="absolute top-2 right-2">		
	</button>	
	<h2 className="text-2xl font-semibold leading-tight tracking-wide">Greeter.io</h2>
	<p className="flex-1 text-center dark:text-gray-400">Greeter.io is an App to integrate any tesamony into your NFT assets</p>
	<button type="button" className="px-8 py-3 font-semibold rounded-full dark:bg-green-400 dark:text-gray-900">Add App</button>
</div>

</div>
</div>


</div>
        </div>
   );
};
export default BrandPage;