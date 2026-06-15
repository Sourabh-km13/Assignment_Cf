# Care Management Dashboard

## Features
- Fetch users from JSONPlaceholder API
- Search users by name and email
- Add, edit, and delete users locally
- View user details with address, company, and submitted forms
- Submit Health Assessment and Incident Report forms
- Associate submitted forms with selected users
- Pagination for users (6 cards per page)
- Loading and error handling for API requests

## Bonus Features
- Debounced search
- Custom `useUsers()` hook
- Toast notifications for feedback
- Responsive mobile and desktop UI
- Reusable pagination component
- Error handling 
## Project Structure
- `src/pages/Users.tsx` — user list, search, pagination
- `src/pages/UserDetailPage.tsx` — details and submitted forms
- `src/pages/NewUserPage.tsx` — add user form
- `src/pages/EditUserPage.tsx` — edit user form
- `src/pages/FormPage.tsx` — form selection page
- `src/pages/HealthFormPage.tsx` — health assessment form
- `src/pages/IncidentReportPage.tsx` — incident report form
- `src/components/Forms/HealthForm.tsx` — health form implementation
- `src/components/Forms/IncidentReportForm.tsx` — incident report implementation
- `src/components/PaginationControls.tsx` — pagination buttons
- `src/components/UserSubmittedForms.tsx` — submitted forms list
- `src/hooks/useUsers.tsx` — shared user and submission state
- `src/components/Button.tsx` — reusable button component

## Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Change directory into the project:
   ```bash
   cd Assgn_Careflick
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the app:
   ```bash
   npm run dev
   ```

## Notes
- User CRUD is simulated locally because the API is read-only.
- Form submissions are stored in app state and linked to users.

## Submission
- GitHub repo: [add link]
- Live demo: [add link]
