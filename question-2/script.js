let peopleData = [
    { name: "John", age: 30, city: "New York", email: "john@example.com", occupation: "Engineer" },
    { name: "Alice", age: 45, city: "Los Angeles", email: "alice@example.com", occupation: "Designer" },
    { name: "Bob", age: 35, city: "Chicago", email: "bob@example.com", occupation: "Teacher" },
    { name: "Emma", age: 28, city: "San Francisco", email: "emma@example.com", occupation: "Doctor" },
    { name: "Mike", age: 40, city: "Seattle", email: "mike@example.com", occupation: "Developer" }
  ];

  const nameBtn = document.getElementById("name")
  const ageBtn = document.getElementById("age")

  function populateTable(data){
    let tableBody= document.getElementById("data-table");
    tableBody.innerHTML="";
    data.forEach((person)=>{
        let row= document.createElement("tr");
        row.innerHTML= `<td>${person.name}</td> <td>${person.age}</td> <td>${person.city}</td> <td>${person.email}</td> <td>${person.occupation}</td>`;
        tableBody.appendChild(row);
    })
}

populateTable(peopleData);

//function for sorting the data by name

const sortByName = (data) => {
    data.sort((a,b) => {
        if(a.name > b.name){
            return 1 
        }
        else if(a.name < b.name){
            return -1
        }
        
        return 0
    })
    populateTable(data)
}

nameBtn.addEventListener("click", () => {
    sortByName(peopleData)
})

//function for sorting data by age

    ageBtn.addEventListener("click", () => {
        sortByAge(peopleData)
    })
  const sortByAge = (data) => {
    data.sort((a,b)=>{
        return a.age-b.age
    })
    populateTable(data)
  }

