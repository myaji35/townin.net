import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Townin</h1>
      <Image src="/path-to-your-image.jpg" alt="Your Image" width={500} height={500} />
    </div>
  );
}

