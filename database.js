let users = [
	{ id: "1", name: "Homer Jay Simpson", sex: "Male", status: "Alive", role: {one: "Father", two: "Husband"}, nickname: "Homer", dob: "May 12, 1956"},
	{ id: "2", name: "Marjorie Jacqueline Bouvier Simpson", sex: "Female", status: "", role: {one: "Mother", two: "Wife"}, nickname: "Marge", dob: "October 1, 1956"},
	{ id: "3", name: "Bartholomew JoJo Simpson", sex: "Male", status: "", role: {one: "Son", two: "Brother"}, nickname: "Bart", dob: "April 1, 1979"},
	{ id: "4", name: "Lisa Simpson", sex: "Female", status: "Alive", role: {one: "Daughter", two: "Sister"}, nickname: "Lisa", dob: "May 9, 1981"},
	{ id: "5", name: "Margaret Evelyn Simpson", sex: "Female", status: "Alive", role: {one: "Daughter", two: "Sister"}, nickname: "Maggie", dob: "January 14, 1989"},
	{ id: "6", name: "Santa's Little Helper", sex: "Male", status: "Alive", role: {one: "Pet", two: "Dog"}, nickname: {one: "No. 8", two: "Suds McDuff", three: "Santa's Stupid Name" }, dob: "May 12, 1893"},
	{ id: "7", name: "Snowball V", sex: "Female", status: "Alive", role: {one: "Pet", two: "Cat"}, nickname: "The new and improved Snowball II", dob: "N/A"},
	{ id: "8", name: "She Biscuit", sex: "Female", status: "Alive", role: {one: "Pet", two: "Dog"}, nickname: "N/A", dob: "N/A"},
]

function getUsers() {
	return users
}

function getUserById(id) {
	return users.find(u => u.id === id)
}

function createUser(data) {
	const payload = {
		id: String(users.length + 1),
		...data,
	}

	users.push(payload)
	return payload
}

function updateUser(id, data) {
	const index = users.findIndex(u => u.id === id)
	users[index] = {
		...users[index],
		...data,
	}
	
	return users[index]
}

function deleteUser(id) {
	users = users.filter(u => u.id != id)
}

module.exports = {
	getUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
}