const people = [
    {
        id: 1,
        name: 'JJ',
        age: 20,
        gender: 'male'
    },
    {
        id: 2,
        name: 'jae',
        age: 30,
        gender: 'male'
    },
    {
        id: 3,
        name: 'jin',
        age: 21,
        gender: 'female'
    }
];

const getById = (id) => {
    const filterPeople = people.filter(person =>  id === person.id)

    let arr = filterPeople[0];
    console.log(arr)
    return arr;
}


module.exports = {
    people,
    getById
}
