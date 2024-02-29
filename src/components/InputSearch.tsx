const InputSearch = () => {
  return (
    <div className="w-full max-w-[350px] flex bg-[#F5F5F5] rounded-xl p-4">
      <button className="mr-5">
        <img src="/search.svg" alt="" />
      </button>
      <input
        type="search"
        placeholder="Search anything"
        className="w-full bg-[#F5F5F5] outline-none"
      />
    </div>
  );
};

export default InputSearch;
