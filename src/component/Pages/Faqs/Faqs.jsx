import Footer from "@/component/ui/Footer/Footer";
import CTA from "@/component/ui/Home/CTA/CTA";
import HeroSection from "@/component/ui/Home/HeroSection/HeroSection";
import Header from "@/component/ui/Header/Header";
import styles from "./Faqs.module.css";

const Faqs = () => {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <div className={styles.gaqsSection}>
        <div dir="ltr" data-orientation="horizontal" className="mb-12">
          <div
            role="tablist"
            aria-orientation="horizontal"
            className="h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid w-full grid-cols-3 mx-auto mb-8"
            tabIndex="0"
            data-orientation="horizontal"
            style={{ outline: "none" }}
          >
            <button
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="radix-:r3l:-content-general"
              data-state="inactive"
              id="radix-:r3l:-trigger-general"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              tabIndex="-1"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              General
            </button>
            <button
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="radix-:r3l:-content-pricing"
              data-state="inactive"
              id="radix-:r3l:-trigger-pricing"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              tabIndex="-1"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              Pricing
            </button>
            <button
              type="button"
              role="tab"
              aria-selected="true"
              aria-controls="radix-:r3l:-content-dashboard"
              data-state="active"
              id="radix-:r3l:-trigger-dashboard"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              tabIndex="0"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              Dashboard
            </button>
          </div>

          <div
            data-state="inactive"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-:r3l:-trigger-general"
            id="radix-:r3l:-content-general"
            tabIndex="0"
            className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            hidden
            style={{}}
          ></div>
          <div
            data-state="inactive"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-:r3l:-trigger-pricing"
            id="radix-:r3l:-content-pricing"
            tabIndex="0"
            className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            hidden
          ></div>
          <div
            data-state="active"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-:r3l:-trigger-dashboard"
            id="radix-:r3l:-content-dashboard"
            tabIndex="0"
            className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <div className="">
              <div className="mb-6">
                <input
                  className="flex rounded-md border border-input bg-background p-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-normal file:text-foreground placeholder:text-muted-foreground w-full"
                  placeholder="Search FAQs..."
                  type="search"
                  value=""
                />
              </div>
              <div className="w-full" data-orientation="vertical">
                <div
                  data-state="closed"
                  data-orientation="vertical"
                  className="border-b border-gray-200"
                >
                  <h3
                    data-orientation="vertical"
                    data-state="closed"
                    className="flex"
                  >
                    <button
                      type="button"
                      aria-controls="radix-:r4i:"
                      aria-expanded="false"
                      data-state="closed"
                      data-orientation="vertical"
                      id="radix-:r4h:"
                      className="flex flex-1 items-center justify-between font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 py-4 text-left"
                      data-radix-collection-item=""
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="flex-shrink-0 text-muted-foreground">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-panels-top-left h-6 w-6 sm:h-8 sm:w-8 border p-1 sm:p-1.5 rounded-md border-gray-300"
                          >
                            <rect
                              width="18"
                              height="18"
                              x="3"
                              y="3"
                              rx="2"
                            ></rect>
                            <path d="M3 9h18"></path>
                            <path d="M9 21V9"></path>
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base font-medium">
                          What is the dashboard, and what can I do there?
                        </span>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                  </h3>
                  <div
                    data-state="closed"
                    id="radix-:r4i:"
                    role="region"
                    aria-labelledby="radix-:r4h:"
                    data-orientation="vertical"
                    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                    style={{
                      "--radix-accordion-content-height":
                        "var(--radix-collapsible-content-height)",
                      "--radix-accordion-content-width":
                        "var(--radix-collapsible-content-width)",
                      "--radix-collapsible-content-height":
                        "96.00000762939453px",
                      "--radix-collapsible-content-width":
                        "1240.683349609375px",
                    }}
                    hidden
                  ></div>
                </div>
                {/* Repeat similar structure for other collapsible items */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTA></CTA>
      <Footer></Footer>
    </>
  );
};
export default Faqs;
