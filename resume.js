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
            if (id == 'home') {
                return $('a[href="#' + 'top' + '"]').parent().get(0);
            }
            return $('a[href="#' + id + '"]').parent().get(0);
        }
    });
});

function phoneClick() {
    let discord = document.getElementById('discord-social');
    if (discord.innerHTML === "Filip96#8066") {
        discord.innerHTML = '<i class="fab fa-discord"></i>';
        discord.style.marginTop = "0px";
        discord.style.fontSize = "40px";
        discord.style.width = "90px";
    }
    let phone = document.getElementById('phone-social');
    if (phone.innerHTML === "248-946-6028") {
        phone.style.marginTop = "0px";
        phone.style.width = "90px";
        phone.innerHTML = '<i class="fas fa-phone"></i>';
        phone.style.fontSize = "40px"
    } else {
        phone.innerHTML = '248-946-6028';
        phone.classList.remove("social-icon");
        phone.style.fontSize = "27px";
        phone.style.marginTop = "0px";
        phone.style.width = "210px"
    }
}

function discordClick() {
    let phone = document.getElementById('phone-social');
    if (phone.innerHTML === "248-946-6028") {
        phone.innerHTML = '<i class="fas fa-phone"></i>';
        phone.style.marginTop = "0px";
        phone.style.fontSize = "40px";
        phone.style.width = "90px";
    }
    let discord = document.getElementById('discord-social');
    if (discord.innerHTML === "Filip96#8066") {
        discord.style.marginTop = "0px";
        discord.style.width = "90px";
        discord.innerHTML = '<i class="fab fa-discord"></i>';
        discord.style.fontSize = "40px"
    } else {
        discord.innerHTML = 'Filip96#8066';
        discord.classList.remove("social-icon");
        discord.style.fontSize = "27px";
        discord.style.marginTop = "0px";
        discord.style.width = "195px";
    }
}

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

$('[class^="proj-"]').each(function (i, elm) {
    var thisclass = hasClasses(elm, Object.keys(projcodes));
    if (thisclass !== false) {
        elm.innerHTML = projcodes[thisclass][0];
        $(elm).addClass(projcodes[thisclass][1]);
    }
});

$(document).ready(function() {
    $('pre').wrapInner('<code></code>');
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
});
