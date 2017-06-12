$(document).ready(function() {

	// <!-- 		2 (Обертка для манипуляции с DOM ( выборка, фильтрация через eq(), first(), last() )) -->
	// $( "li" ).first().css( "background-color", "red" );
	// $( "li" ).eq( 2 ).css( "background-color", "#f3f3f3" );
	// $( "li" ).eq( -2 ).css( "background-color", "white" );
	// $( "li" ).last().css( "background-color", "blue" );


	// Обертка для манипуляции с DOM (attr, removeAttr)

	// $('#photo').attr('alt', 'firtst-altt');
	// $('#photo').attr('title', 'first-title');
	// $('#photo').attr({
	//  alt: 'second-alt',
	//  title: 'second-title',
	//  sub: 'bang',
	//  class: 'lobzuk'
	// });

	// $('#photo').attr('title', function(i, val) {
	//  return val + ' - Robert Paul1'
	// });

	// $('img').removeAttr('id');



	// Обертка для манипуляции с DOM (appendTo, prependTo, insertAfter, insertBefore)
		// $('.big-item').appendTo('.first-list');
		// $('.big-item').prependTo('.first-list');
		// $('.big-item').insertAfter('.first-list');
		// $('.big-item').insertBefore('.first-list');

	// Обертка для манипуляции с DOM (addClass, removeClass, toggleClass)
		// $('.red').click(function(e) {
		// 	$(this).siblings('.text').addClass('red');
		// 	$(this).siblings('.text').removeClass('toggle blue green');
		// });
		// $('.blue').click(function(e) {
		// 	$(this).siblings('.text').addClass('blue');
		// 	$(this).siblings('.text').removeClass('toggle red green');
		// });
		// $('.green').click(function(e) {
		// 	$(this).siblings('.text').addClass('green');
		// 	$(this).siblings('.text').removeClass('toggle blue red');
		// });
		// $('.black').click(function(e) {
		// 	$(this).siblings('.text').removeClass('blue red green');
		// 	$(this).siblings('.text').toggleClass('toggle');
		// });


	// Обертка для манипуляции с DOM ( реализовать метод closest() )

	// $('.black').click(function() {
	// 	$(this).closest('div').toggleClass('active');
	// });

	// Обертка для манипуляции с DOM ( on(событие), off(событие) )

	// $( "#bind" ).click(function() {
	//   $( "body" )
	//     .on( "click", "#theone" )
	//     .find( "#theone" )
	//       .text( "Могу кликать" );
	// });
	// $( "#unbind" ).click(function() {
	//   $( "body" )
	//     .off( "click", "#theone" )
	//     .find( "#theone" )
	//       .text( "Ничего не происходит в двоене" );
	// });

	// Обертка для манипуляции с DOM ( slideIn(), slideOut(), slideToggle(), fadeIn(), fadeOut() )

		// $('.slide-up').click(function(e){
		// 	$(this).siblings('ul').slideUp();
		// });
		// $('.slide-down').click(function(e){
		// 	$(this).siblings('ul').slideDown();
		// });
		// $('.slide-toggle').click(function(e){
		// 	$(this).siblings('ul').slideToggle();
		// });
		// $('.fade-in').click(function(e){
		// 	$(this).siblings('ul').fadeIn();
		// });
		// $('.fade-out').click(function(e){
		// 	$(this).siblings('ul').fadeOut();
		// });
		// $('.fade').click(function(e){
		// 	$(this).siblings('ul').fadeToggle();
		// });


	// Обертка для манипуляции с DOM ( animate() )
	// $('.go').click(function(e) {
	// 	var cub = $('.cube');
	// 	cub.animate({height: '150px',top: '100px'}, "slow");
	// 	cub.animate({width: '300px',left:'auto',right: '200px'}, "slow");
	// 	cub.animate({height: '100px',top: '200px'}, "slow");
	// 	cub.animate({width: '100px',right:'auto',left:'15px',top: '49px'}, "slow");
	// });


	// 10. Dropdown 


	//  Tabs 

	// var ownActiveTab;

	// ownActiveTab = function(defaultList, i){
	// 	var curNumber;
	// 	defaultList.find('[data-tab]').removeClass('active');
	// 	curNumber = defaultList.find('[data-tab]').eq(i);
	// 	curNumber.addClass('active');
	// };

	// $('.first-list li').click(function(e) {
	// 	e.preventDefault();
	// 	$(this).addClass('active');
	// 	$(this).siblings().removeClass('active');
	// 	ownActiveTab($($(this).parents('.first-list').data('for')), $(this).index());
	// });


	// accordeon
	$('.accordeon a').click(function(e){
		e.preventDefault();
		$(this).parents('li').siblings('li').find('p').slideUp();
		$(this).siblings('p').slideToggle();
	});


});