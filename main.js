function submitForm() {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let car = document.getElementById('car').value;
    let agree = document.getElementById('agree').checked;

    if (name !== '' && phone !== '' && email !== '' && car !== '' && agree) {
        document.getElementById('myModal').style.display = 'block'; // Открываем модальное окно
    } else {
       
    }
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none'; // Закрываем модальное окно
}



$('.back-to-top').click(function () {
	$('body,html').animate({ scrollTop: 0 }, 0)
})

$(window).scroll(function () {
	let scrolled = $(window).scrollTop()

	if (scrolled > 100) {
		$('.back-to-top').addClass('active')
	} else {
		$('.back-to-top').removeClass('active')
	}
})

//
function closeModal() {
	document.getElementById('myModal').style.display = 'none'
}

function toggleDisplay() {
	let element = document.getElementById('otsuv12')
	if (element.style.display == 'none') {
		element.style.display = 'block'
	} else {
		element.style.display = 'none'
	}
}

//

$(document).ready(function () {
	$('.set > a').on('click', function () {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$(this).siblings('.content').slideUp(400)
			$('.set > a i').removeClass('ri-close-line').addClass('ri-add-line')
		} else {
			$('.set > a i').removeClass('ri-close-line').addClass('ri-add-line')
			$(this).find('i').removeClass('ri-add-line').addClass('ri-close-line')
			$('.set > a').removeClass('active')
			$(this).addClass('active')
			$('.content').slideUp(400)
			$(this).siblings('.content').slideDown(400)
		}
	})
})

//

window.onload = function () {
	document.body.classList.add('loaded_hiding')
	window.setTimeout(function () {
		document.body.classList.add('loaded')
		document.body.classList.remove('loaded_hiding')
	}, 500)
}

//

var ele = document.getElementById('phone')
var curr = ''
var regexPatt = /^(0|[1-9][0-9]*)$/
ele.addEventListener('keyup', function (e) {
	var code = e.keyCode || e.which
	if (
		this.value.match(regexPatt) ||
		this.value.indexOf('+') > -1 ||
		code == 8
	) {
		curr = this.value
		this.value = curr
	} else {
		this.value = curr
	}
})




const form = document.getElementById('form')
const result = document.getElementById('result')

form.addEventListener('submit', function (e) {
	e.preventDefault()
	const formData = new FormData(form)
	const object = Object.fromEntries(formData)
	const json = JSON.stringify(object)
	result.innerHTML = 'Пожалуйста подождите'

	fetch('https://api.web3forms.com/submit', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: json,
	})
		.then(async response => {
			let json = await response.json()
			if (response.status == 200) {
				result.innerHTML = json.message
			} else {
				console.log(response)
				result.innerHTML = json.message
			}
		})
		.catch(error => {
			console.log(error)
			result.innerHTML = 'фывфыв'
		})
		.then(function () {
			form.reset()
			setTimeout(() => {
				result.style.display = 'none'
			}, 3000)
		})
})