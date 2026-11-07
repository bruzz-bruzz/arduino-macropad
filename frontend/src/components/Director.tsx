import { Link } from 'react-router-dom';
import './App.css'
import Github from './Github'
export default function Director() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 p-6 text-slate-100">
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 shadow-2xl rounded-3xl p-12 max-w-lg w-full text-center">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">Macro Pad</h1>
        <p className="text-slate-400 mb-10 text-lg">Select a component to inspect in 3D:</p>
        <div className="flex flex-col gap-4">
          <Link 
            to="/case" 
            className="px-6 py-4 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl transition-all duration-300 border border-slate-700 hover:border-slate-500"
          >
            View Keycase
          </Link>
          <Link 
            to="/plate" 
            className="px-6 py-4 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl transition-all duration-300 border border-slate-700 hover:border-slate-500"
          >
            View Keyplate
          </Link>
          <Link 
            to="/full" 
            className="px-6 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-indigo-900/20"
          >
            View Assembly
          </Link>
        </div>
      </div>
      <Github profileURL={"https://github.com/bruzz-bruzz"} repoURL={"https://github.com/bruzz-bruzz/arduino-macropad"}/>
    </div>
  );
}