fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    // Ma'lumotlarni olish muvaffaqiyatli bo'ldi
    console.log(users);
  })


  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const usersList = document.getElementById('users-list');

    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = `${user.name} (${user.email})`;
      usersList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Xato yuz berdi:', error);
  });
