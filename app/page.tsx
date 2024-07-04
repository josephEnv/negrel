"use client"

import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/NavBar";
import Slider from "react-slick"
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Home() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <main>
      <section id="main" className="">
        <NavBar />
        <div id="text" className="bg-[url('/fondo.webp')] min-h-screen w-full flex justify-center items-center">
          <div className="flex flex-col text-center">
            <h1 className="font-bold text-7xl text-white">SABOREA Y DISFRUTA</h1>
            <p className=" text-2xl text-white mt-5">Experimenta el sabor del cielo en cada bocado.</p>
            <div className="flex flex-row gap-3 justify-center items-center mt-5">
              <div className=" pl-6 pr-6 pt-3 pb-3 rounded-md bg-[#4B4BD2] font-bold text-white text-xl">
                <Link href="">Nosotros</Link>
              </div>
              <div className="pl-6 pr-6 pt-3 pb-3 border border-white rounded-md font-bold text-white text-xl">
                <Link href="">Visitanos</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center min-h-screen flex-col p-20">
        <div id="text" className="flex flex-col pr-20">
          <div id="title" className="text-5xl font-bold">
            <h1>Cheesy Dreams es crear momentos dulces y memorables para nuestros clientes</h1>
          </div>
          <div id="paraph" className="text-lg mt-5 pr-36">
            <p>Visite Cheesy Dreams en Guayaquil para disfrutar de una deliciosa experiencia cafetera. Disfruta de nuestros bocadillos preparados por expertos y de un ambiente acogedor. Un espacio para disfrutar de postres junto a tus seres queridos o amigos cercanos</p>
          </div>
        </div>
        <div className="relative w-full h-[35rem] mt-9">
          <img src="/restaurant.webp" alt="rest" className="absolute rounded-xl inset-0 w-full h-full object-cover" />
        </div>
      </section>
      <section id="wrapper" className="flex flex-col gap-12 justify-center items-center">
        <div id="row1" className="flex flex-row gap-12">
          <div className=" w-96 h-96 relative cursor-pointer hover:opacity-70 transition-all">
            <Image src={"/imagen2.webp"} className="absolute rounded-xl inset-0 w-full h-full object-cover" alt="" width={180} height={180} />
          </div>
          <div className=" w-96 h-96 relative cursor-pointer hover:opacity-70 transition-all">
            <Image src={"/imagen3.webp"} className="absolute rounded-xl inset-0 w-full h-full object-cover" alt="" width={180} height={180} />
          </div>
          <div className=" w-96 h-96 relative cursor-pointer hover:opacity-70 transition-all">
            <Image src={"/imagen4.webp"} className="absolute rounded-xl inset-0 w-full h-full object-cover" alt="" width={180} height={180} />
          </div>
        </div>
        <div id="row2" className="flex flex-row gap-12">
          <div className=" w-96 h-96 relative cursor-pointer hover:opacity-70 transition-all">
            <Image src={"/imagen5.webp"} className="absolute rounded-xl inset-0 w-full h-full object-cover" alt="" width={180} height={180} />
          </div>
          <div className=" w-96 h-96 relative cursor-pointer hover:opacity-70 transition-all">
            <Image src={"/imagen6.webp"} className="absolute rounded-xl inset-0 w-full h-full object-cover" alt="" width={180} height={180} />
          </div>
          <div className=" w-96 h-96 relative cursor-pointer hover:opacity-70 transition-all">
            <Image src={"/imagen7.webp"} className="absolute rounded-xl inset-0 w-full h-full object-cover" alt="" width={180} height={180} />
          </div>
        </div>
      </section>
      <section id="slogan" className="flex flex-col justify-center items-center min-h-[75vh]">
        <div id="title" className=" font-semibold text-5xl w-full pl-28">
          <h1>Donde el sabor se encuentra con una sonrisa</h1>
        </div>
        <div className="flex flex-row gap-4 mt-10">
          <div className=" w-72">
            <div className="font-semibold text-3xl">
              <h1>
                4.7 - Estrellas de Rating
              </h1>
            </div>
            <div className="text-lg">
              <p>
                A los clientes les encanta nuestro ambiente acogedor y nuestros deliciosos postres.
              </p>
            </div>
          </div>
          <div className=" w-72">
            <div className="font-semibold text-3xl">
              <h1>
                50+ Opciones de Menú
              </h1>
            </div>
            <div className="text-lg">
              <p>
                Disfruta de una amplia variedad de bebidas, pasteles y snacks.
              </p>
            </div>
          </div>
          <div className=" w-72">
            <div className="font-semibold text-3xl">
              <h1>
                Más de 5,000 postres vendidos
              </h1>
            </div>
            <div className="text-lg">
              <p>
                Únete a los muchos que han disfrutado de nuestros postres recién hechos.
              </p>
            </div>
          </div>
          <div className=" w-72">
            <div className="font-semibold text-3xl">
              <h1>
                El preferido de la gente
              </h1>
            </div>
            <div className="text-lg">
              <p>
                Orgullosamente sirviendo a Guayaquil con una sonrisa desde 2022
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center min-h-[40vh] pl-14 pr-14">
        <Swiper
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="w-full flex flex-col items-center">
              <div className="w-[70rem] flex flex-col gap-6">
                <div>
                  <Image src={"/samuel.webp"} alt="persona" width={90} height={100} className="rounded-full" />
                </div>
                <div className="text-4xl">
                  <h1>Nada mejorar para empezar el dia que un desayuno en Cheesy Dreams </h1>
                </div>
                <div className="text-2xl"> -- Samuel.</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex flex-col items-center">
              <div className="w-[70rem] flex flex-col gap-6">
                <div>
                  <Image src={"/Gilda.webp"} alt="persona" width={90} height={100} className="rounded-full" />
                </div>
                <div className="text-4xl">
                  <h1>Me encantan los postres de Cheesy Dreams, y compartir de ellos junto a todos mis amigos.</h1>
                </div>
                <div className="text-2xl"> -- Gilda.</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex flex-col items-center">
              <div className="w-[70rem] flex flex-col gap-6">
                <div>
                  <Image src={"/leonardo.webp"} alt="persona" width={90} height={100} className="rounded-full" />
                </div>
                <div className="text-4xl">
                  <h1>Le agradezco a Cheesy Dreams por darme un espacio para poder disfrutar junto con mis amigos mis postres favoritos</h1>
                </div>
                <div className="text-2xl"> -- Leonardo.</div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="flex justify-center items-center min-h-screen flex-row gap-10 p-16">
          <div>
            <Image className="w-[150rem] rounded-xl" src={"/restaurant2.webp"} alt="rest" width={500} height={500} />
          </div>
          <div>
            <h1 className="text-5xl">
              Acerca de Nosotros
            </h1>
            <div className="mt-10">
              <p className="text-lg mb-7">Cheesy Dreams es tu destino único para postres artesanales tan hermosos a la vista como deliciosos al paladar. Nuestros apasionados panaderos utilizan solo los mejores ingredientes para elaborar cada delicia con amor y experiencia, asegurando una experiencia culinaria inolvidable.</p>
              <p className="text-lg">Entra en nuestro acogedor refugio y deja que el aroma de las delicias recién horneadas te seduzca. Nuestro ambiente acogedor es el escenario perfecto para relajarse, disfrutar de dulces delicias y crear recuerdos preciados con sus seres queridos.</p>
            </div>
          </div>
      </section>
    </main>
  );
}
