import { Button } from "@/components/ui/button";
import Link from "next/link";

const Download = () => {
  return (
    <>
      <section className="container flex flex-col justify-between items-center h-full pb-24">
        <div className="flex flex-col items-center justify-ceter py-12 sm:pt-24 max-w-prose mx-auto text-center">
          <h3 className="text-5xl font-semibold">
            download <span className="line-through">hushh</span>
          </h3>
          <p className="mt-4">Available free for MacOS.</p>
          <p className="text-muted-foreground text-xs">version 11.0.0+</p>

          <div className="mt-12">
            <Link
              href={
                "https://github.com/noahpittman/hushh/releases/download/app-v1.1.0/hushh_1.1.0_x64.dmg"
              }
              target="_blank"
            >
              <Button>Download hushh for free</Button>
            </Link>
          </div>
          <Link href={"/"} className="mt-8">
            <Button variant={"ghost"} size={"sm"} className="text-xs">
              Go back
            </Button>
          </Link>
        </div>

        <div className="text-center flex flex-col items-center justify-center gap-2">
          <Link
            href={"https://npitt.dev"}
            target="_blank"
            className="leading-5 hover:underline text-muted-foreground"
          >
            made with 🥩 by noah pittman
          </Link>
        </div>
      </section>
    </>
  );
};

export default Download;
