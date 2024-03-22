import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <section className="flex items-center justify-center bg-background h-[90vh]">
      <div
        className="relative  items-center w-full mx-auto px-5  lg:py-16 md:px-12
      max-w-7xl"
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-7">
            <h1 className="text-3xl font-medium lg:text-4xl lg:font-extrabold tracking-tighter text-red-700">
              Treamlining Your Supply Chain
            </h1>
            <p className="max-w-7xl lg:max-w-5xl mx-auto text-base lg:text-lg tracking-tight text-secondary-foreground ">
              Discover innovative solutions for efficient freight movement and
              optimized delivery experiences. Explore Cargo, a platform
              connecting shippers and carriers for seamless logistics.
            </p>
            <div className="flex justify-center items-center max-w-sm mx-auto">
              <Button size="lg" className="w-full text-primary-foreground">
                <Link to={"/auth/register"}>Sign up for free</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
