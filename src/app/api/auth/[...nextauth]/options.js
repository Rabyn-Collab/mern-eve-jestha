import CredentialsProvider from "next-auth/providers/credentials";



export const options = {
  providers: [

    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith', },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const user = {
          id: 1,
          name: 'John Doe',
          email: 'jsmith@gmail.com',
          password: 'password123',
        };

        if (credentials.email === user.email && credentials.password === user.password) {
          return user;
        }
        else {
          return null;
        }


      }
    })

  ],

};