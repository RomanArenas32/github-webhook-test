import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeComponent from "./components/Home";
import Features from "./components/Features";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        <HomeComponent />
      </main>
      <Features />
      <Footer />
    </div>
  );
}
