friends = {

    friendsArr: [
    
        {
            "id": 1,
            "name": "Garfield",
            "photo": "https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Garfield_the_Cat.svg/1200px-Garfield_the_Cat.svg.png",
            "answers": [
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5
            ]
        },
        {
            "id": 2,
            "name": "Odie",
            "photo": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Odie_the_Dog.svg/1200px-Odie_the_Dog.svg.png",
            "answers": [
                1,
                1,
                1,
                1,
                3,
                5,
                2,
                1,
                2,
                5
            ]
        },
        {
            "id": 3,
            "name": "Jon",
            "photo": "https://i1.sndcdn.com/artworks-000223714810-qdyl1v-t500x500.jpg",
            "answers": [
                3,
                2,
                5,
                1,
                4,
                4,
                4,
                4,
                3,
                5
            ]
        },
        {
            "id": 4,
            "name":"Michelle Obama",
            "photo": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Michelle_Obama_2013_official_portrait.jpg",
            "answers": [
                2,
                1,
                1,
                1,
                2,
                1,
                5,
                2,
                5,
                1
            ]
        }
    ],

    addFriend: function(name, photo, answers) {
        this.friendsArr.push(
            {id: this.friendsArr.length + 1, name: name, photo: photo, answers: answers}
            );

        console.log("friendsArr", this.friendsArr);
    }
}

module.exports = friends;

