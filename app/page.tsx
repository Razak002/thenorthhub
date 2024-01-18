import {
   CallToAction,
   CoursesTestimony,
   Footer,
   HeroSection,
   LearnWithTNH,
   OurPartners,
   TNHIntro,
   Team,
   Testimonials,
   TheTNH,
} from "@/components/landing";

export default function Home() {
   return (
      <>
         <HeroSection />
         <CoursesTestimony />
         <TNHIntro />
         <OurPartners />
         <Team />
         <Testimonials />
         <LearnWithTNH />
         <TheTNH />
         <CallToAction />
         <Footer />
      </>
   );
}
