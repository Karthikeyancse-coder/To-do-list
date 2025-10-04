// 3D Todo Calendar Application JavaScript

class TodoCalendar {
    constructor() {
        this.tasks = [
            {
                id: 1,
                title: "Review quarterly reports",
                date: "2025-09-03",
                priority: "high",
                category: "Work",
                completed: false,
                created_at: "2025-09-01T10:00:00Z"
            },
            {
                id: 2,
                title: "Grocery shopping",
                date: "2025-09-04",
                priority: "medium",
                category: "Personal",
                completed: false,
                created_at: "2025-09-02T14:30:00Z"
            },
            {
                id: 3,
                title: "Gym workout",
                date: "2025-09-03",
                priority: "medium",
                category: "Health",
                completed: true,
                created_at: "2025-09-01T08:00:00Z"
            },
            {
                id: 4,
                title: "Call dentist",
                date: "2025-09-05",
                priority: "high",
                category: "Health",
                completed: false,
                created_at: "2025-09-03T11:15:00Z"
            },
            {
                id: 5,
                title: "Plan weekend trip",
                date: "2025-09-06",
                priority: "low",
                category: "Personal",
                completed: false,
                created_at: "2025-09-02T16:45:00Z"
            }
        ];
        
        this.categories = ["Work", "Personal", "Health", "Shopping", "Finance", "Education", "Travel"];
        this.priorities = ["low", "medium", "high"];
        this.currentDate = new Date(2025, 8, 3); // September 3, 2025
        this.selectedDate = this.formatDate(this.currentDate);
        this.currentFilter = 'all';
        this.currentPriorityFilter = null;
        
        this.init();
    }
    
    init() {
        this.renderCalendar();
        this.renderTasks();
        this.updateDateTime();
        this.bindEvents();
        
        // Set default date in form
        document.getElementById('task-date').value = this.selectedDate;
        
        // Update time every second
        setInterval(() => this.updateTime(), 1000);
    }
    
    bindEvents() {
        // Calendar navigation
        document.getElementById('prev-month').addEventListener('click', (e) => {
            e.preventDefault();
            this.navigateMonth(-1);
        });
        
        document.getElementById('next-month').addEventListener('click', (e) => {
            e.preventDefault();
            this.navigateMonth(1);
        });
        
        // Add task form
        document.getElementById('add-task-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleAddTask(e);
        });
        
        // Filter buttons
        document.querySelectorAll('.btn-filter').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleFilter(e);
            });
        });
        
        // Priority filter buttons
        document.querySelectorAll('.btn-priority').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.handlePriorityFilter(e);
            });
        });
    }
    
    
    formatDate(date) {
        return date.toISOString().split('T')[0];
    }
    
    updateDateTime() {
        const now = new Date(2025, 8, 3, 17, 0, 0); // Set to current date from data
        const dateOptions = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        
        document.getElementById('current-date').textContent = now.toLocaleDateString('en-US', dateOptions);
        this.updateTime();
    }
    
    updateTime() {
        const now = new Date();
        const timeOptions = { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit',
            hour12: true 
        };
        
        document.getElementById('current-time').textContent = now.toLocaleTimeString('en-US', timeOptions);
    }
    
    navigateMonth(direction) {
        this.currentDate.setMonth(this.currentDate.getMonth() + direction);
        this.renderCalendar();
        console.log(`Navigated to ${this.currentDate.toLocaleDateString()}`);
    }
    
    renderCalendar() {
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();
        
        // Update calendar title
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        document.getElementById('calendar-title').textContent = `${monthNames[month]} ${year}`;
        
        // Get first day of month and number of days
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay());
        
        const calendarDays = document.getElementById('calendar-days');
        calendarDays.innerHTML = '';
        
        // Create 42 day cells (6 weeks)
        for (let i = 0; i < 42; i++) {
            const cellDate = new Date(startDate);
            cellDate.setDate(startDate.getDate() + i);
            
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            dayElement.textContent = cellDate.getDate();
            
            // Add classes for styling
            if (cellDate.getMonth() !== month) {
                dayElement.classList.add('other-month');
            }
            
            // Check if it's today (Sept 3, 2025)
            const today = new Date(2025, 8, 3);
            if (this.isSameDate(cellDate, today)) {
                dayElement.classList.add('today');
            }
            
            // Check if it's selected date
            if (this.formatDate(cellDate) === this.selectedDate) {
                dayElement.classList.add('selected');
            }
            
            // Check if date has tasks
            const dayTasks = this.tasks.filter(task => task.date === this.formatDate(cellDate));
            if (dayTasks.length > 0) {
                const indicator = document.createElement('div');
                indicator.className = 'task-indicator';
                dayElement.appendChild(indicator);
            }
            
            // Add click event - fix for calendar date selection
            dayElement.addEventListener('click', () => {
                // Allow clicking on other month dates but navigate to that month first
                if (cellDate.getMonth() !== month) {
                    this.currentDate = new Date(cellDate);
                    this.renderCalendar();
                }
                this.selectDate(cellDate);
            });
            
            calendarDays.appendChild(dayElement);
        }
    }
    
    selectDate(date) {
        const previousSelectedDate = this.selectedDate;
        this.selectedDate = this.formatDate(date);
        document.getElementById('task-date').value = this.selectedDate;
        
        console.log(`Selected date: ${this.selectedDate}`);
        
        // Update selected date styling - clear all first
        document.querySelectorAll('.calendar-day').forEach(day => {
            day.classList.remove('selected');
        });
        
        // Find and highlight selected date
        const dayElements = document.querySelectorAll('.calendar-day');
        dayElements.forEach(dayElement => {
            if (dayElement.textContent == date.getDate() && !dayElement.classList.contains('other-month')) {
                dayElement.classList.add('selected');
            }
        });
        
        // Reset filter to show selected date tasks
        this.currentFilter = 'date';
        this.currentPriorityFilter = null;
        
        // Update filter button states
        document.querySelectorAll('.btn-filter').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Reset priority filter buttons
        document.querySelectorAll('.btn-priority').forEach(btn => {
            btn.style.opacity = '1';
        });
        
        this.renderTasks();
        this.showNotification(`Selected ${this.formatDateDisplay(date)}`);
    }
    
    isSameDate(date1, date2) {
        return date1.getFullYear() === date2.getFullYear() &&
               date1.getMonth() === date2.getMonth() &&
               date1.getDate() === date2.getDate();
    }
    
    formatDateDisplay(date) {
        return date.toLocaleDateString('en-US', { 
            weekday: 'short', 
            month: 'short', 
            day: 'numeric' 
        });
    }
    
    handleAddTask(e) {
        e.preventDefault();
        
        const title = document.getElementById('task-title').value.trim();
        const date = document.getElementById('task-date').value;
        const priority = document.getElementById('task-priority').value;
        const category = document.getElementById('task-category').value;
        
        console.log('Form data:', { title, date, priority, category });
        
        if (!title) {
            this.showNotification('Please enter a task title', 'error');
            return;
        }
        
        if (!date) {
            this.showNotification('Please select a date', 'error');
            return;
        }
        
        if (!priority) {
            this.showNotification('Please select a priority', 'error');
            return;
        }
        
        if (!category) {
            this.showNotification('Please select a category', 'error');
            return;
        }
        
        const newTask = {
            id: Date.now(),
            title,
            date,
            priority,
            category,
            completed: false,
            created_at: new Date().toISOString()
        };
        
        this.tasks.push(newTask);
        console.log('Added new task:', newTask);
        
        this.renderTasks();
        this.renderCalendar(); // Update calendar to show task indicators
        
        // Reset form
        document.getElementById('add-task-form').reset();
        document.getElementById('task-date').value = this.selectedDate;
        
        this.showNotification('Task added successfully!');
    }
    
    handleFilter(e) {
        e.preventDefault();
        
        // Remove active class from all filter buttons
        document.querySelectorAll('.btn-filter').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        e.target.classList.add('active');
        
        this.currentFilter = e.target.dataset.filter;
        this.currentPriorityFilter = null; // Reset priority filter
        
        // Reset priority filter buttons
        document.querySelectorAll('.btn-priority').forEach(btn => {
            btn.style.opacity = '1';
        });
        
        console.log(`Applied filter: ${this.currentFilter}`);
        this.renderTasks();
    }
    
    handlePriorityFilter(e) {
        e.preventDefault();
        
        const priority = e.target.dataset.priority;
        
        // Toggle priority filter
        if (this.currentPriorityFilter === priority) {
            this.currentPriorityFilter = null;
            e.target.style.opacity = '1';
        } else {
            // Reset all priority buttons
            document.querySelectorAll('.btn-priority').forEach(btn => {
                btn.style.opacity = '1';
            });
            
            this.currentPriorityFilter = priority;
            e.target.style.opacity = '0.7';
        }
        
        console.log(`Applied priority filter: ${this.currentPriorityFilter}`);
        this.renderTasks();
    }
    
    getFilteredTasks() {
        let filteredTasks = [...this.tasks];
        
        // Apply main filter
        switch (this.currentFilter) {
            case 'today':
                const today = this.formatDate(new Date(2025, 8, 3));
                filteredTasks = filteredTasks.filter(task => task.date === today);
                break;
            case 'completed':
                filteredTasks = filteredTasks.filter(task => task.completed);
                break;
            case 'incomplete':
                filteredTasks = filteredTasks.filter(task => !task.completed);
                break;
            case 'date':
                filteredTasks = filteredTasks.filter(task => task.date === this.selectedDate);
                break;
            case 'all':
            default:
                // Show all tasks
                break;
        }
        
        // Apply priority filter
        if (this.currentPriorityFilter) {
            filteredTasks = filteredTasks.filter(task => task.priority === this.currentPriorityFilter);
        }
        
        // Sort by date and priority
        filteredTasks.sort((a, b) => {
            const dateCompare = new Date(a.date) - new Date(b.date);
            if (dateCompare !== 0) return dateCompare;
            
            const priorityOrder = { high: 3, medium: 2, low: 1 };
            return priorityOrder[b.priority] - priorityOrder[a.priority];
        });
        
        return filteredTasks;
    }
    
    renderTasks() {
        const filteredTasks = this.getFilteredTasks();
        const tasksList = document.getElementById('tasks-list');
        const tasksTitle = document.getElementById('tasks-section-title');
        
        // Update section title
        let titleText = 'All Tasks';
        if (this.currentFilter === 'today') titleText = "Today's Tasks";
        else if (this.currentFilter === 'completed') titleText = 'Completed Tasks';
        else if (this.currentFilter === 'incomplete') titleText = 'Incomplete Tasks';
        else if (this.currentFilter === 'date') titleText = `Tasks for ${this.formatDateDisplay(new Date(this.selectedDate))}`;
        
        if (this.currentPriorityFilter) {
            titleText += ` (${this.currentPriorityFilter.charAt(0).toUpperCase() + this.currentPriorityFilter.slice(1)} Priority)`;
        }
        
        tasksTitle.textContent = titleText;
        
        if (filteredTasks.length === 0) {
            tasksList.innerHTML = '<div style="text-align: center; color: #94a3b8; padding: 20px;">No tasks found</div>';
            return;
        }
        
        tasksList.innerHTML = filteredTasks.map(task => `
            <div class="task-item ${task.completed ? 'completed' : ''}" data-id="${task.id}">
                <div class="task-checkbox ${task.completed ? 'checked' : ''}" 
                     onclick="todoApp.toggleTask(${task.id})"></div>
                <div class="task-content">
                    <div class="task-title">${this.escapeHtml(task.title)}</div>
                    <div class="task-meta">
                        <span class="task-date">${this.formatTaskDate(task.date)}</span>
                        <span class="task-priority ${task.priority}">${task.priority}</span>
                        <span class="task-category">${task.category}</span>
                    </div>
                </div>
                <button class="task-delete" onclick="todoApp.deleteTask(${task.id})">Delete</button>
            </div>
        `).join('');
        
        console.log(`Rendered ${filteredTasks.length} tasks`);
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    formatTaskDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric',
            year: 'numeric'
        });
    }
    
    toggleTask(taskId) {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = !task.completed;
            this.renderTasks();
            
            const message = task.completed ? 'Task completed!' : 'Task marked as incomplete';
            this.showNotification(message);
            
            console.log(`Toggled task ${taskId}: ${task.completed ? 'completed' : 'incomplete'}`);
        }
    }
    
    deleteTask(taskId) {
        const taskIndex = this.tasks.findIndex(t => t.id === taskId);
        if (taskIndex > -1) {
            const task = this.tasks[taskIndex];
            this.tasks.splice(taskIndex, 1);
            this.renderTasks();
            this.renderCalendar(); // Update calendar to remove task indicators if needed
            this.showNotification('Task deleted successfully!');
            
            console.log(`Deleted task: ${task.title}`);
        }
    }
    
    showNotification(message, type = 'success') {
        const notification = document.getElementById('notification');
        const notificationText = notification.querySelector('.notification-text');
        
        if (!notificationText) {
            // Create notification text element if it doesn't exist
            const textEl = document.createElement('span');
            textEl.className = 'notification-text';
            notification.appendChild(textEl);
        }
        
        const textElement = notification.querySelector('.notification-text');
        textElement.textContent = message;
        notification.classList.remove('hidden');
        notification.classList.add('show');
        
        // Change color based on type
        if (type === 'error') {
            notification.style.background = 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)';
        } else {
            notification.style.background = 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)';
        }
        
        console.log(`Notification: ${message} (${type})`);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.classList.add('hidden');
            }, 300);
        }, 3000);
    }
}

// Initialize the application
let todoApp;
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing  Todo Calendar...');
    todoApp = new TodoCalendar();
});

function toggleTheme() {
  document.body.classList.toggle('light-mode');
  const icon = document.getElementById('theme-icon');
  if (document.body.classList.contains('light-mode')) {
    icon.textContent = '☀️'; // sun icon for light mode
  } else {
    icon.textContent = '🌙'; // moon icon for dark mode
  }
}