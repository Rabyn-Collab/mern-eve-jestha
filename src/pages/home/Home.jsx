import { IconButton, Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../users/userSlice.js";


export default function Home() {

  const { users } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();

  // console.log(users);

  // const person = {
  //   name: 'ram',
  //   age: 90
  // };

  // console.log({ ...person, id: 1 });

  return (
    <div className="p-5 grid grid-cols-4 gap-5">

      {users.map((user, index) => {
        return <div key={user.id}>
          <h1 className="font-bold">{user.username}</h1>
          <p className="italic">{user.email}</p>
          <p>Gender: {user.gender}</p>
          <p>Country: {user.country}</p>
          <Typography variant="lead">Habits</Typography>
          <div className="flex gap-4">
            {user.habits.map((hab, i) => {
              return <Typography color="brown" key={i}>{hab}</Typography>
            })}
          </div>
          <Typography variant="paragraph">Bio</Typography>
          <p className="text-gray-700 text-sm">{user.bio}</p>

          <div className="flex mt-2 justify-end gap-5">
            <IconButton size="sm" color="green">
              <i className="fas fa-edit" />
            </IconButton>
            <IconButton
              onClick={() => dispatch(removeUser(index))}
              size="sm" color="pink">
              <i className="fas fa-trash" />
            </IconButton>
          </div>


        </div>

      })}


    </div>
  )
}
