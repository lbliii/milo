const searchClient = algoliasearch('RUV2F528SR', '1f21e218181a4f87c5496cd574a88c70');
  
  const search = instantsearch({
    indexName: 'pach_public',
    searchClient, 
    searchFunction(helper) {
      if (helper.state.query) {
        helper.search();
      }
    },
  });
  
  search.addWidgets([
    instantsearch.widgets.searchBox({
      container: "#searchbox",
      placeholder: "🔍 Search...",
      showReset: false,
      showSubmit: false,
      autofocus: true,
      showLoadingIndicator: false,
      templates: {
      },
    
    }),
    instantsearch.widgets.configure({
      hitsPerPage: 10,
    }),
    instantsearch.widgets.hits({
      container: '#hits',
      escapeHTML: false,
      cssClasses: {
        root: ['modal', 'is-active', 'mt-6'],
        list: ['columns','is-flex-direction-column'],
        item: ['column', 'p-0', 'm-0'] },
      templates: {
        empty: '<div class="hit mt-3"> <div class="is-size-4">No Results Found</div><div class="is-size-7"> Could not locate results matching <strong>{{query}}</strong>.</div></div> <div class="is-flex is-justify-content-center"> <a class="button gradient has-text-white" href="/support"> Contact Support </a></div>',
        item: `<a class="hit column is-full" href="/{{uri}}">
                <div class="column tag is-black is-pulled-left mr-2">{{{version}}}</div>
                <div class="column is-size-5 p-0 m-0">{{{title}}}</div>
                <div class="column is-size-7 p-0 m-0">{{{description}}}</div>
              </a>`
      },
      transformData: {
        item: function(hit) {
          hit.raw = JSON.stringify(hit, null, 2);
            return hit;
        }
      }
    })
  ]);
  
  search.start();
