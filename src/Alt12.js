import ObserverProvider, { useObserver } from "./useObserver";

import { useRef, useState, useEffect } from "react";
import B0 from "./brands/0.svg";
import B1 from "./brands/1.svg";
import B2 from "./brands/2.svg";
import B3 from "./brands/3.svg";
import B4 from "./brands/4.svg";
import B5 from "./brands/5.svg";
import { WorkHour } from "./Alt16";
import LogoWhite from "./pics/logo-white.png";
const brands = [B0, B1, B2, B3, B4, B5];

export default function Alt12() {
  const source = useRef(null);
  const player = useRef(null);
  const [sourceIndex, setSourceIndex] = useState(1);

  const handleSource = () => {
    if (sourceIndex === 3) {
      setSourceIndex(1);
    } else {
      setSourceIndex(sourceIndex + 1);
    }
    player.current.load();
    player.current.play();
  };

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }, []);

  return (
    <ObserverProvider>
      <div dir="rtl" className="relative anjoman-title">
        <nav className="fixed top-0 z-20 w-full h-24">
          <ul className="flex justify-around text-white items-center h-24">
            <li>
              <a href="#about">درباره ما</a>
            </li>
            <li>
              <a href="#brands">برندها</a>
            </li>
            <li>
              <a href="#mag">مجله</a>
            </li>

            <li>
              <a href="#footer">ساعات کاری</a>
            </li>
            <li>
              <a href="#footer">آدرس</a>
            </li>
          </ul>
        </nav>

        <div id="video" className="z-1 fixed top-0 w-full h-[100svh]">
          <video
            onEnded={handleSource}
            ref={player}
            className="w-full h-full object-cover object-center"
            muted
            autoPlay
          >
            <source
              ref={source}
              src={`./p-${sourceIndex}.mp4`}
              type="video/mp4"
              className="w-full h-full object-cover"
            />
          </video>
        </div>

        <div className="h-screen"></div>
        <Frame />
        <div className="relative z-1000 h-screen w-full bg-white/80">
          <div className="absolute z-10000 top-0 left-0 h-full w-full px-8 pb-8 pt-24">
            <div className="w-full h-full border-2 border-white z-2000 flex">
              <div id="about" className="basis-3/5 border flex flex-col">
                <p className="w-full text-white text-8xl border-b border-white">
                  ABOUT
                </p>
                <p className="flex-auto w-full backdrop-blur-md text-white text-6xl  pb-4">
                  درباره پازیریک
                </p>

                <p className="flex-auto text-zinc-700 px-2 bg-white/70 backdrop-blur-md flex text-white py-12 ">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
                </p>
              </div>
              <div className="basis-1/2">
                <div className="h-4/5"></div>
                <div className="h-1/5"></div>
              </div>
            </div>
          </div>
          <div className="flex h-full">
            <div className="basis-1/2 bg-red-900/10 p-12 h-full">
              <div className="h-full w-full"></div>
            </div>

            <div className="basis-1/2 h-full">
              <img
                className="w-full h-full object-cover object-left"
                src="./pazirik-6.jpg"
              />
            </div>
          </div>
        </div>
        <Farsh />
        <div className="relative h-screen w-full bg-white">
          <div id="brands" className="flex absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[rgb(216,203,194)]">
            <div className="basis-4/5 pt-24 pb-4">
              <Showable />
            </div>
          </div>
        </div>
        <div
          id="mag"
          className="relative overflow-hidden h-screen w-full bg-red-900"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-900 "></div>
          <div className="absolute top-0 right-0 w-full h-full">
            <img
              src="./pattern.jpg"
              className="-mr-[20%] w-full object-cover h-full object-right mix-blend-darken md:object-contain"
            />
          </div>
          <div className="absolute top-24 left-0 h-full px-2 z-200 text-left">
            <p className="text-red-900 py-2 bg-[rgb(216,203,194)] text-8xl">
              مجله پازیریک
            </p>{" "}
            <p className="text-[rgb(216,203,194)] border-2 w-[300px] border-[rgb(216,203,194)]  py-2 bg-ref-800 text-4xl">
              PAZIRIK MAG
            </p>
            <p className="w-[400px] text-[rgb(216,203,194)] pt-8">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </ObserverProvider>
  );
}

const Showable = () => {
  const ref = useRef();
  const { progress } = useObserver(ref.current);
  const opacity = constrainAndMap(progress, 0, 0.5);

  return (
    <div  ref={ref}>
      <div style={{ opacity }}>
        <div className="w-full  h-full flex flex-col">
          <p className="px-2 py-2 h-24 flex items-center justify-end text-2xl text-white text-end bg-zinc-700/50">
            معتبرترین برندهای فرش
          </p>
          <p className="px-2 py-2 h-12 flex items-center justify-end text-zinc-700/50 text-end ">
            در بیش از ۵۰ فروشگاه فعال
          </p>
          <div className="flex-auto w-full p-4 justify-center gap-4 grid grid-cols-3 md:grid-cols-6 pb-4">
            {brands.map((b, i) => (
              <div
                className="w-20 h-20 p-2 flex items-center"
                key={`image${i}`}
              >
                {" "}
                <img src={b} width={40} height={40} />
              </div>
            ))}
            {brands.map((b, i) => (
              <div
                className="w-20 h-20 p-2  flex items-center"
                key={`image${i}`}
              >
                {" "}
                <img src={b} width={40} height={40} />
              </div>
            ))}
          </div>
          <div className="h-36 w-full flex items-center justify-end">
            <button className="text-white p-2 bg-red-900">
              مشاهده تمام فروشگاه‌ها
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Farsh = () => {
  const ref = useRef();
  const { progress } = useObserver(ref.current, true, true);

  const transform = `${-100 + constrainAndMap(progress, 0, 1) * 100}%`;

  return (
    <div className="relative h-[100svh] z-100 w-full bg-black">
      <div className="absolute z-100 top-0 w-full h-screen bg-emerald-900"></div>
      <div>
        <div
          ref={ref}
          className=" w-1/2 py-4 min-w-[400px] absolute px-12 top-24 z-200 mr-0 md:mr-[30%] lg:mr-[40%]"
        >
          <p className="text-white  text-2xl py-2 text-center">
            هر آنچه بخواهید
          </p>
          <p className="text-white border-2 border-white text-8xl py-2 text-center">
            فرش
          </p>
          <p className=" bg-white text-emerald-900 text-4xl py-2 border-2 border-white text-center">
            ماشینی | دستباف
          </p>
          <p className="border-2 text-white text-8xl w-[200px] py-2  border-white text-center">
            گلیم
          </p>
          <p className="border-t-2 h-12 text-white bg-yellow-900 text-2xl w-[200px] py-2 border-b-2 border-x-2 border-white text-center"></p>
          <p className="text-white text-2xl w-[300px] py-2 border-b-2 border-x-2 border-t-8 border-white text-center">
            گبه / جاجیم
          </p>
        </div>
      </div>
      <div
        style={{ transform: `translate(${transform}, 0px)` }}
        className="mr-20 w-full h-[100svh] z-120 mix-blend-lighten"
      >
        <img
          src="./a.png"
          className="w-auto h-full object-cover mr-0 md:mr-[30%] lg:mr-[40%] object-right-top"
        />
      </div>
    </div>
  );
};

const Frame = () => {
  const ref = useRef();
  const { progress: opacity } = useObserver(ref.current, false, true);

  return (
    <div className=" w-full h-[100svh]">
      <div className=" h-full w-full">
        <div id="frame" ref={ref} className="z-2 relative h-[100svh] w-full">
          <div className="h-[100svh] pb-8 px-8 pt-24">
            <div
              style={{ opacity }}
              className="z-20 border-2 border-white w-full h-full text-white  flex"
            >
              <div className="basis-1/3 border-l-2 text-6xl">
                <p>SARAY </p>
                <p>PAZIRIK</p>
                <div className="border-t-2 border-white sticky top-16 text-[8vw]">
                  {" "}
                  <p className="text-[12vw] sm:text-[6vw]">سرای </p>
                  <p className="text-[5vw] sm:text-[3vw] py-6 px-2 text-white">
                    فرش / گلیم / گبه{" "}
                  </p>
                  <p className="pb-8 text-[12vw] sm:text-[6vw]"> پازیریک</p>
                </div>
              </div>
              <div className="basis-2/3 h-full">
                <img
                  src={LogoWhite}
                  alt="s"
                  className="w-full h-full object-center object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const ref = useRef();
  const { progress } = useObserver(ref.current, true, true);
  return (
    <footer
      id="footer"
      dir="rtl"
      ref={ref}
      className="bg-zinc-900/70 h-screen w-[100vw] relative z-200 pt-24 px-8 pb-8"
    >
      <div className="relative w-full h-full">
        <div className="flex w-full h-full border-2 bg-zinc-900/70">
          <div className="basis-1/2 border-l text-white">
            <p className="p-4 ">آدرس</p>
            <p className="p-4 border-b-2 ">تهران - خیابان تهران - پلاک ۱۲۲۳</p>
            <p className="p-4 border-b-2 text-end">Tel: +98 21 1223 3333</p>
            <div className="w-full h-2/3">
              <img
                src={LogoWhite}
                alt="s"
                className="w-full h-full object-center object-contain"
              />
            </div>
          </div>
          <div className="basis-1/2 text-white">
            <p className="p-4 border-b-2">ساعات کاری</p>
            <div className="flex flex-col w-full h-full items-center justify-center">
              <WorkHour progress={progress} />
              <div>
                <p className="w-full pt-8">شنبه تا چهارشنبه</p>
                <p className="border-b-2 pt-2 w-full text-center">
                  12:00 - 8:00
                </p>

                <p className="w-full pt-8 text-center">پنج شنبه</p>
                <p className="pt-2 border-b-2 text-center">12:00 - 8:00</p>
                <p className="w-full pt-8 text-center">جمعه‌ها</p>
                <p className="pt-2 border-b-2 text-center">12:00 - 8:00</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="absolute top-3 left-3 w-full h-full border-2"></div> */}
      </div>
    </footer>
  );
};

const constrainAndMap = (val, dmin, dmax) => {
  if (val < dmin) return 0;
  if (val > dmax) return 1;

  return (val - dmin) / (dmax - dmin);
};
