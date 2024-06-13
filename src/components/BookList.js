export default function BookList( { books, attributes } ) {

    if ( ! books ) {
        return null;
    }

    const { showImage, showContent } = attributes;

    return books.map( ( book ) => (
        <div>
            <h2>{ book.title.rendered }</h2>
        { showImage && <img src={ book.featured_image_src } /> }
        { showContent && <div dangerouslySetInnerHTML={ { __html: book.content.rendered } }></div> }
        </div>
    ) );

}