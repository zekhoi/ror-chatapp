import Container from "@/components/atoms/Container";
import Navbar from "@/components/organisms/Navbar";
import DefaultLayout from "@/components/templates/DefaultLayout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <DefaultLayout title="Connect with people, anytime, anywhere.">
      <div className="flex flex-col items-center w-full h-screen min-h-screen py-3 bg-white">
        <Container>
          <Navbar />
          <main className="grid content-center w-full h-full grid-cols-1 gap-3 md:grid-cols-2">
            <div className="flex flex-col gap-3">
              <h1 className="max-w-xl text-6xl font-extrabold leading-none tracking-tight text-left">
                <span className="text-primary-500">Connect</span> with anyone,{" "}
                <span className="text-primary-500">anywhere</span> with ease.
              </h1>
              <p className="max-w-lg text-sm font-light text-gray-500">
                Connect with people from all around the world and join the
                conversation. Our ChatApp makes it easy for you to discover and
                join chatrooms on any topic that interests you.
              </p>
              <div className="block">
                <Link
                  className="px-4 py-2.5 text-sm rounded text-center text-white font-bold bg-primary-500 hover:bg-primary-600 active:bg-primary-700"
                  href="/login"
                >
                  Try Now
                </Link>
              </div>
            </div>
            <div className="hidden md:flex">
              <Image
                src="/svg/hero_chat.svg"
                alt="ChatApp"
                width={500}
                height={500}
              />
            </div>
          </main>
        </Container>
      </div>
    </DefaultLayout>
  );
}
