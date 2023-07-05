const Items = ({isSet,todolist}) => {
  return (
    <div className="mt-10 p-6 w-10/12 bg-white rounded-xl shadow-lg">
      <h1 className="text-xl text-center mb-10 font-medium text-blue">
        To-Do List
      </h1>
      <div className="">
        {isSet ? (
          todolist.map((item) => {
            return (
              <div key={item.id} className="flex justify-between mb-3">
                <p>{item.value}</p>
                <div className="flex">
                  <Image
                    src="/edit.png"
                    width="18"
                    height="5"
                    className="mr-2"
                  />
                  <Image src="/bin.png" width="18" height="5" />
                </div>
              </div>
            );
          })
        ) : (
          <h1>List is empty...</h1>
        )}
      </div>
    </div>
  );
};

export default Items;
