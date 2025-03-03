document.addEventListener("DOMContentLoaded", () => {
  const searchClient = algoliasearch(
    "KPO2L4T1AK",
    "918ef4ff5846180a084bccf4cef5194c"
  );

  const search = instantsearch({
    indexName: "books",
    searchClient,
    onStateChange({ uiState, setUiState }) {
      const hitsContainer = document.querySelector("#hits");
      const footerContainer = document.querySelector("#algolia-footer");

      if (!uiState["books"]?.query) {
        hitsContainer.classList.add("hide-content");
        footerContainer?.classList.add("hide-content");
        setUiState(uiState);
        return;
      }

      hitsContainer.classList.remove("hide-content");
      footerContainer?.classList.remove("hide-content");
      setUiState(uiState);
    },
  });

  search.addWidgets([
    instantsearch.widgets.searchBox({
      container: "#searchbox",
      placeholder: "Search your data here",
    }),
    instantsearch.widgets.configure({
      hitsPerPage: 3, //just 3 results, you can modify
    }),
    instantsearch.widgets.poweredBy({
      container: "#algolia-footer",
    }),
    instantsearch.widgets.hits({
      container: "#hits",
      templates: {
        item: (hit, { html, components }) => html`
          <div>
            <p class="primary-text">
              ${components.Highlight({ hit, attribute: "title" })}
            </p>
            <p class="secondary-text">
              ${components.Highlight({ hit, attribute: "description" })}
            </p>
            <p class="tertiary-text">
              ${components.Highlight({ hit, attribute: "publicationYear" })}
            </p>
          </div>
        `,
      },
    }),
  ]);

  search.start();
});
