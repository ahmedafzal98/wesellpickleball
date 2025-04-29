import AffiliateForm from "./components/AffiliateForm";
import AffiliateInfo from "./components/AffiliateInfo";
import Banner from "./components/Banner";
import BookmarkSection from "./components/BookmarkSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <AffiliateInfo />
      <AffiliateForm />
      <BookmarkSection />
    </>
  );
}

export default App;
