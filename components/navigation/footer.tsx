import { siteConfig } from "@/config/site";
import Link from "next/link";
import { VerticalAnimationContainer } from "../global/animation-container";
import { Icons } from "../ui/Icons";

const Footer = () => {
  return (
    <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 md:pb-0 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">
      <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full"></div>

      <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
        <VerticalAnimationContainer delay={0.1}>
          <div className="flex flex-col items-start justify-start md:max-w-[200px]">
            <div className="flex items-start">
              <Icons.logo className="w-7 h-7" />
            </div>
            <p className="text-muted-foreground mt-4 text-sm text-start">
              Centralized Campus Placement Data Platform
            </p>
            <span className="mt-4 text-neutral-200 text-sm flex items-center">
              Made by{" "}
              <Link
                href={siteConfig.links.twitter}
                className="font-semibold ml-1"
              >
                SinghAstra
              </Link>
            </span>
          </div>
        </VerticalAnimationContainer>

        <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <VerticalAnimationContainer delay={0.3}>
              <div className="">
                <h3 className="text-base font-medium text-white">Product</h3>
                <ul className="mt-4 text-sm text-muted-foreground">
                  <li className="mt-2">
                    <Link
                      href="/"
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Features
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href="/"
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href="/"
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Testimonials
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href="/"
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Integration
                    </Link>
                  </li>
                </ul>
              </div>
            </VerticalAnimationContainer>
            <VerticalAnimationContainer delay={0.5}>
              <div className="mt-10 md:mt-0 flex flex-col">
                <h3 className="text-base font-medium text-white">
                  Integrations
                </h3>
                <ul className="mt-4 text-sm text-muted-foreground">
                  <li className="">
                    <Link
                      href="/"
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Facebook
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href="/"
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href={siteConfig.links.twitter}
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Twitter
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href={siteConfig.links.linkedIn}
                      className="hover:text-foreground transition-all duration-300"
                    >
                      LinkedIn
                    </Link>
                  </li>
                </ul>
              </div>
            </VerticalAnimationContainer>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <VerticalAnimationContainer delay={0.7}>
              <div className="">
                <h3 className="text-base font-medium text-white">Resources</h3>
                <ul className="mt-4 text-sm text-muted-foreground">
                  <li className="mt-2">
                    <Link
                      href="/"
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href="/"
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
            </VerticalAnimationContainer>
            <VerticalAnimationContainer delay={0.9}>
              <div className="mt-10 md:mt-0 flex flex-col">
                <h3 className="text-base font-medium text-white">Company</h3>
                <ul className="mt-4 text-sm text-muted-foreground">
                  <li className="">
                    <Link
                      href="/"
                      className="hover:text-foreground transition-all duration-300"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href="/"
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href="/"
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </VerticalAnimationContainer>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
        <VerticalAnimationContainer delay={1}>
          <p className="text-sm text-muted-foreground mt-8 md:mt-0">
            &copy; {new Date().getFullYear()}{" "}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              className="hover:text-underline text-primary"
            >
              SinghAstra
            </Link>{" "}
            INC. All rights reserved.
          </p>
        </VerticalAnimationContainer>
      </div>
    </footer>
  );
};

export default Footer;
