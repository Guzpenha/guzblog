$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });

    var $photoOverlay = $('.js-photography-slideshow-overlay');
    var $photoCarousel = $('.js-photography-carousel');

    function photographyUpdateCounter($carousel) {
        var idx = $carousel.find('.carousel-item').index($carousel.find('.carousel-item.active'));
        $carousel.closest('.js-photography-slideshow-overlay').find('.js-photo-curr').text(idx + 1);
    }

    function photographyOpenSlideshow(slideIdx) {
        if (!$photoOverlay.length || !$photoCarousel.length) {
            return;
        }
        $photoOverlay.removeAttr('hidden');
        $('body').addClass('photography-slideshow-open');
        $photoCarousel.carousel(slideIdx);
        photographyUpdateCounter($photoCarousel);
        setTimeout(function() {
            $photoCarousel.trigger('focus');
        }, 0);
    }

    function photographyCloseSlideshow() {
        if (!$photoOverlay.length) {
            return;
        }
        $photoOverlay.attr('hidden', true);
        $('body').removeClass('photography-slideshow-open');
    }

    $(document).on('click', '.js-photography-open-slide', function() {
        var idx = parseInt($(this).attr('data-slide-to'), 10);
        if (isNaN(idx)) {
            idx = 0;
        }
        photographyOpenSlideshow(idx);
    });

    $(document).on('click', '.js-photography-close-slideshow', function() {
        photographyCloseSlideshow();
    });

    $(document).on('keydown', function(ev) {
        if (ev.key !== 'Escape') {
            return;
        }
        if (!$photoOverlay.length || !$photoOverlay[0] || $photoOverlay[0].hasAttribute('hidden')) {
            return;
        }
        photographyCloseSlideshow();
    });

    if ($photoCarousel.length) {
        $photoCarousel.each(function() {
            $(this).carousel({
                interval: false,
                keyboard: true,
                wrap: true,
                touch: true
            });
        });

        $(document).on('click', '.photography-carousel-slide', function(ev) {
            var $slide = $(this);
            var $carousel = $slide.closest('.js-photography-carousel');
            if ($carousel.find('.carousel-item').length < 2) {
                return;
            }
            var rect = this.getBoundingClientRect();
            var mid = rect.left + rect.width / 2;
            if (ev.clientX < mid) {
                $carousel.carousel('prev');
            } else {
                $carousel.carousel('next');
            }
        });

        $photoCarousel.on('slid.bs.carousel', function() {
            photographyUpdateCounter($(this));
        });
    }
});
