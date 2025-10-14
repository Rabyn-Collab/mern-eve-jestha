'use client';
import React, { useTransition } from 'react'
import { Button } from './ui/button'
import { TrashIcon } from 'lucide-react'
import { removeEmployee } from '../lib/action';
import toast from 'react-hot-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function RemoveEmployee({ id }) {
  const [isPending, startTransition] = useTransition();
  const handleRemove = () => {
    startTransition(async () => {
      const res = await removeEmployee(id);
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    });
  }
  return (
    <div>



      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" size="icon">
            {isPending ? <div className='h-5 w-5 animate-spin border-2 rounded-full border-t-red-700'>

            </div> : <TrashIcon />}

          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleRemove}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

    </div>
  )
}
