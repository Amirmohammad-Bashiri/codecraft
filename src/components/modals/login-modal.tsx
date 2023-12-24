function LoginModal() {
  return (
    <form className="space-y-6 px-6 py-4">
      <h2 className="text-2xl lg:text-3xl font-medium text-white">
        Sign in to CraftCode
      </h2>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium block mb-2 text-gray-300">
          Your Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="yourname@gmail.com"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="text-sm font-medium block mb-2 text-gray-300">
          Your Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="*********"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
        />
      </div>

      <button
        type="submit"
        className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-emerald hover:bg-brand-emerald-s">
        Login
      </button>
      <div className="flex w-full justify-end">
        <button
          type="button"
          className="text-sm block text-brand-emerald hover:underline w-full text-right">
          Forgot Password
        </button>
      </div>
      <div className="text-sm font-medium text-gray-500">
        Not Registered?{" "}
        <button type="button" className="text-blue-600 hover:underline">
          Create account
        </button>
      </div>
    </form>
  );
}

export default LoginModal;
