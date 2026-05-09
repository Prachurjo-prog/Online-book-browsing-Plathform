import { authClient } from "@/lib/auth-client";

const UpdateUser = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;

    await authClient.updateUser({
      image,
      name,
    });
  };
  return (
    <div>
      <label
        htmlFor="my_modal_6"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Update Profile
      </label>

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />

      <div className="modal" role="dialog">
        <div className="modal-box">
          <form onSubmit={onSubmit}>
            <div>
              <h3 className="pb-1 font-bold text-start">Name</h3>
              <input
                type="name"
                placeholder="Name"
                name="name"
                className="w-full shadow border border-gray-100 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200"
              />
            </div>
            <div>
              <h3 className="pb-1 font-bold text-start">Photo URL</h3>
              <input
                type="url"
                placeholder="https://..."
                name="image"
                className="w-full shadow border border-gray-100 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200"
              />
            </div>
            <div className="modal-action">
              <button htmlFor="my_modal_6" className="btn" type="submit">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
