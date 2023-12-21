import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TextInput from './components/TextInput';
import KeywordsModal from './components/KeywordsDialog';

import { ModeToggle } from './components/mode-toggle';

const App = () => {
  const [keywords, setKeywords] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateVocabularyList = async (text: string) => {
    setLoading(true);
    setIsOpen(true);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant.',
          },
          {
            role: 'user',
            content:
              "Given the following Dutch text, please extract keywords (excluding numbers) and provide them in the format of an array of JSON objects. Each object should have properties 'Dutch' for the Dutch word and 'English' for its English translation. Limit the output to a maximum of 8 JSON objects.\n\n" +
              text,
          },
        ],
        temperature: 0.5,
        top_p: 1.0,
        frequency_penalty: 0.8,
        presence_penalty: 0.0,
      }),
    };

    try {
      const response = await fetch(
        import.meta.env.VITE_OPENAI_API_URL,
        options
      );

      const json = await response.json();

      const data = json.choices[0].message.content;

      const dataParsed = JSON.parse(data);

      setKeywords(dataParsed);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mode Toggle  */}
      <div className='absolute top-0 left-0'>
        <ModeToggle />
      </div>
      {/* Text Area */}
      <div className='flex justify-center'>
        <div className='flex flex-col justify-center w-[500px] h-screen'>
          <Header />
          <TextInput generateVocabularyList={generateVocabularyList} />
          <Footer />
        </div>
      </div>
      {/* Keywords Modal */}
      <KeywordsModal
        keywords={keywords}
        loading={loading}
        isOpen={isOpen}
        closeDialog={closeDialog}
      />
    </>
  );
};
export default App;
