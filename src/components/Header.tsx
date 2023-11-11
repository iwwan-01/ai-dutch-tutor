import netherlandsFlag from '../assets/netherlands-flag.svg';

const Header = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-y-4'>
        <img src={netherlandsFlag} alt='Netherlands Flag' width={100} />
        <h1 className='text-5xl font-bold '>AI Dutch Tutor</h1>
        <h2 className='text-sm mb-4 text-center'>
          Paste in your text below and I will provide you with a vocabulary list
          of keywords from the pasted text along with their English translation
        </h2>
      </div>
    </>
  );
};
export default Header;
