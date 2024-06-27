# YouTube Video Analytics Chart

This project is a React application that displays YouTube video analytics data using Chart.js. The chart includes features like zooming, tooltips, and custom legend label shapes.

## Features

- Line chart displaying YouTube video views and likes.
- Zoom functionality.
- Customizable timeframes for data display (Last Week, Last Month, Last Year, All Time).
- Tooltips displaying data values on hover.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later) or yarn (v1.22 or later)

## Getting Started

Follow these instructions to set up and run the project locally.

### Clone the Repository

```bash
git clone https://github.com/Divyamsi2808/youtube-analytics-chart.git
cd youtube-analytics-chart
```
### Install Dependencies
#### Using npm:
```bash
npm install
```
#### Using npm:
```bash
yarn install
```
### Run the Project
#### Using npm:
```bash
npm start
```
#### Using yarn:
```bash
npm start
```

## Project Structure

```youtube-analytics-chart/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │    ├── chart 
|   │    │      ├── index.js
|   │    │      └── index.css 
|   │    ├──timeframe
|   │           ├── index.js
|   │           └── index.css
│   ├──data
|   |    └── sampleData.json
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```