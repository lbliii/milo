# About this theme

## Layouts

Layouts are ordered by **Default** > **Partial** > **Shortcode**.

- **Default**: contains broad layout templates -- single page, list page, parent (section) page.
- **Partials**: contains large component templates -- head, header, footer.
- **Shortcodes**: contains small, typically content specific component templates -- notices, reusable verbiage.

### Default

The default templates reference partials, shortcodes, and "blocks." Blocks are named placeholder-wrappers that allow higher-level layouts to be inserted into their lower-level layouts during site generation.  

- baseof placeholder: `{{block "main}} {{end}}` < `{{define "main" }}` single.html's definition of main `{{end}}`
- baseof placeholder: `{{block "main}} {{end}}` < `{{define "main"}}` series.html's definition of main `{{end}}`