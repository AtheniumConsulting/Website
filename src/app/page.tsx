import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col justify-center bg-dark px-6 py-16 text-text-inverse">
      <div className="mx-auto w-full max-w-[1200px]">
        <Image
          src="/brand/full-white-horizontal.svg"
          alt="Athenium Consulting"
          width={160}
          height={57}
          priority
        />
        <p className="eyebrow mt-16">New website in build</p>
        <h1 className="mt-4 max-w-3xl">
          Connected technologies meet industry expertise.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/80">
          The Athenium website is being rebuilt. Full content follows at launch.
        </p>
      </div>
    </main>
  );
}
