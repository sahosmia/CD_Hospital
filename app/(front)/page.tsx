import { getUsers, storeUser } from "@/actions/userActions";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const users = await getUsers();

  return (
    <>
      <h1>front page</h1>
      <Button>click</Button>
      <div className="box-secondary mt-10">
        <h2 className="text-gray-800">User List</h2>

        {users && users?.length > 0 ? (
          <div className="box-2">
            {users.map((user, index) => (
              <p key={user.id}>
                {index + 1}: {user.name}
              </p>
            ))}
          </div>
        ) : (
          <div className="box-1">No user found!</div>
        )}
      </div>

      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 ">
              <div className="lg:col-span-2">
                <form action={storeUser}>
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="email@domain.com"
                      />
                    </div>

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button
                          type="submit"
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
