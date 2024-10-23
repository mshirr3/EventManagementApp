### 1. **Create and Manage Events**
- **Description**: Users can create important events for specific dates
- **Steps**:
     - User selects a date and time for an event.
     - `DateManager` validates the date (ensuring the end date is after the start date).
     - The event is saved with user being able to manage it.

### 2. **Recurring Events**
   - **Description**: Users can schedule events to repeat (daily, weekly, monthly, etc.).
   - **Steps**:
     - User creates a recurring event and selects the frequency (e.g., every Monday, last Friday of the month).
     - `DateManager` is used by system to create dates and events
     - The system creates dates based on the requested frequency
     - The app displays all instances and allows the user to modify specific ones (e.g., skip a holiday).

### 3. **Set Reminders for Events**
   - **Description**: Users set reminders before an event (e.g., 10 minutes, 1 hour, 1 day).
   - **Steps**:
     - User creates or edits an event and sets a reminder.
     - `DateManager` calculates the reminder time based on the event's start date/time.
     - The system sends a notification at the specified reminder time.

### 4. **Event Conflict Detection**
   - **Description**: The app detects and prevents overlapping or conflicting events.
   - **Steps**:
     - User schedules a new event.
     - System checks for existing events that overlap with the new event’s time range.
     - If a conflict is found, the system notifies the user and suggests alternate available times.

### 5. **Date Range Queries for Event Listings**
   - **Description**: Users can view events within a specific date range (e.g., "Show events for the next week").
   - **Steps**:
     - User selects a date range to view events (e.g., all events for this week).
     - System retrieves all events within the selected date range.
     - The app displays the relevant events.
