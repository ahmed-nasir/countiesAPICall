const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}

const displayBuddies = data => {
    console.log(data);
    const buddies = data;
    const buddiesDiv = document.getElementById('buddies');
    for (const buddy of buddies) {
        console.log(buddy);
        /*  const p = document.createElement('p');
         p.innerText = `${buddy.name.title} ${buddy.name.first} ${buddy.name.last}`;
         buddiesDiv.appendChild(p); */
    }
}
loadBuddies();