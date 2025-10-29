import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "../../../../lib/mongodb";
import bcypt from 'bcrypt';
import User from "../../../../models/User";


export const options = {
  providers: [

    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith', },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        await dbConnect();
        const isExist = await User.findOne({ email: credentials.email });

        if (!isExist) throw new Error('user not found');
        const comparePass = bcypt.compareSync(credentials.password, isExist.password);
        if (!comparePass) throw new Error('invalid credentials');
        return isExist;

      }
    })

  ],
  pages: {
    signIn: '/form/login'
  }

};