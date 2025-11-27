"use client";

import React from "react";
import { useRouter } from "next/navigation";


const colors = {
  lavender: "#E6E6FA",
  lilac: "#C8A2C8",
  pinkAccent: "#E76F85",
  dustyBlue: "#AABBC3",
  ashGray: "#A9B3B8",
  sageGreen: "#B4CCB9",
};

const sectionCard = "bg-white/90 border border-white/60 rounded-2xl p-5 shadow-lg";

const Entourage: React.FC = () => {
    const router = useRouter(); 
  return (
    <main className="min-h-screen p-6 md:p-12 bg-gradient-to-b from-[#F6F5FB] to-[#F1EEF8]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
        <button
  onClick={() => router.push("/#ourstory")}
  className="inline-block mb-4 px-4 py-2 rounded-full bg-[#E6D9F2] text-[#4B2E68] shadow-md hover:scale-105 transition"
>
  ← Back to Story
</button>
          <h1
            className="text-4xl md:text-5xl font-extrabold"
            style={{ fontFamily: "var(--font-great-vibes, Georgia), serif", color: colors.lilac }}
          >
            The Entourage
          </h1>
          <p className="mt-2 text-sm md:text-base text-gray-600" style={{ fontFamily: "var(--font-playfair, Georgia), serif" }}>
            Our family, sponsors, and treasured friends who stand with us.
          </p>
        </header>

        {/* Grid layout */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="space-y-6">
            {/* Parents of the Groom */}
            <div className={sectionCard} style={{ borderColor: colors.lilac }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: colors.pinkAccent, fontFamily: "var(--font-playfair)" }}>
                Parents of the Groom
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Mr. Reynaldo Acosta Medrano ✝️</strong>
                  <div className="text-sm italic text-gray-500">Proxy: Mrs. Virginia Pareja Ordoñez & Mr. Oscar Ordonez</div>
                </li>
                <li>
                  <strong>Ms. Dominga Pareja Espinosa ✝️</strong>
                  <div className="text-sm italic text-gray-500">Proxy: Mrs. Elvira Pareja Camagong & Mr. Graciano Camagong</div>
                </li>
              </ul>
            </div>

            {/* Brothers & Sister of Groom */}
            <div className={sectionCard} style={{ borderColor: colors.dustyBlue }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: colors.lilac, fontFamily: "var(--font-playfair)" }}>
              Sister of the Groom
              </h3>
              <ul className="text-gray-700 space-y-1">
                <li><strong>Reinalyn Espinosa Sakata</strong> (Sister)</li>
              </ul>
            </div>

            {/* Parents of Bride */}
            <div className={sectionCard} style={{ borderColor: colors.sageGreen }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: colors.pinkAccent, fontFamily: "var(--font-playfair)" }}>
                Parents of the Bride
              </h3>
              <ul className="text-gray-700 space-y-1">
                <li><strong>Mr. Salman Ceren</strong></li>
                <li><strong>Mrs. Victoria Valiente Taladro</strong></li>
              </ul>
            </div>

            {/* Sample Dress Images (two stacked) */}
            <div className={`${sectionCard} flex flex-col gap-4`} style={{ borderColor: colors.ashGray }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: colors.lilac }}>Sample Dress Ideas</h3>
              <div className="grid grid-cols-1 gap-3">
                <img src="/images/dress-sample1.jpeg" alt="Sample dress 1" className="w-full h-48 object-cover rounded-lg shadow-md" />
                <img src="/images/dress-sample2.jpeg" alt="Sample dress 2" className="w-full h-48 object-cover rounded-lg shadow-md" />
              </div>

              <p className="mt-2 text-sm text-gray-600 italic">
                Ninang/VIP: Ash Gray long gown · Ninong/VIP: Black suit with gray tie · Guests: elegant dress, blouse, polo.
              </p>
            </div>
          </div>

          {/* Center column */}
          <div className="space-y-6">
            {/* Principal VIP Sponsors (Mr) */}
            <div className={sectionCard} style={{ borderColor: colors.dustyBlue }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: colors.pinkAccent, fontFamily: "var(--font-playfair)" }}>
                Principal VIP / Sponsors (Mr)
              </h3>
              <ol className="list-decimal ml-5 text-gray-700 space-y-1">
                <li>Hon. Mayor Strike Revilla</li>
                <li>Hon. BM Edwin Malvar</li>
                <li>Mr. Jolly Bacolod</li>
                <li>Mr. Chito Ibariento</li>
                <li>Mr. Glenn Camarce</li>
                <li>Mr. Alexander D. Felizardo</li>
                <li>Mr. Sabas Ordoñez</li>
                <li>Mr. Angelito Francisco</li>
                <li>Mr. Peter Albino</li>
                <li>Atty. Kent Avestruz</li>
                <li>Atty. Luisito Gaudier</li>
                <li>Mr. Oliver Ordoñez</li>
                <li>Mr. Rogelio Surigao</li>
                <li>Mr. Elmer Ordoñez</li>
                <li>Mr. Romeo Sobrepeña</li>
                <li>Mr. Xandro Pulga</li>
                <li>Mr. George Gawaran</li>
              </ol>
            </div>

            {/* Principal VIP Sponsors (Mrs/Ms) */}
            <div className={sectionCard} style={{ borderColor: colors.lilac }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: colors.dustyBlue, fontFamily: "var(--font-playfair)" }}>
                Principal VIP / Sponsors (Mrs / Ms)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                <ol className="list-decimal ml-5 space-y-1">
                  <li>Hon. Catherine Sarino-Evaristo</li>
                  <li>Ms. Mavlyuda Avazova</li>
                  <li>Ms. Ligaya A. Cas</li>
                  <li>Ms. Ma. Theresa Cameros</li>
                  <li>Mrs. Alma Camarce</li>
                  <li>Mrs. Melita Felizardo</li>
                  <li>Mrs. Matea Ordoñez</li>
                  <li>Ms. Virginia Pascual</li>
                  <li>Mrs. Guadalope Albino</li>
                </ol>
                <ol className="list-decimal ml-5 space-y-1">
                  <li>Mrs. Lyn Avestruz</li>
                  <li>Mrs. Irene Gaudier</li>
                  <li>Mrs. Rowena Ordoñez</li>
                  <li>Ms. Queleopa D. Vallente</li>
                  <li>Mrs. Terry Mae Ordonez</li>
                  <li>Ms. Romila Zapanta</li>
                  <li>Mrs. Ma. Leilani Pulga</li>
                  <li>Mrs. Janett Gawaran</li>
                  <li>Mrs. Arlene M. Pagtalunan</li>
                </ol>
                <ol className="list-decimal ml-5 space-y-1 md:col-span-2">
                  <li>Mrs. Gemma Tongo</li>
                  <li>Ms. Jhornadine Pareja</li>
                  <li>Ms. Ma. Connie Nario</li>
                  <li>Ms. Donna Marie Malapad</li>
                  <li>Mrs. Myrla T. Siazar</li>
                  <li>Mrs. Marissa Pareja</li>
                  <li>Mrs. Noreen Reyes</li>
                  <li>Mrs. Baby Grace Mariano</li>
                  <li>Mrs. Rose Annie Dadula</li>
                  <li>Mrs. Sheryl Tierney (Proxy: Rhean Dacara)</li>
                </ol>
              </div>
            </div>

            {/* Bridal/Grooms Party leaders */}
            <div className={sectionCard} style={{ borderColor: colors.ashGray }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: colors.lilac, fontFamily: "var(--font-playfair)" }}>
                Party Leads
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Best Man:</strong> Meynard Palmiano</li>
                <li><strong>Maid of Honor:</strong> Ms. Jennifer T. David</li>
                <li><strong>Man of Honor:</strong> Hezar Ceren</li>
                <li><strong>Matron of Honor:</strong> Mrs. Angelica R. Mapili</li>
              </ul>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Bridesmaids */}
            <div className={sectionCard} style={{ borderColor: colors.pinkAccent }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: colors.dustyBlue, fontFamily: "var(--font-playfair)" }}>
                Bridesmaids
              </h3>
              <ul className="text-gray-700 space-y-1">
                <li>Jona Batiancila</li>
                <li>Ramilyn Saloritos</li>
                <li>Arie Espinosa</li>
                <li>Lyka So</li>
                <li>Danica Quiambao</li>
                <li>Richanne Tamang</li>
                <li>Riza Borril</li>
                <li>Meljoy Rabi</li>
                <li>Mary Joy Pame</li>
              </ul>
            </div>

            {/* Groomsmen */}
            <div className={sectionCard} style={{ borderColor: colors.dustyBlue }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: colors.lilac, fontFamily: "var(--font-playfair)" }}>
                Groomsmen
              </h3>
              <ul className="text-gray-700 space-y-1">
                <li>Manuel Nieves</li>
                <li>Mark Joshua Leynes</li>
                <li>Enrico Bartolome</li>
                <li>Ayuri Ambrocio</li>
                <li>Jayvee Cajigas</li>
                <li>Genesis Unas</li>
                <li>Mark Joseph Tupaz</li>
                <li>Mark Singson</li>
                <li>Raffy Fami</li>
              </ul>
            </div>

            {/* Secondary Sponsors */}
            <div className={sectionCard} style={{ borderColor: colors.sageGreen }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: colors.pinkAccent, fontFamily: "var(--font-playfair)" }}>
                Secondary Sponsors
              </h3>

              <div className="grid grid-cols-1 gap-3">
                <div>
                  <h4 className="font-semibold text-gray-800">Candle</h4>
                  <p className="text-gray-700">Mr. Russell Renz A. Donato · Ms. Alyssa Monique Lituañas</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">Cord</h4>
                  <p className="text-gray-700">Mr. Ali Aguiman · Ms. Maricar Barad</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">Veil</h4>
                  <p className="text-gray-700">Mr. John Michael Robles · Mrs. Alyssa Marie Robles</p>
                </div>
              </div>
            </div>

            {/* Ceremony helpers (ring, arrhae, bible, flower groups) */}
            <div className={sectionCard} style={{ borderColor: colors.ashGray }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: colors.lilac, fontFamily: "var(--font-playfair)" }}>
                Ceremony Roles
              </h3>

              <ul className="text-gray-700 space-y-2">
                <li><strong>Ring Bearer:</strong> Carl Andrew Leynes</li>
                <li><strong>Arrhae / Coin Bearer:</strong> Ezekiel Florano Ordoñez</li>
                <li><strong>Bible Bearer:</strong> Aldwayne G. Escobar</li>
              </ul>

              <hr className="my-3" />

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Flower Girls</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-gray-700">
                  <div>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Alice Palmiano</li>
                      <li>Angelic Mae Francisco</li>
                      <li>Margarette Leynes</li>
                      <li>Pray Ranes</li>
                      <li>Kiyana Akisha Narido</li>
                      <li>Vrianah Kylie Yacap</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Reighel Hailee Taladro</li>
                      <li>Ayesha Keith B. Cajigas</li>
                      <li>Cassandra Angela Guevarra</li>
                      <li>Maria Nervia Baloro</li>
                      <li>Sultan Gurmel</li>
                      <li>Elizabeth Cadorna Bajao</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <h4 className="font-semibold text-gray-800">Flower Boys</h4>
                <p className="text-gray-700">Pio Ranes · Mio Taladro · Hiro Taladro</p>
              </div>

              <div className="mt-3">
                <h4 className="font-semibold text-gray-800">Lady Flowers</h4>
                <p className="text-gray-700">Joh Montecillo · Joy Tafalla · Jeh Tampor</p>
              </div>

              <div className="mt-3">
                <h4 className="font-semibold text-gray-800">Little Bride & Groom</h4>
                <p className="text-gray-700">Little Bride: Julie Ann Nicolasora Lequiron · Little Groom: Adriel Gavin Camarce Samson</p>
              </div>

              <div className="mt-3">
                <h4 className="font-semibold text-gray-800">Fur Baby Bearers</h4>
                <p className="text-gray-700">Catherine Bitancor (Sassy) · Bhal Aruyal (Ken-Ken)</p>
              </div>

              <div className="mt-3">
                <h4 className="font-semibold text-gray-800">Banner</h4>
                <p className="text-gray-700">Kaiden Narido Mirando</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer / Dress code */}
        <section className="mt-8 bg-white/90 rounded-2xl p-6 shadow-md border border-white/60">
          <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)", color: colors.lilac }}>
            Dress Code
          </h3>
          <p className="text-gray-700 mb-2">🌸 <strong>Ninang / VIP Sponsors:</strong> Ash Gray long gown</p>
          <p className="text-gray-700 mb-2">🌸 <strong>Ninong / VIP Sponsors:</strong> Black suit, long white sleeves with gray neckties</p>
          <p className="text-gray-700">👗 <strong>Guest:</strong> Dress, blouse, polo shirts (smart / semi-formal)</p>
        </section>
      </div>
    </main>
  );
};

export default Entourage;
