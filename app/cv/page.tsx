import { contents } from "./contents";
import TimeLine from "./timeline";

export default async function Page() {
  return (
    <section>
      <h1 className="text-2xl mb-8 tracking-tighter">Seolyeong Bae</h1>

      {contents.map(({ title, content }, i) => (
        <div className="prose prose-neutral dark:prose-invert" key={i}>
          <h1 className="text-xl mt-4 tracking-tighter">{title}</h1>
          <TimeLine contentList={content} />
        </div>
      ))}
    </section>
  );
}
