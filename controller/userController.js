module.exports = {
    user: (req, res) => {
        var user = 'Yasser'
        res.status(200).render('index', {
            user
        })
    }, 
    users: (req, res) => {
        var users = [
            {
                id: '1',
                firstname: 'Mambo',
                name: 'Cubano',
                age: '25'
            },
            {
                id: '2',
                firstname: 'Esteban',
                name: 'Cubano',
                age: '19'
            },
            {
                id: '3',
                firstname: 'Yanko',
                name: 'Cubano',
                age: '22'
            }
        ]
        res.status(200).render('users', {
            users
        })
    },
}