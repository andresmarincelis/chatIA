export const Login = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-login_color">
        <div className="bg-login_color p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold text-center text-white mb-2">Log in to your account</h1>
          <p className="text-center text-gray-400 mb-8">Welcome back! Please enter your details</p>
          
          <form>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2" htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg" 
                placeholder="example@gmail.com" 
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-400 mb-2" htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg" 
                placeholder="••••••••" 
              />
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <label className="inline-flex items-center text-gray-400">
                <input type="checkbox" className="form-checkbox bg-gray-700 text-blue-500" />
                <span className="ml-2">Remember for 30 days</span>
              </label>
              <a href="#" className="text-blue-500 text-sm hover:underline">Forgot password?</a>
            </div>
            
            <button 
              type="submit" 
              className="w-full py-2 bg-blue-600 text-white rounded-lg hover:underline"
            >
              Sign in
            </button>
          </form>
          
          <div className="text-center mt-4">
            <p className="text-gray-400">Don't have an account?<a href="#" className="text-blue-500 hover:underline">Sign up</a></p>
          </div>
        </div>
      </div>
    );
  };