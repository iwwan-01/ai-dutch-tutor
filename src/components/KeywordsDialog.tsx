import { Button } from './ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Loader2 } from 'lucide-react';

interface KeywordDialogProps {
  keywords: { Dutch: string; English: string }[];
  loading: boolean;
  isOpen: boolean;
  closeDialog(): void;
}

const KeywordsDialog: React.FC<KeywordDialogProps> = ({
  keywords,
  loading,
  isOpen,
  closeDialog,
}) => {
  return (
    <>
      <Dialog open={isOpen} onOpenChange={closeDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Vocabulary List</DialogTitle>
            {loading ? (
              <div className='flex justify-center items-center p-12'>
                <Loader2 className='w-12 h-12 animate-spin' />
              </div>
            ) : (
              <>
                <DialogDescription className='w-full'>
                  Here is your vocabulary list.
                </DialogDescription>
                <Table className='my-2'>
                  <TableHeader>
                    <TableRow>
                      <TableHead className='font-bold text-center'>
                        Dutch
                      </TableHead>
                      <TableHead className='font-bold text-center'>
                        English
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {keywords.length !== 0 &&
                      keywords.map((keywordsObj, index) => {
                        return (
                          <TableRow key={index}>
                            <TableCell className='text-center'>
                              {keywordsObj.Dutch}
                            </TableCell>
                            <TableCell className='text-center'>
                              {keywordsObj.English}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </>
            )}
          </DialogHeader>
          <DialogFooter className='sm:justify-start'>
            <DialogClose asChild>
              <Button type='button' variant='secondary' className='w-full'>
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default KeywordsDialog;
