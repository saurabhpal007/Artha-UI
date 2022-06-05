import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';


const Greeter = () => {    
   return (

    <div className="container flex flex-col justify-center p-4 mx-auto">  
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
	<form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-large text-2xl">Add Brand Information</p>
				<p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full">
					<label for="brandname" className="text-sm">Brand Name</label>
					<input id="brandname" type="text" placeholder="Brand Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-400 dark:border-gray-700 dark:text-gray-900" />
				</div>				
				<div className="col-span-full ">
					<label for="brandoverview" className="text-sm">Brand Overview</label>
					<input id="brandoverview" type="text" placeholder="Brand Overview" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full">
					<label for="branddescription" className="text-sm">Brand Description</label>
					<input id="branddescription" type="text" placeholder="Brand Description" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-400 dark:border-gray-700 dark:text-gray-900" />
				</div>		
            <div className="col-span-full space-y-2">
					<label for="bio" className="text-sm">Brand Image</label>
					<div className="flex items-center space-x-8 ">
						<img src="https://source.unsplash.com/30x30/?random" alt="" className="w-20 h-20 rounded-full dark:bg-gray-500 dark:bg-gray-700" />
						<button type="button" className="px-4 py-2 border rounded-md dark:border-gray-100">Add Brand Image</button>
					</div>
				</div>		
			</div>
		</fieldset>		
	</form>
</section>
</div>
   );
};
export default Greeter;