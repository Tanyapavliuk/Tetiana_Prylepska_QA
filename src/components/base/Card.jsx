export const Card = ({ type = "test", children }) => {
  return (
    <aside class="bg-black/55 border border-transparent hover:bg-black/70 hover:border-solid hover:border hover:border-green-dark/75 text-white p-6 rounded-lg w-full font-mono">
      <div class="flex justify-between items-center">
        <div class="flex space-x-2 text-red-500">
          <div class="w-3 h-3 rounded-full bg-rose-500"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div class="w-3 h-3 rounded-full bg-green-dark"></div>
        </div>
        <p className="align-text-bottom text-sm">
          <span>&gt;_</span>
          <span className="ml-1 lg:ml-2">bash</span>
        </p>
      </div>
      <div class="mt-4">
        <p class="text-[#528BFF]">
          $ npm run {type === "test" ? "test" : "dev"}
        </p>
        {children}
      </div>
    </aside>
  );
};
