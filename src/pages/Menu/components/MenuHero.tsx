import { containerClasses } from "../../../utils/layout";

export function MenuHero() {
  return (
    <section className="bg-cream pt-36 pb-6 sm:pt-40 sm:pb-8">
      <div className={containerClasses}>
        <div className="mx-auto max-w-md rounded-2xl border border-charcoal/8 bg-white py-6 text-center shadow-soft">
          <h1 className="font-display text-3xl font-black tracking-tight text-charcoal sm:text-4xl">
            Menu
          </h1>
        </div>
      </div>
    </section>
  );
}
