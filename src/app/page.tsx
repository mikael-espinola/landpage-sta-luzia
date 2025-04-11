import CalendarioFixo from "@/components/calendarioFixo/CalendarioFixo";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import NoticiaWrapper from "@/components/noticiaWrapper/NoticiaWrapper";

export default function Home() {
  return (
    <>
      <Header />
      <main className=" border-b">
        <CalendarioFixo />
        <NoticiaWrapper />
      </main>
      <Footer />
    </>
  );
}
