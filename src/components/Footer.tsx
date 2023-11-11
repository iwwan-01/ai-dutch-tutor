const Footer = () => {
  return (
    <>
      <p className='text-center mt-4'>
        Powered by{' '}
        <a
          className='underline hover:text-green-400 transition-colors duration-300'
          href='https://platform.openai.com/docs/introduction'
          target='_blank'
        >
          {' '}
          OpenAI API
        </a>
      </p>
    </>
  );
};
export default Footer;
