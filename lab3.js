// task 1
const palindrom = text => {
	const splitTxtArr = text.split(' ')

	const palindromWords = splitTxtArr.filter(el => {
		const currentWords = el
		const reversWords = el.split('').reverse().join('')

		return currentWords === reversWords && el
	})

	return palindromWords
}

console.log(palindrom('жив дід баба та колобок колобок мав класне око'))

// task 2
const validate_ip = ip_address => {
	const octets = ip_address.split('.')

	for (let i = 0; i < 4; i++) {
		const octet = parseInt(octets[i])

		if (isNaN(octet) || octet < 0 || octet > 255) {
			return false
		}
	}

	return octets.length !== 4 ? false : true
}

console.log(validate_ip('187.239.23.248'))

// task 3
const get_os = () => {
	const os = require('os').platform()

	switch (os) {
		case 'win32':
			console.log('Користувач використовує Windows')
			break
		case 'darwin':
			console.log('Користувач використовує MacOs')
			break
		case 'linux':
			console.log('Користувач використовує Linux')
			break
	}
}

get_os()
