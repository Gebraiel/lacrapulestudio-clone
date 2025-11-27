import { useContext, useEffect } from "react";
import SlideDown from "../ui/Main";
import Slider from "../ui/Slider";
import Main from "../ui/Main";
const slider = {
  sliders: [
    {
      id: 1,
      title: "Audemars Piguet",
      subtitle: "Royal Oak",
      media:
        "https://res.cloudinary.com/dmaemkiev/video/upload/v1764069308/d14a7f00-9300fd7d_q0ceku.mp4",
    },
    {
      id: 2,
      title: "Coperni",
      subtitle: "Disney",
      media:
        "https://res.cloudinary.com/dmaemkiev/video/upload/v1764069253/0aa735e0-7c67a488_r4xnay.mp4",
    },
    {
      id: 3,
      title: "LANCÔME",
      subtitle: "GIFTING CAMPAIGN",
      media:
        "https://res.cloudinary.com/dmaemkiev/video/upload/v1764069259/e1650a1f-d3268a6e_qr3at3.mp4",
    },
    {
      id: 4,
      title: "DOLCE & GABBANA",
      subtitle: "LIP OIL PLUMPER",
      media:
        "https://res.cloudinary.com/dmaemkiev/video/upload/v1764068944/41af886a-0822e39c_opl9ki.mp4",
    },
    {
      id: 5,
      title: "MCM",
      subtitle: "PINK & BLUE VISETOS",
      media:
        "https://res.cloudinary.com/dmaemkiev/video/upload/v1764068874/367901a1-ea73bd33_hkeyhg.mp4",
    },
  ],
  bullets: [
    {
      title: "Audemars Piguet",
      sliderId: 1,
    },
    {
      title: "Coperni",
      sliderId: 2,
    },
    {
      title: "Lancome",
      sliderId: 3,
    },
    {
      title: "Dolce & Gabbana",
      sliderId: 4,
    },
    {
      title: "MCM",
      sliderId: 5,
    },
  ],
};
export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, []);
  return (
      <section className="h-screen bg-black overflow-hidden">
        <Slider slider={slider} />
      </section>
  );
}
