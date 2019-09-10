v# Header Link Component

### Folder Structure:

- **index.ts:** contains Props and the Component Export
- **styles.ts:** contains all the Emotion styles
- **component.tsx:** contains the JSX

## Lessons Learned

- GraphiQL sure changed a lot since I last used it. Thankful for the sidemenu
- Important to match up the `type` to the schema, especially areas when it is an array.

  - Once that is set up correctly, TypeScript understands the data and will help me a lot via dropdown autocompletes

- Static Query is specific for components. Page templates can use something simliar to what is in `templates/page.tsx`
- The query from the `StaticQuery` will automatically be injected into `data` prop.
