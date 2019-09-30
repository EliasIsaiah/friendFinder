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
            "name": "Michelle Obama",
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

    bestMatch(answers) {
        let differencesArr = this.friendsArr;

        differencesArr.map((friend, index) => friend.diff = this.friendsArr.map(friend => {
            return friend.answers.map((answer, i) => { //using nested .map methods we can check each friend for compatibility with the passed in friend
                return Math.abs(answers[i] - answer)
            }).reduce((total, current) => total + current) //reduce each returned value town to its total
        })[index] //this last bit prevents the entire differences array from being added to each friend object
        )

        //The next line of code renders most of what was done above redundant, as I could have done it from the beginning. But oh well, at least I wrote a fun way to add each friend's respective difference to the appropriate object.
        matchIndex = differencesArr.map(elem => elem.diff).reduce((prev, next, i) => { return i });
        return this.friendsArr[matchIndex];
    },

    addFriend: function (name, photo, answers) {

        let convertedAnswers = answers.map(number => parseInt(number));
        let bestMatch = this.bestMatch(convertedAnswers); //call bestMatch before the new friend is added to avoid each friend matching perfectly with themselves

        this.friendsArr.push(
            { id: this.friendsArr.length + 1, name: name, photo: photo, answers: convertedAnswers }
        );

        // console.log("friendsArr", this.friendsArr);

        return bestMatch;

    }
}

module.exports = friends;

