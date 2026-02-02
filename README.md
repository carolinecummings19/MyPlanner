# MyPlanner

A modern, cloud-based planner application designed for students and teachers to manage their daily tasks, schedules, and goals with an intuitive, paper-planner-inspired interface.

![MyPlanner Banner](<!-- Add banner image path here -->)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)

## 🎯 About

MyPlanner is a comprehensive productivity application that brings the familiarity of a paper planner to the digital world. Built with modern web technologies, it provides students and teachers with an elegant solution for organizing tasks, tracking habits, and managing their daily schedules.

## ✨ Features

### Core Functionality
- **📝 To-Do List**: Create, update, and manage daily tasks with ease
- **📅 Schedule Management**: Plan your day with an intuitive scheduling interface
- **🎯 Priority Tracking**: Set and monitor your daily priorities
- **📚 Notes**: Take quick notes and organize your thoughts
- **📖 Reading List**: Keep track of books you want to read

### Wellness & Productivity
- **💧 Water Tracker**: Monitor daily water intake
- **😊 Mood Tracker**: Track your emotional well-being
- **🙏 Gratitude Journal**: Practice daily gratitude
- **🍽️ Meal Planner**: Plan your meals ahead of time
- **📊 Productivity Insights**: Visualize your productivity patterns

### Additional Features
- **🌤️ Weather Widget**: Stay informed about current weather conditions
- **🔐 User Authentication**: Secure login and signup functionality
- **👤 User Profiles**: Personalized user experience
- **🎨 Customization Options**: Tailor the app to your preferences

## 📸 Screenshots

### Home Dashboard
![Home Dashboard](<!-- Add screenshot path here -->)

*Main dashboard view with all planner components*

### To-Do List & Schedule
![To-Do List](<!-- Add screenshot path here -->)

*Task management and daily scheduling interface*

### Mood & Habit Tracking
![Trackers](<!-- Add screenshot path here -->)

*Mood tracker, water tracker, and wellness features*

### Mobile Responsive View
![Mobile View](<!-- Add screenshot path here -->)

*Fully responsive design for on-the-go planning*

## 🛠️ Technologies

### Frontend
- **React 18.3** - Modern UI library
- **Vite** - Next-generation frontend tooling
- **React Router** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library

### Backend & Cloud Services
- **Node.js** - JavaScript runtime
- **AWS RDS MySQL** - Managed relational database
- **AWS S3** - Cloud storage

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS transformations
- **Axios** - HTTP client

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/carolinecummings19/MyPlanner.git
   cd MyPlanner
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   
   Create a `config.json` file in the root directory with your configuration settings.

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
npm run preview
```

## 💻 Usage

1. **Sign Up/Login**: Create an account or log in to access your planner
2. **Customize Your View**: Navigate to the Customize page to personalize your planner
3. **Add Tasks**: Use the To-Do List component to add and manage your daily tasks
4. **Schedule Your Day**: Fill in your schedule with classes, meetings, or events
5. **Track Your Habits**: Use the water tracker, mood tracker, and gratitude journal
6. **Stay Organized**: Manage your notes, priorities, and meal plans all in one place

## 📁 Project Structure

```
MyPlanner/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and media
│   ├── components/     # React components
│   │   ├── Book.jsx
│   │   ├── Gratitude.jsx
│   │   ├── MealPlanner.jsx
│   │   ├── MoodTracker.jsx
│   │   ├── Schedule.jsx
│   │   ├── ToDoList.jsx
│   │   ├── WaterTracker.jsx
│   │   ├── Weather.jsx
│   │   └── ...
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Profile.jsx
│   │   └── ...
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── config.json         # Configuration file
├── package.json        # Dependencies
└── vite.config.js      # Vite configuration
```

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to MyPlanner:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is currently unlicensed. Please contact the developer for usage permissions.

## 📧 Contact

**Caroline Cummings**

- GitHub: [@carolinecummings19](https://github.com/carolinecummings19)
- Repository: [MyPlanner](https://github.com/carolinecummings19/MyPlanner)

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)

---

⭐ Star this repository if you find it helpful!
