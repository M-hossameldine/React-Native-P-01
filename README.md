# React Native Goals App

A simple React Native application for managing personal goals. Users can add and delete goals, with a clean and interactive UI. Built as part of a practical guide to learning React Native.

## Features

- Add new goals
- Delete existing goals
- Modal input for adding goals
- Interactive list with ripple and press effects

## Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- npm or yarn
- Expo CLI (for easy development)

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd p1-rn-course
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```
4. Run on your device or emulator using Expo Go or the appropriate platform command.

## Usage

- Tap "Add New Goal" to open the modal and enter a goal.
- Tap a goal in the list to delete it (with a ripple/press effect).

## Folder Structure

```
React-Native-Goals-App/
  App.js                # Main app component
  components/
    GoalInput.js        # Modal input for adding goals
    GoalItem.js         # Individual goal item component
  assets/               # App images and icons
  package.json          # Project dependencies and scripts
  ...
```

## Tech Stack

- React Native
- Expo
- JavaScript (ES6+)

## License

This project is for educational purposes as part of a React Native course.
