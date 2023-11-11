import { useState } from 'react';

import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';

interface TextInputProps {
  generateVocabularyList(text: string): void;
}

const TextInput: React.FC<TextInputProps> = ({ generateVocabularyList }) => {
  const [text, setText] = useState('');

  const { toast } = useToast();

  const submitText = () => {
    if (text === '') {
      toast({
        title: 'Text field is empty',
        description: 'Please enter some text to extract vocabulary',
      });
    } else {
      generateVocabularyList(text);
    }
  };

  return (
    <>
      <div className='flex flex-col w-full gap-y-4'>
        <Textarea
          placeholder='Please paste in your text in Dutch.'
          onChange={(e) => setText(e.target.value)}
          value={text}
          minLength={10}
          maxLength={500}
          rows={10}
        />
        <Button onClick={submitText}>Generate Vocabulary List</Button>
        <Toaster />
      </div>
    </>
  );
};
export default TextInput;
