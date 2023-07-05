const AddItem = ({setItem,handleSubmit}) => {
  return (
    <div className="p-6 w-10/12 bg-white rounded-xl shadow-lg">
      <h1 className="text-xl text-center mb-10 font-medium text-blue">
        Add To-Do Item
      </h1>
      <form className="mb-5">
        <input
          onChange={(e) => {
            setItem(e.target.value);
          }}
          type="text"
          className="w-96 border  border-gray-light rounded-md md:w-4/6 lg:w-5/6 "
        />
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
          className="mx-8 bg-gray px-5 rounded-md text-white"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddItem;
