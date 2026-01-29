export default function ContactPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="opacity-90">
        If you’d like to reach out, please feel free to email me at any time. You can also find my GitHub and LinkedIn,
        where I post interesting articles and statistics about finance, economics, and mathematics :)
      </p>
      <p>
        Email:{" "}
        <a href="mailto:korolyadam@gmail.com" className="hover:opacity-70">
          korolyadam@gmail.com
        </a>
      </p>
      <p className="text-sm opacity-80">
        Links:{" "}
        <a href="https://github.com/AdamKoroly" className="hover:opacity-70">
          GitHub
        </a>
        ,{" "}
        <a
          href="https://www.linkedin.com/in/adam-koroly-22aba7306/"
          className="hover:opacity-70"
        >
          LinkedIn
        </a>
      </p>
    </div>
  );
}
