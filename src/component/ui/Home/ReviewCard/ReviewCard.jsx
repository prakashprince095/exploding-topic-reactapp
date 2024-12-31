import heroImg1 from "/products/Landing/HeroImage1.svg";
import heroImg2 from "/products/Landing/HeroImage2.svg";
import heroImg3 from "/products/Landing/HeroImage3.svg";
import heroImg4 from "/products/Landing/HeroImage4.svg";
import heroImg5 from "/products/Landing/HeroImage5.svg";
import heroImg6 from "/products/Landing/HeroImage6.svg";

const ReviewCard = () => {
  return (
    <>
      <div className="relative flex h-[250px] w-full flex-col items-center justify-center overflow-hidden rounded-xl">
        <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:20s]">
          {/* Marquee Section 1 */}
          <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
            <figure className="relative w-[350px] h-[200px] cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10]">
              <img
                alt="Review Card Background"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="absolute inset-0 z-0"
                src={heroImg3}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  objectFit: "cover",
                  color: "transparent",
                }}
              />
              <figcaption className="absolute top-2 left-2 right-2 z-10 text-white text-lg hidden px-2 py-1 rounded-md">
                3
              </figcaption>
            </figure>
            <figure className="relative w-[350px] h-[200px] cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10]">
              <img
                alt="Review Card Background"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="absolute inset-0 z-0"
                src={heroImg4}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  objectFit: "cover",
                  color: "transparent",
                }}
              />
              <figcaption className="absolute top-2 left-2 right-2 z-10 text-white text-lg hidden px-2 py-1 rounded-md">
                4
              </figcaption>
            </figure>
            <figure className="relative w-[350px] h-[200px] cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10]">
              <img
                alt="Review Card Background"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="absolute inset-0 z-0"
                src={heroImg5}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  objectFit: "cover",
                  color: "transparent",
                }}
              />
              <figcaption className="absolute top-2 left-2 right-2 z-10 text-white text-lg hidden px-2 py-1 rounded-md">
                5
              </figcaption>
            </figure>
            <figure className="relative w-[350px] h-[200px] cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10]">
              <img
                alt="Review Card Background"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="absolute inset-0 z-0"
                src={heroImg6}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  objectFit: "cover",
                  color: "transparent",
                }}
              />
              <figcaption className="absolute top-2 left-2 right-2 z-10 text-white text-lg hidden px-2 py-1 rounded-md">
                6
              </figcaption>
            </figure>
          </div>

          {/* Marquee Section 2 */}
          <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
            <figure className="relative w-[350px] h-[200px] cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10]">
              <img
                alt="Review Card Background"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="absolute inset-0 z-0"
                src={heroImg3}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  objectFit: "cover",
                  color: "transparent",
                }}
              />
              <figcaption className="absolute top-2 left-2 right-2 z-10 text-white text-lg hidden px-2 py-1 rounded-md">
                3
              </figcaption>
            </figure>
            <figure className="relative w-[350px] h-[200px] cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10]">
              <img
                alt="Review Card Background"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="absolute inset-0 z-0"
                src={heroImg4}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  objectFit: "cover",
                  color: "transparent",
                }}
              />
              <figcaption className="absolute top-2 left-2 right-2 z-10 text-white text-lg hidden px-2 py-1 rounded-md">
                4
              </figcaption>
            </figure>
            <figure className="relative w-[350px] h-[200px] cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10]">
              <img
                alt="Review Card Background"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="absolute inset-0 z-0"
                src={heroImg5}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  objectFit: "cover",
                  color: "transparent",
                }}
              />
              <figcaption className="absolute top-2 left-2 right-2 z-10 text-white text-lg hidden px-2 py-1 rounded-md">
                5
              </figcaption>
            </figure>
            <figure className="relative w-[350px] h-[200px] cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10]">
              <img
                alt="Review Card Background"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="absolute inset-0 z-0"
                src={heroImg6}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  objectFit: "cover",
                  color: "transparent",
                }}
              />
              <figcaption className="absolute top-2 left-2 right-2 z-10 text-white text-lg hidden px-2 py-1 rounded-md">
                6
              </figcaption>
            </figure>
          </div>

          {/* Marquee Section 3 */}
          <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
            <figure className="relative w-[350px] h-[200px] cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10]">
              <img
                alt="Review Card Background"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="absolute inset-0 z-0"
                src={heroImg3}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  objectFit: "cover",
                  color: "transparent",
                }}
              />
              <figcaption className="absolute top-2 left-2 right-2 z-10 text-white text-lg hidden px-2 py-1 rounded-md">
                3
              </figcaption>
            </figure>
            <figure className="relative w-[350px] h-[200px] cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10]">
              <img
                alt="Review Card Background"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="absolute inset-0 z-0"
                src={heroImg4}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  objectFit: "cover",
                  color: "transparent",
                }}
              />
              <figcaption className="absolute top-2 left-2 right-2 z-10 text-white text-lg hidden px-2 py-1 rounded-md">
                4
              </figcaption>
            </figure>
            <figure className="relative w-[350px] h-[200px] cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10]">
              <img
                alt="Review Card Background"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="absolute inset-0 z-0"
                src={heroImg5}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  objectFit: "cover",
                  color: "transparent",
                }}
              />
              <figcaption className="absolute top-2 left-2 right-2 z-10 text-white text-lg hidden px-2 py-1 rounded-md">
                5
              </figcaption>
            </figure>
            <figure className="relative w-[350px] h-[200px] cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10]">
              <img
                alt="Review Card Background"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="absolute inset-0 z-0"
                src={heroImg6}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  objectFit: "cover",
                  color: "transparent",
                }}
              />
              <figcaption className="absolute top-2 left-2 right-2 z-10 text-white text-lg hidden px-2 py-1 rounded-md">
                6
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Gradient Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </>
  );
};
export default ReviewCard;
