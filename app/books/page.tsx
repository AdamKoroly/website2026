const currentlyReading = [
  {
    title:
      "The Intelligent Investor Third Edition: The Definitive Book on Value Investing",
    author: "Benjamin Graham, Jason Zweig",
  },
  { title: "The Richest Man in Babylon", author: "George S. Clason" },
  { title: "Capitalism and Freedom", author: "Milton Friedman" },
];

const reviews = [
  {
    title: "Why Nations Fail: The Origins of Power, Prosperity, and Poverty",
    author: "Daron Acemoglu, James A. Robinson",
    verdict:
      "Strongly recommended for anybody who is interested inequality, history and economics",
    critique:
      "Write your critique here. What is the main idea? What’s strong/weak? Who should read it? Any key quotes/chapters?",
  },
  {
    title:
      "Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!",
    author: "Robert T. Kiyosaki",
    verdict: "I would reccomend this book for the ",
    critique: "Your critique here.",
  },
];

export default function BooksPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Books</h1>
        <p className="opacity-90">
        This is a page where I share my thoughts about books I’ve read, mostly on finance, economics, policymaking, and analytics.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Currently reading</h2>
        <ul className="list-disc pl-5 space-y-1 opacity-90">
          {currentlyReading.map((b) => (
            <li key={b.title}>
              <span className="font-medium">{b.title}</span> — {b.author}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Book critiques</h2>

        <div className="space-y-6">
          {reviews.map((r) => (
            <article key={r.title} className="space-y-2 pb-6 border-b last:border-b-0">
              <h3 className="text-lg font-semibold">
                {r.title} — {r.author}
              </h3>

              <p className="opacity-90">
                <span className="font-semibold">Verdict:</span> {r.verdict}
              </p>

              {/* “tovább…” expandable critique */}
              <details className="opacity-90">
                <summary className="cursor-pointer text-sm underline underline-offset-4 hover:opacity-70">
                  Read it…
                </summary>
                <div className="mt-3 leading-7">
                  {r.critique}
                </div>
              </details>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
