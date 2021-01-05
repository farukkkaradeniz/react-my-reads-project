first run npm install. 

next run npm start and start testing application.

I dived application into components. 

At App.js i adede shelf types inside state and getting books from server and adding its inside state. When a book's shelf type changes the update method triggered and book's shelf value updated. i fecth the books data on componentDidMount lifecyle method. Also i added Route and navigating pages base of react-router-dom.

HomePage => 
    Contains list of books by shelfs. Takes shelf types,books and a callback for updating book's shelf property as props.
    Also home page contains a link for routing search page.
SearchPage => 
    List books after search. Takes changeShelftValue as callback for updating home page's books shelf values,shelfTypes as array,checkBookExistOnShelf as callback for checking books shelf property (i didnt see book obj has property named shelf. I was added manually first. This function can be removed now.) as props. When a books shelf type changes app.js's update method triggers and updates book on server.
Components
    ShelfComponent => 
        Takes shelfHeader,books,shelfList,changeShelftValue as props. Displays every shelf by array.map.
    BookListComponent => 
        Takes books,shelfList,changeShelftValue as props. Renders list of includes books. I could not decide is that this object must be a component or stateless function. I think it could be a stateless function. HomePage and Search page imports this component.
    BookComponent => 
        Takes book,shelfList,changeShelftValue as props. Renders book with image, title and author and change shelf component. BookListComponent and parents of book list component uses this component.
    ChangeShelfComponent => 
        Takes shelftTypes,shelfValue,changeShelftValue,bookId as props. Displays shelf types inside a select tag. BookComponent and its parents uses this component.



