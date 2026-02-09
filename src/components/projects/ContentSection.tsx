export default function ContentSection ( { projectContent }: { projectContent: string} ) {
  return (
    <section className="my-8 flex flex-col items-center gap-4">
      <h2 className="font-jubble text-center text-3xl lg:text-4xl">Le projet</h2>
      <div
        className="text-lg space-y-6 px-5 lg:px-12 lg:max-w-5xl"
        dangerouslySetInnerHTML={ { __html: projectContent } }
      ></div>
    </section>
  );
}