export default function Loading() {
  return (
    <div
      className={`absolute h-full w-full bg-dark z-10 flex justify-center items-center`}
    >
      <div className='w-full gap-x-2 flex justify-center items-center'>
        <div className='w-10 bg-green h-10 rounded-full animate-bounce'></div>
        <div className='w-10 h-10 bg-green-accent rounded-full animate-bounce'></div>
        <div className='w-10 h-10 bg-green-dark rounded-full animate-bounce'></div>
      </div>
    </div>
  );
}
