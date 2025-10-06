import React from "react";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Đăng nhập
        </h2>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Mật khẩu
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-gray-600">
              <input type="checkbox" className="mr-2" /> Ghi nhớ đăng nhập
            </label>
            <a href="#" className="text-indigo-500 text-sm hover:underline">
              Quên mật khẩu?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            Đăng nhập
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Chưa có tài khoản?{" "}
          <a href="#" className="text-indigo-500 font-semibold hover:underline">
            Đăng ký ngay
          </a>
        </p>
      </div>
    </div>
  );
}
export default App;
