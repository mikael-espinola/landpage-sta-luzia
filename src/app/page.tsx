import CalendarioFixo from "@/components/calendarioFixo/CalendarioFixo";
import Footer from "@/components/footer/Footer";
import LinkButton from "@/components/linkButton/LinkButton";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="p-2 border-b">
        <div className="flex justify-end pr-2">
          <LinkButton href="/login" text="Login" />
        </div>
        <h1 className="text-4xl py-2 text-center ">Comunidade de Santa Luzia</h1>
      </main>
      <CalendarioFixo />
      <Footer />
    </>
  );
}
