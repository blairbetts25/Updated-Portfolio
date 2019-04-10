/*----------- Home -----------*/

/* Animated heading text */

// Set animation timing
var animationDelay = 2500,
  // Clip effect
  revealDuration = 660,
  revealAnimationDelay = 1500;

initHeadline();

function initHeadline() {
  // Initialise headline animation
  animateHeadline($('.cd-headline'));
}

function animateHeadline($headlines) {
  var duration = animationDelay;
  $headlines.each(function() {
    var headline = $(this);
    if (headline.hasClass('clip')) {
      var spanWrapper = headline.find('.cd-words-wrapper'),
        newWidth = spanWrapper.width() + 10;
      spanWrapper.css('width', newWidth);
    }

    //trigger animation
    setTimeout(function() {
      hideWord(headline.find('.is-visible').eq(0));
    }, duration);
  });
}

function hideWord($word) {
  var nextWord = takeNext($word);

  if ($word.parents('.cd-headline').hasClass('clip')) {
    $word.parents('.cd-words-wrapper').animate({
      width: '2px'
    }, revealDuration, function() {
      switchWord($word, nextWord);
      showWord(nextWord);
    });

  }
}

function showWord($word, $duration) {
  if ($word.parents('.cd-headline').hasClass('clip')) {
    $word.parents('.cd-words-wrapper').animate({
      'width': $word.width() + 10
    }, revealDuration, function() {
      setTimeout(function() {
        hideWord($word);
      }, revealAnimationDelay);
    });
  }
}


function takeNext($word) {
  return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
}

function takePrev($word) {
  return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
}

function switchWord($oldWord, $newWord) {
  $oldWord.removeClass('is-visible').addClass('is-hidden');
  $newWord.removeClass('is-hidden').addClass('is-visible');
}
