
import ProfileProvider from "../context/searchInput/profileProvider"
import AppContent from "./components/appContent"
function App() {
  return (
    <ProfileProvider>
      <AppContent />
    </ProfileProvider>
  )
}
export default App
