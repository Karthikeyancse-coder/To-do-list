# 📅 Todo Calendar

**A Modern Task Management Application with Interactive Calendar Interface**

A clean, responsive todo calendar application built with vanilla HTML, CSS, and JavaScript. Features an intuitive calendar view, comprehensive task management, and smooth visual interactions for organizing daily activities.

---

## ✨ Features

### 🗓️ **Calendar Management**
- **Monthly Calendar View** - Navigate through months with arrow controls
- **Date Selection** - Click any date to filter tasks for that day
- **Task Indicators** - Visual dots show dates with scheduled tasks
- **Today Highlighting** - Current date prominently displayed

### 📝 **Task Management**
- **Add Tasks** - Create tasks with title, date, priority, and category
- **Complete Tasks** - Mark tasks as done with checkbox interaction
- **Delete Tasks** - Remove tasks with confirmation feedback
- **Form Validation** - Ensures all required fields are filled

### 🔍 **Filtering System**
- **Status Filters** - View All, Today, Completed, or Incomplete tasks
- **Priority Filters** - Filter by High, Medium, or Low priority
- **Date-based Filtering** - Automatically filters when selecting calendar dates

### 🎨 **User Interface**
- **Dark/Light Theme Toggle** - Switch between themes with moon/sun icon
- **Responsive Design** - Adapts to desktop, tablet, and mobile screens
- **Visual Feedback** - In-page notifications for user actions
- **Smooth Animations** - Hover effects and transitions on interactive elements

### ⏰ **Additional Features**
- **Real-time Clock** - Live date and time display in header
- **Priority Color Coding** - Visual distinction between task priorities
- **Category Organization** - 7 predefined categories for task classification

---

## 🖼️ Interface Overview

```
┌─────────────────────────────────────────────────────────────┐
│ Todo Calendar                    🌙 Theme   📅 Current Time │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ 📅 CALENDAR SECTION          │  📋 TASK MANAGEMENT SECTION │
│ ┌─────────────────────────┐   │  ┌───────────────────────┐  │
│ │  ← September 2025 →     │   │  │ Add New Task          │  │
│ │                         │   │  │ ┌───────────────────┐ │  │
│ │ Sun Mon Tue Wed Thu Fri │   │  │ │ Task Title        │ │  │
│ │  1   2   3   4   5   6  │   │  │ │ [Date] [Priority] │ │  │
│ │  8   9  10  11  12  13  │   │  │ │ [Category] [Add]  │ │  │
│ │ 15  16  17  18  19  20  │   │  │ └───────────────────┘ │  │
│ │ 22  23  24  25  26  27  │   │  └───────────────────────┘  │
│ │ 29  30                  │   │                             │
│ └─────────────────────────┘   │  Filters:                   │
│                               │  [All][Today][Done][Todo]   │
│                               │  Priority: [High][Med][Low] │
│                               │                             │
│                               │  📋 Task List:             │
│                               │  ☑ Task 1 (Today, High)    │
│                               │  ☐ Task 2 (Tomorrow, Med)  │
│                               │  ☐ Task 3 (Oct 5, Low)     │
└─────────────────────────────────────────────────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software or dependencies required

### Installation
1. **Download the project files:**
   ```
   index.html
   style.css
   app.js
   ```

2. **Open in browser:**
   ```bash
   # Simply double-click index.html
   # or right-click → "Open with" → Your Browser
   ```

3. **Start using immediately** - No build process or server setup needed!

---

## 📖 How to Use

### Adding Tasks
1. Fill in the task title (required field)
2. Select a date (defaults to currently selected date)
3. Choose priority level: High, Medium, or Low
4. Select category from dropdown menu
5. Click "Add Task" button

### Managing Tasks
- **Complete Task:** Click the checkbox next to any task
- **Delete Task:** Click the red "Delete" button
- **View by Date:** Click any calendar date to see tasks for that day

### Filtering Tasks
| Filter | Description |
|--------|-------------|
| **All** | Shows all tasks regardless of status |
| **Today** | Shows only tasks scheduled for current date |
| **Completed** | Shows only finished tasks |
| **Incomplete** | Shows only pending tasks |
| **Priority** | Click High/Medium/Low to filter by urgency |

### Theme Toggle
- Click the 🌙 (moon) icon to switch to light mode
- Click the ☀️ (sun) icon to switch back to dark mode

---

## 💻 Technical Details

### File Structure
```
To-do-list/
├── index.html          # Main HTML structure
├── style.css           # Complete styling and theme system
├── app.js              # JavaScript functionality
└── README.md           # Project documentation
```

### Technology Stack
| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic structure and form elements |
| **CSS3** | Styling, animations, responsive design |
| **Vanilla JavaScript** | Interactive functionality and DOM manipulation |

### Data Storage
- Tasks are stored in JavaScript arrays (in-memory)
- Data resets when page is refreshed
- No external database or local storage used

### Browser Compatibility
- Modern browsers with ES6 support
- Responsive design works on all screen sizes
- Touch-friendly interface for mobile devices

---

## 🎯 Task Categories

The application includes 7 predefined categories:

| Category | Use Case Examples |
|----------|-------------------|
| **Work** | Meetings, deadlines, project tasks |
| **Personal** | Hobbies, family time, personal goals |
| **Health** | Doctor appointments, workouts, medication |
| **Shopping** | Grocery lists, online orders, errands |
| **Finance** | Bill payments, budget planning, investments |
| **Education** | Study sessions, courses, skill learning |
| **Travel** | Trip planning, bookings, packing lists |

---

## 🎨 Priority System

### Priority Levels
- **🔴 High Priority** - Urgent and important tasks
- **🟡 Medium Priority** - Important but not urgent tasks  
- **🟢 Low Priority** - Optional or future tasks

### Visual Indicators
- Each priority level has distinct colors for easy identification
- Priority badges appear next to task titles in the task list
- Filter buttons use the same color scheme for consistency

---

## 📱 Responsive Design

### Breakpoints
| Screen Size | Layout Behavior |
|-------------|-----------------|
| **Mobile** (< 768px) | Single column, stacked layout |
| **Tablet** (768px - 1024px) | Adjusted spacing, touch-optimized |
| **Desktop** (> 1024px) | Side-by-side calendar and task panels |

### Mobile Features
- Touch-friendly buttons and form elements
- Optimized spacing for finger interaction
- Responsive calendar grid that adapts to screen width
- Collapsible sections for better mobile navigation

---

## ⚡ Key Functionality

### Calendar Features
- Navigate months using previous/next arrows
- Click on any date to select it and filter tasks
- Visual indicators (red dots) show dates with scheduled tasks
- Today's date is highlighted with special styling
- Selected date gets distinct highlighting

### Task Management Features
- Real-time task list updates when adding/completing/deleting tasks
- Form validation prevents empty task submission
- Automatic date selection when clicking calendar dates
- Task sorting by date and priority level

### User Feedback
- In-page notification popups for all user actions
- Success messages for completed actions (green background)
- Error messages for invalid inputs (red background)
- Notifications auto-dismiss after 3 seconds

---

## 🛠️ Customization Options

### Easy Modifications
You can easily customize the application by editing these JavaScript arrays:

```javascript
// Add custom categories
this.categories = ["Work", "Personal", "Health", "Custom1", "Custom2"];

// Modify priority levels
this.priorities = ["urgent", "normal", "later"];

// Change notification duration (milliseconds)
setTimeout(() => notification.hide(), 5000);
```

### Styling Changes
Edit CSS variables in the `:root` section to customize colors:

```css
:root {
  --color-primary: #your-primary-color;
  --color-background: #your-background-color;
  --color-text: #your-text-color;
}
```

---

## 🔧 Sample Data

The application comes with 5 sample tasks to demonstrate functionality:

1. **Review quarterly reports** (High priority, Work category)
2. **Grocery shopping** (Medium priority, Personal category)  
3. **Gym workout** (Medium priority, Health category) - Pre-completed
4. **Call dentist** (High priority, Health category)
5. **Plan weekend trip** (Low priority, Personal category)

---

## 📋 Features in Detail

### Form Validation
- **Required Fields:** Title, Date, Priority, and Category must be filled
- **Error Messages:** Clear feedback when validation fails
- **Form Reset:** Automatically clears after successful task creation
- **Default Values:** Date field pre-filled with selected calendar date

### Notification System
- **In-page Notifications:** Styled popup messages within the application
- **Message Types:** Success (green) and error (red) notifications
- **Auto-dismiss:** Notifications disappear after 3 seconds
- **Slide Animation:** Smooth slide-in from the right side

### Theme System
- **Automatic Detection:** Respects system dark/light mode preference
- **Manual Override:** Toggle button allows user to switch themes
- **Persistent State:** Theme choice maintained during session
- **Icon Updates:** Moon/sun icon changes based on current theme

---

## ⚠️ Limitations

### Current Limitations
- **No Data Persistence:** Tasks are lost when page refreshes
- **Single User:** No user accounts or multi-user support
- **No Recurring Tasks:** Each task is a one-time event
- **No Task Editing:** Tasks cannot be modified after creation
- **No Time Scheduling:** Only date-based, no specific time slots
- **No Reminders:** No notification alerts or reminder system

### Future Enhancements (Not Currently Implemented)
- Local storage for data persistence
- Task editing capabilities
- Recurring task options
- Time-based scheduling
- Export/import functionality
- Multi-user support

---

## 🐛 Troubleshooting

### Common Issues

|              Issue       |            Cause            |                  Solution                       |
|-------                   |-------                      |----------                                       |
| **Tasks disappear**      | Page refresh                | This is expected behavior - no data persistence |
| **Date not selecting**   | JavaScript disabled         | Enable JavaScript in browser                    |
| **Responsive issues**    | Browser cache               | Clear cache and refresh page                    |
| **Theme not switching**  | CSS variables not supported | Use modern browser                              |
| **Form not submitting**  | Missing required fields     | Fill all form fields before clicking Add Task   |

### Browser Requirements
- JavaScript must be enabled
- CSS3 support required for styling
- HTML5 form validation support needed

---

## 📞 Support

For questions, issues, or suggestions:
- Review the code in the provided files
- Check browser console for any JavaScript errors
- Ensure all three files (HTML, CSS, JS) are in the same folder
- Verify browser compatibility with modern web standards


---

## 🎯 Project Goals

This Todo Calendar application demonstrates:
- **Clean Code Structure:** Well-organized HTML, CSS, and JavaScript
- **Responsive Web Design:** Mobile-first approach with flexible layouts  
- **Interactive User Interface:** Dynamic DOM manipulation and event handling
- **Modern CSS Techniques:** CSS Grid, Flexbox, and custom properties
- **Accessibility Considerations:** Semantic HTML and keyboard navigation
- **Progressive Enhancement:** Works without JavaScript for basic viewing

---

*Built with vanilla web technologies for maximum compatibility and simplicity.*
