import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";
import Frame from "@/public/images/frame.png";
import MathDemo from "@/public/yes.svg";
import Biglogo from "@/public/logogo.svg";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] dark:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.600/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <Image src={Biglogo} alt="Logo" width={270} height={100} />
              </div>
            </div>
            <h1
              className="mb-6 border-y text-5xl font-medium text-gray-900 dark:text-white 
                font-georgia leading-tight tracking-tight
                [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] 
                dark:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.600/.8),transparent)1] 
                md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Write science notes like it's pen and paper <br className="max-lg:hidden" />
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700 dark:text-gray-300 
                  font-georgia leading-relaxed"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                clarity is a no-code platform that allows you to write and organize your scientific work with high flexibility.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] dark:before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.600/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-[#A19FE7] to-[#A19FE0] bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Join Waitlist{" "}
                      <span className="ml-1 tracking-normal text-white transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-zinc-800 dark:bg-white text-white dark:text-gray-800 shadow hover:bg-zinc-700 dark:hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Our Features
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative flex flex-col gap-4 rounded-2xl bg-grey-900 px-5 py-3 shadow-xl transition-transform hover:scale-105 
              before:pointer-events-none before:absolute before:-inset-5 before:border-y 
              before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]
              dark:before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.600/.8),transparent)1]
              after:absolute after:-inset-5 after:-z-10 after:border-x 
              after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]
              dark:after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.600/.8),transparent)1]">
              {/* Browser-style header */}
              <div className="relative mb-4 flex items-center">
                <div className="flex gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-[#FF5F57]"></div>
                  <div className="h-2 w-2 rounded-full bg-[#FFBD2E]"></div>
                  <div className="h-2 w-2 rounded-full bg-[#28C840]"></div>
                </div>
              </div>

              {/* Stacked images */}
              <div className="relative space-y-4">
                <Image
                  src={MathDemo}
                  alt="Math equation demonstration"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
