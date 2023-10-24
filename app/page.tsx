import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        Seolyeong Bae
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I am a junior software engineer specializing in web front-end
          development. My interests are data visualization and user experience
          design. I am majoring in Electrical Engineering and Computer Science
          at GIST.
        </p>
      </div>

      <h1 className="font-bold text-xl mb-4 tracking-tighter">Contacts</h1>

      <div>
        <div className="flex flex-row">
          <Image
            src="/svgs/github.svg"
            alt="Github Logo"
            className="dark:invert"
            width={24}
            height={24}
            priority
          />
          <Link href="https://github.com/SeolyeongBae">
            <div className="ms-2 opacity-60 hover:opacity-100 transition-all">
              SeolyeongBae
            </div>
          </Link>
        </div>

        <div className="flex flex-row mt-2">
          <EnvelopeIcon width={24} height={24} />
          <div className="ms-2 opacity-60 hover:opacity-100 transition-all">
            seolyeongbae[at]gm.gist.ac.kr
          </div>
        </div>
      </div>
    </section>
  );
}
