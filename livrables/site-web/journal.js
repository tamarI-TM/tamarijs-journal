/* Tamari & Léo — Journal index interactions (filter + load more) */
(function () {
  var grid = document.querySelector('[data-jgrid]');
  if (!grid) return;

  var cards = Array.prototype.slice.call(grid.querySelectorAll('.jcard'));
  var chips = Array.prototype.slice.call(document.querySelectorAll('.jfilter__chip'));
  var moreBtn = document.querySelector('[data-jmore]');
  var progress = document.querySelector('[data-jprogress]');
  var empty = document.querySelector('[data-jempty]');

  var BATCH = 6;                 // how many show before "load more"
  var activeCat = 'all';
  var expanded = false;

  function render() {
    var matches = cards.filter(function (c) {
      return activeCat === 'all' || c.getAttribute('data-cat') === activeCat;
    });

    var shown = 0;
    cards.forEach(function (c) {
      var isMatch = activeCat === 'all' || c.getAttribute('data-cat') === activeCat;
      // When filtering by a category, show every match. On "all", respect the batch.
      var visible = isMatch && (activeCat !== 'all' || expanded || shown < BATCH);
      c.hidden = !visible;
      if (visible) shown++;
    });

    // Load-more only relevant on the unfiltered view with more to reveal
    var hasMore = activeCat === 'all' && !expanded && matches.length > BATCH;
    if (moreBtn) moreBtn.hidden = !hasMore;
    if (progress) {
      var visibleCount = cards.filter(function (c) { return !c.hidden; }).length;
      progress.textContent = visibleCount + ' / ' + matches.length;
    }
    if (empty) empty.hidden = matches.length !== 0;
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) { c.classList.remove('is-active'); });
      chip.classList.add('is-active');
      activeCat = chip.getAttribute('data-cat') || 'all';
      expanded = false;
      render();
    });
  });

  if (moreBtn) {
    moreBtn.addEventListener('click', function () {
      expanded = true;
      render();
    });
  }

  render();
})();
