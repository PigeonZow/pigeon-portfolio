const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

const Nav = () => {
    return (
        <nav class="bg-gray-700 flex flex-row h-16">
            <button type="button" class="bg-gray-700 rounded-md text-sm font-medium"></button>
        </nav>
    )
}

export default Nav;
