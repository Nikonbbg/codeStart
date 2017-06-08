var elem, pckry;

elem = document.querySelector('.grid');

pckry = new Packery(elem, {
  itemSelector: '.grid-item',
  gutter: 0
});
