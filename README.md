Express Expense Tracker

Overview

The Express Expense Tracker is a simple web application that allows users to log expenses, upload receipts, and view expense reports. Built with Node.js, Express, EJS, and Multer, this app supports file uploads, data storage, and basic reporting.

One of the planned improvements for this project is integrating Tesseract.js to process text from uploaded receipt images. This will allow users to choose between:
	1.	Manual Entry – Users input expense details manually (current functionality).
	2.	Automated Data Extraction – The system will process receipt images and extract transaction details using Optical Character Recognition (OCR).

/express-api
│── /data
│   ├── dates.js           # Stores monthly expense summaries
│   ├── receipts.js        # Stores receipt data
│   ├── totals.js          # Stores expense totals
│── /middleware
│   ├── process-image.js   # Image processing middleware
│   ├── receipt-upload.js  # Multer setup for file uploads
│── /node_modules
│── /public
│   ├── styles.css         # Global styling
│   ├── /upload-images     # Move uploaded images here
│── /routes
│   ├── create-expenses.js # Expense creation route
│   ├── expense-data.js    # Expense listing & reports
│   ├── index.js           # Home page route
│── /utilities
│   ├── error.js           # Error handling utilities
│── /views
│   ├── create-expense.ejs  # Expense form view
│   ├── dates.ejs           # Monthly report view
│   ├── expenses.ejs        # Expense list view
│   ├── index.ejs           # Home page view
│── .env
│── .gitignore
│── app.js                  # Main application file
│── package-lock.json
│── package.json
│── README.md


Get Started
If Node.js is not installed, download it from https://nodejs.org/.

Clone the Repository:
git clone https://github.com/meganjar/express-api.git cd express-expense-tracker

Install Dependencies:
npm install

Start the Server
Run the application with:
npx nodemon app.js

The server will start at:
http://localhost:3000

The app supports JPEG receipt uploads.