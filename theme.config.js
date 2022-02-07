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
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={meta.description || "docs"}
        />
      </>
    );
  }
};
