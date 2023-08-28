import DarkMode from '@/components/DarkMode';

const Navbar = () => {
  return (
    <nav className="bg-slate-200 text-slate-900	p-4 dark:bg-slate-900 dark:text-slate-200	">
        <div className='container flex justify-between items-center w-full items-center mx-auto'>

            <div className="text-lg">
                Your App Name
            </div>
            <DarkMode />
        </div>
    </nav>
  );
};

export default Navbar;
