import bcrypt from 'bcryptjs'

const users =[
    {
        name:'AdminTest',
        email:'admin@test.com',
        password: bcrypt.hashSync('test123456',10),
        isAdmin:true
    },
    {
        name:'Test1',
        email:'test1@test.com',
        password: bcrypt.hashSync('test123456',10)
    },
    {
        name:'Test2',
        email:'test2@test.com',
        password: bcrypt.hashSync('test123456',10)
    }
]

export default users;