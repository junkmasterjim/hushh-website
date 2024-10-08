import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
	return (
		<>
			<section className="container bg-[url('/bg.png')] bg-center bg-cover bg-no-repeat h-full">
				<div className="flex flex-col items-center justify-ceter py-12 sm:pt-24 max-w-prose mx-auto text-center">
					<h1 className="text-7xl font-semibold line-through">hushh</h1>
					<p className="mt-4">
						A minimal noise generator for MacOS.
						<br />
						<br />
						Relax and sleep better with <strong>hushh</strong>.
					</p>

					<div className="mt-12 space-x-4">
						<Link href="/download">
							<Button>Download</Button>
						</Link>
						<Link href={"https://github.com/noahpittman/hushh"} target="_blank">
							<Button variant={"secondary"}>Github</Button>
						</Link>
					</div>

					<div className="mt-12 space-x-4 max-w-lg">
						<Image
							unoptimized
							src="/hushh.png"
							alt="hushh"
							width={512}
							height={512}
							className="rounded-lg w-full h-auto"
						/>
					</div>

					<Link href={"/download"}>
						<Button>Download for free</Button>
					</Link>

					<Link
						href={"https://npitt.dev"}
						target="_blank"
						className="mt-8 text-muted-foreground hover:underline"
					>
						made with 🥩 by noah pittman
					</Link>
				</div>
			</section>
		</>
	);
};

export default Home;
