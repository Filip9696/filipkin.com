$('pre').each(function(){
    if($(this).attr('tagchecked') !== 'true'){ //checks if already changed tag
        $(this).text($(this).html()).attr('tagchecked', 'true'); //makes the html into plaintext
    }
});

jQuery.extend(jQuery.easing, {
    easeIn: function (x, t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOut: function (x, t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOut: function (x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1e3, 'easeInOut');
});

$(document).ready(function () {
    $('.scrollspy').scrollSpy({
        getActiveElement: function (id) {
            var html = $('a[href="#'+'html'+'"]').parent().get(0);
            if (id === 'home') {
                $(html).removeClass('active');
                return $('a[href="#' + 'top' + '"]').parent().get(0);
            } else if (id.startsWith('h-')) {
                $(html).addClass('active');
                return $('a[href="#' + id + '"]');
            } else {
                $(html).removeClass('active');
            }
            return $('a[href="#' + id + '"]').parent().get(0);
        }
    });
});

var projcodes = {
    'proj-ed': ['Early Development', 'light-blue-text'],
    'proj-mdh': ['Mid-Development Hell', 'red-text'],
    'proj-ar': ['Almost Released', 'teal-text'],
    'proj-r': ['Released', 'green-text'],
    'proj-ts': ['Temporarily Suspended', 'deep-orange-text'],
    'proj-d': ['Dead', 'red-text'],
    'proj-pr': ['Privately Released', 'green-text'],
    'proj-oa': ['Open Alpha', 'cyan-text'],
    'proj-ob': ['Open Beta', 'cyan-text']
};

function hasClasses(elm, selectors) {
    for (var i in selectors) {
        if ($(elm).hasClass(selectors[i]))
            return selectors[i];
    }
    return false;
}

document.querySelectorAll('[class^="proj-"]').forEach(function(elm) {
	for(var i in selectors) {
		let target_class = selectors[i];
		if(elm.classList.contains()) {
			elm.innerHTML = projcodes[target_class][0];
			elm.classList.add(projcodes[target_class][1]);
			return;
		}
	}
});

document.addEventListener('DOMContentLoaded', function() {
	fixmetotop();
	document.getElementsByTagName('pre').forEach(function(block) {
		hljs.highlightBlock(block);
	});
});

function fixmetotop() {
    var fixmeTop = $('.table-of-contents').offset().top;
    $(window).scroll(function() {
        var currentScroll = $(window).scrollTop(),
            currentScroll = currentScroll + 15,
            actualBottom = $('#bodybox').offset().top + $('#bodybox').outerHeight(true),
            heightSideNav = $('.table-of-contents').outerHeight(true);
        if (currentScroll >= fixmeTop && currentScroll <= actualBottom - heightSideNav) {
            $('.table-of-contents').css({
                position: 'fixed',
                top: '0',
                bottom: ''
            });
        } else {
            if(currentScroll >= actualBottom - heightSideNav) {
                $('.table-of-contents').css({
                    position: 'fixed',
                    top: '0',
                    bottom: ''
                });
            } else {
                $('.table-of-contents').css({
                    position: 'static',
                    bottom: '',
                    top: ''
                });
            }
        }
    });
}

