import React from 'react'
import { Button } from './ui/button'
import { DeleteIcon } from 'lucide-react'
import toast from 'react-hot-toast'
import { deleteDoc, doc } from '@firebase/firestore'
import { db } from '../lib/firebaseFirestore'

export default function DeleteNews({ id }) {

  const handleDelete = async () => {
    try {

      await deleteDoc(doc(db, 'news', id));
      toast.success('successfully deleted');
    } catch (err) {
      toast.error(err.message);
    }
  }
  return (
    <div>
      <Button onClick={handleDelete} variant="outline" size="icon" aria-label="More Options">
        <DeleteIcon />
      </Button>

    </div>
  )
}
