import { Button } from "@/components/ui/button";
import Image from "next/image";
import desktopBanner from "@/public/desktop-banner.webp";
import mobileBanner from "@/public/mobile-banner.webp";
import { Logo } from "@/components/ui/logo";
import { BorderGradient } from "@/components/ui/borderGradient";
import { ButtonChevron } from "@/components/ui/buttonChevron";

export const LandingPage = () => {
  return (
    <section>
      <div className="block 2xl:hidden max-w-80 mx-auto pt-32">
        <MobileLandingPage />
      </div>
      <div className="hidden 2xl:block h-[776px] pt-10 max-w-96 mb-6">
        <DesktopLandingPage />
      </div>
    </section>
  );
};

const MobileLandingPage = () => {
  return (
    <>
      <h1 className="mb-7">
        Most international students miss out on government benefits.
      </h1>
      <Button>Get Started</Button>
      <Image
        src={mobileBanner}
        alt="Banner"
        className="relative bottom-[50px]"
        width={350}
        height={459}
        priority
      />
    </>
  );
};

const DesktopLandingPage = () => {
  return (
    <>
      <Image
        src={desktopBanner}
        alt="desktop-banner"
        width={1359}
        height={776}
        className="absolute -z-10"
        priority
      />
      <div className="relative top-8 left-8">
        <Logo className="mb-24" />

        <h1 className="mb-7">
          Most international students miss out on government benefits.
        </h1>
        <BorderGradient gradientColors="purple" borderWidth={1}>
          <ButtonChevron>Unlock my benefits</ButtonChevron>
        </BorderGradient>
      </div>
    </>
  );
};
