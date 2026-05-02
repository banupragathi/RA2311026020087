# Stage 1: Priority Inbox Design

### Approach
To ensure students see critical updates, notifications are sorted by **Weight** and **Recency**.

### Priority Mapping
- **Placement**: Weight 3 (Highest)
- **Result**: Weight 2
- **Event**: Weight 1 (Lowest)

### Logic
1. Fetch notifications from the provided API.
2. Apply a custom sort: Compare `Weight` first. If weights are equal, compare `Timestamp` to show the most recent first.
3. Return the top 'n' results for the Priority Inbox.