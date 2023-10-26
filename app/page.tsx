import { EnvelopeIcon } from "@heroicons/react/24/outline";

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

      <div className="flex flex-row mt-2">
        <EnvelopeIcon width={24} height={24} />
        <div className="ms-2 opacity-60 hover:opacity-100 transition-all">
          seolyeongbae[at]gm.gist.ac.kr
        </div>
      </div>
    </section>
  );
}
