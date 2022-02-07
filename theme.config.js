export default {
  projectLink: "https://github.com/nguyenyou/nextra-docs",
  docsRepositoryBase: "https://github.com/nguyenyou/nextra-docs",
  titleSuffix: " – Docs",
  search: true,
  unstable_flexsearch: true,
  floatTOC: true,
  feedbackLabels: "feedback",
  logo: () => {
    return (
      <>
        <span
          className="mx-2 font-extrabold hidden md:inline select-none"
        >
          Docs
        </span>
      </>
    );
  },
  head: ({ meta }) => {
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={meta.description || "docs"}
        />
      </>
    );
  },
};
