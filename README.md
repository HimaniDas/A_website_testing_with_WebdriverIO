# A Website Testing with WebdriverIO

Welcome to the A Website Testing with WebdriverIO project!  
This repository contains automated tests for a website using WebdriverIO, a powerful automation test framework for Node.js applications.  
It also integrates Allure Reporter for generating beautiful test reports.

## 🚀 Project Setup

### Prerequisites
Make sure you have the following installed:
- Node.js 
- npm or yarn
- A code editor like VS Code

## 🛠 Installation

1. Clone the repository:
```bash
git clone https://github.com/HimaniDas/A_website_testing_with_WebdriverIO.git
cd A_website_testing_with_WebdriverIO
```
2. Install dependencies:
```bash
npm install
```
## ⚙️ Running the Tests
To execute the test cases, run:
```
bash
npx wdio run wdio.conf.js
```
## 📊 Generating Allure Reports
This project uses Allure Reporter to generate interactive and detailed test reports.

Steps:
1. Run the tests:
```
bash
npx wdio run wdio.conf.js
```
2 .Generate the Allure report:
```
bash
allure generate allure-results --clean -o allure-report
```
3. Open the Allure report:
```
bash
allure open allure-report
```
## 📁 Project Structure
A_website_testing_with_WebdriverIO/

│

├── specs/                # Test specifications

├── test/                 # Test files or helpers

├── allure-results/       # Raw test results (auto-generated)

├── allure-report/        # HTML reports (auto-generated)

├── wdio.conf.js          # WebdriverIO configuration

├── package.json          # Project metadata and dependencies

└── .gitignore            # Files/folders to be ignored by Git

## 📚 Technologies Used
1. WebdriverIO

2. Mocha

3. Allure Reporter

4. Node.js

## 🙌 Acknowledgements
1. WebdriverIO Documentation

2. Allure Framework
