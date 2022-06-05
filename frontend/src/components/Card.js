import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';


const Card = () => {    
   return (

        <div class="grid place-items-center h-screen grid grid-cols-3">
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
	<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Netflix-new-icon.png/800px-Netflix-new-icon.png" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">Netflix</h2>
			<p className="dark:text-gray-100">Netflix places itself as a platform that has completely revolutionized the movie experience. </p>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-green-400 dark:text-gray-900">See Assets</button>
	</div>
</div>
<div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
	<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Netflix-new-icon.png/800px-Netflix-new-icon.png" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">Netflix</h2>
			<p className="dark:text-gray-100">Netflix places itself as a platform that has completely revolutionized the movie experience. </p>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-green-400 dark:text-gray-900">See Assets</button>
	</div>
</div>
<div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
	<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Netflix-new-icon.png/800px-Netflix-new-icon.png" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">Netflix</h2>
			<p className="dark:text-gray-100">Netflix places itself as a platform that has completely revolutionized the movie experience. </p>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-green-400 dark:text-gray-900">See Assets</button>
	</div>
</div>
<div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
	<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Netflix-new-icon.png/800px-Netflix-new-icon.png" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">Netflix</h2>
			<p className="dark:text-gray-100">Netflix places itself as a platform that has completely revolutionized the movie experience. </p>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-green-400 dark:text-gray-900">See Assets</button>
	</div>
</div>
        
        </div>
   );
};
export default Card;