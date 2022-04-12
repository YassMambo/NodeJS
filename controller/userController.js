var users = [
    {
        id: '1',
        firstname: 'Mambo',
        lastname: 'Cubano',
        age: '25'
    },
    {
        id: '2',
        firstname: 'Esteban',
        lastname: 'Cubano',
        age: '19'
    },
    {
        id: '3',
        firstname: 'Yanko',
        lastname: 'Cubano',
        age: '22'
    }
]
module.exports = {
  
    user: (req, res) => {
        var id = req.params.id;
        var user = users.find(u => u.id == id);
        if (user == null || user == undefined) {
            return res.status(404).render('error', {});
        }
       return res.status(200).render('user', {
            user
        })
    }, 
    users: (req, res) => {
       
        res.status(200).render('users', {
            users
        })
    },
}