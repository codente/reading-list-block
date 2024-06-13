/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { select } from '@wordpress/data';
import BookList from './components/BookList';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {

	const books = select( 'core' ).getEntityRecords( 'postType', 'book' );
	
	return (
        <div {...useBlockProps.save()}>
            <p>{__( 'My Reading List – hello from the saved content!', 'my-reading-list' )}</p>
            <BookList books={ books } attributes={ attributes } />
        </div>
    );
}
