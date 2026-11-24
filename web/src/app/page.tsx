import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 bg-dark px-6 text-white">
      <Image
        src="/brand/full-white-horizontal.svg"
        alt="Athenium"
        width={240}
        height={86}
        priority
      />
      <p className="text-lg font-light">The new Athenium website is being built.</p>
    </main>
  );
}
