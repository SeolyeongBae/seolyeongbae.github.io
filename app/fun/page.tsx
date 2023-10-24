import BRgame from "./components/BRgame";

export default async function Page() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">Fun</h1>

      <div className="prose prose-neutral dark:prose-invert">
        <BRgame />
      </div>
    </section>
  );
}
