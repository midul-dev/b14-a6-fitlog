<div align="center">

<img src="./src/assets/logo.png" width="80" alt="FitLog Logo">

# FITLOG

### Train with intent. Log every set.

A modern workout library and personal workout planner built with Next.js.

</div>

---

## 📖 Project Overview

**FitLog** is a responsive workout library and planning application designed to make organizing daily workouts simple.

Users can explore different exercises, view detailed workout information, add exercises to today's workout plan, save workouts for later, and track the total duration and calories of their current plan.

The application uses the FitLog REST API for workout data and `localStorage` to keep plan and saved workout data available after a page reload.

---

## ✨ Key Features

- 🏋️ Browse a complete library of workouts
- 📖 View detailed information for each exercise
- 📋 Add workouts to **Today's Plan**
- ❤️ Save workouts for later
- 🔢 Live Plan and Saved counters in the navbar
- 🚫 Maximum of **5 workouts** in Today's Plan
- 🔎 Search workouts by name or muscle group
- ↕️ Sort workouts by duration, calories, or rating
- 📊 Live summary of exercises, minutes, and calories
- ✅ Mark planned workouts as completed
- ❌ Remove workouts from the plan or saved list
- 💾 Plan and saved data persist using `localStorage`
- 🔔 Toast notifications for user actions
- ⏳ Loading states while workout data is being fetched
- 🚫 Custom 404 page for invalid routes
- 📱 Fully responsive across mobile, tablet, and desktop

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **Next.js** | Application framework and routing |
| **React** | Building interactive UI components |
| **TypeScript** | Type-safe JavaScript development |
| **Tailwind CSS** | Responsive styling |
| **DaisyUI** | UI components |
| **React Toastify** | Toast notifications |
| **REST API** | Fetching workout data |

---

## 🏠 Main Pages

### Workout Library

The home page displays all available workouts in a responsive card layout.

Each workout card includes:

- Workout image
- Muscle group tags
- Workout name
- Equipment
- Duration
- Calories burned
- Rating

Clicking a workout card opens its details page.

### Workout Details

The workout details page provides:

- Large workout image
- Workout name and description
- Muscle group tags
- Equipment
- Difficulty
- Sets and reps
- Duration
- Calories
- Rating
- Step-by-step instructions
- **Add to Today's Plan** button
- **Save for Later** button

### My Plan

The **My Plan** page contains two sections:

- **Today's Plan**
- **Saved**

It also displays a live workout summary:

- Total exercises
- Total workout minutes
- Total calories

Users can search and sort their workouts, open workout details, mark exercises as done, or remove them.

---

## 🔍 Search & Sort

Workouts can be searched using:

- Workout name
- Muscle group/tag

The current list can also be sorted by:

- Duration
- Calories
- Rating

---

## 🌐 API

Workout information is loaded from the FitLog API.

### Get All Workouts

```text
https://api.abcz.workers.dev/api/fitlog
```

### Get Single Workout

```text
https://api.abcz.workers.dev/api/fitlog/:id
```

Example:

```text
https://api.abcz.workers.dev/api/fitlog/1
```

---

## 🗺️ Application Routes

| Route | Description |
|---|---|
| `/` | Workout library / Home page |
| `/exercise/:id` | Individual workout details |
| `/my-plan` | Today's Plan and Saved workouts |

---

## 📱 Responsive Design

FitLog is designed to work across different screen sizes.

- **Mobile** — stacked layouts and mobile-friendly navigation
- **Tablet** — responsive grid and spacing
- **Desktop** — full workout grid and two-column detail layout

---

## ⚙️ Installation & Setup

Follow these steps to run FitLog locally.

### 1. Clone the Repository

```bash
git clone <your-repository-url>
```

Replace `<your-repository-url>` with your GitHub repository URL.

Example:

```bash
git clone https://github.com/your-username/fitlog.git
```

### 2. Go to the Project Directory

```bash
cd fitlog
```

### 3. Install Dependencies

Make sure **Node.js** is installed on your computer.

Then run:

```bash
npm install
```

This will install all required project dependencies.

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open the Application

Open your browser and visit:

```text
http://localhost:3000
```

The application should now be running locally.

---

## 📦 Available Scripts

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run the production build:

```bash
npm start
```

Check the project for linting issues:

```bash
npm run lint
```

---

## 🏗️ Production Build

Before deployment, create a production build to make sure the application has no build errors:

```bash
npm run build
```

If the build completes successfully, run:

```bash
npm start
```

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── exercise/
│   │   └── [id]/
│   ├── my-plan/
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Navbar
│   ├── Hero
│   ├── FitnessCard
│   ├── Footer
│   └── ...
│
├── context/
│   └── FitDataContext.tsx
│
├── types/
│   └── dataType.ts
│
└── assets/
```

> The exact folder names may vary slightly depending on the final project structure.

---

## 🎯 What I Practiced

While building FitLog, I worked with:

- Next.js App Router
- Dynamic routing
- Server and Client Components
- API data fetching
- React Context API
- React state management
- TypeScript interfaces and types
- Conditional rendering
- Search and sorting logic
- localStorage
- Loading and error states
- Toast notifications
- Responsive layouts with Tailwind CSS

---

## 🚀 Deployment

The project can be deployed easily using **Vercel**.

Before deploying, make sure:

```bash
npm run build
```

runs successfully without errors.

After deployment, test:

- Home page
- Workout detail pages
- My Plan page
- Page refresh
- Invalid routes / 404 page
- Mobile and desktop layouts

---

## 👨‍💻 Author

Midul Mahmud
Developed as a frontend project using **Next.js, React, TypeScript, Tailwind CSS, and DaisyUI**.

---

<div align="center">

### 🏋️ FITLOG

**Train hard. Log honest.**

Built with Next.js & TypeScript

</div>