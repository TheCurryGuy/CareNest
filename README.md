
# CareNest V1.0

**CareNest** is a health-focused platform designed to offer users various health management tools in a React single-page application (SPA). This project includes multiple features that empower users to manage their well-being with tools like a personal AI Assistant, BMI calculator, medication reminders, and more. The app uses Context API for efficient state management, making it easy to access specific features selectively across the application.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **AI Assistant**: Dr. Chloe: Say hello to Dr. Chloe, your cheerful AI companion and health expert! Is always ready to help. Whether you need advice on a stubborn cough or a tricky health choice, Dr. Chloe is here to support your wellness journey with a smile.
- **TaskBoard**: Allows users to store and organize tasks with descriptions and deadlines, helping them stay on top of important activities
- **Sidebar Navigation**: Permanent sidebar with buttons for accessing key features such as "My Posts," "Todo App," "BMI Calculator," "Stopwatch," and "Medication Reminder."
- **Dynamic BMI Calculator**: Calculate BMI and keep a history of past records, including the date, stored using local storage.
- **Medication Reminder**: Add and manage medication reminders with statuses like 'Required to take,' 'Have Taken,' and 'Will Take.'
- **PassVault**: Securely store social credentials with encryption using CryptoJS, including view and delete options.

## Installation

To get started with **CareNest**, clone the repository and install the dependencies:

```bash
git clone https://github.com/TheCurryGuy/CareNest.git
cd CareNest
npm install
```

## Usage

1. **Run the Development Server**  
   After installing the dependencies, start the development server:

   ```bash
   npm start
   ```

   The app will be available on `http://localhost:3000`.

2. **Access Features**  
   Navigate through the sidebar to access various features of the app, such as creating posts, setting BMI calculations, or managing medication reminders.

## Project Structure

```
CareNest/
├── public/
├── src/
│   ├── components/
│   │   ├── Home/
│   │   ├── AI Assistant/
│   │   ├── Todo/
│   │   ├── BMI Calculator/
│   │   ├── Stopwatch/
│   │   ├── Medication Reminder/
│   │   ├── PassVault/
│   │   └── Main Components/
│   ├── context/
│   ├── utils/
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

### Key Components

- **Home**: Main layout component that includes the sidebar navigation along with the main contents that will be loaded as per the navigation.
- **Mother**: Parent component for managing posts and replies.
- **PassVault**: Component for securely managing social credentials with encryption and decryption.
- **BMI Calculator**: A feature that records past BMI calculations with dates.
- **Medication Reminder**: Manages daily reminders with statuses.

## Technologies Used

- **Frontend**: React, React Context API for state management, Axios for API requests
- **Backend**: MongoDB (schema provided), Node.js, Express (configure backend separately)
- **Encryption**: CryptoJS for secure password storage in PassVault
- **CSS**: Basic styling without Tailwind CSS, uses `.main-content` class for main layout styling

## Contributing

Feel free to contribute! You can submit a pull request to suggest improvements, fix bugs, or add features. Before contributing, please check for any open issues or feature requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Enjoy using **CareNest** for all your health management needs! If you have any questions or feedback, please feel free to reach out.
