/** @format */

document.addEventListener("DOMContentLoaded", () => {
	// Cargar usuarios al iniciar
	loadUsers();

	// Manejar el envío del formulario
	document.getElementById("userForm").addEventListener("submit", function (event) {
		event.preventDefault();

		const userForm = {
			name: document.getElementById("name").value,
			surname: document.getElementById("surname").value,
			email: document.getElementById("email").value,
		};

		const user = Object.assign({ id: Date.now().toString() }, userForm);
		fetch("/users", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(user),
		})
			.then((response) => response.json())
			.then(() => {
				this.reset();
				closeModal();
				loadUsers();
			});
	});
});

// Función para cargar y mostrar los usuarios
function loadUsers() {
	fetch("/users")
		.then((response) => response.json())
		.then((users) => {
			const userList = document.getElementById("userList");
			userList.innerHTML = "";
			users.forEach((user) => {
				// console.log("👉 Line-39 ▶︎▶︎", user);
				const li = document.createElement("li");
				li.className = "box";
				li.innerHTML = `${user.name} ${user.surname} - <a mailto="${user.email}">${user.email}</a>
				`;
				li.appendChild(createDeleteButton(user.id));
				userList.appendChild(li);
			});
		});
}

// Crear botón de eliminación para cada usuario
function createDeleteButton(userId) {
	// console.log("👉 Line-53 ▶︎▶︎", userId);
	const button = document.createElement("button");
	button.className = "button is-danger is-small ml-2";
	button.textContent = "Delete";
	button.addEventListener("click", () => {
		fetch(`/users/${userId}`, { method: "DELETE" })
			.then((response) => {
				if (!response.ok) {
					throw new Error("Failed to delete user");
				}
				return response;
			})
			.then(() => {
				loadUsers();
			})
			.catch((error) => console.error(error));
	});
	return button;
}

// Función para cerrar el modal
function closeModal() {
	document.getElementById("userFormModal").classList.remove("is-active");
}
