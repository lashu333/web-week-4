const tableBody = document.getElementById('table-body');

const addPerson = () => {
  const name = document.getElementById('name').value.trim();
  const surname = document.getElementById('surname').value.trim();
  const age = document.getElementById('age').value;

  if (!name || !surname || !age) {
      alert("Please enter all required fields (Name, Surname, Age).");
      return; 
  }

  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const surnameCell = document.createElement('td');
  const ageCell = document.createElement('td');
  nameCell.textContent = name;
  surnameCell.textContent = surname;
  ageCell.textContent = age;

  row.appendChild(nameCell);
  row.appendChild(surnameCell);
  row.appendChild(ageCell);

  tableBody.appendChild(row);
};

document.getElementById('add-person').addEventListener('click', addPerson);
