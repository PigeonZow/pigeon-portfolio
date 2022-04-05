// help from https://tailwindui.com/

const navigation = [
  { name: 'Home', href: '#home', current: true },
  { name: 'About', href: '#about', current: false },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Nav = () => {
    return (
        <nav className="bg-zinc-800 flex flex-row h-16 items-center pl-4">
            <img src='/android-chrome-192x192.png' alt="pigeon icon" className="object-contain h-12 w-12"/>
            <div className="flex gap-x-8 items-center justify-center px-8">
                {navigation.map((item) => ( 
                    <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                        item.current ? 'bg-zinc-900 text-white' : 'text-gray-300 hover:bg-zinc-700 hover:text-white', 'px-3 py-3 rounded-md text-sm font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                    >
                    {item.name}
                    </a>
                ))}
            </div>
        </nav>
    )
}

export default Nav;
