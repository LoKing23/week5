$(function() {
  console.log('Hello Bootstrap5');
});
//inline editor
InlineEditor
            .create( document.querySelector( '#editor' ) )
            .catch( error => {
                console.error( error );
            } );