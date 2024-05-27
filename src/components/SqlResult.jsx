export const SqlResult = ({ data }) => {

  return (
    <div
      className={`mt-4 grid ${
        data.title.length === 2 && "grid-cols-2value"|| data.title.length === 3 && "grid-cols-3value" || data.title.length === 4 && "grid-cols-4value"
      }`}
    >
      {data.title.map((el) => (
        <div
          key={el}
          className='bg-green-accent text-green py-3 border border-grey flex items-center justify-center text-lg'
        >
          {el}
        </div>
      ))}
      {data.data.map((el) =>
        el.map((el) => (
          <p className='p-1.5 xs:p-3 text-center border border-grey flex items-center justify-center text-sm xs:text-lg'>
            {el}
          </p>
        ))
      )}
    </div>
  );
};
