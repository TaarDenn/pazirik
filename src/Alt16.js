import { useEffect, useRef, useState } from "react";

import ObserverProvider, { useObserver } from "./useObserver";
import B0 from "./brands/0.svg";
import B1 from "./brands/1.svg";
import B2 from "./brands/2.svg";
import B3 from "./brands/3.svg";
import B4 from "./brands/4.svg";
import B5 from "./brands/5.svg";
import LogoWhite from "./pics/logo-white.png";

const brands = [B0, B1, B2, B3, B4, B5];

export default function Alt16() {
  const ref = useRef(null);

  useEffect(() => {
    const container = document.getElementById("main");
    const itemToScroll = document.getElementById("scrollable");

    const scroll = (e) => {
      if (Math.abs(e.deltaY) > 0) {
        e.preventDefault();
        itemToScroll.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener("wheel", scroll);
    return () => container.removeEventListener("wheel", scroll);
  }, []);

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
      <main
        id="main"
        className="scroll-smooth h-screen fixed w-screen anjoman-title"
      >
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
        <div className="z-1 fixed top-0 w-full h-[100svh] bg-black">
          <VideoPlayer />
        </div>
        <div
          ref={ref}
          id="scrollable"
          className="overflow-y-hidden relative z-10 h-full w-full overflow-x-scroll "
        >
          <div className="w-[1700vw] h-full flex">
            <div className="w-[100vw] h-full flex"></div>
            <LandingFrame />
            <div className="bg-black/70 w-[100vw] min-w-[320px] justify-center h-full flex border-l-2 items-center text-[6vw] text-white">
              هرآنچه بخواهید
            </div>
            <Farsh />
            <div className="border-l-2 bg-black/70 w-[100vw] min-w-[320px] justify-center h-full flex items-center text-[6vw] text-white">
              معتبرترین برندها
            </div>
            <Brands />
            <div className="bg-black/70 w-[100vw] min-w-[320px] justify-center h-full flex border-l-2 items-center text-[6vw] text-white">
              دمی بیاسایید
            </div>
            <Cafe />
            <div className=" bg-black/70 w-[100vw] min-w-[320px] justify-center h-full flex border-l-2 items-center text-[6vw] text-white">
              درباره فرش بدانید
            </div>
            <Majale />
            <Footer />
            <Ending />
          </div>
        </div>
      </main>
    </ObserverProvider>
  );
}

const Cafe = () => {
  const ref = useRef();
  const { progress } = useObserver(ref.current);

  const t = progress;
  return (
    <div className="relative w-[150vw] h-full flex">
      <div className="z-3 sticky left-0 w-[100vw] h-full pt-24 bg-[rgb(129,96,66)]">
        <div style={{ opacity: 1 }} className="w-[100vw] h-full">
          <div className="w-full h-screen bg-[url(./coffee-bg.jpg)] bg-no-repeat bg-top-left bg-[length:auto_calc(100%-6rem)]">
            <div className="w-full h-full bg-gradient-to-l from-[rgb(129,96,66)]">
              <div dir="rtl" className="w-full h-full">
                <div className="w-1/2 min-w-[320px]">
                  <div
                    style={{ transform: `translate(0px,${t * 30}px)` }}
                    className="w-full text-orange-100 pr-[10%]"
                  >
                    {" "}
                    <h1 className="text-6xl pb-4">کافه پازیریک</h1>
                    <p className="bg-orange-100 text-[rgb(129,96,66)] p-4">
                      {" "}
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                      شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                      درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
                      طلبد.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={ref}
        className="absolute left-[100vw] w-[50vw] h-full text-4xl pt-[80vh] sm:pt-[55vw] pl-8"
      >
        <p className="bg-orange-100 text-[rgb(129,96,66)] p-4">طبقه اول</p>
      </div>
    </div>
  );
};
const VideoPlayer = () => {
  const source = useRef(null);
  const player = useRef(null);
  const [sourceIndex, setSourceIndex] = useState(1);

  const handleSource = () => {
    if (sourceIndex === 3) setSourceIndex(1);
    else setSourceIndex(sourceIndex + 1);

    player.current.load();
    player.current.play();
  };

  return (
    <video
      preload="auto"
      onEnded={handleSource}
      ref={player}
      className="w-full h-full object-cover object-center"
      muted
      autoPlay
      playsInline
    >
      <source
        ref={source}
        src={`./p-${sourceIndex}.mp4`}
        type="video/mp4"
        className="w-full h-full object-cover"
      />
    </video>
  );
};

const Footer = () => {
  const ref = useRef();
  const { progress } = useObserver(ref.current, true);
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

const Ending = () => {
  const ref = useRef();
  const { progress } = useObserver(ref.current);

  return (
    <div
      ref={ref}
      style={{ opacity: 1 - progress }}
      className="bg-black/70 w-[100vw] justify-center h-full flex items-center text-[6vw] text-white"
    ></div>
  );
};
const LandingFrame = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);

  const { progress } = useObserver(ref.current);

  const { progress: progress_2 } = useObserver(ref2.current);
  const o = constrainAndMap(progress_2, 0.5, 0.85);

  return (
    <div id="frame" dir="rtl" ref={ref} className="w-[200vw]">
      <div
        style={{ opacity: progress * 2 }}
        className="relative h-[100svh] w-full"
      >
        <div
          id="about"
          className="h-full pb-8 px-8 pt-24 w-full flex text-white"
        >
          <div className="w-[100vh] h-full flex flex-col">
            <div dir="ltr" className="relative text-5xl sm:text-6xl">
              <div
                style={{
                  opacity: o * 2,
                }}
                className="w-full h-full bg-white/80 absolute top-0 left-0"
              ></div>
              <div
                className="w-content"
                style={{
                  color: `rgb(${255 - o * 2 * 200},${255 - o * 2 * 200},${
                    255 - o * 2 * 200
                  })`,
                }}
              >
                {" "}
                <p className="sticky left-0 w-fit">SARAY</p>
                <p className="sticky left-0 w-fit">PAZIRIK</p>
              </div>
            </div>
            <div
              ref={ref2}
              className="h-full flex text-4xl sm:text-6xl items-center"
            >
              <div className="flex flex-col sm:flex-row-reverse">
                <h2 className="w-2/5 flex items-end pb-4 sm:pb-0">درباره ما</h2>

                <p className="w-full text-[3vw] sm:text-[2vw] lg:text-[1.2vw] leading-relaxed text-zinc-700 h-fit px-2 bg-white/70 backdrop-blur-md flex text-white py-12 ">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
                </p>
              </div>

              <div className="w-[80%] h-full flex flex-col"></div>
              <div className="w-[35%] border-t-2 border-r-2 border-b-2 h-full flex flex-col">
                <div className="h-full flex flex-col pt-[6vw]">
                  <p className="text-[12vw] h-[12vw]">سرای</p>
                  <p className="text-[5vw] sm:text-[3vw] text-white ">
                    فرش / گلیم / گبه
                  </p>
                  <p className="text-[12vw] sm:text-[10vw] pt-6">پازیریک</p>
                </div>
                <div className="relative w-full h-full border-t-2 visible sm:invisible">
                  <img
                    src={LogoWhite}
                    alt="logo"
                    className="absolute w-full h-full object-center object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[20%] border-2 h-full">
            <img
              src={LogoWhite}
              alt="logo"
              className="w-full h-full object-center object-cover invisible sm:visible"
            />
          </div>
        </div>
        {/* <div
              className="z-0 absolute top-0 w-full h-full bg-black"
              style={{ opacity: `var(--opacity-overlay)` }}
            ></div> */}
      </div>
      {/* </div> */}
    </div>
  );
};

const Farsh = () => {
  const ref = useRef(null);

  const { progress } = useObserver(ref.current);

  const a = `${(100 - constrainAndMap(progress, 0, 1) * 80).toFixed(2)}%`;
  const b = constrainAndMap(progress, 0, 0.2);
  const x = `${100 - constrainAndMap(progress, 0.3, 0.65) * 100}%`;

  return (
    <div className="bg-black/70 w-[200vw] h-full">
      <div
        className="w-full h-full relative"

        //  style={{ opacity: b }}
      >
        <div ref={ref} className="absolute w-[50%] left-[50%] h-full"></div>
        <div className="sticky h-full w-[100vw] max-w-[900px] left-0">
          <div
            style={{ transform: `translate(0px,${x})` }}
            className=" absolute h-full w-full max-w-[900px] bg-emerald-900 -z-10"
          ></div>
          <div className="w-full sm:w-1/2 pt-24 px-4 pb-4 sm:right-10 z-30">
            {/* <p className="text-white  text-2xl py-2 text-center">
              هر آنچه بخواهید
            </p> */}
            <p className="text-white border-2 border-white text-8xl py-2 text-center">
              فرش
            </p>
            <p className=" bg-white text-emerald-900 text-4xl py-2 border-2 border-white text-center">
              ماشینی | دستباف
            </p>
            <p className="border-2 text-white text-8xl w-[200px] py-2 border-white text-center">
              گلیم
            </p>
            <p className="border-t-2 h-12 text-white bg-yellow-900 text-2xl w-[200px] py-2 border-b-2 border-x-2 border-white text-center"></p>
            <p className="text-white text-2xl w-[300px] py-2 border-b-2 border-x-2 border-t-8 border-white text-center">
              گبه / جاجیم
            </p>
            <div
              // ref={ref}
              className="absolute top-0 center w-4/5 h-full min-w-[320px] max-w-[800px] mix-blend-lighten"
            >
              <img
                style={{ transform: `translate(0px,${a})` }}
                src="./b.webp"
                className="w-full h-full object-top object-contain sm:object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Brands = () => {
  const ref = useRef(null);
  const { progress } = useObserver(ref.current);

  return (
    <div id="brands" ref={ref} className="w-[300vw] h-full">
      <div className="h-full w-full relative bg-white/90">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[rgb(216,203,194)]">
          <div style={{ opacity: progress * 3 }}>
            {/* <div className="basis-4/5 pt-24 pb-4"> */}
            <div className="sticky left-0 w-[100vw] h-full flex flex-col">
              <div className="px-2 py-2 h-48 flex items-center justify-end text-2xl text-white text-end bg-zinc-700/50">
                <p className="pt-24"> معتبرترین برندهای فرش</p>
              </div>
              <p className="px-2 py-2 h-12 flex items-center justify-end text-zinc-700/50 text-end ">
                در بیش از ۵۰ فروشگاه فعال
              </p>
            </div>
            <div className="flex-auto h-96 items-center flex w-full p-4 justify-between gap-4  pb-4">
              {[...brands, ...brands].map((b, i) => (
                <div className=" p-2 flex items-center" key={`image${i}`}>
                  {" "}
                  <img src={b} width={240} height={240} />
                </div>
              ))}
            </div>
            <div className="sticky left-0 h-36 w-[100vw] flex items-center justify-center">
              <button className="text-white p-2 bg-red-900">
                مشاهده تمام فروشگاه‌ها
              </button>
            </div>
          </div>
          {/* <div className="border-t-1 border-l-1 border-b-1"></div> */}
        </div>
      </div>
    </div>
  );
};

const Majale = () => {
  const ref = useRef();
  const { progress } = useObserver(ref.current);

  return (
    <div id="mag" className="relative w-[150vw] h-full flex">
      <div className="sticky left-0  overflow-hidden h-screen w-[100vw] bg-red-900">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-900 "></div>
        <div className="absolute top-0 right-0 w-full h-full">
          <img
            src="./pattern.jpg"
            className="-mr-[20%] w-full object-cover h-full object-right mix-blend-darken md:object-contain"
          />
        </div>
        <div
          style={{ transform: `translate(0px,${progress * 50}px)` }}
          className="absolute top-24 left-0 h-full px-8 z-200 text-left"
        >
          <p className="text-red-900 py-2 bg-[rgb(216,203,194)] text-6xl">
            مجله پازیریک
          </p>
          <p className="text-[rgb(216,203,194)] border-2 w-[300px] border-[rgb(216,203,194)] py-2 text-4xl">
            PAZIRIK MAG
          </p>
          <p dir="rtl" className="w-[320px] text-[rgb(216,203,194)] pt-8">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد.
          </p>
          <div
            style={{ transform: `translate(0px,${progress * 50}px)` }}
            className="w-full pt-8"
          >
            <button className="bg-emerald-900 text-white px-4 py-2">
              مشاهده بیشتر
            </button>
          </div>
        </div>
      </div>
      <div ref={ref} className="absolute left-[100vw] w-[50vw] h-full"></div>
    </div>
  );
};

export const WorkHour = ({ progress }) => {
  const minute = progress * 960;
  const hour = progress * 400;
  const clock = progress * 100;

  return (
    <div className="relative top-0 right-0 w-[100px] h-[100px]">
      <div
        style={{ transform: `rotateZ(${minute}deg)` }}
        className="absolute top-[50px] left-[50px] w-[25px] h-[2px] bg-white origin-left"
      ></div>

      <div
        style={{ transform: `rotateZ(${hour}deg)` }}
        className="absolute top-[50px] left-[50px] w-[40px] h-[2px] bg-white origin-left"
      ></div>

      <div
        style={{ transform: `rotateZ(${clock}deg)` }}
        className="absolute top-0 left-0 w-[100px] h-[100px] border-l-transparent border-2 rounded-t-full rounded-b-full border-white"
      ></div>
    </div>
  );
};

const constrainAndMap = (val, dmin, dmax) => {
  if (val < dmin) return 0;
  if (val > dmax) return 1;

  return (val - dmin) / (dmax - dmin);
};
