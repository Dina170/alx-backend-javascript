interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const std1: Student = {
  firstName: "Dina",
  lastName: "Elhadidy",
  age: 22,
  location: "New Damietta",
};

const std2: Student = {
  firstName: "Shona",
  lastName: "Shona",
  age: 22,
  location: "Cairo",
};

const studentsList = [std1, std2];

const table = document.createElement("table") as HTMLTableElement;
const row = table.insertRow();
const firstNameHead = row.insertCell(0);
const locationHead = row.insertCell(1);

firstNameHead.innerHTML = "firstName";
locationHead.innerHTML = "location";

for (let i = 0; i < studentsList.length; i++) {
  const row = table.insertRow();
  const firstNameData = row.insertCell(0);
  const locationData = row.insertCell(1);

  firstNameData.innerHTML = studentsList[i].firstName;
  locationData.innerHTML = studentsList[i].location;
}

document.body.appendChild(table);
