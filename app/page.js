import Image from "next/image";
import localFont from "next/font/local";  //importing the font
import Link from "next/link";


// Defining the new font a to use it
const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});
const poppinsItalic = localFont({
  src: "./fonts/Poppins-MediumItalic.ttf",
  variable: "--font-poppinsItalic",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-orange-100">
      <section className="grid grid-cols-2 h-[70vh]">

        <div className="flex flex-col gap-4 justify-center items-center ">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            Welcome to MicroLinks!
          </p>
          <p>
            Shorten your URL for <span className={`text-2xl font-bold text-orange-800 ${poppinsItalic.className}`}>FREE!</span>
          </p>

          <div className='flex gap-3'>
            <Link href="/shorten"><button className='bg-orange-200 shadow-lg p-3 py-1 font-bold text-black rounded-lg'>TRY NOW!</button></Link>
            <Link href="/github"><button className='bg-orange-200 shadow-lg p-3 py-1 font-bold text-black rounded-lg'>Github</button></Link>
          </div>
        </div>

        <div className=" flex items-center justify-center">
          <Image className=" flex mix-blend-darken " src={"/vector.png"} width={500} height={400} alt="Image Vector" />
        </div>


      </section>
    </main>
  );
}
