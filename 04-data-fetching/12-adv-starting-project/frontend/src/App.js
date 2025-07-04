// Challenge / Exercise

// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/HomePage';
import EventDetailPage from './pages/EventDetailPage';
import EventsPage from './pages/EventsPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
function App() {

  const router = createBrowserRouter([
    {path:'/', element: <Homepage />},
    {path:'/events', element: <EventsPage />},
    {path:'/events/:eventId', element: <EventDetailPage/>},
    {path:'/events/new', element: <NewEventPage />},
    {path:'/events/:eventId/edit', element: <EditEventPage/>}

  ])

  return
  
  <RouterProvider router={router} />
}

export default App;
