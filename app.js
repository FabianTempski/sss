(function(){
	const cartInfo = document.getElementById('cartInfo');
	const cart = document.getElementById('cart');
	
	cartInfo.addEventListener('click', function(){
		cart.classList.toggle('show-cart');
	})
	
})();