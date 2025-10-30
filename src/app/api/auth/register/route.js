import bcrypt from 'bcrypt';
import dbConnect from '../../../../lib/mongodb';
import User from '../../../../models/User';

export async function POST(request) {
  await dbConnect();

  const { email, name, password } = await request.json();

  try {
    const isExist = await User.findOne({ email });
    if (isExist) return Response.json({ message: 'user already exist' }, { status: 409 });
    const hashPass = bcrypt.hashSync(password, 10);
    await User.create({
      email,
      name,
      password: hashPass
    });
    return Response.json({ message: 'successfully registered' }, { status: 201 });
  } catch (err) {
    return Response.json({ message: err.message }, { status: 400 });

  }
}