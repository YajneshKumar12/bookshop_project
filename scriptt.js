const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if(bar){
	bar.addEventListener('click', () => {
		nav.classList.add('active');
	})
}

function search_books() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsById('book1');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="book1";                 
        }
    }
}


// Adds items to shopping cart

handleAddToCartForm: function() {
    var self = this;
    self.formAddToCart.each(function() {
        var form = $( this );
        var book = $form.parent();
        var price = self._convertString(book.data( "price" ) );
        var name =  book.data( "name" );

        $form.on( "submit", function() {
            var qty = self._convertString(form.find( ".qty" ).val() );
            var subTotal = qty * price;
            self.storage.setItem( self.total, sTotal );
            self._addToCart({
                book: name,
                price: price,
                qty: qty
            });
          
}

emptyCart: function() {
    var self = this;
    if( self.$emptyCartBtn.length ) {
        self.$emptyCartBtn.on( "click", function() {
            self._emptyCart();
        });
    }
}
